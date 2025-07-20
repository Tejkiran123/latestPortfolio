
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://tejkiran123.github.io/kiranprofile/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/kiranprofile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 538, hash: 'c2ba801ea9c3165f0cfbf0c54116f089d36cde1ec7c8a0ea468607994d45fe9d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: '80f1bac2b1f217b3ab0467ea0d4e23e93f921f6d6e19bf768bd942d9debd83ae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12494, hash: 'c097270b9271faae23587633bdba4cdf5b03f2e239640c002eb5506c6b7c07f9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
