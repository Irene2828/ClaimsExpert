# Live Overlay Feedback System

The current `html2canvas` approach of capturing the entire 9000px page into a canvas and displaying it inside a modal creates scaling issues and visual glitches (as seen in the screenshot).

Instead of capturing a static screenshot upfront, we will transform the feedback widget into a **Live Overlay Mode**.

## Proposed Changes

### 1. Overlay Mode vs Modal Mode
* When the user clicks "Leave Feedback", we will **not** take a screenshot yet.
* Instead, a fixed **Header Toolbar** (matching the extension's design) will slide down from the top of the live site.
* The cursor will change to a crosshair. The user can still scroll the live site normally.

### 2. Native DOM Comments
* Clicking anywhere on the live site will drop a **Red Text Comment Box** directly onto the page DOM (using absolute positioning).
* The styling of this comment box will exactly match the Chrome extension:
  * White background, `2px dashed #ef4444` border.
  * Bold, red teacher-style font (`color: #ef4444`).
  * Cancel `[x]` and Confirm `[✓]` buttons in the bottom right corner.
* Once confirmed, the comment becomes a permanent, absolute-positioned element on the live site.

### 3. Export PNG / Copy PNG
* When the user finishes annotating the live site and clicks **Export PNG** or **Copy PNG**, we will *then* run `html2canvas`.
* Because the comments are native HTML elements sitting on top of the site, `html2canvas` will capture them seamlessly along with the underlying site content.
* We will capture the full document (or just the visible viewport, depending on preference).

### 4. Code Cleanup
* Remove the complex canvas scaling, zooming (`fbZoomScale`), and redrawing logic.
* Keep the Tailwind-extracted CSS for the toolbar and buttons to maintain the exact extension aesthetic.

## User Review Required
Does this Live Overlay approach sound better? It avoids the squished/broken canvas preview entirely and lets you comment directly on the real site.
