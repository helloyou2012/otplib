npm run build:module
npm run build:transpile
NODE_ENV=production npm run build:browser
cp README.md dist/README.md
cp LICENSE dist/LICENSE
cp package.json dist/package.json
cp .npmignore dist/.npmignore
