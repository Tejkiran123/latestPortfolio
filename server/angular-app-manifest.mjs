
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://tejkiran123.github.io/latestProfile/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/latestProfile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23609, hash: '639e638ea1356de6ef8e644344c2836fffb8dbd55d417fc10a6b2f3fb423e0d9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17183, hash: '3a4d4ebbf11f2a81687f4842cd189d6ad807229207e93868ce7beb342ec1c87d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36887, hash: '4a43a78c45e68f21e508e3b48b1332deef7a4b7c874357b636a6a30f17b1509d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
