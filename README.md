# SpEd Packet Studio Website

Marketing website for the SpEd Packet Studio Windows desktop application.

## Development

```text
pnpm install
pnpm dev
```

Create a production build with `pnpm build`.

## Update the Windows installer

After creating an NSIS release in the desktop-app repository, run:

```text
pnpm installer:check
pnpm installer:update
```

Alternatively, double-click `UPDATE-WINDOWS-INSTALLER.bat` in the website
folder. The window remains open afterward so the result can be reviewed.

The update script finds the newest `SpEd Packet Studio_X.Y.Z_x64-setup.exe`,
copies it into both website download directories with a URL-safe filename, and
updates the installer URL, version, and file size on the Download page.

The Download page points to the installer stored under `/downloads`.
