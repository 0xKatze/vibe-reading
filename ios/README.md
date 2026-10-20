# iOS Safari Web Extension Container

This repository ships a Safari-compatible Web Extension bundle for the iOS MVP (webpage translation only).

## Generate Xcode project

Run on macOS with Xcode installed:

```bash
xcrun safari-web-extension-converter /absolute/path/to/vibe-reading --project-location /absolute/path/to/output --app-name "Vibe Reading iOS"
```

## After conversion

1. Open the generated Xcode project.
2. Set your Apple Team and Bundle Identifier.
3. Build to a physical iPhone and verify:
   - Full-page webpage translation
   - Selection translation
   - Options persistence
4. Archive and distribute via TestFlight / App Store.

## Current MVP scope on iOS

- ✅ Webpage full-page translation
- ✅ Webpage selection translation
- ✅ Basic options
- ⏸️ PDF two-pane viewer
- ⏸️ AI Summary / Ask-AI
