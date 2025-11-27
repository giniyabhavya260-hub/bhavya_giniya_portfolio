'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7c97778936fec058fae7d0c7e36aa115",
"version.json": "c70b46e3f8fd50bbb26f18e95c8d950b",
"index.html": "ee937e38a5d6c942f2fc2fbf1834feca",
"/": "ee937e38a5d6c942f2fc2fbf1834feca",
"main.dart.js": "9dd3f01784689ce1a1498cd5dff6cf7f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "370d7e5f528a9584f2b21d79fcc792ea",
"assets/AssetManifest.json": "6751536d8edf790c36cd8b8edb932691",
"assets/NOTICES": "3002b45d416b52c791184dd443d0cfb9",
"assets/FontManifest.json": "c07c6f4edb6ba1d7c1c4d01965be0048",
"assets/AssetManifest.bin.json": "24a4d226227c2eb15cc120a8eaa3e3c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9ad7fb0bf7f49b6a7407429af4c06eeb",
"assets/fonts/MaterialIcons-Regular.otf": "b3c0df6ba252e438ae3b2c525171383e",
"assets/assets/svg/ic_splash_lodo2.svg": "604c908959dc563aea2e39869f359c58",
"assets/assets/svg/ic_share.svg": "05bf38ecc8520b77c0c281a91539efe6",
"assets/assets/svg/ic_new_back.svg": "ae3d42e2dc59e82a1bfebe8bc0554c22",
"assets/assets/svg/ic_profit.svg": "d4552fce267b62ee830465ce30c21af2",
"assets/assets/svg/ic_money.svg": "32550051f119b4421e82faf47405e5ed",
"assets/assets/svg/ic_faceBook.svg": "a90cc8f63b19542ed64c53e8fdfbcb7b",
"assets/assets/svg/ic_blue_updown.svg": "b3760c09827d59f8ce290b2be32b69b7",
"assets/assets/svg/ic_delete.svg": "86f42563a602b7c931969709fe3de2d5",
"assets/assets/svg/ic_error.svg": "57fe2b84969d14bb1ef0471dda7ca2e4",
"assets/assets/svg/ic_setting_question.svg": "7dcd0f6f2f8320dc102435e3863e80ab",
"assets/assets/svg/ic_circal.svg": "90814b6f7388a0252bc3ece1c8ea72fc",
"assets/assets/svg/ic_apple.svg": "e4ccfc30e8b01f513c0ef56369b1c46a",
"assets/assets/svg/ic_home.svg": "5dab2b580ce6377e8bc238cc879cca0d",
"assets/assets/svg/ic_dropdown.svg": "ff82f7929b160838847590393149dfcc",
"assets/assets/svg/ic_setting_delete.svg": "2f6289679efe0399e4bc51323980570d",
"assets/assets/svg/ic_setting.svg": "45ea1369b69493b229037d9b9c9b5ff8",
"assets/assets/svg/ic_%2520up_down%2520_errow.svg": "d6ab607e5ed536dc1cc15ea158b90b13",
"assets/assets/svg/ic_setting_lock.svg": "34e4bbe67bd213036d85c3bfcd98cee1",
"assets/assets/svg/ic_dropdown_right.svg": "e0a2574c63be725260663ecd4f21898d",
"assets/assets/svg/ic__group_setting.svg": "0dc82e5188c26c4ddcf1b38f102b5103",
"assets/assets/svg/ic_loss.svg": "7a615871ee15de4ea47ed3bc012b8133",
"assets/assets/svg/ic_green_updown.svg": "1c01f9b9c3ba986b7292b8baad879404",
"assets/assets/svg/ic_arrow_forward.svg": "65fd6edb2cb4705ceac1f055ef2136e2",
"assets/assets/svg/ic_split.svg": "2fa10fa8830fd6d5ae79825a9d3a331e",
"assets/assets/svg/ic_summary.svg": "f4a90631810860d560fda87b4b60c433",
"assets/assets/svg/ic_left_back_arro.svg": "3fec49701c56d8460ae24d6d3cd2118e",
"assets/assets/svg/ic_google.svg": "eda822e9a2c6148f6631e300edfa2691",
"assets/assets/svg/ic_gallery.svg": "22345c7edf7f0b3763684d33b96a3de7",
"assets/assets/svg/whatapp.svg.png": "85706611aca74f5dc4f095f57ce7d497",
"assets/assets/svg/ic_splash_logo.svg": "f86837fa83038ca5a0eaa31a14735145",
"assets/assets/svg/ic_dropdown_left.svg": "1dfb328de99bdaa5a47f5bc7172ac3aa",
"assets/assets/svg/ic_view.svg": "8bd47b461f20ec8a4529810c8692e0d0",
"assets/assets/svg/ic_setting_indian_cur.svg": "403b4867de8a8f04cbe41390340c7e29",
"assets/assets/svg/ic_new_calender.svg": "a1bf95f215e1ea1296fd73c63e85d251",
"assets/assets/svg/ic_indian_curr.svg": "dc0e7220da79b786c1e5d3936770d08e",
"assets/assets/svg/ic_reports_bottomshet.svg": "a4aa288e7f7ee299ff8d5538ad2ae89f",
"assets/assets/svg/ic_left.svg": "2735e1a3f0c62426070b7179a3c8a14d",
"assets/assets/svg/ic_chekbox.svg": "7d5b818f59e75309e749d31640acdfe2",
"assets/assets/svg/ic_food.svg": "3b3f3dcd1efaae7f088f2a9764a4f224",
"assets/assets/svg/ic_done.svg": "5b3b09bc877dc61f7db32d339780de9e",
"assets/assets/svg/ic_red_updown.svg": "7d4a7fe0ce52c6a085428aaf9adbce35",
"assets/assets/svg/ic_logo.svg": "a776bba3ac62bda009aad48191b29515",
"assets/assets/svg/ic_group_member.svg": "f33013e41c908f978f130372474ca2da",
"assets/assets/svg/ic_notes.svg": "4e8046aea3a68c789bbc4580267aee7d",
"assets/assets/svg/ic_add_friends.svg": "53b0692b3a239ad3b8ec829850cb293b",
"assets/assets/svg/ic_group_calender.svg": "229b6e221d574c6e6afbfcd63e156630",
"assets/assets/svg/ic_download.svg": "ec2c0ece047f76cd451840a0b817f89f",
"assets/assets/svg/ic_cancle_icon.svg": "bc6d65b2b8200097f7bb016038594cc0",
"assets/assets/svg/ic_airoplan.svg": "80155ef808576228e477a04e59d4d8fe",
"assets/assets/svg/ic_box.svg": "62fb2a948db0193e88d94d9e32902fd1",
"assets/assets/svg/ic_backup.svg": "33d13d9708d7e2f6684a2b43fe9c24d6",
"assets/assets/svg/ic_reminder.svg": "cac4236a700abd5f149e2f82461f6950",
"assets/assets/svg/ic_question_mark.svg": "a5b383e10b9455fd729e0423ef6a10eb",
"assets/assets/svg/ic_floting_button.svg": "aebd3da5cdf7f23f6dc717abefc782ff",
"assets/assets/svg/ic_edit.svg": "e1319693ce019b101dda3875411da8c1",
"assets/assets/svg/ic_loack.svg": "ead12ca8e13b6d771d243ba124cf1f10",
"assets/assets/svg/ic_star.svg": "6af1d466ba9d56529dcc85e67f39c882",
"assets/assets/svg/ic_logout.svg": "3e910dad380994e6a16ed10b9d597364",
"assets/assets/svg/ic_celendar.svg": "3817042ec3ec19254e3ccb5d13c11d16",
"assets/assets/png/ic_image.png": "309124fc14b7c9b35174d3346c0aa31a",
"assets/assets/png/ic_split_logo.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/png/ic_india_curr.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/png/ic_parson.png": "ec8fda0f14e50ffb39f5097b7f157fa1",
"assets/assets/png/ic_pain_unpaid_parson.png": "1a4034ddb079f12d4526532a6eaae4f9",
"assets/assets/png/ic_group_detail_backg_image.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/png/ic_new_calender.png": "f4f187fd07bc45b6c660f906ba680986",
"assets/assets/png/ic_group.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/DMSans_18pt-ExtraBold.ttf": "1a59dd6d35df7328f26e20d48e4ef19f",
"assets/assets/fonts/DMSans_18pt-Medium.ttf": "3a1d7ac000ce95357313448adcbdcdaa",
"assets/assets/fonts/DMSans_24pt-Regular.ttf": "00ffa4b31f0de25c82d02ec16273c330",
"assets/assets/fonts/DMSans_18pt-Bold.ttf": "8acaca0f4a787f54a7bd8bcda015a020",
"assets/assets/fonts/DMSans_24pt-SemiBold.ttf": "0c1da10f7b6246b20ae1b8c83fd0f8ae",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
