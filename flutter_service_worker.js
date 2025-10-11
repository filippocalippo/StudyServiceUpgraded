'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9f25328c70c027604a109fc63873ea9e",
"assets/AssetManifest.bin.json": "73e181fd3e0a3cd7a43c843bad709131",
"assets/assets/icons/home.svg": "4f14c7e60bea784cf0e723509d19beac",
"assets/assets/icons/Logo.jpeg": "b1365fa8bbb6703700f5d638cd5c508c",
"assets/assets/icons/profile.svg": "82ddcb50039c6355dcf45c8a078c4427",
"assets/assets/icons/settings.svg": "2e1b26f632f0202cc40ca3c7b9625dec",
"assets/FontManifest.json": "fc1b811aa8700fdb535732e040053e1e",
"assets/fonts/MaterialIcons-Regular.otf": "36e41b7780ad3080eee2e04079f308e6",
"assets/NOTICES": "512a77cf49b6ba6e15fa3d2d8f0ebe2f",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/hyphenatorx/assets/language_af.json": "28351132e29a4511c32916f6e95d20ec",
"assets/packages/hyphenatorx/assets/language_as.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_bg.json": "53cfe5471051d7148f8ce3ab7c39f415",
"assets/packages/hyphenatorx/assets/language_bn.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_ca.json": "c9031d91386a3a29df196db082dd4c4a",
"assets/packages/hyphenatorx/assets/language_cop.json": "6e473484979b4f998316355c83acfe36",
"assets/packages/hyphenatorx/assets/language_cs.json": "c6beadc7b7ef04593018ec84b43106bb",
"assets/packages/hyphenatorx/assets/language_cy.json": "d99fadaee445724bf24c78149f3c14c4",
"assets/packages/hyphenatorx/assets/language_da.json": "120cd341e7b9582160fa1864b0e74607",
"assets/packages/hyphenatorx/assets/language_de_1901.json": "a0bd6a5e3079be7f61bff91bf26887d3",
"assets/packages/hyphenatorx/assets/language_de_1996.json": "6a166052a23eb375b4c25e323e9089ed",
"assets/packages/hyphenatorx/assets/language_de_ch_1901.json": "c5951052fb095c90db9a6844c31277db",
"assets/packages/hyphenatorx/assets/language_el_monoton.json": "d0aab2d432c3891039ecb2bcaa172bc9",
"assets/packages/hyphenatorx/assets/language_el_polyton.json": "38c019caffe09b4c9555bd4bdac9c1a2",
"assets/packages/hyphenatorx/assets/language_en_gb.json": "37cef53e88a438af9fcc0c9c39f77d71",
"assets/packages/hyphenatorx/assets/language_en_us.json": "218751cee7b6d50fcdc76671639b1f59",
"assets/packages/hyphenatorx/assets/language_eo.json": "d64fcffc1b960c7f9fdf01dfb1967ef0",
"assets/packages/hyphenatorx/assets/language_es.json": "879a7b1392bdef59a1690765b9fefdff",
"assets/packages/hyphenatorx/assets/language_et.json": "ef1082d6d2a9e8c9f3e364b25ee54ee6",
"assets/packages/hyphenatorx/assets/language_eu.json": "f95aa286d216c74f6c1bd020e23a6a80",
"assets/packages/hyphenatorx/assets/language_fi.json": "984fa6c4c8d432224468d3a2e9479ccc",
"assets/packages/hyphenatorx/assets/language_fr.json": "92bf3f19cb4d2bb2862fb7f478b7a169",
"assets/packages/hyphenatorx/assets/language_fur.json": "5cb194c03480526b59d399c92c851b35",
"assets/packages/hyphenatorx/assets/language_ga.json": "b7500e754a15e0dd6a673ed8974ff639",
"assets/packages/hyphenatorx/assets/language_gl.json": "f867ce63a47135031212ed4b314b5b1b",
"assets/packages/hyphenatorx/assets/language_grc.json": "6a7e746a8a45e7c3ec3f155e1027c653",
"assets/packages/hyphenatorx/assets/language_gu.json": "1aaad8f7c610501f8e3afed18de7a865",
"assets/packages/hyphenatorx/assets/language_hi.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_hr.json": "c47afa087612fcec9b03e359ecba21c9",
"assets/packages/hyphenatorx/assets/language_hsb.json": "1c810859645ad347733939a53e4eecf4",
"assets/packages/hyphenatorx/assets/language_hu.json": "a21372487888973207c8b9b6700b2270",
"assets/packages/hyphenatorx/assets/language_hy.json": "fc7ed76ad3ac4dbec9492d520c87ef0a",
"assets/packages/hyphenatorx/assets/language_ia.json": "4fd10dfc676dd12813255cfdbd10160c",
"assets/packages/hyphenatorx/assets/language_id.json": "f13ed90293f4759c31b711d6aa12d112",
"assets/packages/hyphenatorx/assets/language_is.json": "eec6ce02aa68c8917a557a9d11e485d3",
"assets/packages/hyphenatorx/assets/language_it.json": "818ab0c9a1a3dcd1616078901418030b",
"assets/packages/hyphenatorx/assets/language_ka.json": "6c3fc528796096ce2ca3a7ec5543069a",
"assets/packages/hyphenatorx/assets/language_kmr.json": "e6fc99875809b0cd60763dd3cb956547",
"assets/packages/hyphenatorx/assets/language_kn.json": "295d3717aae5e668f88ad73e367b425f",
"assets/packages/hyphenatorx/assets/language_la.json": "a841100589d9500afbd41f9aaac78c19",
"assets/packages/hyphenatorx/assets/language_la_x_classic.json": "ab126029009d7641218aaea72fe86d14",
"assets/packages/hyphenatorx/assets/language_lt.json": "193c8ed815fda87ec76e550beb2c6b13",
"assets/packages/hyphenatorx/assets/language_lv.json": "4972684b7c56349e81e0d0092f2bf88b",
"assets/packages/hyphenatorx/assets/language_ml.json": "1b34f0a9b12c9a155f419473c1e5650b",
"assets/packages/hyphenatorx/assets/language_mn_cyrl.json": "cdc092042cea8027a762702578ff5477",
"assets/packages/hyphenatorx/assets/language_mn_cyrl_x_lmc.json": "20a0ad88ddcaf7551b2845e74b018070",
"assets/packages/hyphenatorx/assets/language_mr.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_mul_ethi.json": "e1d9121676a508f1186e1a51c9510ca9",
"assets/packages/hyphenatorx/assets/language_nb.json": "d9a86ca6b22c640f446c7b29d9533a79",
"assets/packages/hyphenatorx/assets/language_nl.json": "2d4b858e6f31e3931e23c325496dc683",
"assets/packages/hyphenatorx/assets/language_nn.json": "ad703f572cbdc2951ace902f31021c65",
"assets/packages/hyphenatorx/assets/language_or.json": "0d577fbc142e3d37474d4f6ae1be1d00",
"assets/packages/hyphenatorx/assets/language_pa.json": "9ed942ab0486b9522b56db118ec0fb44",
"assets/packages/hyphenatorx/assets/language_pl.json": "465eb8b4886d611a78c4d637816aa747",
"assets/packages/hyphenatorx/assets/language_pms.json": "9edb405668d8786e1d4318a3e6a18126",
"assets/packages/hyphenatorx/assets/language_pt.json": "783fb19ab0b5c6c74900a641be956a7b",
"assets/packages/hyphenatorx/assets/language_rm.json": "10dcdf08d92a0b32b168eaa0453faf3c",
"assets/packages/hyphenatorx/assets/language_ro.json": "cad16d9be24633726f4c546f89752043",
"assets/packages/hyphenatorx/assets/language_ru.json": "ee7ba571494729f6730ac42d29f1ddf9",
"assets/packages/hyphenatorx/assets/language_sa.json": "3f75df9404ef3fcfd4028517f1808f04",
"assets/packages/hyphenatorx/assets/language_sh_cyrl.json": "2d6190383adddee8216db3ae6a6a803e",
"assets/packages/hyphenatorx/assets/language_sk.json": "03a6f38dd4e0c47946c1cc4d225b2b35",
"assets/packages/hyphenatorx/assets/language_sl.json": "2e1f16dc4243cfb69147858ad4d9a15b",
"assets/packages/hyphenatorx/assets/language_sv.json": "e96a74ac989f945a532519c09ddeb8a5",
"assets/packages/hyphenatorx/assets/language_ta.json": "7ad8015adba2d581dad1d0bd9a37de4d",
"assets/packages/hyphenatorx/assets/language_te.json": "aab19b4ed89174a98527126f4c8f5278",
"assets/packages/hyphenatorx/assets/language_th.json": "81a169edd244703cd2e0c1fe5c42502b",
"assets/packages/hyphenatorx/assets/language_tk.json": "460bb1d91f8e41b5c6a5fe5668074dc3",
"assets/packages/hyphenatorx/assets/language_tr.json": "768a6e3a51913f04387ffb73cddcdc37",
"assets/packages/hyphenatorx/assets/language_uk.json": "59e4e985ee5e1b55c6261cf207543050",
"assets/packages/hyphenatorx/assets/language_zh_latn_pinyin.json": "0573cdf79d552dd0cec5b08e4e5c0cc3",
"assets/packages/hyphenatorx/test/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "d27e66928fc257409c5b285ca140647d",
"canvaskit/canvaskit.wasm": "0601f94e5ba7422d7d0f15082f291f59",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "c21f552d607bfd35d6c2c65e7594e17b",
"canvaskit/chromium/canvaskit.wasm": "a3ac017bb86e93f8e7aa79afdb9a6a7a",
"canvaskit/skwasm.js": "95f1685cbe3a3e1d94cac24eb0148a02",
"canvaskit/skwasm.js.symbols": "1a5b8c8bd31b6b53fd8a420bfc634397",
"canvaskit/skwasm.wasm": "87c3f232cc3c98bc37a5857ce259dcb5",
"canvaskit/skwasm_heavy.js": "53b1d7d620269ae543e0dc5311a07f49",
"canvaskit/skwasm_heavy.js.symbols": "3b16e8e140eebd4a10c80852be7e9354",
"canvaskit/skwasm_heavy.wasm": "7d6fb8111343b68829a36dfba156fc57",
"favicon.png": "909d951630e1757bdc819e80d3700ce4",
"flutter.js": "35408b1be0f5de68cc5d1c5175d717ed",
"flutter_bootstrap.js": "4aba5b81061f2401ae2b30569572ff46",
"icons/Icon-192.png": "b0c7ffdf7df2ad565a606485632956f7",
"icons/Icon-512.png": "614af21790804deed114c58b71e59a31",
"icons/Icon-maskable-192.png": "b0c7ffdf7df2ad565a606485632956f7",
"icons/Icon-maskable-512.png": "614af21790804deed114c58b71e59a31",
"index.html": "dba722312feb8c7f9a808699566748cc",
"/": "dba722312feb8c7f9a808699566748cc",
"main.dart.js": "f89e7a918532d18a157cc37c8bb88406",
"manifest.json": "2ed0cd649023886d9d4f2461ab1418b2",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
