(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UserDashboard/AddProduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserDashboard/AddProduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/user */ \"./src/services/user.js\");\n/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/product */ \"./src/services/product.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {},\n  name: \"AddProduct\",\n  data: function data() {\n    return {\n      tempdetail: \"\",\n      product: {\n        productBrand: \"\",\n        productName: \"\",\n        price: 0,\n        size: \"\",\n        imageUrl: \"\",\n        productDetails: []\n      },\n      userId: \"\",\n      storeId: \"\"\n    };\n  },\n  methods: {\n    AddDetailToArray: function AddDetailToArray() {\n      console.log(this.tempdetail);\n      this.product.productDetails.push(this.tempdetail);\n      this.tempdetail = \"\";\n    },\n    deleteDetail: function deleteDetail(index) {\n      this.product.productDetails.splice(index, 1);\n    },\n    createProduct: function createProduct() {\n      var _this = this;\n\n      Object(_services_product__WEBPACK_IMPORTED_MODULE_2__[\"createProduct\"])(this.storeId, this.product).then(function (data) {\n        _this.product.productBrand = \"\", _this.product.productName = \"\", _this.product.price = 0, _this.product.size = \"\", _this.product.imageUrl = \"\", _this.product.productDetails = [];\n        _this.tempdetail = \"\";\n        console.log(data);\n\n        _this.$store.commit(\"setProductId\", data.product._id);\n\n        _this.$router.push({\n          name: \"ProductForm\"\n        });\n\n        console.log(data);\n      });\n    }\n  },\n  created: function created() {\n    var _this2 = this;\n\n    Object(_services_user__WEBPACK_IMPORTED_MODULE_1__[\"showMe\"])().then(function (data) {\n      _this2.userId = data.user.userId;\n      Object(_services_user__WEBPACK_IMPORTED_MODULE_1__[\"getSingleUser\"])(_this2.userId).then(function (data) {\n        _this2.storeId = data.user.storeId;\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/UserDashboard/AddProduct.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2b09f2e7-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UserDashboard/AddProduct.vue?vue&type=template&id=298f33b8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b09f2e7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserDashboard/AddProduct.vue?vue&type=template&id=298f33b8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"form-design\" }, [\n      _c(\"div\", { staticClass: \"form-container\" }, [\n        _c(\"div\", { staticClass: \"store-name\" }, [_vm._v(\"E-Stores Online\")]),\n        _c(\n          \"div\",\n          { staticClass: \"form-heading\", staticStyle: { margin: \"20px 10px\" } },\n          [_vm._v(\"Add Your Product\")]\n        ),\n        _c(\"div\", [\n          _c(\n            \"form\",\n            {\n              on: {\n                submit: function($event) {\n                  $event.preventDefault()\n                  return _vm.createProduct.apply(null, arguments)\n                }\n              }\n            },\n            [\n              _c(\"div\", { staticClass: \"name-category\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"div1\", staticStyle: { margin: \"0 10px\" } },\n                  [\n                    _c(\"label\", { attrs: { for: \"text\" } }, [\n                      _vm._v(\"Product Name\")\n                    ]),\n                    _c(\"input\", {\n                      directives: [\n                        {\n                          name: \"model\",\n                          rawName: \"v-model\",\n                          value: _vm.product.productName,\n                          expression: \"product.productName\"\n                        }\n                      ],\n                      staticClass: \"input-style\",\n                      attrs: { type: \"text\", placeholder: \"Product Name\" },\n                      domProps: { value: _vm.product.productName },\n                      on: {\n                        input: function($event) {\n                          if ($event.target.composing) {\n                            return\n                          }\n                          _vm.$set(\n                            _vm.product,\n                            \"productName\",\n                            $event.target.value\n                          )\n                        }\n                      }\n                    })\n                  ]\n                ),\n                _c(\n                  \"div\",\n                  { staticClass: \"div2\", staticStyle: { margin: \"0 10px\" } },\n                  [\n                    _c(\"label\", { attrs: { for: \"text\" } }, [\n                      _vm._v(\"Product Brand\")\n                    ]),\n                    _c(\"input\", {\n                      directives: [\n                        {\n                          name: \"model\",\n                          rawName: \"v-model\",\n                          value: _vm.product.productBrand,\n                          expression: \"product.productBrand\"\n                        }\n                      ],\n                      staticClass: \"input-style\",\n                      attrs: { type: \"text\", placeholder: \"Product Brand\" },\n                      domProps: { value: _vm.product.productBrand },\n                      on: {\n                        input: function($event) {\n                          if ($event.target.composing) {\n                            return\n                          }\n                          _vm.$set(\n                            _vm.product,\n                            \"productBrand\",\n                            $event.target.value\n                          )\n                        }\n                      }\n                    })\n                  ]\n                )\n              ]),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"street-address\",\n                  staticStyle: { margin: \"0 10px\" }\n                },\n                [\n                  _c(\"div\", { staticClass: \"city-state\" }, [\n                    _c(\"div\", [\n                      _c(\"label\", { attrs: { for: \"text\" } }, [\n                        _vm._v(\"Price\")\n                      ]),\n                      _c(\"input\", {\n                        directives: [\n                          {\n                            name: \"model\",\n                            rawName: \"v-model\",\n                            value: _vm.product.price,\n                            expression: \"product.price\"\n                          }\n                        ],\n                        staticClass: \"input-style\",\n                        attrs: { type: \"text\", placeholder: \"Price\" },\n                        domProps: { value: _vm.product.price },\n                        on: {\n                          input: function($event) {\n                            if ($event.target.composing) {\n                              return\n                            }\n                            _vm.$set(_vm.product, \"price\", $event.target.value)\n                          }\n                        }\n                      })\n                    ]),\n                    _c(\"div\", [\n                      _c(\"label\", { attrs: { for: \"text\" } }, [_vm._v(\"Size\")]),\n                      _c(\"input\", {\n                        directives: [\n                          {\n                            name: \"model\",\n                            rawName: \"v-model\",\n                            value: _vm.product.size,\n                            expression: \"product.size\"\n                          }\n                        ],\n                        staticClass: \"input-style\",\n                        attrs: { type: \"text\", placeholder: \"Size\" },\n                        domProps: { value: _vm.product.size },\n                        on: {\n                          input: function($event) {\n                            if ($event.target.composing) {\n                              return\n                            }\n                            _vm.$set(_vm.product, \"size\", $event.target.value)\n                          }\n                        }\n                      })\n                    ])\n                  ]),\n                  _c(\n                    \"form\",\n                    {\n                      staticClass: \"product-detail\",\n                      on: {\n                        submit: function($event) {\n                          $event.preventDefault()\n                          return _vm.AddDetailToArray.apply(null, arguments)\n                        }\n                      }\n                    },\n                    [\n                      _c(\"div\", [\n                        _c(\"label\", { attrs: { for: \"text\" } }, [\n                          _vm._v(\"Product Detail\")\n                        ]),\n                        _c(\"input\", {\n                          directives: [\n                            {\n                              name: \"model\",\n                              rawName: \"v-model\",\n                              value: _vm.tempdetail,\n                              expression: \"tempdetail\"\n                            }\n                          ],\n                          staticClass: \"input-style\",\n                          attrs: {\n                            type: \"text\",\n                            placeholder: \"Add Detail\",\n                            required: \"\"\n                          },\n                          domProps: { value: _vm.tempdetail },\n                          on: {\n                            input: function($event) {\n                              if ($event.target.composing) {\n                                return\n                              }\n                              _vm.tempdetail = $event.target.value\n                            }\n                          }\n                        })\n                      ]),\n                      _vm._m(0)\n                    ]\n                  ),\n                  _c(\n                    \"div\",\n                    { staticClass: \"show-details\" },\n                    _vm._l(_vm.product.productDetails, function(detail, index) {\n                      return _c(\n                        \"div\",\n                        { key: index, staticClass: \"show-detail-div\" },\n                        [\n                          _vm._v(\" \" + _vm._s(detail) + \" \"),\n                          _c(\"b-icon\", {\n                            staticStyle: { cursor: \"pointer\" },\n                            attrs: {\n                              icon: \"trash-fill\",\n                              scale: \"1\",\n                              variant: \"info\",\n                              \"shift-h\": \"2\"\n                            },\n                            on: {\n                              click: function($event) {\n                                return _vm.deleteDetail(index)\n                              }\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    }),\n                    0\n                  ),\n                  _c(\"br\"),\n                  _vm._m(1)\n                ]\n              )\n            ]\n          ),\n          _c(\"div\", { staticStyle: { margin: \"20px 10px 0 10px\" } }, [\n            _vm._v(\"Note: Please upload product image in the next page\")\n          ])\n        ])\n      ]),\n      _vm._m(2)\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", [\n      _c(\"input\", {\n        staticClass: \"addbutton\",\n        attrs: { type: \"submit\", value: \"Add\" }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", [\n      _c(\"input\", {\n        staticClass: \"submit\",\n        attrs: { type: \"submit\", value: \"Add Now\" }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"company-logo\" }, [\n      _c(\"img\", {\n        staticStyle: { width: \"200px\", height: \"200px\" },\n        attrs: {\n          src:\n            \"https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/application/pictures/free-logo/original/v6YLFKFeJ-Fynd.jpeg\"\n        }\n      })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/UserDashboard/AddProduct.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%222b09f2e7-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/UserDashboard/AddProduct.vue":
/*!*****************************************************!*\
  !*** ./src/components/UserDashboard/AddProduct.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AddProduct_vue_vue_type_template_id_298f33b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=template&id=298f33b8&scoped=true& */ \"./src/components/UserDashboard/AddProduct.vue?vue&type=template&id=298f33b8&scoped=true&\");\n/* harmony import */ var _AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=script&lang=js& */ \"./src/components/UserDashboard/AddProduct.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AddProduct_vue_vue_type_template_id_298f33b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AddProduct_vue_vue_type_template_id_298f33b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"298f33b8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/UserDashboard/AddProduct.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/UserDashboard/AddProduct.vue?");

/***/ }),

/***/ "./src/components/UserDashboard/AddProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/components/UserDashboard/AddProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddProduct.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UserDashboard/AddProduct.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/UserDashboard/AddProduct.vue?");

/***/ }),

/***/ "./src/components/UserDashboard/AddProduct.vue?vue&type=template&id=298f33b8&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/UserDashboard/AddProduct.vue?vue&type=template&id=298f33b8&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b09f2e7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_298f33b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2b09f2e7-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddProduct.vue?vue&type=template&id=298f33b8&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"2b09f2e7-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UserDashboard/AddProduct.vue?vue&type=template&id=298f33b8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b09f2e7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_298f33b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b09f2e7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_298f33b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/UserDashboard/AddProduct.vue?");

/***/ }),

/***/ "./src/services/user.js":
/*!******************************!*\
  !*** ./src/services/user.js ***!
  \******************************/
/*! exports provided: showMe, modifyUser, getSingleUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMe\", function() { return showMe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modifyUser\", function() { return modifyUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSingleUser\", function() { return getSingleUser; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\n\n\nfunction showMe() {\n  var loader = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$loading.show({\n    loader: 'dots'\n  });\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/v1/users/showMe\", {\n    withCredentials: true\n  }, {\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    loader.hide();\n    return res.data;\n  }).catch(function (error) {\n    loader.hide();\n    vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$toast.open({\n      message: \"Failed to fetch data\",\n      duration: 3000,\n      type: 'error'\n    });\n    return error;\n  });\n}\n\nfunction getSingleUser(userId) {\n  var loader = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$loading.show({\n    loader: 'dots'\n  });\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/v1/users/\".concat(userId), {\n    withCredentials: true\n  }, {\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    loader.hide();\n    return res.data;\n  }).catch(function (error) {\n    loader.hide();\n    vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$toast.open({\n      message: \"Failed to fetch data of user\",\n      duration: 3000,\n      type: 'error'\n    });\n    return error;\n  });\n}\n\nfunction modifyUser(userId, form) {\n  var loader = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$loading.show({\n    loader: 'dots'\n  });\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(\"/api/v1/users/updateUser/\".concat(userId), form, {\n    withCredentials: true\n  }, {\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    loader.hide();\n    vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$toast.open({\n      message: \"User modified successfully\",\n      duration: 3000,\n      type: 'success'\n    });\n    return res.data;\n  }).catch(function (error) {\n    loader.hide();\n    vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$toast.open({\n      message: \"Failed to fetch data\",\n      duration: 3000,\n      type: 'error'\n    });\n    return error;\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/services/user.js?");

/***/ })

}]);