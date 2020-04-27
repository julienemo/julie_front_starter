### Julie Front Start

This starter does

- compile any `.js` file in `./src/javascripts` folder
- compile any `.css` and assimilated files that is imported to a compiled js
- compile any image cited in CSS and cie (but not those directly called from HTML)
- compile any font cited in CSS
- include bootstrap, babel and SCSS/SASS translator (to CSS), moment and dotenv by default
- once `npm run build` in launched, watches every 5 secs for any changes happened in tracked assets (for ex excluding root file `.html` files, node_modules and the `webpack.config.js` itself) and automatically rebuild
