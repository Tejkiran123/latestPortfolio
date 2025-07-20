
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/latestPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/latestPortfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 512, hash: 'e8b0b71bd8e5337d4f29395fb09e6c0ae3321ec58d9e9ac46e8abe3c6ec22b94', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: 'ee1bea065cd8aee35e4de69a7cde5b3dac9f61d2a6e38a98d6a277022050dc96', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12468, hash: '5ef085e99386341a8815b4a613d91fd5d195889443a53825050c8534e6e5bec7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
