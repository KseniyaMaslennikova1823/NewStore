/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/header.png */ \"./src/img/header.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/header2.jpg */ \"./src/img/header2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/header3.jpg */ \"./src/img/header3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/video/video-image.png */ \"./src/img/video/video-image.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/down.svg */ \"./src/img/down.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/up.svg */ \"./src/img/up.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Italiana&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\n  scroll-behavior: smooth;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: #F6F6F6;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.header_phoneLogo {\n  position: absolute;\n  left: 0;\n  display: none;\n}\n.header_nav {\n  width: 100%;\n  display: flex;\n  padding-top: 35px;\n  justify-content: center;\n  align-items: end;\n  position: absolute;\n  z-index: 2;\n}\n.header_nav_lk {\n  margin: 0 3%;\n  color: rgb(21, 20, 18);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 23px;\n  letter-spacing: 0%;\n  text-decoration: none;\n}\n.header_nav_lk:hover {\n  text-decoration: underline;\n}\n.header_nav_logo {\n  margin: 0 7%;\n}\n.header_nav_menu {\n  cursor: pointer;\n  color: rgb(21, 20, 18);\n  font-family: Mulish;\n  font-size: 35px;\n  font-weight: 600;\n  line-height: 23px;\n  text-align: right;\n  padding-right: 15px;\n  position: absolute;\n  right: 0;\n  display: none;\n}\n.header_slider {\n  width: 150px;\n  position: relative;\n  margin: 0 auto;\n  margin-top: -100px;\n  margin-bottom: 62px;\n}\n.header_slider_btn {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: none;\n  background-color: #EFEFEF;\n}\n.header_slider_btn:not(:last-child) {\n  margin-right: 26px;\n}\n.header_slider_btn._active {\n  background-color: #151412;\n}\n\n.headerSliders {\n  height: 1070px;\n  overflow-x: scroll;\n  display: flex;\n}\n.headerSliders_slide {\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.headerSliders_slide:nth-child(1) {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position: 50% 50%;\n  background-size: cover;\n}\n.headerSliders_slide:nth-child(2) {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-position: 50% 50%;\n  background-size: cover;\n}\n.headerSliders_slide:nth-child(3) {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-position: 30% 50%;\n  background-size: cover;\n}\n.headerSliders_slide_content {\n  width: 630px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 478px;\n}\n.headerSliders_slide_content_title {\n  font-family: Italiana;\n  font-size: 72px;\n  font-weight: 400;\n}\n.headerSliders_slide_content_text {\n  color: rgb(54, 51, 47);\n  font-family: Mulish;\n  font-size: 22px;\n  font-weight: 300;\n  margin-top: 6px;\n}\n.headerSliders_slide_content_lk {\n  color: black;\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 800;\n  margin-top: 30px;\n  text-decoration: underline;\n}\n.headerSliders::-webkit-scrollbar {\n  display: none;\n}\n\n.section1 {\n  display: flex;\n  flex-direction: column;\n  width: 47%;\n  margin: 200px auto;\n}\n.section1_about {\n  color: rgb(153, 153, 153);\n  font-family: Mulish;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.section1_title {\n  margin-top: 15px;\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 42px;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n.section1_text {\n  margin-top: 17px;\n  color: rgb(54, 51, 47);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n.product {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.product_up {\n  display: flex;\n  flex-direction: row;\n  width: 70%;\n  height: 73px;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n.product_up_title {\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 42px;\n  font-weight: 400;\n}\n.product_up_slider {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.product_up_slider_a {\n  height: 28px;\n  color: rgb(21, 20, 18);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 500;\n  margin-right: 40px;\n  text-decoration: underline;\n}\n.product_up_slider_btn {\n  cursor: pointer;\n  width: 73px;\n  height: 73px;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n}\n.product_up_slider_btn:nth-child(2) {\n  margin-right: 15px;\n}\n.product_up_slider_btn_svg {\n  stroke: #ACACAC;\n  fill: none;\n}\n.product_up_slider_btn_svg:hover {\n  stroke: black;\n}\n.product_down {\n  display: none;\n  border: 1px solid black;\n  flex-direction: row;\n  justify-content: space-between;\n  width: device;\n  margin-top: 30px;\n}\n.product_down_item {\n  width: 368px;\n  height: 619px;\n}\n.product_down_item_img {\n  transition: 1s;\n}\n.product_down_item_img:hover {\n  transform: scale(1.2);\n}\n.product_down_item_title {\n  color: rgb(54, 51, 47);\n  font-family: Mulish;\n  font-size: 20px;\n  font-weight: 800;\n  text-decoration: none;\n  margin-top: 5px;\n}\n.product_down_item_title:hover {\n  text-decoration: underline;\n}\n.product_down_item_price {\n  color: rgb(135, 130, 110);\n  font-family: Mulish;\n  font-size: 20px;\n  font-weight: 300;\n}\n.product_slider {\n  height: 620px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: device;\n  margin-top: 30px;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.product_slider_item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 368px;\n  height: 619px;\n}\n\n.feedback {\n  margin: 200px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  width: 40%;\n}\n.feedback_title {\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 42px;\n  font-weight: 400;\n  text-transform: capitalize;\n  width: 100%;\n  text-align: center;\n}\n.feedback_content {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow-x: scroll;\n}\n.feedback_content::-webkit-scrollbar {\n  display: none;\n}\n.feedback_content_review {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n}\n.feedback_content_review:nth-child(1) {\n  margin-left: -20px;\n}\n.feedback_content_review:nth-child(2) {\n  margin-left: 20px;\n}\n.feedback_content_review:nth-child(3) {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.feedback_content_review_text {\n  color: rgb(54, 51, 47);\n  font-family: Mulish;\n  font-size: 28px;\n  font-weight: 300;\n  text-align: center;\n  margin-top: 40px;\n}\n.feedback_content_review_autor {\n  color: rgb(21, 20, 18);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-top: 22px;\n  text-align: center;\n}\n.feedback_slider {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 50px;\n}\n.feedback_slider_btn {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n}\n.feedback_slider_btn_svg {\n  stroke: #ACACAC;\n  fill: none;\n}\n.feedback_slider_btn_svg:hover {\n  stroke: black;\n}\n.feedback_slider_line {\n  height: 30px;\n  border-left: 1px solid rgb(203, 203, 203);\n}\n\n.video {\n  height: 825px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-position: 50% 50%;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n}\n.video_play {\n  width: 248px;\n  margin: 0 auto;\n  position: relative;\n}\n.video_play:nth-child(2) {\n  width: 40px;\n}\n.video_play_text {\n  margin: 300px 0;\n  position: absolute;\n  animation-name: around;\n  animation-timing-function: linear;\n  animation-delay: 0s;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n  animation-fill-mode: none;\n  animation-duration: 15s;\n}\n@keyframes around {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.video_play_btn {\n  margin: 400px 0;\n  position: absolute;\n}\n\n.faq {\n  margin: 200px auto;\n  width: 860px;\n}\n.faq_text {\n  border-top: 1px solid rgb(217, 217, 217);\n}\n.faq_text:nth-child(5) {\n  border-bottom: 1px solid rgb(217, 217, 217);\n}\n.faq_title {\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 42px;\n  font-weight: 400;\n  text-align: center;\n}\n.faq_question {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.faq_question_title {\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 28px;\n  font-weight: 400;\n  padding: 16px 0;\n}\n.faq_answer {\n  color: rgb(54, 51, 47);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 300;\n  padding-bottom: 16px;\n}\n.faq details > summary {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n}\n.faq summary::after {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n}\n.faq details[open] summary:after {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n}\n\n.collection {\n  height: 888px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.collection_item1 {\n  height: 888px;\n}\n.collection_banners {\n  width: 49.5%;\n  overflow: hidden;\n}\n.collection_banners_item {\n  background-position: 50% 50%;\n  background-size: cover;\n  overflow: hidden;\n}\n.collection_banners_item:only-child {\n  transition: 1s;\n}\n.collection_banners_item:only-child:hover {\n  transform: scale(1.2);\n}\n.collection_banners_item_text1 {\n  margin-left: 10%;\n  margin-top: 615px;\n}\n.collection_banners_item_text2 {\n  margin-left: 10%;\n  margin-top: 211px;\n}\n.collection_banners_item_title {\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 72px;\n  font-weight: 400;\n}\n.collection_banners_item_lk {\n  color: rgb(21, 20, 18);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 800;\n  border-bottom: 2px solid black;\n  text-decoration: none;\n}\n.collection .rows {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.collection .rows_item {\n  height: 434px;\n}\n.collection .rows_size {\n  height: 434px;\n  overflow: hidden;\n}\n\n.footer {\n  width: 70%;\n  height: 381px;\n  margin: 200px auto 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.footer_left {\n  width: 47%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.footer_right {\n  width: 47%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.footer_top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.footer_top_logo {\n  width: 310px;\n  margin-right: 10px;\n}\n.footer_top_logo_lk {\n  text-decoration: none;\n}\n.footer_top_logo_lk img {\n  transition: 1s;\n}\n.footer_top_logo_lk img:hover {\n  transform: scale(1.2);\n}\n.footer_top_logo_text {\n  color: rgb(54, 51, 47);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 300;\n}\n.footer_top_links_title {\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 33px;\n  letter-spacing: 2%;\n  text-align: left;\n  text-transform: capitalize;\n}\n.footer_top_links_lk {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-top: 14px;\n}\n.footer_top_links_lk a {\n  color: rgb(21, 20, 18);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.footer_top_links_lk a:hover {\n  text-decoration: underline;\n}\n.footer_top_contact {\n  margin-right: 20px;\n}\n.footer_top_contact_title {\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 28px;\n  font-weight: 400;\n}\n.footer_top_contact_info {\n  height: 97px;\n  margin-top: 20px;\n  color: rgb(21, 20, 18);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.footer_top_contact_info a {\n  color: #000000;\n  text-decoration: none;\n}\n.footer_top_contact_info a:hover {\n  text-decoration: underline;\n}\n.footer_top_info {\n  width: 280px;\n  height: 149px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.footer_top_info_title {\n  color: rgb(21, 20, 18);\n  font-family: Italiana;\n  font-size: 28px;\n  font-weight: 400;\n}\n.footer_top_info_text {\n  color: rgb(54, 51, 47);\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 300;\n}\n.footer_top_info_social {\n  width: 150px;\n  height: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: end;\n}\n.footer_top_info_social a {\n  text-decoration: none;\n}\n.footer_top_info_social_svg {\n  fill: #ACACAC;\n}\n.footer_top_info_social_svg:hover {\n  fill: black;\n}\n.footer_bottom {\n  border-top: 1px solid rgb(217, 217, 217);\n  height: 70px;\n  font-family: Mulish;\n  font-size: 18px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 1510px) {\n  .product_slider {\n    justify-content: space-around;\n  }\n  .footer {\n    width: 95%;\n  }\n  .footer_top_logo {\n    width: 290px;\n  }\n  .footer_top_info {\n    width: 250px;\n  }\n}\n@media (max-width: 1140px) {\n  .feedback {\n    width: 70%;\n  }\n}\n@media (max-width: 1024px) {\n  .header {\n    background-position: 40% 50%;\n  }\n  .header_nav {\n    padding-top: 0px;\n    justify-content: space-around;\n    align-items: center;\n  }\n  .header_nav_lk {\n    margin: 0 0%;\n  }\n  .header_nav_logo {\n    margin: 0 0%;\n  }\n  .section1 {\n    width: 65%;\n  }\n  .product {\n    height: 722px;\n  }\n  .product_up {\n    width: 95%;\n  }\n  .faq {\n    width: 90%;\n  }\n  .collection {\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .collection_banners {\n    width: 100%;\n  }\n  .collection_banners_item {\n    height: 1024px;\n    background-position: left top;\n  }\n  .collection_banners_item_text1 {\n    margin-left: 10%;\n    margin-top: 660px;\n  }\n  .collection_banners_item_text2 {\n    margin-left: 10%;\n    margin-top: 660px;\n  }\n  .collection .rows {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 2065px;\n  }\n  .collection .rows_item {\n    height: 1024px;\n  }\n  .collection .rows_size {\n    height: auto;\n  }\n  .footer {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .footer_left {\n    width: 100%;\n  }\n  .footer_right {\n    width: 100%;\n    margin-top: 35px;\n  }\n  .footer_top {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .footer_top_links {\n    width: 40%;\n    margin-left: 15px;\n  }\n  .footer_top_contact {\n    margin-right: 10px;\n  }\n  .footer_top_info {\n    width: 40%;\n  }\n  .footer_bottom {\n    margin-top: 100px;\n  }\n}\n@media (max-width: 750px) {\n  .headerSliders_slide_content {\n    width: 70%;\n  }\n  .product {\n    height: 790px;\n  }\n  .product_up {\n    flex-direction: column;\n    width: 95%;\n    height: auto;\n    align-items: flex-start;\n    padding-left: 15px;\n  }\n  .product_up_slider {\n    margin-top: 10px;\n  }\n  .feedback {\n    width: 80%;\n  }\n  .feedback_content {\n    width: 80%;\n    margin-left: 5%;\n  }\n  .feedback_content_review {\n    width: 100%;\n  }\n  .collection {\n    height: auto;\n  }\n  .collection_banners {\n    width: 100%;\n  }\n  .collection_banners_item {\n    height: 750px;\n  }\n  .collection_banners_item_text1 {\n    margin-top: 450px;\n  }\n  .collection_banners_item_text2 {\n    margin-top: 450px;\n  }\n  .collection .rows {\n    height: 1510px;\n  }\n  .collection .rows_item {\n    height: 750px;\n  }\n  .collection .rows_size {\n    height: auto;\n  }\n}\n@media (max-width: 600px) {\n  .feedback {\n    width: 90%;\n  }\n  .feedback_content {\n    max-width: 90%;\n    margin-left: 5%;\n  }\n  .feedback_content_review {\n    width: 100%;\n  }\n}\n@media (max-width: 500px) {\n  .header_phoneLogo {\n    display: block;\n    left: 15px;\n    z-index: 100;\n  }\n  .header_nav {\n    flex-direction: column;\n    position: absolute;\n    right: 0;\n    top: -385px;\n    width: 60%;\n    background-color: #ACACAC;\n    align-items: flex-start;\n    transition: 0.5s;\n    transform: translateY(0);\n  }\n  .header_nav_lk {\n    padding-top: 20px;\n    padding-left: 25px;\n  }\n  .header_nav_lk:nth-child(1) {\n    margin-top: 85px;\n  }\n  .header_nav_lk:nth-child(7) {\n    margin-bottom: 35px;\n  }\n  .header_nav_logo {\n    display: none;\n  }\n  .header_nav_menu {\n    display: block;\n    z-index: 10;\n    border: none;\n    top: 14px;\n    background-color: transparent;\n  }\n  .header_nav.open {\n    transition: 0.5s;\n    transform: translateY(385px);\n  }\n  .header_content {\n    width: 90%;\n    margin-top: 487px;\n  }\n  .section1 {\n    width: 95%;\n    padding-left: 15px;\n  }\n  .feedback {\n    width: 99%;\n  }\n  .feedback_content {\n    width: 70%;\n    margin: 0 auto;\n  }\n  .feedback_content_review {\n    width: 100%;\n  }\n  .feedback_content_review_text {\n    font-size: 22px;\n    font-weight: 250;\n  }\n  .collection {\n    height: auto;\n  }\n  .collection_banners {\n    width: 100%;\n  }\n  .collection_banners_item {\n    height: 500px;\n  }\n  .collection_banners_item_text1 {\n    margin-top: 250px;\n  }\n  .collection_banners_item_text2 {\n    margin-top: 250px;\n  }\n  .collection .rows {\n    height: 1010px;\n  }\n  .collection .rows_item {\n    height: 500px;\n  }\n  .collection .rows_size {\n    height: auto;\n  }\n  .footer {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .footer_left {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .footer_right {\n    width: 100%;\n    margin-top: 35px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .footer_top {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .footer_top_logo {\n    width: 100%;\n    margin-right: 0;\n  }\n  .footer_top_links {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 35px;\n  }\n  .footer_top_contact {\n    width: 100%;\n    margin-right: 0;\n  }\n  .footer_top_info {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 35px;\n  }\n}\n@media (max-width: 390px) {\n  .product_down_item {\n    width: 80%;\n  }\n  .product_down_item img {\n    width: 100%;\n  }\n  .feedback_content {\n    width: 90%;\n  }\n  .feedback_content_review {\n    width: 100%;\n  }\n  .feedback_content_review_text {\n    font-size: 18px;\n    font-weight: 150;\n  }\n  .collection {\n    height: auto;\n  }\n  .collection_banners {\n    width: 100%;\n  }\n  .collection_banners_item {\n    height: 390px;\n    background-position: left top;\n  }\n  .collection_banners_item_text1 {\n    margin-top: 100px;\n  }\n  .collection_banners_item_text2 {\n    margin-top: 130px;\n  }\n  .collection_banners_item_title {\n    font-size: 55px;\n    font-weight: 550;\n  }\n  .collection .rows {\n    height: 790px;\n  }\n  .collection .rows_item {\n    height: 390px;\n  }\n  .collection .rows_size {\n    height: auto;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://store/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://store/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://store/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://store/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://store/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://store/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://store/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://store/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://store/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://store/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://store/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/feedback.js":
/*!****************************!*\
  !*** ./src/js/feedback.js ***!
  \****************************/
/***/ (() => {

eval("    let reviewScroll = document.querySelector(\".feedback_content\");\r\n    let prev = document.getElementById(\"prevBtn\");\r\n    let next = document.getElementById(\"nextBtn\");\r\n\r\n    next.addEventListener(\"click\",  ()=> {\r\n        reviewScroll.style.scrollBehavior = \"smooth\";\r\n        reviewScroll.scrollLeft += 810;\r\n    });\r\n    prev.addEventListener(\"click\",  ()=> {\r\n        reviewScroll.style.scrollBehavior = \"smooth\";\r\n        reviewScroll.scrollLeft -= 810;\r\n    });\r\n    \r\n    window.addEventListener(\"resize\", ()=> {\r\n        let reviewWidth = reviewScroll.offsetWidth;\r\n        let reviewMargin = reviewWidth - 21;\r\n\r\n        next.addEventListener(\"click\",  ()=> {\r\n            reviewScroll.style.scrollBehavior = \"smooth\";\r\n            reviewScroll.scrollLeft += reviewMargin;\r\n        });\r\n        prev.addEventListener(\"click\",  ()=> {\r\n            reviewScroll.style.scrollBehavior = \"smooth\";\r\n            reviewScroll.scrollLeft -= reviewMargin;\r\n        });\r\n    });\r\n\r\n\n\n//# sourceURL=webpack://store/./src/js/feedback.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (() => {

eval("const sliderItem = document.querySelectorAll(\".headerSliders_slide\");\r\nconst sliderLine = document.querySelector(\".headerSliders\");\r\nconst sliderDots = document.querySelectorAll(\".header_slider_btn\")\r\n\r\nlet sliderCount = 0;\r\nlet sliderWidth;\r\n\r\nwindow.addEventListener(\"resize\", showSlide);\r\n\r\nfunction showSlide() {\r\n    sliderWidth = document.querySelector(\".headerSliders\").offsetWidth;\r\n    sliderLine.style.width = sliderWidth * sliderItem.lenght + \"px\";\r\n    sliderItem.forEach(item => item.style.width = sliderWidth + \"px\");\r\n\r\n    rollSlider();\r\n}\r\nshowSlide();\r\n\r\nfunction nextSlide() {\r\n    sliderCount ++;\r\n    if (sliderCount >= sliderItem.length) sliderCount = 0;\r\n\r\n    rollSlider();\r\n    thisSlide(sliderCount);\r\n}\r\nfunction prevSlide() {\r\n    sliderCount --;\r\n    if (sliderCount < 0) sliderCount = sliderItem.length -1;\r\n\r\n    rollSlider();\r\n    thisSlide(sliderCount);\r\n}\r\n\r\nfunction rollSlider() {\r\n    sliderItem.forEach(item => {\r\n        item.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;\r\n    });\r\n}\r\n\r\nfunction thisSlide(index) {\r\n    sliderDots.forEach(item => item.classList.remove(\"_active\"));\r\n    sliderDots[index].classList.add(\"_active\");\r\n}\r\n\r\nsliderDots.forEach((dot, index) => {\r\n    dot.addEventListener(\"click\", () => {\r\n        sliderCount = index;\r\n        rollSlider();\r\n        thisSlide(sliderCount);\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://store/./src/js/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/js/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ \"./src/js/header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.js */ \"./src/js/product.js\");\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_product_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback.js */ \"./src/js/feedback.js\");\n/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_feedback_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://store/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function(){\r\n    document.getElementById(\"menuBtn\").addEventListener(\"click\", function(){\r\n        document.querySelector(\".header_nav\").classList.toggle(\"open\")\r\n    })\r\n})\n\n//# sourceURL=webpack://store/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/product.js":
/*!***************************!*\
  !*** ./src/js/product.js ***!
  \***************************/
/***/ (() => {

eval("// Блоки для слайдера\r\nlet item1 = document.getElementById(\"item1\");\r\nlet item2 = document.getElementById(\"item2\");\r\nlet item3 = document.getElementById(\"item3\");\r\nlet item4 = document.getElementById(\"item4\");\r\nlet item5 = document.getElementById(\"item5\");\r\nlet item6 = document.getElementById(\"item6\");\r\n\r\n// Продукты для слайдера\r\nlet product1 = document.getElementById(\"1\");\r\nlet product2 = document.getElementById(\"2\");\r\nlet product3 = document.getElementById(\"3\");\r\nlet product4 = document.getElementById(\"4\");\r\nlet product5 = document.getElementById(\"5\");\r\nlet product6 = document.getElementById(\"6\");\r\n\r\n// Нвавигация\r\nlet prev = document.getElementById(\"prevProduct\");\r\nlet next = document.getElementById(\"nextProduct\");\r\n\r\n//Размещаем слайды с продукцией\r\nitem1.innerHTML = product1.innerHTML;\r\nitem2.innerHTML = product2.innerHTML;\r\nitem3.innerHTML = product3.innerHTML;\r\nitem4.innerHTML = product4.innerHTML;\r\nitem5.innerHTML = product5.innerHTML;\r\nitem6.innerHTML = product6.innerHTML;\r\n\r\n// Счетчик слайдов\r\nlet count = 1;\r\n\r\nnext.addEventListener(\"click\", ()=> {\r\n    count ++;\r\n    //item1\r\n    if (count <= 6) {\r\n        \r\n        item1.innerHTML = document.getElementById(count).innerHTML;\r\n    } else {\r\n        item1.innerHTML = document.getElementById(count-6).innerHTML;\r\n        count = 1;\r\n    }\r\n    //item2 \r\n    if (count < 6) {\r\n        item2.innerHTML = document.getElementById(count+1).innerHTML;\r\n    } else {\r\n        item2.innerHTML = document.getElementById(count-5).innerHTML;\r\n        count = 0;\r\n    }\r\n    //item3\r\n    if (count < 5) {\r\n        item3.innerHTML = document.getElementById(count+2).innerHTML;\r\n    } else {\r\n        item3.innerHTML = document.getElementById(count-4).innerHTML;\r\n    }\r\n    //item4\r\n    if (count < 4) {\r\n        item4.innerHTML = document.getElementById(count+3).innerHTML;\r\n    } else {\r\n        item4.innerHTML = document.getElementById(count-3).innerHTML;    \r\n    }\r\n    //item5\r\n    if (count < 3) {\r\n        item5.innerHTML = document.getElementById(count+4).innerHTML;\r\n    } else {\r\n        item5.innerHTML = document.getElementById(count-2).innerHTML;    \r\n    }\r\n    //item\r\n    if (count < 2) {\r\n        item6.innerHTML = document.getElementById(count+5).innerHTML;\r\n    } else {\r\n        item6.innerHTML = document.getElementById(count-1).innerHTML;    \r\n    }\r\n    let items = document.getElementsByClassName(\"product_slider_item\");\r\n    for (elem of items) {\r\n        let oneElement = elem;\r\n        oneElement.style.opacity = 0.3;\r\n        setTimeout(() => {\r\n            const interval = setInterval(() => {\r\n                oneElement.style.opacity = parseFloat(oneElement.style.opacity) + 0.1;\r\n                if(oneElement.style.opacity > 1) {\r\n                    clearInterval(interval);\r\n                }\r\n            }, 50);\r\n        }, 100);\r\n    }\r\n});\r\n\r\nprev.addEventListener(\"click\", ()=> {\r\n    count --;\r\n    if (count <= 0) {\r\n        count = 6;\r\n    }\r\n    //item1\r\n    item1.innerHTML = document.getElementById(count).innerHTML;\r\n    //item2 \r\n    if (count < 6) {\r\n        item2.innerHTML = document.getElementById(count+1).innerHTML;\r\n    } else {\r\n        item2.innerHTML = document.getElementById(count-5).innerHTML;\r\n    }\r\n    //item3\r\n    if (count < 5) {\r\n        item3.innerHTML = document.getElementById(count+2).innerHTML;\r\n    } else {\r\n        item3.innerHTML = document.getElementById(count-4).innerHTML;\r\n    }\r\n    //item4\r\n    if (count < 4) {\r\n        item4.innerHTML = document.getElementById(count+3).innerHTML;\r\n    } else {\r\n        item4.innerHTML = document.getElementById(count-3).innerHTML;    \r\n    }\r\n    //item5\r\n    if (count < 3) {\r\n        item5.innerHTML = document.getElementById(count+4).innerHTML;\r\n    } else {\r\n        item5.innerHTML = document.getElementById(count-2).innerHTML;    \r\n    }\r\n    //item6\r\n    if (count < 2) {\r\n        item6.innerHTML = document.getElementById(count+5).innerHTML;\r\n    } else {\r\n        item6.innerHTML = document.getElementById(count-1).innerHTML;    \r\n    }\r\n    let items = document.getElementsByClassName(\"product_slider_item\");\r\n    for (elem of items) {\r\n        let oneElement = elem;\r\n        oneElement.style.opacity = 0.3;\r\n        setTimeout(() => {\r\n            const interval = setInterval(() => {\r\n                oneElement.style.opacity = parseFloat(oneElement.style.opacity) + 0.1;\r\n                if(oneElement.style.opacity > 1) {\r\n                    clearInterval(interval);\r\n                }\r\n            }, 50);\r\n        }, 100);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://store/./src/js/product.js?");

/***/ }),

/***/ "./src/img/down.svg":
/*!**************************!*\
  !*** ./src/img/down.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9b191f43eb87543a5611.svg\";\n\n//# sourceURL=webpack://store/./src/img/down.svg?");

/***/ }),

/***/ "./src/img/header.png":
/*!****************************!*\
  !*** ./src/img/header.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"77b25e68a615d88c3226.png\";\n\n//# sourceURL=webpack://store/./src/img/header.png?");

/***/ }),

/***/ "./src/img/header2.jpg":
/*!*****************************!*\
  !*** ./src/img/header2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7858959ece202c450b21.jpg\";\n\n//# sourceURL=webpack://store/./src/img/header2.jpg?");

/***/ }),

/***/ "./src/img/header3.jpg":
/*!*****************************!*\
  !*** ./src/img/header3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a9909450a9f4d1e03584.jpg\";\n\n//# sourceURL=webpack://store/./src/img/header3.jpg?");

/***/ }),

/***/ "./src/img/up.svg":
/*!************************!*\
  !*** ./src/img/up.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"454eb1bc216d91c0ab7c.svg\";\n\n//# sourceURL=webpack://store/./src/img/up.svg?");

/***/ }),

/***/ "./src/img/video/video-image.png":
/*!***************************************!*\
  !*** ./src/img/video/video-image.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ddc39bbce5ae9eb13492.png\";\n\n//# sourceURL=webpack://store/./src/img/video/video-image.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;