/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4d6d39b807b2f7da57953004a63e8383"
  },
  {
    "url": "about.html",
    "revision": "1b83ea9bc3c4d48b4d568b57a3f4561a"
  },
  {
    "url": "assets/css/0.styles.c5fde540.css",
    "revision": "2f0b5b2f1153c6f6c6e47f0e4546c8bb"
  },
  {
    "url": "assets/git/git-command.jpg",
    "revision": "86929bae2f5ec0e3278074f0f90ed248"
  },
  {
    "url": "assets/git/git-introduce.jpg",
    "revision": "dbd1d82a91dc15f6a5ac0c0daf334a28"
  },
  {
    "url": "assets/img/girl.bcf757f2.jpg",
    "revision": "bcf757f2a56884b4a371e54cfa817223"
  },
  {
    "url": "assets/img/girl.jpg",
    "revision": "bcf757f2a56884b4a371e54cfa817223"
  },
  {
    "url": "assets/img/git-command.86929bae.jpg",
    "revision": "86929bae2f5ec0e3278074f0f90ed248"
  },
  {
    "url": "assets/img/git-introduce.dbd1d82a.jpg",
    "revision": "dbd1d82a91dc15f6a5ac0c0daf334a28"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d6893016e6d9c00a73764f28406cf002"
  },
  {
    "url": "assets/img/prop1.35076d42.png",
    "revision": "35076d422315b40cbe7c3b47e47847fc"
  },
  {
    "url": "assets/img/pwa-piture-one.6b9140f1.png",
    "revision": "6b9140f14363eb022d2caa057f84c861"
  },
  {
    "url": "assets/img/pwa-piture-one.png",
    "revision": "6b9140f14363eb022d2caa057f84c861"
  },
  {
    "url": "assets/img/pwa-piture-three.5bf71347.png",
    "revision": "5bf713476e0fa0ac8e9579dc7fe70cfc"
  },
  {
    "url": "assets/img/pwa-piture-three.png",
    "revision": "5bf713476e0fa0ac8e9579dc7fe70cfc"
  },
  {
    "url": "assets/img/pwa-piture-two.39262b7f.png",
    "revision": "39262b7f334258d0f38d14926a775de3"
  },
  {
    "url": "assets/img/pwa-piture-two.png",
    "revision": "39262b7f334258d0f38d14926a775de3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4baab49c.js",
    "revision": "5090d4a074da643f38517a05f5ae8bb4"
  },
  {
    "url": "assets/js/11.e8c44b11.js",
    "revision": "3d5c72d86c1e334a3f330e555564bff4"
  },
  {
    "url": "assets/js/12.072ac9a9.js",
    "revision": "822a0f0b04b474e5d2ba0b64536a8960"
  },
  {
    "url": "assets/js/13.56bb85dd.js",
    "revision": "da03ee58ace0b68228c3030848a64149"
  },
  {
    "url": "assets/js/14.7902a561.js",
    "revision": "65077ce062da0f852bd4249fa7f652dd"
  },
  {
    "url": "assets/js/15.e41aaf34.js",
    "revision": "0e87daf0b9580512ea1ceb105bd73a17"
  },
  {
    "url": "assets/js/16.92bc0539.js",
    "revision": "499112f9d96a9560345e7723d9633304"
  },
  {
    "url": "assets/js/17.4d40d044.js",
    "revision": "123d3e4a3fa916272b2e6b2ad3a4b1c6"
  },
  {
    "url": "assets/js/18.a1fad649.js",
    "revision": "18d73984aeeba10cb264694934c8f5a7"
  },
  {
    "url": "assets/js/19.a07665b4.js",
    "revision": "b38ef09c00431fd531f4eadd35e00034"
  },
  {
    "url": "assets/js/2.68a6935a.js",
    "revision": "3bf605a5df79298458489950536526ba"
  },
  {
    "url": "assets/js/20.569a53ae.js",
    "revision": "79a24044522c44640b353b1bca085892"
  },
  {
    "url": "assets/js/21.65511eab.js",
    "revision": "1e15d5b738c524da6d3fa19455cb6a99"
  },
  {
    "url": "assets/js/22.d24a3ab4.js",
    "revision": "88714a5eca65861a77bf5438daf2ad38"
  },
  {
    "url": "assets/js/23.7cbde6f0.js",
    "revision": "5bc1e2ff4cbbd28794895357cf04ac25"
  },
  {
    "url": "assets/js/24.a0ad14ca.js",
    "revision": "222d2f74533a362ac6bbebb58dc202bb"
  },
  {
    "url": "assets/js/25.31a9dcd4.js",
    "revision": "3085b6e80b387f8478cd33189d85ccb8"
  },
  {
    "url": "assets/js/26.b1f8fc7a.js",
    "revision": "d3b7a94c7007b7f2696e731e30eab1df"
  },
  {
    "url": "assets/js/27.16a4eb78.js",
    "revision": "957359fd4af4cb06b4b77d5222bbf114"
  },
  {
    "url": "assets/js/28.4678e584.js",
    "revision": "3722c5274eb9e32bcd9135a45646870a"
  },
  {
    "url": "assets/js/29.c51c7670.js",
    "revision": "2dc4cc7fc84ccb5faee7858129f67566"
  },
  {
    "url": "assets/js/3.fe85e17f.js",
    "revision": "01a986ece4be0117e1b38e28220616d2"
  },
  {
    "url": "assets/js/30.d2cf7af5.js",
    "revision": "87fe33401107ff9c8de977899687d184"
  },
  {
    "url": "assets/js/31.5f8c27a0.js",
    "revision": "3e4ddf5b3fd4bd2303867147402cbcc1"
  },
  {
    "url": "assets/js/32.1634b45c.js",
    "revision": "2b8fd174134706311cc4190ecb74e3d4"
  },
  {
    "url": "assets/js/33.54824a27.js",
    "revision": "efed94335600deec1163bb76e7a2a262"
  },
  {
    "url": "assets/js/34.05e33ed4.js",
    "revision": "faf8d993789363332db941fc6721604b"
  },
  {
    "url": "assets/js/35.76ec36bb.js",
    "revision": "1ec18eda86f3e97b56068941c8837fae"
  },
  {
    "url": "assets/js/36.977bd9e2.js",
    "revision": "095e0a2ff9bcac9f8ce1fdf901815757"
  },
  {
    "url": "assets/js/37.3910bece.js",
    "revision": "6523b7b7765418cdc3a998045b752432"
  },
  {
    "url": "assets/js/38.f8ec1f47.js",
    "revision": "f6df8e13271f5ea96043a7642f08eaee"
  },
  {
    "url": "assets/js/39.74b3f583.js",
    "revision": "96372ff282af8ea088cc977e77b991f5"
  },
  {
    "url": "assets/js/4.64090da6.js",
    "revision": "ae7654bed56bd9b96d670d129a8d92af"
  },
  {
    "url": "assets/js/40.8499f756.js",
    "revision": "3485599b7c7b5177223dd9849e7cffff"
  },
  {
    "url": "assets/js/41.1d88cdfb.js",
    "revision": "06b3ac95f5cd78bd668b52e7740d3f6f"
  },
  {
    "url": "assets/js/42.17551041.js",
    "revision": "74f016c7978c470fabaaa9018a6389d4"
  },
  {
    "url": "assets/js/43.60d61b9a.js",
    "revision": "696b978d6893cb0b3c6bac782341ddde"
  },
  {
    "url": "assets/js/44.f53c6308.js",
    "revision": "cfa8235cbf703f50c228cdfd5c486a11"
  },
  {
    "url": "assets/js/45.a4234833.js",
    "revision": "5678c6db786a1dc3f6a9da89942b3bd8"
  },
  {
    "url": "assets/js/46.0ea8a558.js",
    "revision": "7bd1207bb672434bcf043a436c9d3f81"
  },
  {
    "url": "assets/js/47.6ab113e9.js",
    "revision": "238b6e6761e8a687006c88ef186e7eb9"
  },
  {
    "url": "assets/js/48.44cc3e3b.js",
    "revision": "09a9aa69c3679b868a163f838b65bf5f"
  },
  {
    "url": "assets/js/49.d6c08ac5.js",
    "revision": "97b65a8c79aa146a34543accca96de78"
  },
  {
    "url": "assets/js/5.ebd85745.js",
    "revision": "5cc0a52dec504aa942a1b327b14779ef"
  },
  {
    "url": "assets/js/50.8f3bc15a.js",
    "revision": "4ed16b3ef028bcce09b0e5cbb1f945ab"
  },
  {
    "url": "assets/js/51.e08bcb2e.js",
    "revision": "48bad47a6ab2a0b3a5bf626c31c7971b"
  },
  {
    "url": "assets/js/52.26ea8e9f.js",
    "revision": "bb349d3c6bc52fc3f8ff4bc1b1c4cdaa"
  },
  {
    "url": "assets/js/53.5d684220.js",
    "revision": "0998f27ca1d56d6720eaf7930fe6710b"
  },
  {
    "url": "assets/js/54.5ecc0c5c.js",
    "revision": "35098da1279b3b742407b6e8b8c49314"
  },
  {
    "url": "assets/js/55.94ca3538.js",
    "revision": "4dd995b26275b5a2972909cbc20a619b"
  },
  {
    "url": "assets/js/56.36c62cb3.js",
    "revision": "9bb3291d757b1652480f48fc8f919a71"
  },
  {
    "url": "assets/js/57.7b297a61.js",
    "revision": "4cbb0c33e80eb662ba31ed7ac93de26e"
  },
  {
    "url": "assets/js/58.455ed160.js",
    "revision": "856cdc618ee9efb7133c716fd53a8a43"
  },
  {
    "url": "assets/js/59.ccaf14fa.js",
    "revision": "90bafd33c476408c5c2d1f8c956e84a8"
  },
  {
    "url": "assets/js/6.03bdb5ee.js",
    "revision": "ff48512931a8d33e30be1504326acf18"
  },
  {
    "url": "assets/js/60.e1127785.js",
    "revision": "7a58a3848d408f6fc2c6562c5b516c81"
  },
  {
    "url": "assets/js/61.117f0eba.js",
    "revision": "bbce74d8cc8f638164325945a11f43bf"
  },
  {
    "url": "assets/js/62.c8e5f0ea.js",
    "revision": "7d145caa09bfcb81ce3cd1e6ab9ea7a5"
  },
  {
    "url": "assets/js/63.44cf2dee.js",
    "revision": "2270dfc9c26c15e4cd5252549dca9f0c"
  },
  {
    "url": "assets/js/64.d0b3d433.js",
    "revision": "c5baf64ccdccafc21ea0aa30fef0c26c"
  },
  {
    "url": "assets/js/65.2b58d07b.js",
    "revision": "445eada339b41722f1970efd6d7d09c3"
  },
  {
    "url": "assets/js/66.2f388d07.js",
    "revision": "1de115fbe1ceb40adc2eefa596c3d2f5"
  },
  {
    "url": "assets/js/67.464cbb62.js",
    "revision": "faab7c50477e0ece1dd8c50252a11683"
  },
  {
    "url": "assets/js/7.f5dc9a70.js",
    "revision": "96cf81911dfd0bc3e81cc80e55b9e1da"
  },
  {
    "url": "assets/js/8.cac2204e.js",
    "revision": "c7d78165ff02e0833453afde8ad9ab36"
  },
  {
    "url": "assets/js/9.d77151fc.js",
    "revision": "989c1584af539893f3c70f8e39fa98a7"
  },
  {
    "url": "assets/js/app.5e55b2d3.js",
    "revision": "8441fd79377fe1ca6f5770b0db6a9ce2"
  },
  {
    "url": "assets/vueImg/emit1.png",
    "revision": "117c3e1e2915302b388f0a6662b3ffea"
  },
  {
    "url": "assets/vueImg/exportMergeExcel1.png",
    "revision": "948c2d22d22c3f3e7d5ab7350968dac1"
  },
  {
    "url": "assets/vueImg/prop1.png",
    "revision": "35076d422315b40cbe7c3b47e47847fc"
  },
  {
    "url": "assets/vueImg/prop2.png",
    "revision": "e5e951b5a819f46ad554e524e3a75f01"
  },
  {
    "url": "girl.jpg",
    "revision": "bcf757f2a56884b4a371e54cfa817223"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "546dd6aba8f16a8482cba32849653945"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "02ef3442d13d72fcdc459b600b54c53d"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "75aaf48da1cd2ee9ea862cb4752240ba"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "8bcd15ccd84e249585b6bd4bc7d435ee"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "218a5aab71318f38b87cc8f23ef430a3"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "218a5aab71318f38b87cc8f23ef430a3"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "70b744ab0d5f2ddc0908f2630c480725"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "27a8d9f2a138e7213e00aef6cf919ef7"
  },
  {
    "url": "index.html",
    "revision": "f53f3043a7df027cb289c6b8de9ec082"
  },
  {
    "url": "resume.html",
    "revision": "05b51eb031c3e6a27472d5a48ea19053"
  },
  {
    "url": "view/life/CreditCard/a.html",
    "revision": "5b5b8e7bb21c255aeb3237de9d806940"
  },
  {
    "url": "view/life/CreditCard/index.html",
    "revision": "e2cd5b47895c639d9242406bf7c6064a"
  },
  {
    "url": "view/life/dream/a.html",
    "revision": "58da0f75b791c35aeb511dabbf0e419c"
  },
  {
    "url": "view/life/dream/b.html",
    "revision": "7edeac179909550e08c21c7fd633352c"
  },
  {
    "url": "view/life/dream/c.html",
    "revision": "ec7db040f3554e972583edc6a9597027"
  },
  {
    "url": "view/life/dream/index.html",
    "revision": "a2beb529a7dd0cba8ebcf47ec4a6a4c8"
  },
  {
    "url": "view/life/foods/a.html",
    "revision": "c18fa922c47259ea0499f3c3965504cb"
  },
  {
    "url": "view/life/foods/b.html",
    "revision": "4c094bfee155d3b5e5fde2352978ec60"
  },
  {
    "url": "view/life/foods/index.html",
    "revision": "20060c3adb4000b7854df363b094098f"
  },
  {
    "url": "view/life/play/a.html",
    "revision": "e0d714f24854fb02b4e626a829b09b56"
  },
  {
    "url": "view/life/play/b.html",
    "revision": "8047bcd4533785138b956293ff2bcb79"
  },
  {
    "url": "view/life/play/index.html",
    "revision": "19016aac9c64aabf1868effe6360b572"
  },
  {
    "url": "view/record/customizeComponent/CountUp.html",
    "revision": "4569f7bd0bde5c14605c1aa07a728000"
  },
  {
    "url": "view/record/customizeComponent/HelloWorld.html",
    "revision": "b118e08e8d9d6c6aaadf5f2dd1b21148"
  },
  {
    "url": "view/record/customizeComponent/index.html",
    "revision": "7e319263aa35ceced98074a0dc002cef"
  },
  {
    "url": "view/record/designProject/git.html",
    "revision": "2ee3478c930c1e083aca2b8348814ac2"
  },
  {
    "url": "view/record/designProject/index.html",
    "revision": "b305cadd8552e27c0be42b4e660412f9"
  },
  {
    "url": "view/record/designProject/markdown.html",
    "revision": "d535c3cf25fdd73343ef37b168cab4cb"
  },
  {
    "url": "view/record/designProject/personalPlugin.html",
    "revision": "c0f8f996eb30d8d69fa6c09ac60fa3fa"
  },
  {
    "url": "view/record/designProject/plugin.html",
    "revision": "17b6369c57e3deff4364bf5a79a373b7"
  },
  {
    "url": "view/record/designProject/style.html",
    "revision": "559f40549899ed96e49833ec7808b899"
  },
  {
    "url": "view/web/algorithm/project/index.html",
    "revision": "4e82367f71d8a4b59b6893187bb605df"
  },
  {
    "url": "view/web/algorithm/study/index.html",
    "revision": "7fa2d6fd12a1263ca27b1a50d65334df"
  },
  {
    "url": "view/web/css/css-2/index.html",
    "revision": "150307b0d08cb83b4133afd87425549a"
  },
  {
    "url": "view/web/css/css-2/select.html",
    "revision": "fe8c3b99e510d7e9ae4ceb01ad4d94e2"
  },
  {
    "url": "view/web/css/css-3/index.html",
    "revision": "42d606253edc8faf2b60165b23d7c671"
  },
  {
    "url": "view/web/css/css-3/select.html",
    "revision": "63028b3854379b062c4348df4846269a"
  },
  {
    "url": "view/web/git/github/firstCommit.html",
    "revision": "175757b9789a660041ded44bb96e3df8"
  },
  {
    "url": "view/web/git/github/index.html",
    "revision": "cde5ec136f014b0c1e8ccfe2f6e3b79e"
  },
  {
    "url": "view/web/git/gitlab/firstCommit.html",
    "revision": "97d5ae16c052558c5f847aae11a23d12"
  },
  {
    "url": "view/web/git/gitlab/index.html",
    "revision": "86251539cb44c5b9a8cb3645b61ca339"
  },
  {
    "url": "view/web/html/html4/html4Tag.html",
    "revision": "9b5194e1599d225744ac6e9886a2fcee"
  },
  {
    "url": "view/web/html/html4/index.html",
    "revision": "f6f243f164e357e39068f05dcb103db5"
  },
  {
    "url": "view/web/html/html5/html5Tag.html",
    "revision": "4f826054f6c6aac4589c4b9ee559336f"
  },
  {
    "url": "view/web/html/html5/index.html",
    "revision": "e7229c35641fe2f994bec61d1889d439"
  },
  {
    "url": "view/web/javascript/base/index.html",
    "revision": "9bfa5021184dbd234dbcac7d39e202f4"
  },
  {
    "url": "view/web/javascript/base/promise.html",
    "revision": "94012b6386546efde46a565eaafc3ae3"
  },
  {
    "url": "view/web/javascript/base/this.html",
    "revision": "3d7f729edb12cc16886af77155a06589"
  },
  {
    "url": "view/web/javascript/base/work.html",
    "revision": "aef38fef2b90a1bbe471d09da4ea7eb6"
  },
  {
    "url": "view/web/javascript/plugin/echarts.html",
    "revision": "cf9382f351d9aabbd403ebffa9dcc51f"
  },
  {
    "url": "view/web/javascript/plugin/html2pdf.js.html",
    "revision": "d7334353dac2ab8728097a00de47b627"
  },
  {
    "url": "view/web/javascript/plugin/index.html",
    "revision": "2264c9c3b732c6d023acd9537aec1d9d"
  },
  {
    "url": "view/web/javascript/react/componentPass.html",
    "revision": "3bbf34d97a4cc65e4f0129164afe1aad"
  },
  {
    "url": "view/web/javascript/react/index.html",
    "revision": "c6ce8a4a639d18dd3f23ee02adcd7cc7"
  },
  {
    "url": "view/web/javascript/react/projectProblem.html",
    "revision": "f1d850ff03cc376aaab2439dcc2dd786"
  },
  {
    "url": "view/web/javascript/react/reactLibrary.html",
    "revision": "a4fd2f8ce441ae31380b8dec1c572fcc"
  },
  {
    "url": "view/web/javascript/react/setGlobalCss.html",
    "revision": "20b4bc0885ddff5decfd8797ef77ba81"
  },
  {
    "url": "view/web/javascript/vue/componentPass.html",
    "revision": "d11efff5d2381848e033bc70c24d1534"
  },
  {
    "url": "view/web/javascript/vue/getProjectTemplate.html",
    "revision": "e126cb1eec985cb668497eabb76c2d7f"
  },
  {
    "url": "view/web/javascript/vue/index.html",
    "revision": "2474f7ccc2ebec9ffecf2bf92349baf3"
  },
  {
    "url": "view/web/javascript/vue/projectProblem.html",
    "revision": "dac0f607079343e1f47387cd9a2a25bc"
  },
  {
    "url": "view/web/javascript/vue/setGlobalCss.html",
    "revision": "f21eded0d0b900a7cc16bb65ea5fbf74"
  },
  {
    "url": "view/web/javascript/vue/vueLibrary.html",
    "revision": "85d722caaed9f0369dc865c4da483fa7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
