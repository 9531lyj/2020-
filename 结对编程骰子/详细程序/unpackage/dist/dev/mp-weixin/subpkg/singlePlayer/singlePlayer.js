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
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
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
      // 是否为我方行动
      myAction: true,
      // 是否可以摇骰子
      OPlay: true,
      // 我方骰子图片
      mySrc: '/static/img/dice_1.gif',
      // 记录我方棋盘点数
      myDice: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // 我方摇到的骰子数
      myPoint: 0,
      // 我方得分
      myScore: 0,
      // 记录对方棋盘点数
      yourDice: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // 对方摇到的骰子数
      yourPoint: 0,
      // 对方骰子图片
      yourSrc: '/static/img/dice_1.gif',
      // 对方得分
      yourScore: 0,
      mos_x: 50,
      mos_y: 50,
      isShow: false };

  },

  onLoad: function onLoad() {
    this.$refs.popup.open();
  },

  methods: {
    // 鼠标点击获取坐标
    move: function move(e) {var _this = this;
      // console.log(e)
      this.isShow = true;
      this.mos_x = e.touches[0].pageX;
      this.mos_y = e.touches[0].pageY;
      setTimeout(function () {
        _this.isShow = false;
      }, 250);
    },
    // 生成随机数
    rand: function rand(min, max) {
      if (min > max) {
        var mid = min;
        min = max;
        max = mid;
      }
      return parseInt(Math.random() * (max - min + 1) + min);
    },
    // 点击骰子
    diceClick: function diceClick(i) {var _this2 = this;
      // 如果可以点击,则根据传入数字判断哪个骰子转动,1是我方，2是对方
      // 根据 myAction 判断是否到我方行动回合了，否则提示未到行动回合
      // 如果不能点击则说明已经摇过骰子并未选择位置
      if (this.OPlay) {
        if (i == 1 && this.myAction) {
          // 将点击状态设为否，防止多次点击，等玩家选完位置再设为true
          this.OPlay = false;
          // 随机一个点数,并用myPoint记录,我方骰子gif随机切换为摇出点数的图片
          this.myPoint = this.rand(1, 6);
          // 切换 gif 图片时未重新播放
          // 原因：图片路径未发生变化，浏览器缓存了，不会重载播放图片
          // 解决方法：路径后面用?跟一个随机数或者时间戳
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
            title: '还没轮到你方行动',
            icon: 'none',
            duration: 1000 // 持续的时间
          });
        }
      } else {
        uni.showToast({
          title: '请先选定位置',
          icon: 'none',
          duration: 1000 // 持续的时间
        });
      }
    },
    // 点击棋盘
    getDice: function getDice(index, i) {
      // 摇过骰子且未选择位置才能点击选择位置
      // 同样需判断是否到我方行动回合
      if (!this.OPlay) {
        if (i == 1 && this.myAction) {
          // 判断该位置是否已经存在数据
          if (this.myDice[index] == 0) {
            this.OPlay = true;
            this.myDice[index] = this.myPoint;
            this.myAction = false;
            this.eliminate(index, 1);
            uni.showToast({
              title: '轮到电脑行动',
              icon: 'none',
              duration: 1000 // 持续的时间
            });
            if (this.myDice.indexOf(0) !== -1 && this.yourDice.indexOf(0) !== -1) {
              this.diceClick(2);
            }

          } else {
            uni.showToast({
              title: '不能选择该位置',
              icon: 'none',
              duration: 1000 // 持续的时间
            });
          }
        } else if (i == 2 && !this.myAction) {
          if (this.yourDice[index] == 0) {
            this.OPlay = true;
            this.yourDice[index] = this.yourPoint;
            this.myAction = true;
            this.eliminate(index, 2);
            uni.showToast({
              title: '轮到我方行动',
              icon: 'none',
              duration: 1000 // 持续的时间
            });
          } else {
            uni.showToast({
              title: '不能选择该位置',
              icon: 'none',
              duration: 1000 // 持续的时间
            });
          }
        } else {
          uni.showToast({
            title: '还没轮到你方行动',
            icon: 'none',
            duration: 1000 // 持续的时间
          });
        }
      } else {
        uni.showToast({
          title: '请先摇骰子',
          icon: 'none',
          duration: 1000 // 持续的时间
        });
      }
      // this.myImg[index] = "../../static/img/dice_static_" + this.myPoint + ".png"
    },
    // 消除规则
    eliminate: function eliminate(index, i) {
      // js除出来是浮点数,需用 parseInt取整数
      var x = parseInt(index / 3);
      if (i == 1) {
        // 遍历查找对方同一行是否存在相同数字,若存在则置0消除
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
      // 消除结束计算分数
      this.myScore = this.getScore(this.myDice);
      this.yourScore = this.getScore(this.yourDice);
      // 计算是否结束游戏
      this.winer(this.myDice);
      this.winer(this.yourDice);
    },
    // 分数结算
    getScore: function getScore(arr) {
      // 记录总分
      var count = 0;
      for (var i = 0; i < 3; i++) {
        // arr 为 __ob__: Observer 格式数据,需转码
        // 循环切割数组,分别计算每一行分数
        var newArr = JSON.parse(JSON.stringify(arr)).splice(i * 3, 3);
        // 获得各个数字出现次数的对象
        var pointCount = newArr.reduce(function (obj, point) {
          if (point in obj) {
            obj[point]++;
          } else {
            obj[point] = 1;
          }
          return obj;
        }, {});
        // 通过键值对来计算得分
        // key: 数字,需转为数字
        // value: 出现次数
        for (var point in pointCount) {
          count += parseInt(point) * Math.pow(pointCount[point], 2);
        }
      }
      return count;
    },
    // 胜负判断
    winer: function winer(arr) {
      // showModal 是微信小程序封装过的组件,this指向改变,需提前用变量存储才能使用
      var that = this;
      if (arr.indexOf(0) == '-1') {
        if (this.myScore > this.yourScore) {
          uni.showModal({
            title: '恭喜您获得胜利',
            success: function success(res) {
              if (res.confirm) {// 确定
                that.reset();
              } else {// 取消
                return;
              }
            } });

        } else if (this.myScore < this.yourScore) {
          uni.showModal({
            title: '很遗憾您输了',
            success: function success(res) {
              if (res.confirm) {// 确定
                that.reset();
              } else {// 取消
                return;
              }
            } });

        } else {
          uni.showModal({
            title: '棋逢对手,你们平局了',
            success: function success(res) {
              if (res.confirm) {// 确定
                that.reset();
              } else {// 取消
                return;
              }
            } });

        }
        // 重置游戏
        // this.reset()
      }
    },
    // 重置游戏
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
    // 选择先手
    julioCruz: function julioCruz(i) {
      if (i == 1) {
        this.myAction = true;
      } else {
        this.myAction = false,
        this.diceClick(2);
      }
      // 点击之后手动关闭遮罩层
      this.$refs.popup.close();
    },
    // 人机算法
    algorithm: function algorithm() {
      // 定义空数组记录每个位置的期望
      var score = [];
      // 深拷贝,否则记录的是原数组的地址,修改新数组原值也会改变
      var arr = JSON.stringify(this.yourDice);
      // 循环计算每个位置的分数期望
      for (var i = 0; i < this.yourDice.length; i++) {
        // 转回数组
        var newDice = JSON.parse(arr);
        if (parseInt(newDice[i]) == 0) {
          newDice[i] = this.yourPoint;
          // js除出来是浮点数,需用 parseInt取整数
          var x = parseInt(i / 3);
          // 拷贝我方棋盘
          var myArr = JSON.parse(JSON.stringify(this.myDice));
          // 消除棋子
          for (var a = 0; a < 3; a++) {
            if (newDice[i] == myArr[x * 3 + a]) {
              myArr[x * 3 + a] = 0;
            }
          }
          // 消除结束计算分数差
          var poor = this.getScore(newDice) - this.getScore(myArr);
          score[i] = poor;
        } else {
          // 不能点击的位置分数记为 -999 ,使其不加入选择
          score[i] = -999;
        }
      }
      var max = -999;
      // 获得最大期望
      max = Math.max.apply(Math, score);
      // 把所有相同期望存入数组
      var maxArr = [];
      for (var j = 0; j < score.length; j++) {
        if (score[j] == max) {
          maxArr.push(j);
        }
      }
      // 在该数组随机一个位置填入
      var rand = this.rand(0, maxArr.length - 1);
      var position = maxArr[rand];
      this.OPlay = true;
      this.yourDice[position] = this.yourPoint;
      this.myAction = true;
      this.eliminate(position, 2);
      uni.showToast({
        title: '轮到我方行动',
        icon: 'none',
        duration: 1000 // 持续的时间
      });
    } },


  computed: {
    // 计算特效盒子出现位置
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