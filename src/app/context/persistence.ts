// ─────────────────────────────────────────────────────────────────
//  IndexedDB Persistence for UI Testing platform
//  Stores the full projects array (including base64 image data URLs)
//  in IndexedDB, which supports hundreds of MB — far beyond the
//  ~5 MB localStorage limit.
// ─────────────────────────────────────────────────────────────────

import type { Project } from "./ProjectContext";

const DB_NAME = "ui-testing-platform";
const DB_VERSION = 1;
const STORE_NAME = "app-state";
const PROJECTS_KEY = "projects";

/** Open (or create) the database */
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/** Save projects array to IndexedDB */
export async function saveProjects(projects: Project[]): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.put(projects, PROJECTS_KEY);
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  } catch (e) {
    console.warn("[Persistence] Failed to save:", e);
  }
}

/** Load projects array from IndexedDB */
export async function loadProjects(): Promise<Project[]> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(PROJECTS_KEY);
      req.onsuccess = () => {
        db.close();
        const data = req.result;
        if (Array.isArray(data)) {
          resolve(data as Project[]);
        } else {
          resolve([]);
        }
      };
      req.onerror = () => { db.close(); reject(req.error); };
    });
  } catch (e) {
    console.warn("[Persistence] Failed to load:", e);
    return [];
  }
}

/** Clear all persisted data */
export async function clearPersistedData(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.delete(PROJECTS_KEY);
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  } catch (e) {
    console.warn("[Persistence] Failed to clear:", e);
  }
}
