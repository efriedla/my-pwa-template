cat > README.md << 'EOF'

# React PWA Template

A production-ready Progressive Web App template built with React, TypeScript, and Material-UI.

## Features

- ⚛️ React 18 with TypeScript
- 🎨 Material-UI (MUI) components
- 🌓 Light/Dark mode toggle
- 📱 Progressive Web App (PWA) support
- 🔌 Offline functionality
- 📦 Service Worker with Workbox
- 🎯 Type-safe development

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/my-pwa-template.git
cd my-pwa-template
npm install
\`\`\`

### Development

\`\`\`bash
npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

\`\`\`bash
npm run build
\`\`\`

Builds the app for production to the \`build\` folder.

### Testing PWA Functionality

1. Build the production version: \`npm run build\`
2. Serve the build folder using a static server:
   \`\`\`bash
   npx serve -s build
   \`\`\`
3. Open the app in your browser and test offline functionality

## Project Structure

\`\`\`
my-pwa-template/
├── public/
│ ├── index.html
│ ├── manifest.json
│ └── icons/
├── src/
│ ├── context/
│ │ └── ThemeContext.tsx
│ ├── App.tsx
│ ├── index.tsx
│ ├── service-worker.ts
│ └── serviceWorkerRegistration.ts
├── package.json
└── tsconfig.json
\`\`\`

## Customization

### Changing Theme Colors

Edit \`src/context/ThemeContext.tsx\` to modify the theme:

\`\`\`typescript
const theme = useMemo(
() =>
createTheme({
palette: {
mode,
primary: {
main: '#YOUR_COLOR',
},
secondary: {
main: '#YOUR_COLOR',
},
},
}),
[mode]
);
\`\`\`

### PWA Configuration

Edit \`public/manifest.json\` to customize your PWA:

- App name
- Icons
- Theme colors
- Display mode

## License

MIT

## Contributing

Pull requests are welcome!
EOF
