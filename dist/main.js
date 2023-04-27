/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mukta&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Mukta', sans-serif;\n    background-color: black;\n    color: white;\n}\n\n#container {\n    display: grid;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    margin: 1rem 2rem;\n    padding: 2rem;\n    background-color: orange;\n    position: sticky;\n}\n\n.logo {\n    width: 200px;\n    border-radius: 60%;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    border: 2px solid black;\n    border-radius: 2rem;\n    padding: 2rem;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    background-color: grey;\n    color: white;\n}\n\n.projects:hover {\n    color: grey;\n    background-color: white;\n    cursor: alias;\n}\n\n.deadline-holder,\n.priority-holder {\n    display: flex;\n    gap: 6px;\n}\n\n.trash-icon {\n    width: 40px;\n}\n\n.trash-icon:hover {\n    background-color: red;\n}\n\n#project-holder {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    margin: 2rem;\n    gap: 2rem;\n}\n\n#project-creator-btn {\n    height: 190px;\n    font-size: 4rem;\n    border: 2px solid black;\n    border-radius: 2rem;\n    background-color: orange;\n    color: white;\n}\n\n#project-creator-btn:hover {\n    background-color: white;\n    color: orange;  \n    cursor: pointer; \n}\n\n#project-creator-btn:active {\n    background-color: hsl(48, 100%, 61%);\n    color: white;\n}\n\n.high {\n    color: red;\n}\n\n.low {\n    color: green;\n}\n\n.moderate {\n    color: yellow;\n}\n\n#form {\n    border: 2px solid black;\n    border-radius: 4rem;\n    padding: 2rem;\n    margin: 2rem;\n    background-color: orange;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    display: none;\n}\n\n#add_project {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 4rem;\n}\n\n#add_project label {\n    position: absolute;\n}\n\n#add_project input,\n#add_project select {\n    margin-left: 18rem;\n}\n\n.div1 {\n    display: flex;\n    gap: 2rem;\n    flex-direction: column;\n    align-items: center;\n}\n\n.submit-btn {\n    width: 300px;\n    height: 100px;\n    font-size: 4rem;\n    border: 2px solid black;\n    border-radius: 5rem;\n}\n\n.submit-btn:hover {\n    color: whitesmoke;\n    background-color: black;\n}\n\n.cancel {\n    background-color: orange;\n    color: red;\n    border: none;\n    width: 200px;\n    height: 50px;\n    font-size: 2rem;\n}\n\n.cancel:hover {\n    color: white;\n}\n\ninput,\nselect {\n    font-size: 3rem;\n}\n\nform button:active {\n    color: rgba(245, 245, 245, 0.65);\n    background-color: rgba(0, 0, 0, 0.347);\n}\n\n.project-head {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    background-color: orange;\n    padding: 2rem;\n}\n\n.project-name {\n    border: 2px solid black;\n    border-radius: 2rem;\n    padding: 1rem;\n    background-color: black;\n}\n\n.project-priority-holder {\n    display: flex;\n    gap: 1rem;\n}\n\n.project-back {\n    width: 50px;\n}\n\n.project-back:hover {\n    cursor: pointer;\n    opacity: 0.3;\n}\n.circle {\n    margin: 2rem;\n    width: 110rem;\n    height: 11rem;\n    background-color: orange;\n    position: relative;\n    border-radius: 4rem;\n}\n.circle::after {\n    content: \" \";\n    position: absolute;\n    display: block;\n    background-color: black;\n    height: 10px;\n    margin-top: -5px;\n    top: 50%;\n    left: 5px;\n    right: 5px;\n    z-index: 9;\n    cursor: pointer;\n}\n.circle::before {\n    content: \" \";\n    position: absolute;\n    display: block;\n    background-color: black;\n    width: 10px;\n    margin-left: -5px;\n    left: 50%;\n    top: 5px;\n    bottom: 5px;\n    z-index: 9;\n    cursor: pointer;\n}\n\n.circle:hover {\n    background-color: white;\n    cursor: pointer;\n}\n\n.body {\n    display: grid;\n}\n\n.todo-checkbox {\n    width: 90px;\n}\n\n.todo-hold {\n    border: 2px solid orange;\n    border-radius: 7rem;\n    margin: 1rem;\n    background-color: orange;\n    font-size: 2rem;\n    padding: 2rem;\n    text-align: center;\n}\n\n#todo-form-all {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n}\n\n#todo-form {\n    font-size: 3rem;\n}\n\n#todo-form-all label {\n    position: absolute;\n}\n\n#todo-form-all input,\n#todo-form-all textarea {\n    margin-left: 16rem;\n}\n\ntextarea {\n    font-size: 1rem;\n}\n\ntextarea,\ninput {\n    padding: 0.5rem;\n}\n\n#todo-title-input {\n    width: 58.8rem;\n}\n\n.divOne {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Mukta', sans-serif;\n    background-color: black;\n    color: white;\n}\n\n#container {\n    display: grid;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    margin: 1rem 2rem;\n    padding: 2rem;\n    background-color: orange;\n    position: sticky;\n}\n\n.logo {\n    width: 200px;\n    border-radius: 60%;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    border: 2px solid black;\n    border-radius: 2rem;\n    padding: 2rem;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    background-color: grey;\n    color: white;\n}\n\n.projects:hover {\n    color: grey;\n    background-color: white;\n    cursor: alias;\n}\n\n.deadline-holder,\n.priority-holder {\n    display: flex;\n    gap: 6px;\n}\n\n.trash-icon {\n    width: 40px;\n}\n\n.trash-icon:hover {\n    background-color: red;\n}\n\n#project-holder {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    margin: 2rem;\n    gap: 2rem;\n}\n\n#project-creator-btn {\n    height: 190px;\n    font-size: 4rem;\n    border: 2px solid black;\n    border-radius: 2rem;\n    background-color: orange;\n    color: white;\n}\n\n#project-creator-btn:hover {\n    background-color: white;\n    color: orange;  \n    cursor: pointer; \n}\n\n#project-creator-btn:active {\n    background-color: hsl(48, 100%, 61%);\n    color: white;\n}\n\n.high {\n    color: red;\n}\n\n.low {\n    color: green;\n}\n\n.moderate {\n    color: yellow;\n}\n\n#form {\n    border: 2px solid black;\n    border-radius: 4rem;\n    padding: 2rem;\n    margin: 2rem;\n    background-color: orange;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    display: none;\n}\n\n#add_project {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 4rem;\n}\n\n#add_project label {\n    position: absolute;\n}\n\n#add_project input,\n#add_project select {\n    margin-left: 18rem;\n}\n\n.div1 {\n    display: flex;\n    gap: 2rem;\n    flex-direction: column;\n    align-items: center;\n}\n\n.submit-btn {\n    width: 300px;\n    height: 100px;\n    font-size: 4rem;\n    border: 2px solid black;\n    border-radius: 5rem;\n}\n\n.submit-btn:hover {\n    color: whitesmoke;\n    background-color: black;\n}\n\n.cancel {\n    background-color: orange;\n    color: red;\n    border: none;\n    width: 200px;\n    height: 50px;\n    font-size: 2rem;\n}\n\n.cancel:hover {\n    color: white;\n}\n\ninput,\nselect {\n    font-size: 3rem;\n}\n\nform button:active {\n    color: rgba(245, 245, 245, 0.65);\n    background-color: rgba(0, 0, 0, 0.347);\n}\n\n.project-head {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    background-color: orange;\n    padding: 2rem;\n}\n\n.project-name {\n    border: 2px solid black;\n    border-radius: 2rem;\n    padding: 1rem;\n    background-color: black;\n}\n\n.project-priority-holder {\n    display: flex;\n    gap: 1rem;\n}\n\n.project-back {\n    width: 50px;\n}\n\n.project-back:hover {\n    cursor: pointer;\n    opacity: 0.3;\n}\n.circle {\n    margin: 2rem;\n    width: 110rem;\n    height: 11rem;\n    background-color: orange;\n    position: relative;\n    border-radius: 4rem;\n}\n.circle::after {\n    content: \" \";\n    position: absolute;\n    display: block;\n    background-color: black;\n    height: 10px;\n    margin-top: -5px;\n    top: 50%;\n    left: 5px;\n    right: 5px;\n    z-index: 9;\n    cursor: pointer;\n}\n.circle::before {\n    content: \" \";\n    position: absolute;\n    display: block;\n    background-color: black;\n    width: 10px;\n    margin-left: -5px;\n    left: 50%;\n    top: 5px;\n    bottom: 5px;\n    z-index: 9;\n    cursor: pointer;\n}\n\n.circle:hover {\n    background-color: white;\n    cursor: pointer;\n}\n\n.body {\n    display: grid;\n}\n\n.todo-checkbox {\n    width: 90px;\n}\n\n.todo-hold {\n    border: 2px solid orange;\n    border-radius: 7rem;\n    margin: 1rem;\n    background-color: orange;\n    font-size: 2rem;\n    padding: 2rem;\n    text-align: center;\n}\n\n#todo-form-all {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n}\n\n#todo-form {\n    font-size: 3rem;\n}\n\n#todo-form-all label {\n    position: absolute;\n}\n\n#todo-form-all input,\n#todo-form-all textarea {\n    margin-left: 16rem;\n}\n\ntextarea {\n    font-size: 1rem;\n}\n\ntextarea,\ninput {\n    padding: 0.5rem;\n}\n\n#todo-title-input {\n    width: 58.8rem;\n}\n\n.divOne {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-to-localStorage.js":
/*!************************************!*\
  !*** ./src/add-to-localStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToStorage": () => (/* binding */ addToStorage),
/* harmony export */   "getInformation": () => (/* binding */ getInformation)
/* harmony export */ });
/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPage */ "./src/createPage.js");


function getInformation(list) {
    let title = document.getElementById("title").value
    let priority = document.getElementById("priority").value
    let dueDate = document.getElementById("date").value
    let todo = []
    list.push({title, priority, dueDate, todo})
    addToStorage(list)
}

function addToStorage(list) {
    localStorage.setItem("myProjects", JSON.stringify(list))
    ;(0,_createPage__WEBPACK_IMPORTED_MODULE_0__.pageAssemble)(list, document.getElementById("container"))
}



/***/ }),

/***/ "./src/checkErrors.js":
/*!****************************!*\
  !*** ./src/checkErrors.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formValidation": () => (/* binding */ formValidation)
/* harmony export */ });
function formValidation(title, date) {
    if(title.value === "") {
        return false
    }
    if(date.value === "") {
        return false
    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let date2 = String(yyyy + '-' + mm + '-' + dd);

    date = date.value.split("-")
    date2 = date2.split("-")

    let yearToDay = Number(date[0]) * 12 * 30
    let yearToDay2 = Number(date2[0]) * 12 * 30
    let monthToDay = Number(date[1]) * 30
    let monthToDay2 = Number(date2[1]) * 30

    let newDate = yearToDay + monthToDay + Number(date[2])
    let newDate2 = yearToDay2 + monthToDay2 + Number(date2[2])
    
    if(newDate < newDate2) {
        date.value = ""
        return 0
    }

    let anotherTitle = JSON.parse(localStorage.getItem("myProjects"))
    for(let i = 0; i < anotherTitle.length; i++) {
        if(anotherTitle[i].title === title.value) {
            return 1
        }
    }
}



/***/ }),

/***/ "./src/createPage.js":
/*!***************************!*\
  !*** ./src/createPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageAssemble": () => (/* binding */ pageAssemble)
/* harmony export */ });
/* harmony import */ var _display_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-form */ "./src/display-form.js");
/* harmony import */ var _delete_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-log */ "./src/delete-log.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _to_dos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-dos */ "./src/to-dos.js");
/* harmony import */ var _trash_can_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trash-can.svg */ "./src/trash-can.svg");






function pageAssemble(projects, everythingHolder) {
    if(document.getElementById("project-holder")){
        everythingHolder.removeChild(document.getElementById("project-holder"))
    }
    
    const projectHolder = document.createElement("div")
    const newProjectCreator = document.createElement("button")

    projectHolder.textContent = ""
    
    newProjectCreator.textContent = "New Project"
    newProjectCreator.id = "project-creator-btn"
    newProjectCreator.addEventListener("click", function() {
        ;(0,_display_form__WEBPACK_IMPORTED_MODULE_0__.displayForm)(projects)
    })

    projectHolder.id = "project-holder"
    if(localStorage.getItem("myProjects")){
        for(let i = 0; i < projects.length; i++) {
            let project = document.createElement("div")
            let projectTitle = document.createElement("h3")
    
            let projectDeadLineHolder = document.createElement("div")
            let projectDeadLineDisplayer = document.createElement("h4")
            let projectDeadLine = document.createElement("h4")
    
            let projectPriorityHolder = document.createElement("div")
            let projectPriorityDisplayer = document.createElement("h4")
            let projectPriority = document.createElement("h4")

            let deleteIcon = new Image()
    
            project.classList.add("projects")
            projectTitle.classList.add("project-title")
            projectDeadLineHolder.classList.add("deadline-holder")
            projectPriorityHolder.classList.add("priority-holder")
    
            projectTitle.id = projects[i].title
            projectDeadLine.id = "deadline of " + projects[i].title
            projectPriority.id = "priority of " + projects[i].title
    
            projectTitle.textContent = projects[i].title
            projectDeadLineDisplayer.textContent = "Deadline:"
            projectDeadLine.textContent = projects[i].dueDate
            projectPriorityDisplayer.textContent = "Priority:"
            projectPriority.textContent = projects[i].priority
    
            if (projectPriority.textContent === "High") {
                projectPriority.classList.add("high")
            } else if (projectPriority.textContent === "Moderate") {
                
                projectPriority.classList.add("moderate")
            } else {
                projectPriority.classList.add("low")
            }

            deleteIcon.classList.add("trash-icon")
            deleteIcon.id = "trash-icon"
            deleteIcon.src = _trash_can_svg__WEBPACK_IMPORTED_MODULE_4__
            deleteIcon.addEventListener("click", function() {
                ;(0,_delete_log__WEBPACK_IMPORTED_MODULE_1__.deleteLogs)(i)
            })

            project.addEventListener("click", function(e) {
                if(e.target.id != "trash-icon") {
                    (0,_project__WEBPACK_IMPORTED_MODULE_2__.displayProjectInfo)(projectTitle, projectDeadLine, projectPriority)
                }
            })

            projectDeadLineHolder.appendChild(projectDeadLineDisplayer)
            projectDeadLineHolder.appendChild(projectDeadLine)
            projectPriorityHolder.appendChild(projectPriorityDisplayer)
            projectPriorityHolder.appendChild(projectPriority)
            
            project.appendChild(projectTitle)
            project.appendChild(projectDeadLineHolder)
            project.appendChild(projectPriorityHolder)
            project.appendChild(deleteIcon)
    
            projectHolder.appendChild(project)
        }
    }

    projectHolder.appendChild(newProjectCreator)
    everythingHolder.appendChild(projectHolder)
}



/***/ }),

/***/ "./src/delete-log.js":
/*!***************************!*\
  !*** ./src/delete-log.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteLogs": () => (/* binding */ deleteLogs)
/* harmony export */ });
/* harmony import */ var _add_to_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-localStorage */ "./src/add-to-localStorage.js");


function deleteLogs(key) {
    let sure = confirm("Are you sure you want to delete this project?")
    if(sure) {
        let projects = JSON.parse(localStorage.getItem("myProjects"))
        projects.splice(key, 1)
        ;(0,_add_to_localStorage__WEBPACK_IMPORTED_MODULE_0__.addToStorage)(projects)
    } else {
        return
    }
}



/***/ }),

/***/ "./src/display-form.js":
/*!*****************************!*\
  !*** ./src/display-form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayForm": () => (/* binding */ displayForm)
/* harmony export */ });
/* harmony import */ var _add_to_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-localStorage */ "./src/add-to-localStorage.js");
/* harmony import */ var _checkErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkErrors */ "./src/checkErrors.js");



function displayForm(list) {
    const formHolder = document.getElementById("form")
    formHolder.textContent = ""
    const form = document.createElement("form")

    const first = document.createElement("div")
    const title = document.createElement("label")
    const titleInput = document.createElement("input")

    const second = document.createElement("div")
    const priority = document.createElement("label")
    const select = document.createElement("select")
    const low = document.createElement("option")
    const moderate = document.createElement("option")
    const high = document.createElement("option")

    const third = document.createElement("div")
    const dueDate = document.createElement("label")
    const dueDateInput = document.createElement("input")

    const submitBtn = document.createElement("button")
    const cancel = document.createElement("button")
    const div1 = document.createElement("div")

    title.classList.add("form-label")
    priority.classList.add("form-label")
    dueDate.classList.add("form-label")
    div1.classList.add("div1")

    form.action = "add-project"
    form.method = "post"
    form.id = "add_project"

    form.classList.add("formE")
    formHolder.classList.add("formH")

    first.id = "first"
    title.setAttribute('for', 'title')
    title.textContent = "Title:"
    titleInput.type = "text"
    titleInput.id = "title"
    titleInput.name = "project_title"
    titleInput.required.valueOf(true)

    second.id = "second"
    priority.setAttribute('for', 'priority')
    priority.textContent = "Priority:"
    select.name = "priority"
    select.id = "priority"
    select.required = true
    low.value = "Low"
    low.textContent = "Low"
    moderate.value = "Moderate"
    moderate.textContent = "Moderate"
    high.value = "High"
    high.textContent = "High"

    third.id = "third"
    dueDate.setAttribute('for', 'due-date')
    dueDate.textContent = "Due Date:"
    dueDateInput.type = "date"
    dueDateInput.id = "date"
    dueDateInput.name = "project_due_date"
    dueDateInput.required = true

    submitBtn.type = "button"
    submitBtn.id = "submit-btn"
    submitBtn.classList.add("submit-btn")
    submitBtn.textContent = "Submit"
    submitBtn.addEventListener("click", function() {
        let validate = (0,_checkErrors__WEBPACK_IMPORTED_MODULE_1__.formValidation)(titleInput, dueDateInput)
        if(validate === false) {
            alert("Please enter all the data(s)")
            
        } else if (validate === 0) {
            alert("Please enter a valid date")
        } else if (validate === 1) {
            alert("The title is already being used please use another one")
        } else {
            (0,_add_to_localStorage__WEBPACK_IMPORTED_MODULE_0__.getInformation)(list)
            container.style.display = "grid"
            formHolder.style.display = "none"
        }
    })
    cancel.type = "button"
    cancel.id = "cancel"
    cancel.classList.add("cancel")
    cancel.textContent = "Cancel"

    cancel.addEventListener("click", function() {
        container.style.display = "grid"
        formHolder.style.display = "none"
    })

    container.style.display = "none"
    formHolder.style.display = "flex"

    first.appendChild(title)
    first.appendChild(titleInput)

    select.appendChild(low)
    select.appendChild(moderate)
    select.appendChild(high)
    second.appendChild(priority)
    second.appendChild(select)

    third.appendChild(dueDate)
    third.appendChild(dueDateInput)

    div1.appendChild(submitBtn)
    div1.appendChild(cancel)

    form.appendChild(first)
    form.appendChild(second)
    form.appendChild(third)
    form.appendChild(div1)

    formHolder.appendChild(form)
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectInfo": () => (/* binding */ displayProjectInfo)
/* harmony export */ });
/* harmony import */ var _arrow_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow-left.svg */ "./src/arrow-left.svg");
/* harmony import */ var _todoform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoform */ "./src/todoform.js");
/* harmony import */ var _to_dos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-dos */ "./src/to-dos.js");



function displayProjectInfo(title, deadline, priority) {
    const container = document.getElementById("container")
    container.textContent = ""
    
    const head = document.createElement("div")
    const name = document.createElement("h1")
    const dueDate = document.createElement("h2")
    const priorityHolder = document.createElement("div")
    const priorityName = document.createElement("h2")
    const priorityLevel = document.createElement("h2")
    const back = document.createElement("img")
    const todoHolder = document.createElement("div")
    const newTodoCreater = document.createElement("div")
    const body = document.createElement("div")
    
    head.classList.add("project-head")
    name.classList.add("project-name")
    dueDate.classList.add("project-dueDate")
    priorityHolder.classList.add("project-priority-holder")
    priorityName.classList.add("project-priority-name")
    back.classList.add("project-back")
    todoHolder.classList.add("project-todo-holder")
    newTodoCreater.classList.add("circle")
    body.classList.add("body")
    if(priority.textContent === "moderate") {
        priorityLevel.classList.add("moderate")
    } else if (priority.textContent === "high") {
        priorityLevel.classList.add("high")
    } else {
        priorityLevel.classList.add("low")
    }

    newTodoCreater.addEventListener("click", function() {
        (0,_todoform__WEBPACK_IMPORTED_MODULE_1__.getToDoForm)(title)
    })

    back.addEventListener("click", function() {
        location.replace("../dist/index.html")
    })

    back.src = _arrow_left_svg__WEBPACK_IMPORTED_MODULE_0__
    name.textContent = title.textContent
    dueDate.textContent = "Deadline: " + deadline.textContent
    priorityName.textContent = "Priority: "
    priorityLevel.textContent = priority.textContent

    priorityHolder.appendChild(priorityName)
    priorityHolder.appendChild(priorityLevel)

    head.appendChild(back)
    head.appendChild(name)
    head.appendChild(dueDate)
    head.appendChild(priorityHolder)

    body.appendChild(todoHolder)
    body.appendChild(newTodoCreater)

    container.appendChild(head)
    container.appendChild(body)

    if(localStorage.getItem("myProjects")) {
        let newN = JSON.parse(localStorage.getItem("myProjects"))
        for(let u = 0; u < newN.length; u++) {
            if(newN[u].title === title.textContent) {
                document.querySelector(".project-todo-holder").textContent = ''
                for (let nn = 0; nn < newN[u].todo.length; nn++) {
                    (0,_to_dos__WEBPACK_IMPORTED_MODULE_2__.createNewToDo)(newN[u].todo[nn].todoTitle, newN[u].todo[nn].description)
                }
            }
        }
    }
}



/***/ }),

/***/ "./src/to-dos.js":
/*!***********************!*\
  !*** ./src/to-dos.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewToDo": () => (/* binding */ createNewToDo)
/* harmony export */ });
function createNewToDo(titleN, descriptionN) {
    const holder = document.querySelector(".project-todo-holder")
    
    const todoHold = document.createElement("div")
    const div1  = document.createElement("div")
    const div2 = document.createElement("div")
    const title = document.createElement("h3")
    const done = document.createElement("label")
    const doneBox = document.createElement("input")
    const description = document.createElement("p")
    const br = document.createElement("hr")

    todoHold.classList.add("todo-hold")
    title.classList.add("todo-title")
    done.classList.add("todo-label-done")
    doneBox.classList.add("todo-checkbox")
    description.classList.add("todo-description")
    div1.classList.add("divOne")
    div2.classList.add("div2")

    title.textContent = titleN
    done.textContent = "Done:"
    doneBox.type = "checkbox"
    description.textContent = descriptionN

    div1.appendChild(done)
    div1.appendChild(doneBox)

    div2.appendChild(title)
    div2.appendChild(br)
    div2.appendChild(div1)

    todoHold.appendChild(div2)
    todoHold.appendChild(br)
    todoHold.appendChild(description)

    holder.appendChild(todoHold)
}



/***/ }),

/***/ "./src/todo-localStorage.js":
/*!**********************************!*\
  !*** ./src/todo-localStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoStorage": () => (/* binding */ addToDoStorage)
/* harmony export */ });
/* harmony import */ var _to_dos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-dos */ "./src/to-dos.js");


// function addToDoStorage(title, description) {
//     let myArr = []
//     if(localStorage.getItem("myToDos")) {
//         myArr = JSON.parse(localStorage.getItem("myToDos"))
//         myArr.push({title, description})
//     } else {
//         myArr.push({title, description})
//     }
//     localStorage.setItem("myToDos", JSON.stringify(myArr))
//     document.querySelector(".project-todo-holder").textContent = ''
//     for(let u = myArr.length; u === 0; u--) {
//         createNewToDo(myArr[u].title, myArr[u].description)
//     }
    
// }

function addToDoStorage(title, description, projectTitle) {
    let n = JSON.parse(localStorage.getItem("myProjects"))
    for(let i = 0; i < n.length; i++) {
        if(n[i].title === projectTitle) {
            n[i].todo.push({todoTitle : title, description})
        }
    }
    localStorage.setItem("myProjects", JSON.stringify(n))
    let newN = JSON.parse(localStorage.getItem("myProjects"))
    for(let u = 0; u < newN.length; u++) {
        if(newN[u].title === projectTitle) {
            document.querySelector(".project-todo-holder").textContent = ''
            for(let nn = 0; nn < newN[u].todo.length; nn++) {
                (0,_to_dos__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(newN[u].todo[nn].todoTitle, newN[u].todo[nn].description)
            }
        }
    }
}



/***/ }),

/***/ "./src/todoform.js":
/*!*************************!*\
  !*** ./src/todoform.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getToDoForm": () => (/* binding */ getToDoForm)
/* harmony export */ });
/* harmony import */ var _to_dos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-dos */ "./src/to-dos.js");
/* harmony import */ var _todo_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-localStorage */ "./src/todo-localStorage.js");



function getToDoForm(projectTitle) {
    const ctnHolder = document.getElementById("container")
    const formE = document.getElementById("form")
    
    ctnHolder.style.display = 'none'
    formE.textContent = ""
    formE.style.display = "block"
    
    const formHolder = document.createElement("div")
    const form = document.createElement("form")

    const div1 = document.createElement("div")
    const title = document.createElement("label")
    const titleInput = document.createElement("input")

    const div2 = document.createElement("div")
    const description = document.createElement("label")
    const textArea = document.createElement("textarea")

    const submitBtn = document.createElement("button")
    const cancel = document.createElement("button")

    formHolder.id = "todo-form-all"
    form.id = "todo-form"
    title.id = "todo-title"
    titleInput.id = "todo-title-input"
    description.id = "todo-description"
    textArea.id = "todo-textArea"
    submitBtn.id = "submit-button"
    cancel.id = "cancel-button"
    div1.id = "divOne"
    div2.id = "divTwo"

    titleInput.type = "text"
    submitBtn.type = "button"

    title.textContent = "Title:"
    description.textContent = "Description:"
    submitBtn.textContent = "Submit"
    cancel.textContent = "Cancel"
    textArea.cols = "54"
    textArea.rows = "10"

    cancel.classList.add("cancel")
    submitBtn.classList.add("submit-btn")

    submitBtn.addEventListener("click", function() {
        let titleN = titleInput.value
        let descriptionN = textArea.value

        ;(0,_todo_localStorage__WEBPACK_IMPORTED_MODULE_1__.addToDoStorage)(titleN, descriptionN, projectTitle.textContent)

        ctnHolder.style.display = "flex"
        formE.style.display = "none"
        ctnHolder.style.flexDirection = "column"
    })

    cancel.addEventListener("click", function() {
        ctnHolder.style.display = "flex"
        formE.style.display = "none"
        ctnHolder.style.flexDirection = "column"
    })

    div1.appendChild(title)
    div1.appendChild(titleInput)

    div2.appendChild(description)
    div2.appendChild(textArea)

    form.appendChild(div1)
    form.appendChild(div2)

    formHolder.appendChild(form)
    formHolder.appendChild(submitBtn)
    formHolder.appendChild(cancel)
    
    formE.appendChild(formHolder)
}



/***/ }),

/***/ "./src/arrow-left.svg":
/*!****************************!*\
  !*** ./src/arrow-left.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36bec1667db89cdb26a7.svg";

/***/ }),

/***/ "./src/notes.gif":
/*!***********************!*\
  !*** ./src/notes.gif ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5abf817a5cb7e97d764.gif";

/***/ }),

/***/ "./src/trash-can.svg":
/*!***************************!*\
  !*** ./src/trash-can.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7b26be64c05d0f239.svg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _notes_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes.gif */ "./src/notes.gif");
/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPage */ "./src/createPage.js");




const everythingHolder = document.getElementById("container")
// let projects = [{title: "th", priority: "High", dueDate: "14th October"}, 
//                 {title: "th", priority: "Low", dueDate: "14th October"}, 
//                 {title: "th", priority: "Moderate", dueDate: "14th October"}, 
//                 {title: "th", priority: "High", dueDate: "14th October"}]

const ToDo = () => {
    const getDaDates = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let current_time = mm + '/' + dd + '/' + yyyy;
        return {current_time}
    }
    const createTitle = (title, tagline, image) => {
        const heading = document.createElement("div")
        const titleName = document.createElement("h1")
        const logo = new Image()
        const holder = document.createElement("div")
        const line = document.createElement("p")
        const dateHolder = document.createElement('h2')
        
        heading.classList.add("header")
        titleName.classList.add("title")
        logo.classList.add("logo")
        holder.classList.add("holder")
        line.classList.add("tag-line")
        dateHolder.classList.add("date")
        
        titleName.textContent = title
        line.textContent = tagline
        logo.src = image
        dateHolder.textContent = getDaDates().current_time

        holder.appendChild(titleName)
        holder.appendChild(line)
        heading.appendChild(logo)
        heading.appendChild(holder)
        heading.appendChild(dateHolder)
        everythingHolder.appendChild(heading)
    }
    return {createTitle}
}

const oneProject = ToDo()
oneProject.createTitle("A-Notes", "The only app you need to note down all of your To-Do's", _notes_gif__WEBPACK_IMPORTED_MODULE_1__)
let projects = []    
if(localStorage.getItem("myProjects")){
    projects = JSON.parse(localStorage.getItem("myProjects"))
}
(0,_createPage__WEBPACK_IMPORTED_MODULE_2__.pageAssemble)(projects, everythingHolder)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFX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O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNXO0FBQ1k7O0FBRTNDO0FBQ0Esb0JBQW9CLHVEQUF1RDtBQUMzRSxvQkFBb0Isc0RBQXNEO0FBQzFFLG9CQUFvQiwyREFBMkQ7QUFDL0Usb0JBQW9CLHVEQUF1RDs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLDRGQUE0Rix1Q0FBSztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUFZLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC10by1sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGVja0Vycm9ycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kZWxldGUtbG9nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheS1mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvLWRvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8tbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11a3RhJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNjAlO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdHM6aG92ZXIge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogYWxpYXM7XFxufVxcblxcbi5kZWFkbGluZS1ob2xkZXIsXFxuLnByaW9yaXR5LWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4udHJhc2gtaWNvbiB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4udHJhc2gtaWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI3Byb2plY3QtaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jcHJvamVjdC1jcmVhdG9yLWJ0biB7XFxuICAgIGhlaWdodDogMTkwcHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvamVjdC1jcmVhdG9yLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogb3JhbmdlOyAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxufVxcblxcbiNwcm9qZWN0LWNyZWF0b3ItYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCg0OCwgMTAwJSwgNjElKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5sb3cge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5tb2RlcmF0ZSB7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbiNmb3JtIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZF9wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jYWRkX3Byb2plY3QgbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNhZGRfcHJvamVjdCBpbnB1dCxcXG4jYWRkX3Byb2plY3Qgc2VsZWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE4cmVtO1xcbn1cXG5cXG4uZGl2MSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxufVxcblxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuZm9ybSBidXR0b246YWN0aXZlIHtcXG4gICAgY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC42NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDcpO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1wcmlvcml0eS1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWJhY2sge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtYmFjazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG4uY2lyY2xlIHtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICB3aWR0aDogMTEwcmVtO1xcbiAgICBoZWlnaHQ6IDExcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLmNpcmNsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNpcmNsZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNXB4O1xcbiAgICBib3R0b206IDVweDtcXG4gICAgei1pbmRleDogOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2lyY2xlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udG9kby1jaGVja2JveCB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4udG9kby1ob2xkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWZvcm0tYWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI3RvZG8tZm9ybS1hbGwgbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiN0b2RvLWZvcm0tYWxsIGlucHV0LFxcbiN0b2RvLWZvcm0tYWxsIHRleHRhcmVhIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxudGV4dGFyZWEsXFxuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbiN0b2RvLXRpdGxlLWlucHV0IHtcXG4gICAgd2lkdGg6IDU4LjhyZW07XFxufVxcblxcbi5kaXZPbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2Vi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VTtJQUNWLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RzOmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IGFsaWFzO1xcbn1cXG5cXG4uZGVhZGxpbmUtaG9sZGVyLFxcbi5wcmlvcml0eS1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLnRyYXNoLWljb24ge1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuLnRyYXNoLWljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNwcm9qZWN0LWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI3Byb2plY3QtY3JlYXRvci1idG4ge1xcbiAgICBoZWlnaHQ6IDE5MHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3Byb2plY3QtY3JlYXRvci1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IG9yYW5nZTsgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbn1cXG5cXG4jcHJvamVjdC1jcmVhdG9yLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDgsIDEwMCUsIDYxJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubW9kZXJhdGUge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4jZm9ybSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGRfcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuI2FkZF9wcm9qZWN0IGxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jYWRkX3Byb2plY3QgaW5wdXQsXFxuI2FkZF9wcm9qZWN0IHNlbGVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxOHJlbTtcXG59XFxuXFxuLmRpdjEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY2FuY2VsOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmZvcm0gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQ3KTtcXG59XFxuXFxuLnByb2plY3QtaGVhZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3QtcHJpb3JpdHktaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1iYWNrIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJhY2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuLmNpcmNsZSB7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgd2lkdGg6IDExMHJlbTtcXG4gICAgaGVpZ2h0OiAxMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5jaXJjbGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNXB4O1xcbiAgICByaWdodDogNXB4O1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaXJjbGU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNpcmNsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgICB3aWR0aDogOTBweDtcXG59XFxuXFxuLnRvZG8taG9sZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3JlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtLWFsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiN0b2RvLWZvcm0tYWxsIGxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWFsbCBpbnB1dCxcXG4jdG9kby1mb3JtLWFsbCB0ZXh0YXJlYSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbnRleHRhcmVhLFxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jdG9kby10aXRsZS1pbnB1dCB7XFxuICAgIHdpZHRoOiA1OC44cmVtO1xcbn1cXG5cXG4uZGl2T25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwYWdlQXNzZW1ibGUgfSBmcm9tIFwiLi9jcmVhdGVQYWdlXCJcblxuZnVuY3Rpb24gZ2V0SW5mb3JtYXRpb24obGlzdCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWVcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICBsZXQgdG9kbyA9IFtdXG4gICAgbGlzdC5wdXNoKHt0aXRsZSwgcHJpb3JpdHksIGR1ZURhdGUsIHRvZG99KVxuICAgIGFkZFRvU3RvcmFnZShsaXN0KVxufVxuXG5mdW5jdGlvbiBhZGRUb1N0b3JhZ2UobGlzdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShsaXN0KSlcbiAgICBwYWdlQXNzZW1ibGUobGlzdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIikpXG59XG5cbmV4cG9ydCB7YWRkVG9TdG9yYWdlLCBnZXRJbmZvcm1hdGlvbn0iLCJmdW5jdGlvbiBmb3JtVmFsaWRhdGlvbih0aXRsZSwgZGF0ZSkge1xuICAgIGlmKHRpdGxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZihkYXRlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGxldCBkYXRlMiA9IFN0cmluZyh5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZCk7XG5cbiAgICBkYXRlID0gZGF0ZS52YWx1ZS5zcGxpdChcIi1cIilcbiAgICBkYXRlMiA9IGRhdGUyLnNwbGl0KFwiLVwiKVxuXG4gICAgbGV0IHllYXJUb0RheSA9IE51bWJlcihkYXRlWzBdKSAqIDEyICogMzBcbiAgICBsZXQgeWVhclRvRGF5MiA9IE51bWJlcihkYXRlMlswXSkgKiAxMiAqIDMwXG4gICAgbGV0IG1vbnRoVG9EYXkgPSBOdW1iZXIoZGF0ZVsxXSkgKiAzMFxuICAgIGxldCBtb250aFRvRGF5MiA9IE51bWJlcihkYXRlMlsxXSkgKiAzMFxuXG4gICAgbGV0IG5ld0RhdGUgPSB5ZWFyVG9EYXkgKyBtb250aFRvRGF5ICsgTnVtYmVyKGRhdGVbMl0pXG4gICAgbGV0IG5ld0RhdGUyID0geWVhclRvRGF5MiArIG1vbnRoVG9EYXkyICsgTnVtYmVyKGRhdGUyWzJdKVxuICAgIFxuICAgIGlmKG5ld0RhdGUgPCBuZXdEYXRlMikge1xuICAgICAgICBkYXRlLnZhbHVlID0gXCJcIlxuICAgICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBhbm90aGVyVGl0bGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlQcm9qZWN0c1wiKSlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYW5vdGhlclRpdGxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGFub3RoZXJUaXRsZVtpXS50aXRsZSA9PT0gdGl0bGUudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IGZvcm1WYWxpZGF0aW9uIH0iLCJpbXBvcnQgeyBkaXNwbGF5Rm9ybSB9IGZyb20gXCIuL2Rpc3BsYXktZm9ybVwiXG5pbXBvcnQgeyBkZWxldGVMb2dzIH0gZnJvbSBcIi4vZGVsZXRlLWxvZ1wiXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdEluZm8gfSBmcm9tIFwiLi9wcm9qZWN0XCJcbmltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90by1kb3NcIlxuaW1wb3J0IHRyYXNoQ2FuIGZyb20nLi90cmFzaC1jYW4uc3ZnJ1xuXG5mdW5jdGlvbiBwYWdlQXNzZW1ibGUocHJvamVjdHMsIGV2ZXJ5dGhpbmdIb2xkZXIpIHtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaG9sZGVyXCIpKXtcbiAgICAgICAgZXZlcnl0aGluZ0hvbGRlci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaG9sZGVyXCIpKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IG5ld1Byb2plY3RDcmVhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuXG4gICAgcHJvamVjdEhvbGRlci50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBcbiAgICBuZXdQcm9qZWN0Q3JlYXRvci50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIlxuICAgIG5ld1Byb2plY3RDcmVhdG9yLmlkID0gXCJwcm9qZWN0LWNyZWF0b3ItYnRuXCJcbiAgICBuZXdQcm9qZWN0Q3JlYXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRpc3BsYXlGb3JtKHByb2plY3RzKVxuICAgIH0pXG5cbiAgICBwcm9qZWN0SG9sZGVyLmlkID0gXCJwcm9qZWN0LWhvbGRlclwiXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVByb2plY3RzXCIpKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RGVhZExpbmVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBsZXQgcHJvamVjdERlYWRMaW5lRGlzcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXG4gICAgICAgICAgICBsZXQgcHJvamVjdERlYWRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXG4gICAgXG4gICAgICAgICAgICBsZXQgcHJvamVjdFByaW9yaXR5SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgbGV0IHByb2plY3RQcmlvcml0eURpc3BsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuICAgICAgICAgICAgbGV0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuXG4gICAgICAgICAgICBsZXQgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpXG4gICAgXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKVxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpXG4gICAgICAgICAgICBwcm9qZWN0RGVhZExpbmVIb2xkZXIuY2xhc3NMaXN0LmFkZChcImRlYWRsaW5lLWhvbGRlclwiKVxuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1ob2xkZXJcIilcbiAgICBcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5pZCA9IHByb2plY3RzW2ldLnRpdGxlXG4gICAgICAgICAgICBwcm9qZWN0RGVhZExpbmUuaWQgPSBcImRlYWRsaW5lIG9mIFwiICsgcHJvamVjdHNbaV0udGl0bGVcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5pZCA9IFwicHJpb3JpdHkgb2YgXCIgKyBwcm9qZWN0c1tpXS50aXRsZVxuICAgIFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGVcbiAgICAgICAgICAgIHByb2plY3REZWFkTGluZURpc3BsYXllci50ZXh0Q29udGVudCA9IFwiRGVhZGxpbmU6XCJcbiAgICAgICAgICAgIHByb2plY3REZWFkTGluZS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLmR1ZURhdGVcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eURpc3BsYXllci50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCJcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnByaW9yaXR5XG4gICAgXG4gICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID09PSBcIkhpZ2hcIikge1xuICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPT09IFwiTW9kZXJhdGVcIikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibW9kZXJhdGVcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJsb3dcIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwidHJhc2gtaWNvblwiKVxuICAgICAgICAgICAgZGVsZXRlSWNvbi5pZCA9IFwidHJhc2gtaWNvblwiXG4gICAgICAgICAgICBkZWxldGVJY29uLnNyYyA9IHRyYXNoQ2FuXG4gICAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVMb2dzKGkpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuaWQgIT0gXCJ0cmFzaC1pY29uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RJbmZvKHByb2plY3RUaXRsZSwgcHJvamVjdERlYWRMaW5lLCBwcm9qZWN0UHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcHJvamVjdERlYWRMaW5lSG9sZGVyLmFwcGVuZENoaWxkKHByb2plY3REZWFkTGluZURpc3BsYXllcilcbiAgICAgICAgICAgIHByb2plY3REZWFkTGluZUhvbGRlci5hcHBlbmRDaGlsZChwcm9qZWN0RGVhZExpbmUpXG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlIb2xkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5RGlzcGxheWVyKVxuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5SG9sZGVyLmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3REZWFkTGluZUhvbGRlcilcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5SG9sZGVyKVxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVJY29uKVxuICAgIFxuICAgICAgICAgICAgcHJvamVjdEhvbGRlci5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvamVjdEhvbGRlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q3JlYXRvcilcbiAgICBldmVyeXRoaW5nSG9sZGVyLmFwcGVuZENoaWxkKHByb2plY3RIb2xkZXIpXG59XG5cbmV4cG9ydCB7IHBhZ2VBc3NlbWJsZSB9IiwiaW1wb3J0IHsgYWRkVG9TdG9yYWdlIH0gZnJvbSBcIi4vYWRkLXRvLWxvY2FsU3RvcmFnZVwiXG5cbmZ1bmN0aW9uIGRlbGV0ZUxvZ3Moa2V5KSB7XG4gICAgbGV0IHN1cmUgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3Q/XCIpXG4gICAgaWYoc3VyZSkge1xuICAgICAgICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlQcm9qZWN0c1wiKSlcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGtleSwgMSlcbiAgICAgICAgYWRkVG9TdG9yYWdlKHByb2plY3RzKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbn1cblxuZXhwb3J0IHsgZGVsZXRlTG9ncyB9IiwiaW1wb3J0IHsgZ2V0SW5mb3JtYXRpb24gfSBmcm9tIFwiLi9hZGQtdG8tbG9jYWxTdG9yYWdlXCJcbmltcG9ydCB7IGZvcm1WYWxpZGF0aW9uIH0gZnJvbSBcIi4vY2hlY2tFcnJvcnNcIlxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybShsaXN0KSB7XG4gICAgY29uc3QgZm9ybUhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKVxuICAgIGZvcm1Ib2xkZXIudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcblxuICAgIGNvbnN0IHNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgY29uc3QgbW9kZXJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcblxuICAgIGNvbnN0IHRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIilcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpXG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKFwiZGl2MVwiKVxuXG4gICAgZm9ybS5hY3Rpb24gPSBcImFkZC1wcm9qZWN0XCJcbiAgICBmb3JtLm1ldGhvZCA9IFwicG9zdFwiXG4gICAgZm9ybS5pZCA9IFwiYWRkX3Byb2plY3RcIlxuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybUVcIilcbiAgICBmb3JtSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtSFwiKVxuXG4gICAgZmlyc3QuaWQgPSBcImZpcnN0XCJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiXG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCJcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gXCJwcm9qZWN0X3RpdGxlXCJcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkLnZhbHVlT2YodHJ1ZSlcblxuICAgIHNlY29uZC5pZCA9IFwic2Vjb25kXCJcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiXG4gICAgc2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCJcbiAgICBzZWxlY3QuaWQgPSBcInByaW9yaXR5XCJcbiAgICBzZWxlY3QucmVxdWlyZWQgPSB0cnVlXG4gICAgbG93LnZhbHVlID0gXCJMb3dcIlxuICAgIGxvdy50ZXh0Q29udGVudCA9IFwiTG93XCJcbiAgICBtb2RlcmF0ZS52YWx1ZSA9IFwiTW9kZXJhdGVcIlxuICAgIG1vZGVyYXRlLnRleHRDb250ZW50ID0gXCJNb2RlcmF0ZVwiXG4gICAgaGlnaC52YWx1ZSA9IFwiSGlnaFwiXG4gICAgaGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiXG5cbiAgICB0aGlyZC5pZCA9IFwidGhpcmRcIlxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKVxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIlxuICAgIGR1ZURhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiXG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcInByb2plY3RfZHVlX2RhdGVcIlxuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWVcblxuICAgIHN1Ym1pdEJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgIHN1Ym1pdEJ0bi5pZCA9IFwic3VibWl0LWJ0blwiXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IGZvcm1WYWxpZGF0aW9uKHRpdGxlSW5wdXQsIGR1ZURhdGVJbnB1dClcbiAgICAgICAgaWYodmFsaWRhdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhbGwgdGhlIGRhdGEocylcIilcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRlID09PSAwKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGVcIilcbiAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoXCJUaGUgdGl0bGUgaXMgYWxyZWFkeSBiZWluZyB1c2VkIHBsZWFzZSB1c2UgYW5vdGhlciBvbmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldEluZm9ybWF0aW9uKGxpc3QpXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXG4gICAgICAgICAgICBmb3JtSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICBjYW5jZWwudHlwZSA9IFwiYnV0dG9uXCJcbiAgICBjYW5jZWwuaWQgPSBcImNhbmNlbFwiXG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIilcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXG4gICAgICAgIGZvcm1Ib2xkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBmb3JtSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuXG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcblxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChsb3cpXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG1vZGVyYXRlKVxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChoaWdoKVxuICAgIHNlY29uZC5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBzZWNvbmQuYXBwZW5kQ2hpbGQoc2VsZWN0KVxuXG4gICAgdGhpcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICB0aGlyZC5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpXG5cbiAgICBkaXYxLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICBkaXYxLmFwcGVuZENoaWxkKGNhbmNlbClcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3QpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWNvbmQpXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aGlyZClcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjEpXG5cbiAgICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGZvcm0pXG59XG5cbmV4cG9ydCB7IGRpc3BsYXlGb3JtIH0iLCJpbXBvcnQgYXJyb3cgZnJvbSAnLi9hcnJvdy1sZWZ0LnN2ZydcbmltcG9ydCB7IGdldFRvRG9Gb3JtIH0gZnJvbSAnLi90b2RvZm9ybSdcbmltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tICcuL3RvLWRvcydcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0SW5mbyh0aXRsZSwgZGVhZGxpbmUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIilcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIGNvbnN0IHByaW9yaXR5SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHByaW9yaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICBjb25zdCBiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGNvbnN0IHRvZG9Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbmV3VG9kb0NyZWF0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRcIilcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIilcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWR1ZURhdGVcIilcbiAgICBwcmlvcml0eUhvbGRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1wcmlvcml0eS1ob2xkZXJcIilcbiAgICBwcmlvcml0eU5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcHJpb3JpdHktbmFtZVwiKVxuICAgIGJhY2suY2xhc3NMaXN0LmFkZChcInByb2plY3QtYmFja1wiKVxuICAgIHRvZG9Ib2xkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdG9kby1ob2xkZXJcIilcbiAgICBuZXdUb2RvQ3JlYXRlci5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keVwiKVxuICAgIGlmKHByaW9yaXR5LnRleHRDb250ZW50ID09PSBcIm1vZGVyYXRlXCIpIHtcbiAgICAgICAgcHJpb3JpdHlMZXZlbC5jbGFzc0xpc3QuYWRkKFwibW9kZXJhdGVcIilcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnRleHRDb250ZW50ID09PSBcImhpZ2hcIikge1xuICAgICAgICBwcmlvcml0eUxldmVsLmNsYXNzTGlzdC5hZGQoXCJoaWdoXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlMZXZlbC5jbGFzc0xpc3QuYWRkKFwibG93XCIpXG4gICAgfVxuXG4gICAgbmV3VG9kb0NyZWF0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBnZXRUb0RvRm9ybSh0aXRsZSlcbiAgICB9KVxuXG4gICAgYmFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIuLi9kaXN0L2luZGV4Lmh0bWxcIilcbiAgICB9KVxuXG4gICAgYmFjay5zcmMgPSBhcnJvd1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0aXRsZS50ZXh0Q29udGVudFxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkRlYWRsaW5lOiBcIiArIGRlYWRsaW5lLnRleHRDb250ZW50XG4gICAgcHJpb3JpdHlOYW1lLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCJcbiAgICBwcmlvcml0eUxldmVsLnRleHRDb250ZW50ID0gcHJpb3JpdHkudGV4dENvbnRlbnRcblxuICAgIHByaW9yaXR5SG9sZGVyLmFwcGVuZENoaWxkKHByaW9yaXR5TmFtZSlcbiAgICBwcmlvcml0eUhvbGRlci5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsKVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChiYWNrKVxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICBoZWFkLmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgaGVhZC5hcHBlbmRDaGlsZChwcmlvcml0eUhvbGRlcilcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodG9kb0hvbGRlcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG5ld1RvZG9DcmVhdGVyKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpXG5cbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15UHJvamVjdHNcIikpIHtcbiAgICAgICAgbGV0IG5ld04gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlQcm9qZWN0c1wiKSlcbiAgICAgICAgZm9yKGxldCB1ID0gMDsgdSA8IG5ld04ubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgIGlmKG5ld05bdV0udGl0bGUgPT09IHRpdGxlLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRvZG8taG9sZGVyXCIpLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBubiA9IDA7IG5uIDwgbmV3Tlt1XS50b2RvLmxlbmd0aDsgbm4rKykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb0RvKG5ld05bdV0udG9kb1tubl0udG9kb1RpdGxlLCBuZXdOW3VdLnRvZG9bbm5dLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3RJbmZvIH0iLCJmdW5jdGlvbiBjcmVhdGVOZXdUb0RvKHRpdGxlTiwgZGVzY3JpcHRpb25OKSB7XG4gICAgY29uc3QgaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRvZG8taG9sZGVyXCIpXG4gICAgXG4gICAgY29uc3QgdG9kb0hvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGl2MSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIGNvbnN0IGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBjb25zdCBkb25lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpXG5cbiAgICB0b2RvSG9sZC5jbGFzc0xpc3QuYWRkKFwidG9kby1ob2xkXCIpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIilcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxhYmVsLWRvbmVcIilcbiAgICBkb25lQm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrYm94XCIpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb25cIilcbiAgICBkaXYxLmNsYXNzTGlzdC5hZGQoXCJkaXZPbmVcIilcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoXCJkaXYyXCIpXG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlTlxuICAgIGRvbmUudGV4dENvbnRlbnQgPSBcIkRvbmU6XCJcbiAgICBkb25lQm94LnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uTlxuXG4gICAgZGl2MS5hcHBlbmRDaGlsZChkb25lKVxuICAgIGRpdjEuYXBwZW5kQ2hpbGQoZG9uZUJveClcblxuICAgIGRpdjIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChicilcbiAgICBkaXYyLmFwcGVuZENoaWxkKGRpdjEpXG5cbiAgICB0b2RvSG9sZC5hcHBlbmRDaGlsZChkaXYyKVxuICAgIHRvZG9Ib2xkLmFwcGVuZENoaWxkKGJyKVxuICAgIHRvZG9Ib2xkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKHRvZG9Ib2xkKVxufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdUb0RvIH0iLCJpbXBvcnQgeyBjcmVhdGVOZXdUb0RvIH0gZnJvbSBcIi4vdG8tZG9zXCJcblxuLy8gZnVuY3Rpb24gYWRkVG9Eb1N0b3JhZ2UodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4vLyAgICAgbGV0IG15QXJyID0gW11cbi8vICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15VG9Eb3NcIikpIHtcbi8vICAgICAgICAgbXlBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlUb0Rvc1wiKSlcbi8vICAgICAgICAgbXlBcnIucHVzaCh7dGl0bGUsIGRlc2NyaXB0aW9ufSlcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBteUFyci5wdXNoKHt0aXRsZSwgZGVzY3JpcHRpb259KVxuLy8gICAgIH1cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkobXlBcnIpKVxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10b2RvLWhvbGRlclwiKS50ZXh0Q29udGVudCA9ICcnXG4vLyAgICAgZm9yKGxldCB1ID0gbXlBcnIubGVuZ3RoOyB1ID09PSAwOyB1LS0pIHtcbi8vICAgICAgICAgY3JlYXRlTmV3VG9EbyhteUFyclt1XS50aXRsZSwgbXlBcnJbdV0uZGVzY3JpcHRpb24pXG4vLyAgICAgfVxuICAgIFxuLy8gfVxuXG5mdW5jdGlvbiBhZGRUb0RvU3RvcmFnZSh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RUaXRsZSkge1xuICAgIGxldCBuID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15UHJvamVjdHNcIikpXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYobltpXS50aXRsZSA9PT0gcHJvamVjdFRpdGxlKSB7XG4gICAgICAgICAgICBuW2ldLnRvZG8ucHVzaCh7dG9kb1RpdGxlIDogdGl0bGUsIGRlc2NyaXB0aW9ufSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15UHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobikpXG4gICAgbGV0IG5ld04gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlQcm9qZWN0c1wiKSlcbiAgICBmb3IobGV0IHUgPSAwOyB1IDwgbmV3Ti5sZW5ndGg7IHUrKykge1xuICAgICAgICBpZihuZXdOW3VdLnRpdGxlID09PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10b2RvLWhvbGRlclwiKS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICBmb3IobGV0IG5uID0gMDsgbm4gPCBuZXdOW3VdLnRvZG8ubGVuZ3RoOyBubisrKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9EbyhuZXdOW3VdLnRvZG9bbm5dLnRvZG9UaXRsZSwgbmV3Tlt1XS50b2RvW25uXS5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkVG9Eb1N0b3JhZ2UgfSIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90by1kb3NcIlxuaW1wb3J0IHsgYWRkVG9Eb1N0b3JhZ2UgfSBmcm9tIFwiLi90b2RvLWxvY2FsU3RvcmFnZVwiXG5cbmZ1bmN0aW9uIGdldFRvRG9Gb3JtKHByb2plY3RUaXRsZSkge1xuICAgIGNvbnN0IGN0bkhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpXG4gICAgY29uc3QgZm9ybUUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIilcbiAgICBcbiAgICBjdG5Ib2xkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGZvcm1FLnRleHRDb250ZW50ID0gXCJcIlxuICAgIGZvcm1FLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICBcbiAgICBjb25zdCBmb3JtSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcblxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICAgIGZvcm1Ib2xkZXIuaWQgPSBcInRvZG8tZm9ybS1hbGxcIlxuICAgIGZvcm0uaWQgPSBcInRvZG8tZm9ybVwiXG4gICAgdGl0bGUuaWQgPSBcInRvZG8tdGl0bGVcIlxuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRvZG8tdGl0bGUtaW5wdXRcIlxuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJ0b2RvLWRlc2NyaXB0aW9uXCJcbiAgICB0ZXh0QXJlYS5pZCA9IFwidG9kby10ZXh0QXJlYVwiXG4gICAgc3VibWl0QnRuLmlkID0gXCJzdWJtaXQtYnV0dG9uXCJcbiAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC1idXR0b25cIlxuICAgIGRpdjEuaWQgPSBcImRpdk9uZVwiXG4gICAgZGl2Mi5pZCA9IFwiZGl2VHdvXCJcblxuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiXG4gICAgc3VibWl0QnRuLnR5cGUgPSBcImJ1dHRvblwiXG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCJcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiXG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxuICAgIHRleHRBcmVhLmNvbHMgPSBcIjU0XCJcbiAgICB0ZXh0QXJlYS5yb3dzID0gXCIxMFwiXG5cbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcImNhbmNlbFwiKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ0blwiKVxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRpdGxlTiA9IHRpdGxlSW5wdXQudmFsdWVcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uTiA9IHRleHRBcmVhLnZhbHVlXG5cbiAgICAgICAgYWRkVG9Eb1N0b3JhZ2UodGl0bGVOLCBkZXNjcmlwdGlvbk4sIHByb2plY3RUaXRsZS50ZXh0Q29udGVudClcblxuICAgICAgICBjdG5Ib2xkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGZvcm1FLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBjdG5Ib2xkZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCJcbiAgICB9KVxuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3RuSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBmb3JtRS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgY3RuSG9sZGVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiXG4gICAgfSlcblxuICAgIGRpdjEuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZGl2MS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxuXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBkaXYyLmFwcGVuZENoaWxkKHRleHRBcmVhKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYxKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2MilcblxuICAgIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGNhbmNlbClcbiAgICBcbiAgICBmb3JtRS5hcHBlbmRDaGlsZChmb3JtSG9sZGVyKVxufVxuXG5leHBvcnQgeyBnZXRUb0RvRm9ybSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IG5vdGVzIGZyb20gJy4vbm90ZXMuZ2lmJ1xuaW1wb3J0IHsgcGFnZUFzc2VtYmxlIH0gZnJvbSAnLi9jcmVhdGVQYWdlJ1xuXG5jb25zdCBldmVyeXRoaW5nSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIilcbi8vIGxldCBwcm9qZWN0cyA9IFt7dGl0bGU6IFwidGhcIiwgcHJpb3JpdHk6IFwiSGlnaFwiLCBkdWVEYXRlOiBcIjE0dGggT2N0b2JlclwifSwgXG4vLyAgICAgICAgICAgICAgICAge3RpdGxlOiBcInRoXCIsIHByaW9yaXR5OiBcIkxvd1wiLCBkdWVEYXRlOiBcIjE0dGggT2N0b2JlclwifSwgXG4vLyAgICAgICAgICAgICAgICAge3RpdGxlOiBcInRoXCIsIHByaW9yaXR5OiBcIk1vZGVyYXRlXCIsIGR1ZURhdGU6IFwiMTR0aCBPY3RvYmVyXCJ9LCBcbi8vICAgICAgICAgICAgICAgICB7dGl0bGU6IFwidGhcIiwgcHJpb3JpdHk6IFwiSGlnaFwiLCBkdWVEYXRlOiBcIjE0dGggT2N0b2JlclwifV1cblxuY29uc3QgVG9EbyA9ICgpID0+IHtcbiAgICBjb25zdCBnZXREYURhdGVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxuICAgICAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRfdGltZSA9IG1tICsgJy8nICsgZGQgKyAnLycgKyB5eXl5O1xuICAgICAgICByZXR1cm4ge2N1cnJlbnRfdGltZX1cbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVGl0bGUgPSAodGl0bGUsIHRhZ2xpbmUsIGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRpdGxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgICAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKClcbiAgICAgICAgY29uc3QgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgY29uc3QgZGF0ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgXG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuICAgICAgICB0aXRsZU5hbWUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIilcbiAgICAgICAgaG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJob2xkZXJcIilcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKFwidGFnLWxpbmVcIilcbiAgICAgICAgZGF0ZUhvbGRlci5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKVxuICAgICAgICBcbiAgICAgICAgdGl0bGVOYW1lLnRleHRDb250ZW50ID0gdGl0bGVcbiAgICAgICAgbGluZS50ZXh0Q29udGVudCA9IHRhZ2xpbmVcbiAgICAgICAgbG9nby5zcmMgPSBpbWFnZVxuICAgICAgICBkYXRlSG9sZGVyLnRleHRDb250ZW50ID0gZ2V0RGFEYXRlcygpLmN1cnJlbnRfdGltZVxuXG4gICAgICAgIGhvbGRlci5hcHBlbmRDaGlsZCh0aXRsZU5hbWUpXG4gICAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChsaW5lKVxuICAgICAgICBoZWFkaW5nLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoaG9sZGVyKVxuICAgICAgICBoZWFkaW5nLmFwcGVuZENoaWxkKGRhdGVIb2xkZXIpXG4gICAgICAgIGV2ZXJ5dGhpbmdIb2xkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICB9XG4gICAgcmV0dXJuIHtjcmVhdGVUaXRsZX1cbn1cblxuY29uc3Qgb25lUHJvamVjdCA9IFRvRG8oKVxub25lUHJvamVjdC5jcmVhdGVUaXRsZShcIkEtTm90ZXNcIiwgXCJUaGUgb25seSBhcHAgeW91IG5lZWQgdG8gbm90ZSBkb3duIGFsbCBvZiB5b3VyIFRvLURvJ3NcIiwgbm90ZXMpXG5sZXQgcHJvamVjdHMgPSBbXSAgICBcbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlQcm9qZWN0c1wiKSl7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlQcm9qZWN0c1wiKSlcbn1cbnBhZ2VBc3NlbWJsZShwcm9qZWN0cywgZXZlcnl0aGluZ0hvbGRlcikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=