"use strict";var precacheConfig=[["/tam-site/index.html","41b285af78ac3cb0bdfa37aa77e28de5"],["/tam-site/static/css/main.ebd64e24.css","2a844bfc9748fd775b3f3fa14bfb52ec"],["/tam-site/static/js/main.f1bb8f68.js","d0fc1dd3139c2b17cf3d1418667290fc"],["/tam-site/static/media/Howdy-affinity-mapping.fce6c7a1.jpg","fce6c7a13cad7cf3ead61c2f3adc30c9"],["/tam-site/static/media/Howdy-friend-profile.e0b227ad.jpg","e0b227ad1ff94427b4060049f6786585"],["/tam-site/static/media/Howdy-home-page.c5c710a8.jpg","c5c710a8385add81163ddef35184d22a"],["/tam-site/static/media/Howdy-homescreen.0c26d0e8.jpg","0c26d0e8c3b9f1f9ff4a2169e9c4c7d4"],["/tam-site/static/media/Howdy-splash.c7f6b166.jpg","c7f6b166353bd6c411f2713a77e05416"],["/tam-site/static/media/Howdy-wireframes.1a67d0d2.jpg","1a67d0d2481b0b7bf3ee2cc06f338ab9"],["/tam-site/static/media/about.59efb419.jpg","59efb41994ba6059b1f952a3a2e820c2"],["/tam-site/static/media/daily-ui-crowdfunding.696e444e.jpg","696e444ed62188ea19ed3c51edcb4272"],["/tam-site/static/media/daily-ui-customize-product.3ae6b0b6.jpg","3ae6b0b6353932ea603f558c54cd161f"],["/tam-site/static/media/daily-ui-home-page.c1b0e5d7.jpg","c1b0e5d7a909fde76cd05a1d0ca8c01d"],["/tam-site/static/media/daily-ui-home.1acb3d79.jpg","1acb3d797c6fed46dbb8c2f5acb3f278"],["/tam-site/static/media/daily-ui-invoice.ea489dc1.jpg","ea489dc1932b6466ea71bd94431b600a"],["/tam-site/static/media/daily-ui-job-listing.a815b351.jpg","a815b351cb9888e148ca061d23c29ee2"],["/tam-site/static/media/daily-ui-leaderboard.8fe9a74d.jpg","8fe9a74d49856f169d53c1a2b2f2a119"],["/tam-site/static/media/daily-ui-login.0c2a3ef4.jpg","0c2a3ef470eaa8c2121f9ba799c03ebc"],["/tam-site/static/media/daily-ui-page-cover.640aa4ac.jpg","640aa4ac9afebb8d608bfb31569654c7"],["/tam-site/static/media/daily-ui-profile.cc2012ef.jpg","cc2012ef6a8f3ec6ff5435e3a156201e"],["/tam-site/static/media/daily-ui-weather.621ec8de.jpg","621ec8de1d0ed359aa8bf70175998042"],["/tam-site/static/media/instagram.0e84d592.png","0e84d5926187e7a3b785febd3a55bf1d"],["/tam-site/static/media/mhouse-home.ed875b11.jpg","ed875b112fedbac3cf1fe8d8fd20aeb0"],["/tam-site/static/media/mhouse-interview.a8919913.jpg","a89199132099ad356458a3855c1eb0d9"],["/tam-site/static/media/mhouse-past.7da77492.jpg","7da77492fcf8db9d3342ccb801886b5d"],["/tam-site/static/media/mhouse-poetry.bb54e8ef.jpg","bb54e8ef27441808235662836d8fe342"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,i){var c=new URL(e);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),c=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var i=new Request(t,{credentials:"same-origin"});return fetch(i).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),i="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),a=urlsToCacheKeys.has(t));var c="/tam-site/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});