(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpkg/singlePlayer/singlePlayer"],{

/***/ 30:
/*!******************************************************************************************************************!*\
  !*** F:/Worklist/Hbuilder/UniappTry2/dice_game_final(2)/main.js?{"page":"subpkg%2FsinglePlayer%2FsinglePlayer"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _singlePlayer = _interopRequireDefault(__webpack_require__(/*! ./subpkg/singlePlayer/singlePlayer.vue */ 31));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_singlePlayer.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 31:
/*!***********************************************************************************************!*\
  !*** F:/Worklist/Hbuilder/UniappTry2/dice_game_final(2)/subpkg/singlePlayer/singlePlayer.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singlePlayer.vue?vue&type=template&id=3e4d1d1a& */ 32);
/* harmony import */ var _singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singlePlayer.vue?vue&type=script&lang=js& */ 34);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _singlePlayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singlePlayer.vue?vue&type=style&index=0&lang=scss& */ 36);
/* harmony import */ var _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpkg/singlePlayer/singlePlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 32:
/*!******************************************************************************************************************************!*\
  !*** F:/Worklist/Hbuilder/UniappTry2/dice_game_final(2)/subpkg/singlePlayer/singlePlayer.vue?vue&type=template&id=3e4d1d1a& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./singlePlayer.vue?vue&type=template&id=3e4d1d1a& */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_template_id_3e4d1d1a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 33:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Worklist/Hbuilder/UniappTry2/dice_game_final(2)/subpkg/singlePlayer/singlePlayer.vue?vue&type=template&id=3e4d1d1a& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 46))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = JSON.parse(JSON.stringify(_vm.myDice))
  var g1 = JSON.parse(JSON.stringify(_vm.yourDice))
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 34:
/*!************************************************************************************************************************!*\
  !*** F:/Worklist/Hbuilder/UniappTry2/dice_game_final(2)/subpkg/singlePlayer/singlePlayer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./singlePlayer.vue?vue&type=script&lang=js& */ 35);
/* harmony import */ var _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 35:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Worklist/Hbuilder/UniappTry2/dice_game_final(2)/subpkg/singlePlayer/singlePlayer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      // ?????????????????????
      myAction: true,
      // ?????????????????????
      OPlay: true,
      // ??????????????????
      mySrc: '/static/img/dice_1.gif',
      // ????????????????????????
      myDice: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // ????????????????????????
      myPoint: 0,
      // ????????????
      myScore: 0,
      // ????????????????????????
      yourDice: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // ????????????????????????
      yourPoint: 0,
      // ??????????????????
      yourSrc: '/static/img/dice_1.gif',
      // ????????????
      yourScore: 0,
      mos_x: 50,
      mos_y: 50,
      isShow: false };

  },

  onLoad: function onLoad() {
    this.$refs.popup.open();
  },

  methods: {
    // ????????????????????????
    move: function move(e) {var _this = this;
      // console.log(e)
      this.isShow = true;
      this.mos_x = e.touches[0].pageX;
      this.mos_y = e.touches[0].pageY;
      setTimeout(function () {
        _this.isShow = false;
      }, 250);
    },
    // ???????????????
    rand: function rand(min, max) {
      if (min > max) {
        var mid = min;
        min = max;
        max = mid;
      }
      return parseInt(Math.random() * (max - min + 1) + min);
    },
    // ????????????
    diceClick: function diceClick(i) {var _this2 = this;
      // ??????????????????,?????????????????????????????????????????????,1????????????2?????????
      // ?????? myAction ?????????????????????????????????????????????????????????????????????
      // ???????????????????????????????????????????????????????????????
      if (this.OPlay) {
        if (i == 1 && this.myAction) {
          // ??????????????????????????????????????????????????????????????????????????????true
          this.OPlay = false;
          // ??????????????????,??????myPoint??????,????????????gif????????????????????????????????????
          this.myPoint = this.rand(1, 6);
          // ?????? gif ????????????????????????
          // ????????????????????????????????????????????????????????????????????????????????????
          // ????????????????????????????????????????????????????????????????
          this.mySrc = "/static/img/dice_" + this.myPoint + ".gif?" + new Date().getTime();
        } else if (i == 2 && !this.myAction) {
          this.OPlay = false;
          this.yourPoint = this.rand(1, 6);
          this.yourSrc = "/static/img/dice_" + this.yourPoint + ".gif?" + new Date().getTime();
          setTimeout(function () {
            _this2.algorithm();
          }, 1800);
        } else {
          uni.showToast({
            title: '????????????????????????',
            icon: 'none',
            duration: 1000 // ???????????????
          });
        }
      } else {
        uni.showToast({
          title: '??????????????????',
          icon: 'none',
          duration: 1000 // ???????????????
        });
      }
    },
    // ????????????
    getDice: function getDice(index, i) {
      // ??????????????????????????????????????????????????????
      // ??????????????????????????????????????????
      if (!this.OPlay) {
        if (i == 1 && this.myAction) {
          // ???????????????????????????????????????
          if (this.myDice[index] == 0) {
            this.OPlay = true;
            this.myDice[index] = this.myPoint;
            this.myAction = false;
            this.eliminate(index, 1);
            uni.showToast({
              title: '??????????????????',
              icon: 'none',
              duration: 1000 // ???????????????
            });
            if (this.myDice.indexOf(0) !== -1 && this.yourDice.indexOf(0) !== -1) {
              this.diceClick(2);
            }

          } else {
            uni.showToast({
              title: '?????????????????????',
              icon: 'none',
              duration: 1000 // ???????????????
            });
          }
        } else if (i == 2 && !this.myAction) {
          if (this.yourDice[index] == 0) {
            this.OPlay = true;
            this.yourDice[index] = this.yourPoint;
            this.myAction = true;
            this.eliminate(index, 2);
            uni.showToast({
              title: '??????????????????',
              icon: 'none',
              duration: 1000 // ???????????????
            });
          } else {
            uni.showToast({
              title: '?????????????????????',
              icon: 'none',
              duration: 1000 // ???????????????
            });
          }
        } else {
          uni.showToast({
            title: '????????????????????????',
            icon: 'none',
            duration: 1000 // ???????????????
          });
        }
      } else {
        uni.showToast({
          title: '???????????????',
          icon: 'none',
          duration: 1000 // ???????????????
        });
      }
      // this.myImg[index] = "../../static/img/dice_static_" + this.myPoint + ".png"
    },
    // ????????????
    eliminate: function eliminate(index, i) {
      // js?????????????????????,?????? parseInt?????????
      var x = parseInt(index / 3);
      if (i == 1) {
        // ???????????????????????????????????????????????????,???????????????0??????
        for (var _i = 0; _i < 3; _i++) {
          if (this.myDice[index] == this.yourDice[x * 3 + _i]) {
            this.yourDice[x * 3 + _i] = 0;
          }
        }
      } else {
        for (var _i2 = 0; _i2 < 3; _i2++) {
          if (this.yourDice[index] == this.myDice[x * 3 + _i2]) {
            this.myDice[x * 3 + _i2] = 0;
          }
        }
      }
      // ????????????????????????
      this.myScore = this.getScore(this.myDice);
      this.yourScore = this.getScore(this.yourDice);
      // ????????????????????????
      this.winer(this.myDice);
      this.winer(this.yourDice);
    },
    // ????????????
    getScore: function getScore(arr) {
      // ????????????
      var count = 0;
      for (var i = 0; i < 3; i++) {
        // arr ??? __ob__: Observer ????????????,?????????
        // ??????????????????,???????????????????????????
        var newArr = JSON.parse(JSON.stringify(arr)).splice(i * 3, 3);
        // ???????????????????????????????????????
        var pointCount = newArr.reduce(function (obj, point) {
          if (point in obj) {
            obj[point]++;
          } else {
            obj[point] = 1;
          }
          return obj;
        }, {});
        // ??????????????????????????????
        // key: ??????,???????????????
        // value: ????????????
        for (var point in pointCount) {
          count += parseInt(point) * Math.pow(pointCount[point], 2);
        }
      }
      return count;
    },
    // ????????????
    winer: function winer(arr) {
      // showModal ????????????????????????????????????,this????????????,????????????????????????????????????
      var that = this;
      if (arr.indexOf(0) == '-1') {
        if (this.myScore > this.yourScore) {
          uni.showModal({
            title: '?????????????????????',
            success: function success(res) {
              if (res.confirm) {// ??????
                that.reset();
              } else {// ??????
                return;
              }
            } });

        } else if (this.myScore < this.yourScore) {
          uni.showModal({
            title: '??????????????????',
            success: function success(res) {
              if (res.confirm) {// ??????
                that.reset();
              } else {// ??????
                return;
              }
            } });

        } else {
          uni.showModal({
            title: '????????????,???????????????',
            success: function success(res) {
              if (res.confirm) {// ??????
                that.reset();
              } else {// ??????
                return;
              }
            } });

        }
        // ????????????
        // this.reset()
      }
    },
    // ????????????
    reset: function reset() {
      this.mySrc = '/static/img/dice_1.gif',
      this.myDice = [0, 0, 0, 0, 0, 0, 0, 0, 0],
      this.myPoint = 0,
      this.myScore = 0,
      this.yourDice = [0, 0, 0, 0, 0, 0, 0, 0, 0],
      this.yourPoint = 0,
      this.yourSrc = '/static/img/dice_1.gif',
      this.yourScore = 0;
      this.$refs.popup.open();
    },
    // ????????????
    julioCruz: function julioCruz(i) {
      if (i == 1) {
        this.myAction = true;
      } else {
        this.myAction = false,
        this.diceClick(2);
      }
      // ?????????????????????????????????
      this.$refs.popup.close();
    },
    // ????????????
    algorithm: function algorithm() {
      // ??????????????????????????????????????????
      var score = [];
      // ?????????,????????????????????????????????????,?????????????????????????????????
      var arr = JSON.stringify(this.yourDice);
      // ???????????????????????????????????????
      for (var i = 0; i < this.yourDice.length; i++) {
        // ????????????
        var newDice = JSON.parse(arr);
        if (parseInt(newDice[i]) == 0) {
          newDice[i] = this.yourPoint;
          // js?????????????????????,?????? parseInt?????????
          var x = parseInt(i / 3);
          // ??????????????????
          var myArr = JSON.parse(JSON.stringify(this.myDice));
          // ????????????
          for (var a = 0; a < 3; a++) {
            if (newDice[i] == myArr[x * 3 + a]) {
              myArr[x * 3 + a] = 0;
            }
          }
          // ???????????????????????????
          var poor = this.getScore(newDice) - this.getScore(myArr);
          score[i] = poor;
        } else {
          // ????????????????????????????????? -999 ,?????????????????????
          score[i] = -999;
        }
      }
      var max = -999;
      // ??????????????????
      max = Math.max.apply(Math, score);
      // ?????????????????????????????????
      var maxArr = [];
      for (var j = 0; j < score.length; j++) {
        if (score[j] == max) {
          maxArr.push(j);
        }
      }
      // ????????????????????????????????????
      var rand = this.rand(0, maxArr.length - 1);
      var position = maxArr[rand];
      this.OPlay = true;
      this.yourDice[position] = this.yourPoint;
      this.myAction = true;
      this.eliminate(position, 2);
      uni.showToast({
        title: '??????????????????',
        icon: 'none',
        duration: 1000 // ???????????????
      });
    } },


  computed: {
    // ??????????????????????????????
    mosPosition: function mosPosition() {
      return "left:" + (this.mos_x - 10) + "px;top:" + (this.mos_y - 10) + "px";
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 36:
/*!*********************************************************************************************************************************!*\
  !*** F:/Worklist/Hbuilder/UniappTry2/dice_game_final(2)/subpkg/singlePlayer/singlePlayer.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./singlePlayer.vue?vue&type=style&index=0&lang=scss& */ 37);
/* harmony import */ var _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Google_Google_Download_Compressed_HBuilderX_3_1_8_20210406_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_singlePlayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 37:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Worklist/Hbuilder/UniappTry2/dice_game_final(2)/subpkg/singlePlayer/singlePlayer.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[30,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/subpkg/singlePlayer/singlePlayer.js.map