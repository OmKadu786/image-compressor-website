# Troubleshooting Guide

## Blank Page / Nothing Displays

If you see a blank page when running the live server or dev server, this is most commonly caused by missing dependencies.

### Solution

Make sure you have installed all project dependencies before starting the development server:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

### Why does this happen?

The application is built with React and requires several npm packages to function:
- `react` and `react-dom` - Core React libraries
- `browser-image-compression` - Image compression functionality
- `vite` - Development server and build tool

Without these dependencies installed, the browser cannot load the necessary JavaScript modules, resulting in a blank page.

## Other Common Issues

### Port Already in Use

If you see an error that port 5173 is already in use:

```bash
# Find and kill the process using port 5173
npx kill-port 5173

# Or specify a different port
npm run dev -- --port 3000
```

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `package-lock.json`:
```bash
rm -rf node_modules package-lock.json
```

2. Reinstall dependencies:
```bash
npm install
```

3. Try building again:
```bash
npm run build
```

### Browser Console Errors

If you see errors in the browser console:

1. Open browser DevTools (F12)
2. Check the Console tab for specific error messages
3. Check the Network tab to see if resources are failing to load
4. Try clearing your browser cache and reloading

## Getting Help

If you continue to experience issues:

1. Check that you're using a compatible Node.js version (Node 14+ recommended)
2. Ensure you're in the correct directory when running commands
3. Try running `npm run lint` to check for code issues
4. Create an issue on GitHub with:
   - Your Node.js version (`node --version`)
   - Your npm version (`npm --version`)
   - The exact error message you're seeing
   - Steps to reproduce the issue
