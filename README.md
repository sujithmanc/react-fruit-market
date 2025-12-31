# React Vite Template 🚀

This is a minimal React + Vite starter template for fast development.

## 📦 Installation

Clone the template using:

```bash
npx degit sujithmanc/react-vite-template my-new-project
cd my-new-project
```

### **Frontend Framework and Libraries**
- **React** (version ^19.0.0): The core UI library for building the app's components (e.g., `App.jsx`, `ProductCard.jsx`, etc.). You're using the latest version with the new `createRoot` API from React 18+ (seen in main.jsx).
- **React DOM** (version ^19.0.0): Handles rendering React components to the DOM.
- **Bootstrap** (version ^5.3.3): A popular CSS framework for responsive styling and UI components. It's imported in main.jsx for both CSS and JavaScript (e.g., for modals, tooltips). This likely powers the layout and design of your fruit market app.
- **Styled Components** (version ^6.1.19): A library for writing CSS-in-JS, allowing you to style components directly in JavaScript. This complements Bootstrap for custom styling.

### **Linting and Code Quality**
- **ESLint** (version ^9.21.0): A JavaScript linter to enforce code quality and catch errors. Your eslint.config.js sets it up with:
  - `@eslint/js` (^9.21.0): Base ESLint rules.
  - `globals` (^15.15.0): Provides browser globals for client-side code.
  - `eslint-plugin-react-hooks` (^5.1.0): Enforces best practices for React hooks.
  - `eslint-plugin-react-refresh` (^0.4.19): Ensures components are compatible with Vite's fast refresh.
- The linter runs via the `lint` script in package.json and ignores the `dist` folder.

### **Type Checking (Development-Only)**
- **@types/react** (^19.0.10) and **@types/react-dom** (^19.0.4): TypeScript type definitions for React. Even though your code is in JavaScript (.jsx files), these provide IntelliSense and type checking in editors like VS Code during development. No full TypeScript setup (e.g., no `tsconfig.json`), so it's JS-based.

### **Package Manager**
- **npm** (implied): Used for managing dependencies, as evidenced by the package.json structure. Scripts like `npm run dev` would start the app.

### **Other Notes**
- **Project Structure**: It's a standard Vite + React setup with a src folder for components, public for static assets, and an index.html entry point. The app uses ES modules (`"type": "module"` in package.json).
- **No Additional Tools Detected**: No testing frameworks (e.g., Jest), state management libraries (e.g., Redux), or backend integrations are present. The focus is on frontend development.
- **README**: Describes it as a "React Vite Template" cloned from a template repo (`sujithmanc/react-vite-template`), emphasizing fast development.