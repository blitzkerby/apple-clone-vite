This project was created using Vite for a streamlined development experience.

# Getting Started


### 1. Clone the Repository

```bash
git clone https://github.com/blitzkerby/apple-clone-vite.git
```

### 2. Install Dependencies

(all dependencies files are already in-place, you just need to install them)

```bash
npm install vite
```

Optional:

```bash
npm run dev #should open up a localhost server
```

# Project Structure


Vite uses a component-based architecture for maintainability. You'll find the following folders within the project:

- `assets` - Contains all JS and SCSS files (excluding from components)
  - `js` - Contains page specific functionalities
  - `scss` - Contains page specific custom stylings
- `components` - Contains all components
- `node_modules` - Dependencies
- `index.html` - Landing page
- `mac.html` - Secondary Page
- `.gitignore` - Manages files that should be ignored
- `public` - Contains static assets like images or fonts.
- `package.json` - Manages project dependencies and scripts.
- `vite.config.js` - Manages Vite’s configuration

# Development Server



Start the development server with hot module replacement:

```bash
npm run dev
```

This will open the application in your default browser, usually at `http://localhost:3000/`. Changes in your code will be reflected automatically.

# Building for Production

First, ensure that new html pages are added under `vite.config.js`:

```JS
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        mac: resolve(__dirname, "mac.html"),
        // Add more entry points as needed
      },
    },
  },
});
```

Create an optimized production build for deployment:

```bash
npm run build
```

The build output will be placed in the `dist` folder.

# Miscellaneous


### Bootstrap Integration

This project utilizes Bootstrap for JavaScript functionality. However, custom CSS styles are included separately for easier modification. You can find them in the `src/styles` folder.

### Vercel Deployment (Optional)

If you're planning to deploy your project on Vercel, you can leverage their specific commands for deployment:

- Follow Vercel's documentation for setup: <https://vercel.com/docs>
- Use `vercel` commands for deployment as per their instructions.

### Contributing

Feel free to contribute to this project! Please create pull requests outlining your changes.

