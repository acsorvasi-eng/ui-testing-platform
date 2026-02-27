Create a new file: src/app/engine/DesignValidationEngine.ts

This is a new validation engine that works alongside 
the existing PixelEngine (do not modify PixelEngine).

The engine has 5 steps:

STEP 1 - Normalization:
Convert both master and screenshot images to 0-1 
normalized coordinate space, independent of resolution.
Function: normalizeImage(imageUrl: string, naturalW: number, 
naturalH: number) → NormalizedImage

STEP 2 - Component Detection (Claude Vision via Supabase proxy):
Send both images to Claude and ask it to detect UI elements
with normalized coordinates.
Return: DetectedElement[] with fields:
  id, type (button/text/image/icon/card/header/input),
  x_norm, y_norm, w_norm, h_norm, label

STEP 3 - Layout Graph:
Build spatial relationship graph between elements.
Relations: ABOVE, BELOW, LEFT_OF, RIGHT_OF, 
CONTAINED_IN, CENTER_ALIGNED
Function: buildLayoutGraph(elements: DetectedElement[]) 
→ LayoutGraph

STEP 4 - Constraint Matching:
Compare master layout graph vs screenshot layout graph.
Use Procrustes alignment if aspect ratios differ >5%.
Calculate per-element deviation score.
Function: matchConstraints(master: LayoutGraph, 
screenshot: LayoutGraph) → ConstraintMatchResult

STEP 5 - Scoring & Report:
Generate overall Layout Score (0-1) and per-element report.
Function: generateValidationReport(...) 
→ ValidationReport with:
  overallScore, elements[], layoutScore, 
  constraintErrors[], deviceDetected

Export main function:
validateDesign(masterUrl, screenshotUrl, options) 
→ Promise<ValidationReport>

Use the existing Supabase proxy:
URL: https://woadmikcidskdtnmdhmo.supabase.co/functions/v1/quick-function
Token: sb_publishable_TbbMBmyFOXYnB30CODmj9Q_9xlAAfcQ
Model: claude-opus-4-5-20250514

Do not modify any existing files.
Show the complete implementation.