
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://tejkiran123.github.io/latestPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/latestPortfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: '776a0ee7c510e323d073ea40f7634e13fd10cbcb416568dfb828e9efd20cf479', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '4d8e19cd283e2fcd2097fd59d08b383f7efa98d6c17ca0b59dca3503e51e3bec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12497, hash: 'eaad237f431f0966f40fb8f787eb122140c31b48b2692c5b4eb734656bb2a047', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
