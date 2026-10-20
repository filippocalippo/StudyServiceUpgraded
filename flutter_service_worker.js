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
"assets/fonts/MaterialIcons-Regular.otf": "72193fa6c65c873283bca3030a7fff7a",
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
"flutter_bootstrap.js": "32974add567344dd74c4b66c7e3149ee",
"icons/Icon-192.png": "b0c7ffdf7df2ad565a606485632956f7",
"icons/Icon-512.png": "614af21790804deed114c58b71e59a31",
"icons/Icon-maskable-192.png": "b0c7ffdf7df2ad565a606485632956f7",
"icons/Icon-maskable-512.png": "614af21790804deed114c58b71e59a31",
"index.html": "7aef786596acbad4649b40dca64e46f9",
"/": "7aef786596acbad4649b40dca64e46f9",
"main.dart.js": "25f7c68fe35e2992ea675c7b3453c9bd",
"main.dart.js_1.part.js": "4b0f527c0e1ad06b569cd191d5521e64",
"main.dart.js_10.part.js": "b7bc8e5c8cb39bccfb6676165e05f068",
"main.dart.js_13.part.js": "ba98c6a7d29cee0746f52069782b300a",
"main.dart.js_14.part.js": "f0a03bff3eac43d98cedb9b6c4567fa2",
"main.dart.js_15.part.js": "a5185bca24807db2959750bd99a53eb6",
"main.dart.js_17.part.js": "bca29af4ebe0e16736ba682307a9dc4e",
"main.dart.js_18.part.js": "67a24fbbd9710ccf698098d11d4c6984",
"main.dart.js_2.part.js": "e8b45b13e3f0135175e1f8507efec1bc",
"main.dart.js_23.part.js": "7819783c09a91afea222da05016be155",
"main.dart.js_24.part.js": "3780d9745d5f80d95965f685e2df427f",
"main.dart.js_25.part.js": "d971746eb8c45a6e452bfefa06d9f07c",
"main.dart.js_28.part.js": "fcfcab5ccb393dc090ae4532cc7ceaf3",
"main.dart.js_29.part.js": "cd539ee5cf4dd4381ee7f9c740aadeb9",
"main.dart.js_3.part.js": "d49d16f3759102ee645ccfca8a972f56",
"main.dart.js_30.part.js": "1979a0318041248fa7e819c658609c3c",
"main.dart.js_33.part.js": "6446ebb4075d986b4db7e6070f250956",
"main.dart.js_34.part.js": "af5d46701cae8a1b370f627d6140a1df",
"main.dart.js_35.part.js": "67a358e11a2bd3fc2a80855704e611a0",
"main.dart.js_36.part.js": "072d93b7038fbcaeee24fde07b950769",
"main.dart.js_37.part.js": "c843d4ba7b0577767cda824c236d6bc9",
"main.dart.js_38.part.js": "05a500579ff8358c9f559fbf4c5be559",
"main.dart.js_4.part.js": "4e7281fed26794e1c2173c241f1f29a1",
"main.dart.js_41.part.js": "c931a8d35b9450cef21d9a9705e8633c",
"main.dart.js_42.part.js": "7de321ebe0b25cf0179e4503e0341f3c",
"main.dart.js_43.part.js": "8347918ec7c636bf39ebf49929fa35e4",
"main.dart.js_44.part.js": "6441693e1b72ea543e61ba6701a71765",
"main.dart.js_45.part.js": "c178d6fd751eab7345ef4965fe5bdf65",
"main.dart.js_46.part.js": "3957be05d312869f1f95235575246834",
"main.dart.js_47.part.js": "708dc3fff04eabf640b5e56483cbaf17",
"main.dart.js_48.part.js": "629e8d5c1151c68f3381223ad488f76d",
"main.dart.js_49.part.js": "1d0af5a6dd82b203ca92c211603d9ffe",
"main.dart.js_5.part.js": "cde13c84c6c5ad055022e647ae8faabe",
"main.dart.js_50.part.js": "87c7e6fdcdde7968bd4fc184de8842d1",
"main.dart.js_6.part.js": "a2ccd76912b5123af27abfef64a505ce",
"main.dart.js_7.part.js": "20863249a2bf6316c34e1dd2d7c0a1d2",
"main.dart.js_8.part.js": "8f1b6a87d26a453b7431b99a1560c31c",
"main.dart.js_9.part.js": "bddaea040933c02edae567998af53951",
"manifest.json": "943bdc20e2b1dd8eb7d04d4808ea1284",
"version.json": "5259de8ee596edff383d4acba71318a9"};
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
