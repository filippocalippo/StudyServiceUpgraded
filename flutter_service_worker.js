'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d80583a6bc159113866fb2e1560ed71",
"assets/AssetManifest.bin.json": "98cdd35fcaa80575d38051b9b3bc9c67",
"assets/assets/fonts/Nunito-Variable.ttf": "36c059d54b912dd94f9b3602f78537e3",
"assets/assets/fonts/NunitoSans-Variable.ttf": "7ed17ae2beeb80f134caec9d56bbcbdd",
"assets/assets/icons/Logo.jpeg": "b1365fa8bbb6703700f5d638cd5c508c",
"assets/FontManifest.json": "aa23a7c60c5cda3b614a0e8c4737542c",
"assets/fonts/MaterialIcons-Regular.otf": "f186c4645afd8c40e8bbb2572a8bb751",
"assets/NOTICES": "72a4e0d104567aa61d619635b0997c6a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "909d951630e1757bdc819e80d3700ce4",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "fb75885e2f0d9e57c3e314401ef4ab75",
"icons/Icon-192.png": "b0c7ffdf7df2ad565a606485632956f7",
"icons/Icon-512.png": "614af21790804deed114c58b71e59a31",
"icons/Icon-maskable-192.png": "b0c7ffdf7df2ad565a606485632956f7",
"icons/Icon-maskable-512.png": "614af21790804deed114c58b71e59a31",
"index.html": "782a2d84842c5bcb070969572e57a2aa",
"/": "782a2d84842c5bcb070969572e57a2aa",
"main.dart.js": "08446c12df4153ed576247dee2eb3d81",
"main.dart.js_1.part.js": "db6d70df90d54b16a605735d3ec9c477",
"main.dart.js_10.part.js": "b7bc8e5c8cb39bccfb6676165e05f068",
"main.dart.js_12.part.js": "48df03b053194747aac7f1b89865ad33",
"main.dart.js_13.part.js": "3c5f43cb582c88b02c2dbd209431a2cd",
"main.dart.js_14.part.js": "4a539913bcb4de8a45ae8d8c378b5f7f",
"main.dart.js_15.part.js": "a5185bca24807db2959750bd99a53eb6",
"main.dart.js_16.part.js": "994a707aacc4f72b64294ec8ba31a215",
"main.dart.js_17.part.js": "1ddee05601d1c20b29917fcb9ab8f2fb",
"main.dart.js_18.part.js": "67a24fbbd9710ccf698098d11d4c6984",
"main.dart.js_2.part.js": "4344c1aaa1dc039173240381e7dc7ed1",
"main.dart.js_22.part.js": "db3751d955c24d82526a91bc56e4d06a",
"main.dart.js_23.part.js": "d050f6c4a2f63658bc7ba47039850e4d",
"main.dart.js_24.part.js": "3073d75f5047228e58ce0e4bcb25e408",
"main.dart.js_25.part.js": "d971746eb8c45a6e452bfefa06d9f07c",
"main.dart.js_26.part.js": "82e3ceddbe77a8230cd0fc4cd62c70fd",
"main.dart.js_27.part.js": "33cc51d64ef533e164c63a9b2d2c8162",
"main.dart.js_28.part.js": "e47af61dbb0ef3c1238f4c949e07e22f",
"main.dart.js_29.part.js": "cd539ee5cf4dd4381ee7f9c740aadeb9",
"main.dart.js_3.part.js": "668198bbf54038e17fdadd5a28c5656e",
"main.dart.js_30.part.js": "1979a0318041248fa7e819c658609c3c",
"main.dart.js_31.part.js": "9d631f278ac0d459e3631d7ec852e36c",
"main.dart.js_32.part.js": "fa5013f8520894fe8053c01ab160adfc",
"main.dart.js_33.part.js": "dd8a99fb653c8be111fced237238ea53",
"main.dart.js_34.part.js": "94b6c41a96abd1d6aa6aa26460f237ac",
"main.dart.js_35.part.js": "a5e8019f486fba0013e613b35273c0c7",
"main.dart.js_36.part.js": "161a7b62840ef95a2d57354c58ce2b41",
"main.dart.js_37.part.js": "c843d4ba7b0577767cda824c236d6bc9",
"main.dart.js_38.part.js": "05a500579ff8358c9f559fbf4c5be559",
"main.dart.js_39.part.js": "92efe0fe588cbda8038514bd5fd63764",
"main.dart.js_4.part.js": "1b9f218cf55e46ce61e397b23a3b029e",
"main.dart.js_40.part.js": "35459417e4fd119b1a06250751e10ca5",
"main.dart.js_41.part.js": "bc7252b90af864203a51093cd7621683",
"main.dart.js_42.part.js": "3abdb375f8cd552a07c35b42c3913828",
"main.dart.js_43.part.js": "c66815990686a239b9aa9dfe868e359c",
"main.dart.js_44.part.js": "ba99b30026cd6f4dbbd8f033d4e70d5e",
"main.dart.js_45.part.js": "425d99965069dce77880d27117a1f86e",
"main.dart.js_46.part.js": "b828b3ad5f91ca8944aaf2359cd87816",
"main.dart.js_47.part.js": "708dc3fff04eabf640b5e56483cbaf17",
"main.dart.js_48.part.js": "629e8d5c1151c68f3381223ad488f76d",
"main.dart.js_49.part.js": "1d0af5a6dd82b203ca92c211603d9ffe",
"main.dart.js_5.part.js": "16bf278eaea815564387b44dd3f7b4f8",
"main.dart.js_50.part.js": "87c7e6fdcdde7968bd4fc184de8842d1",
"main.dart.js_6.part.js": "a2ccd76912b5123af27abfef64a505ce",
"main.dart.js_7.part.js": "20863249a2bf6316c34e1dd2d7c0a1d2",
"main.dart.js_8.part.js": "66c2e56cc603be2db2e6df263b679648",
"main.dart.js_9.part.js": "bddaea040933c02edae567998af53951",
"manifest.json": "943bdc20e2b1dd8eb7d04d4808ea1284",
"vercel.json": "9bb5486b4eca05b64b1a4eba87d03b12",
"version.json": "6b09a4617ee58131f141ead94fd9d1a4"};
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
