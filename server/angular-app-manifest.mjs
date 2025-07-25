
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/latestProfile/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/latestProfile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23580, hash: '1db237737f87ee2ae6eae0e390c9b214629489d3c331d150006923b5c1f1f357', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17154, hash: '5bcf5de277dbdff5907ee40b7f4f5b89a6ccd90fb34f4a0456de07498de40140', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36858, hash: 'a3cbb35797d260521bf4da1ed5db92ff4f0c1cccdd64ff855aed50e0d26072a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
