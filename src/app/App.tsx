import { RouterProvider } from "react-router";
import { router } from "./routes";

/* UI Testing — Visual Regression Platform */
export default function App() {
  return <RouterProvider router={router} />;
}
