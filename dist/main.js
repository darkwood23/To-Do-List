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
function formValidation(first, second) {
    if(first.value === "") {
        return false
    }
    if(second.value === "") {
        return false
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
        if(validate != false) {
            (0,_add_to_localStorage__WEBPACK_IMPORTED_MODULE_0__.getInformation)(list)
            container.style.display = "grid"
            formHolder.style.display = "none"
        } else {
            window.alert("Please enter all the data(s)")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxxR0FBcUcsT0FBTyxpQkFBaUIsZ0JBQWdCLDZCQUE2QixHQUFHLFVBQVUsdUNBQXVDLDhCQUE4QixtQkFBbUIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IsOEJBQThCLDBCQUEwQixnQkFBZ0Isd0JBQXdCLG9CQUFvQiwrQkFBK0IsdUJBQXVCLEdBQUcsV0FBVyxtQkFBbUIseUJBQXlCLEdBQUcsZUFBZSxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLHlCQUF5QiwwQkFBMEIsOEJBQThCLDZCQUE2QixtQkFBbUIsR0FBRyxxQkFBcUIsa0JBQWtCLDhCQUE4QixvQkFBb0IsR0FBRyx5Q0FBeUMsb0JBQW9CLGVBQWUsR0FBRyxpQkFBaUIsa0JBQWtCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLHFCQUFxQixvQkFBb0IsNkNBQTZDLG1CQUFtQixnQkFBZ0IsR0FBRywwQkFBMEIsb0JBQW9CLHNCQUFzQiw4QkFBOEIsMEJBQTBCLCtCQUErQixtQkFBbUIsR0FBRyxnQ0FBZ0MsOEJBQThCLHNCQUFzQix1QkFBdUIsR0FBRyxpQ0FBaUMsMkNBQTJDLG1CQUFtQixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsVUFBVSxtQkFBbUIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLFdBQVcsOEJBQThCLDBCQUEwQixvQkFBb0IsbUJBQW1CLCtCQUErQixvQkFBb0IsMEJBQTBCLDhCQUE4QixvQkFBb0IsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsZ0JBQWdCLHNCQUFzQixHQUFHLHdCQUF3Qix5QkFBeUIsR0FBRyw4Q0FBOEMseUJBQXlCLEdBQUcsV0FBVyxvQkFBb0IsZ0JBQWdCLDZCQUE2QiwwQkFBMEIsR0FBRyxpQkFBaUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsOEJBQThCLDBCQUEwQixHQUFHLHVCQUF1Qix3QkFBd0IsOEJBQThCLEdBQUcsYUFBYSwrQkFBK0IsaUJBQWlCLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixtQkFBbUIsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsd0JBQXdCLHVDQUF1Qyw2Q0FBNkMsR0FBRyxtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLCtCQUErQixvQkFBb0IsR0FBRyxtQkFBbUIsOEJBQThCLDBCQUEwQixvQkFBb0IsOEJBQThCLEdBQUcsOEJBQThCLG9CQUFvQixnQkFBZ0IsR0FBRyxtQkFBbUIsa0JBQWtCLEdBQUcseUJBQXlCLHNCQUFzQixtQkFBbUIsR0FBRyxXQUFXLG1CQUFtQixvQkFBb0Isb0JBQW9CLCtCQUErQix5QkFBeUIsMEJBQTBCLEdBQUcsa0JBQWtCLHFCQUFxQix5QkFBeUIscUJBQXFCLDhCQUE4QixtQkFBbUIsdUJBQXVCLGVBQWUsZ0JBQWdCLGlCQUFpQixpQkFBaUIsc0JBQXNCLEdBQUcsbUJBQW1CLHFCQUFxQix5QkFBeUIscUJBQXFCLDhCQUE4QixrQkFBa0Isd0JBQXdCLGdCQUFnQixlQUFlLGtCQUFrQixpQkFBaUIsc0JBQXNCLEdBQUcsbUJBQW1CLDhCQUE4QixzQkFBc0IsR0FBRyxXQUFXLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyxnQkFBZ0IsK0JBQStCLDBCQUEwQixtQkFBbUIsK0JBQStCLHNCQUFzQixvQkFBb0IseUJBQXlCLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixnQkFBZ0IsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsMEJBQTBCLHlCQUF5QixHQUFHLG9EQUFvRCx5QkFBeUIsR0FBRyxjQUFjLHNCQUFzQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsYUFBYSxvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLG1CQUFtQjtBQUNsM1g7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQkFBK0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwwREFBWTtBQUNoQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A0QztBQUNIO0FBQ0s7QUFDTjtBQUNIOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBVztBQUNuQixLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLDJDQUFRO0FBQ3JDO0FBQ0EsZ0JBQWdCLHdEQUFVO0FBQzFCLGFBQWE7O0FBRWI7QUFDQTtBQUNBLG9CQUFvQiw0REFBa0I7QUFDdEM7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRm9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBWTtBQUNwQixNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYc0Q7QUFDUjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDREQUFjO0FBQ3JDO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIb0M7QUFDSTtBQUNBO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLFFBQVEsc0RBQVc7QUFDbkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxlQUFlLDRDQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQSxpQ0FBaUMsMEJBQTBCO0FBQzNELG9CQUFvQixzREFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDLFNBQVM7QUFDVCx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBLGdDQUFnQywrQkFBK0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3RELGdCQUFnQixzREFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN3QztBQUNZOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxtRUFBYzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDVztBQUNZOztBQUUzQztBQUNBLG9CQUFvQix1REFBdUQ7QUFDM0Usb0JBQW9CLHNEQUFzRDtBQUMxRSxvQkFBb0IsMkRBQTJEO0FBQy9FLG9CQUFvQix1REFBdUQ7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSw0RkFBNEYsdUNBQUs7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBWSw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGQtdG8tbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hlY2tFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlLWxvZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90by1kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWxvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RzOmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IGFsaWFzO1xcbn1cXG5cXG4uZGVhZGxpbmUtaG9sZGVyLFxcbi5wcmlvcml0eS1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLnRyYXNoLWljb24ge1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuLnRyYXNoLWljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNwcm9qZWN0LWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI3Byb2plY3QtY3JlYXRvci1idG4ge1xcbiAgICBoZWlnaHQ6IDE5MHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3Byb2plY3QtY3JlYXRvci1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IG9yYW5nZTsgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbn1cXG5cXG4jcHJvamVjdC1jcmVhdG9yLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDgsIDEwMCUsIDYxJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubW9kZXJhdGUge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4jZm9ybSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGRfcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuI2FkZF9wcm9qZWN0IGxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jYWRkX3Byb2plY3QgaW5wdXQsXFxuI2FkZF9wcm9qZWN0IHNlbGVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxOHJlbTtcXG59XFxuXFxuLmRpdjEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY2FuY2VsOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmZvcm0gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQ3KTtcXG59XFxuXFxuLnByb2plY3QtaGVhZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3QtcHJpb3JpdHktaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1iYWNrIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJhY2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuLmNpcmNsZSB7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgd2lkdGg6IDExMHJlbTtcXG4gICAgaGVpZ2h0OiAxMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5jaXJjbGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNXB4O1xcbiAgICByaWdodDogNXB4O1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaXJjbGU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNpcmNsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgICB3aWR0aDogOTBweDtcXG59XFxuXFxuLnRvZG8taG9sZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3JlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtLWFsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiN0b2RvLWZvcm0tYWxsIGxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWFsbCBpbnB1dCxcXG4jdG9kby1mb3JtLWFsbCB0ZXh0YXJlYSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbnRleHRhcmVhLFxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jdG9kby10aXRsZS1pbnB1dCB7XFxuICAgIHdpZHRoOiA1OC44cmVtO1xcbn1cXG5cXG4uZGl2T25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lB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ZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVrdGEmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2MCU7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0czpob3ZlciB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBhbGlhcztcXG59XFxuXFxuLmRlYWRsaW5lLWhvbGRlcixcXG4ucHJpb3JpdHktaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi50cmFzaC1pY29uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi50cmFzaC1pY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jcHJvamVjdC1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbiNwcm9qZWN0LWNyZWF0b3ItYnRuIHtcXG4gICAgaGVpZ2h0OiAxOTBweDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNwcm9qZWN0LWNyZWF0b3ItYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBvcmFuZ2U7ICBcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG59XFxuXFxuI3Byb2plY3QtY3JlYXRvci1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ4LCAxMDAlLCA2MSUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm1vZGVyYXRlIHtcXG4gICAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuI2Zvcm0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkX3Byb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNhZGRfcHJvamVjdCBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI2FkZF9wcm9qZWN0IGlucHV0LFxcbiNhZGRfcHJvamVjdCBzZWxlY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMThyZW07XFxufVxcblxcbi5kaXYxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLnN1Ym1pdC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNhbmNlbDpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbjphY3RpdmUge1xcbiAgICBjb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjY1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM0Nyk7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LXByaW9yaXR5LWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtYmFjayB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1iYWNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcbi5jaXJjbGUge1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIHdpZHRoOiAxMTByZW07XFxuICAgIGhlaWdodDogMTFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbn1cXG4uY2lyY2xlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogLTVweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgei1pbmRleDogOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2lyY2xlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaXJjbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi50b2RvLWhvbGQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybS1hbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtLWFsbCBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI3RvZG8tZm9ybS1hbGwgaW5wdXQsXFxuI3RvZG8tZm9ybS1hbGwgdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tbGVmdDogMTZyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG50ZXh0YXJlYSxcXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI3RvZG8tdGl0bGUtaW5wdXQge1xcbiAgICB3aWR0aDogNTguOHJlbTtcXG59XFxuXFxuLmRpdk9uZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGFnZUFzc2VtYmxlIH0gZnJvbSBcIi4vY3JlYXRlUGFnZVwiXG5cbmZ1bmN0aW9uIGdldEluZm9ybWF0aW9uKGxpc3QpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZVxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlXG4gICAgbGV0IHRvZG8gPSBbXVxuICAgIGxpc3QucHVzaCh7dGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCB0b2RvfSlcbiAgICBhZGRUb1N0b3JhZ2UobGlzdClcbn1cblxuZnVuY3Rpb24gYWRkVG9TdG9yYWdlKGxpc3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15UHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobGlzdCkpXG4gICAgcGFnZUFzc2VtYmxlKGxpc3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpKVxufVxuXG5leHBvcnQge2FkZFRvU3RvcmFnZSwgZ2V0SW5mb3JtYXRpb259IiwiZnVuY3Rpb24gZm9ybVZhbGlkYXRpb24oZmlyc3QsIHNlY29uZCkge1xuICAgIGlmKGZpcnN0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZihzZWNvbmQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgeyBmb3JtVmFsaWRhdGlvbiB9IiwiaW1wb3J0IHsgZGlzcGxheUZvcm0gfSBmcm9tIFwiLi9kaXNwbGF5LWZvcm1cIlxuaW1wb3J0IHsgZGVsZXRlTG9ncyB9IGZyb20gXCIuL2RlbGV0ZS1sb2dcIlxuaW1wb3J0IHsgZGlzcGxheVByb2plY3RJbmZvIH0gZnJvbSBcIi4vcHJvamVjdFwiXG5pbXBvcnQgeyBjcmVhdGVOZXdUb0RvIH0gZnJvbSBcIi4vdG8tZG9zXCJcbmltcG9ydCB0cmFzaENhbiBmcm9tJy4vdHJhc2gtY2FuLnN2ZydcblxuZnVuY3Rpb24gcGFnZUFzc2VtYmxlKHByb2plY3RzLCBldmVyeXRoaW5nSG9sZGVyKSB7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWhvbGRlclwiKSl7XG4gICAgICAgIGV2ZXJ5dGhpbmdIb2xkZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWhvbGRlclwiKSlcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvamVjdEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBuZXdQcm9qZWN0Q3JlYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICAgIHByb2plY3RIb2xkZXIudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgXG4gICAgbmV3UHJvamVjdENyZWF0b3IudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCJcbiAgICBuZXdQcm9qZWN0Q3JlYXRvci5pZCA9IFwicHJvamVjdC1jcmVhdG9yLWJ0blwiXG4gICAgbmV3UHJvamVjdENyZWF0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkaXNwbGF5Rm9ybShwcm9qZWN0cylcbiAgICB9KVxuXG4gICAgcHJvamVjdEhvbGRlci5pZCA9IFwicHJvamVjdC1ob2xkZXJcIlxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlQcm9qZWN0c1wiKSl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgXG4gICAgICAgICAgICBsZXQgcHJvamVjdERlYWRMaW5lSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgbGV0IHByb2plY3REZWFkTGluZURpc3BsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuICAgICAgICAgICAgbGV0IHByb2plY3REZWFkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuICAgIFxuICAgICAgICAgICAgbGV0IHByb2plY3RQcmlvcml0eUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGxldCBwcm9qZWN0UHJpb3JpdHlEaXNwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcbiAgICAgICAgICAgIGxldCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcblxuICAgICAgICAgICAgbGV0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKVxuICAgIFxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIilcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKVxuICAgICAgICAgICAgcHJvamVjdERlYWRMaW5lSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWFkbGluZS1ob2xkZXJcIilcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUhvbGRlci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaG9sZGVyXCIpXG4gICAgXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuaWQgPSBwcm9qZWN0c1tpXS50aXRsZVxuICAgICAgICAgICAgcHJvamVjdERlYWRMaW5lLmlkID0gXCJkZWFkbGluZSBvZiBcIiArIHByb2plY3RzW2ldLnRpdGxlXG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuaWQgPSBcInByaW9yaXR5IG9mIFwiICsgcHJvamVjdHNbaV0udGl0bGVcbiAgICBcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnRpdGxlXG4gICAgICAgICAgICBwcm9qZWN0RGVhZExpbmVEaXNwbGF5ZXIudGV4dENvbnRlbnQgPSBcIkRlYWRsaW5lOlwiXG4gICAgICAgICAgICBwcm9qZWN0RGVhZExpbmUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5kdWVEYXRlXG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlEaXNwbGF5ZXIudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiXG4gICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5wcmlvcml0eVxuICAgIFxuICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9PT0gXCJIaWdoXCIpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImhpZ2hcIilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID09PSBcIk1vZGVyYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm1vZGVyYXRlXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcInRyYXNoLWljb25cIilcbiAgICAgICAgICAgIGRlbGV0ZUljb24uaWQgPSBcInRyYXNoLWljb25cIlxuICAgICAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSB0cmFzaENhblxuICAgICAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlTG9ncyhpKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkICE9IFwidHJhc2gtaWNvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0SW5mbyhwcm9qZWN0VGl0bGUsIHByb2plY3REZWFkTGluZSwgcHJvamVjdFByaW9yaXR5KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHByb2plY3REZWFkTGluZUhvbGRlci5hcHBlbmRDaGlsZChwcm9qZWN0RGVhZExpbmVEaXNwbGF5ZXIpXG4gICAgICAgICAgICBwcm9qZWN0RGVhZExpbmVIb2xkZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlYWRMaW5lKVxuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5SG9sZGVyLmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eURpc3BsYXllcilcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUhvbGRlci5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RGVhZExpbmVIb2xkZXIpXG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eUhvbGRlcilcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbilcbiAgICBcbiAgICAgICAgICAgIHByb2plY3RIb2xkZXIuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2plY3RIb2xkZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENyZWF0b3IpXG4gICAgZXZlcnl0aGluZ0hvbGRlci5hcHBlbmRDaGlsZChwcm9qZWN0SG9sZGVyKVxufVxuXG5leHBvcnQgeyBwYWdlQXNzZW1ibGUgfSIsImltcG9ydCB7IGFkZFRvU3RvcmFnZSB9IGZyb20gXCIuL2FkZC10by1sb2NhbFN0b3JhZ2VcIlxuXG5mdW5jdGlvbiBkZWxldGVMb2dzKGtleSkge1xuICAgIGxldCBzdXJlID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwcm9qZWN0P1wiKVxuICAgIGlmKHN1cmUpIHtcbiAgICAgICAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15UHJvamVjdHNcIikpXG4gICAgICAgIHByb2plY3RzLnNwbGljZShrZXksIDEpXG4gICAgICAgIGFkZFRvU3RvcmFnZShwcm9qZWN0cylcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5cbiAgICB9XG59XG5cbmV4cG9ydCB7IGRlbGV0ZUxvZ3MgfSIsImltcG9ydCB7IGdldEluZm9ybWF0aW9uIH0gZnJvbSBcIi4vYWRkLXRvLWxvY2FsU3RvcmFnZVwiXG5pbXBvcnQgeyBmb3JtVmFsaWRhdGlvbiB9IGZyb20gXCIuL2NoZWNrRXJyb3JzXCJcblxuZnVuY3Rpb24gZGlzcGxheUZvcm0obGlzdCkge1xuICAgIGNvbnN0IGZvcm1Ib2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIilcbiAgICBmb3JtSG9sZGVyLnRleHRDb250ZW50ID0gXCJcIlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG5cbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIGNvbnN0IG1vZGVyYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG5cbiAgICBjb25zdCB0aGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKVxuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKVxuICAgIGRpdjEuY2xhc3NMaXN0LmFkZChcImRpdjFcIilcblxuICAgIGZvcm0uYWN0aW9uID0gXCJhZGQtcHJvamVjdFwiXG4gICAgZm9ybS5tZXRob2QgPSBcInBvc3RcIlxuICAgIGZvcm0uaWQgPSBcImFkZF9wcm9qZWN0XCJcblxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1FXCIpXG4gICAgZm9ybUhvbGRlci5jbGFzc0xpc3QuYWRkKFwiZm9ybUhcIilcblxuICAgIGZpcnN0LmlkID0gXCJmaXJzdFwiXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIlxuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiXG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIlxuICAgIHRpdGxlSW5wdXQubmFtZSA9IFwicHJvamVjdF90aXRsZVwiXG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZC52YWx1ZU9mKHRydWUpXG5cbiAgICBzZWNvbmQuaWQgPSBcInNlY29uZFwiXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKVxuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIlxuICAgIHNlbGVjdC5uYW1lID0gXCJwcmlvcml0eVwiXG4gICAgc2VsZWN0LmlkID0gXCJwcmlvcml0eVwiXG4gICAgc2VsZWN0LnJlcXVpcmVkID0gdHJ1ZVxuICAgIGxvdy52YWx1ZSA9IFwiTG93XCJcbiAgICBsb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiXG4gICAgbW9kZXJhdGUudmFsdWUgPSBcIk1vZGVyYXRlXCJcbiAgICBtb2RlcmF0ZS50ZXh0Q29udGVudCA9IFwiTW9kZXJhdGVcIlxuICAgIGhpZ2gudmFsdWUgPSBcIkhpZ2hcIlxuICAgIGhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIlxuXG4gICAgdGhpcmQuaWQgPSBcInRoaXJkXCJcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJylcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIlxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImRhdGVcIlxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJwcm9qZWN0X2R1ZV9kYXRlXCJcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlXG5cbiAgICBzdWJtaXRCdG4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICBzdWJtaXRCdG4uaWQgPSBcInN1Ym1pdC1idG5cIlxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ0blwiKVxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSBmb3JtVmFsaWRhdGlvbih0aXRsZUlucHV0LCBkdWVEYXRlSW5wdXQpXG4gICAgICAgIGlmKHZhbGlkYXRlICE9IGZhbHNlKSB7XG4gICAgICAgICAgICBnZXRJbmZvcm1hdGlvbihsaXN0KVxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIlxuICAgICAgICAgICAgZm9ybUhvbGRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBhbGwgdGhlIGRhdGEocylcIilcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY2FuY2VsLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgY2FuY2VsLmlkID0gXCJjYW5jZWxcIlxuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpXG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIlxuICAgICAgICBmb3JtSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0pXG5cbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgZm9ybUhvbGRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcblxuICAgIGZpcnN0LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGZpcnN0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXG5cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobG93KVxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChtb2RlcmF0ZSlcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaClcbiAgICBzZWNvbmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG4gICAgc2Vjb25kLmFwcGVuZENoaWxkKHNlbGVjdClcblxuICAgIHRoaXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgdGhpcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KVxuXG4gICAgZGl2MS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gICAgZGl2MS5hcHBlbmRDaGlsZChjYW5jZWwpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpcnN0KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2Vjb25kKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGhpcmQpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYxKVxuXG4gICAgZm9ybUhvbGRlci5hcHBlbmRDaGlsZChmb3JtKVxufVxuXG5leHBvcnQgeyBkaXNwbGF5Rm9ybSB9IiwiaW1wb3J0IGFycm93IGZyb20gJy4vYXJyb3ctbGVmdC5zdmcnXG5pbXBvcnQgeyBnZXRUb0RvRm9ybSB9IGZyb20gJy4vdG9kb2Zvcm0nXG5pbXBvcnQgeyBjcmVhdGVOZXdUb0RvIH0gZnJvbSAnLi90by1kb3MnXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdEluZm8odGl0bGUsIGRlYWRsaW5lLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuICAgIFxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICBjb25zdCBwcmlvcml0eUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBwcmlvcml0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICBjb25zdCBwcmlvcml0eUxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgY29uc3QgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBjb25zdCB0b2RvSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IG5ld1RvZG9DcmVhdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgXG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkXCIpXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kdWVEYXRlXCIpXG4gICAgcHJpb3JpdHlIb2xkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcHJpb3JpdHktaG9sZGVyXCIpXG4gICAgcHJpb3JpdHlOYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXByaW9yaXR5LW5hbWVcIilcbiAgICBiYWNrLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJhY2tcIilcbiAgICB0b2RvSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRvZG8taG9sZGVyXCIpXG4gICAgbmV3VG9kb0NyZWF0ZXIuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHlcIilcbiAgICBpZihwcmlvcml0eS50ZXh0Q29udGVudCA9PT0gXCJtb2RlcmF0ZVwiKSB7XG4gICAgICAgIHByaW9yaXR5TGV2ZWwuY2xhc3NMaXN0LmFkZChcIm1vZGVyYXRlXCIpXG4gICAgfSBlbHNlIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgcHJpb3JpdHlMZXZlbC5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5TGV2ZWwuY2xhc3NMaXN0LmFkZChcImxvd1wiKVxuICAgIH1cblxuICAgIG5ld1RvZG9DcmVhdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZ2V0VG9Eb0Zvcm0odGl0bGUpXG4gICAgfSlcblxuICAgIGJhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiLi4vZGlzdC9pbmRleC5odG1sXCIpXG4gICAgfSlcblxuICAgIGJhY2suc3JjID0gYXJyb3dcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnRcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJEZWFkbGluZTogXCIgKyBkZWFkbGluZS50ZXh0Q29udGVudFxuICAgIHByaW9yaXR5TmFtZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiXG4gICAgcHJpb3JpdHlMZXZlbC50ZXh0Q29udGVudCA9IHByaW9yaXR5LnRleHRDb250ZW50XG5cbiAgICBwcmlvcml0eUhvbGRlci5hcHBlbmRDaGlsZChwcmlvcml0eU5hbWUpXG4gICAgcHJpb3JpdHlIb2xkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMZXZlbClcblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoYmFjaylcbiAgICBoZWFkLmFwcGVuZENoaWxkKG5hbWUpXG4gICAgaGVhZC5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgIGhlYWQuYXBwZW5kQ2hpbGQocHJpb3JpdHlIb2xkZXIpXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHRvZG9Ib2xkZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChuZXdUb2RvQ3JlYXRlcilcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KVxuXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVByb2plY3RzXCIpKSB7XG4gICAgICAgIGxldCBuZXdOID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15UHJvamVjdHNcIikpXG4gICAgICAgIGZvcihsZXQgdSA9IDA7IHUgPCBuZXdOLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgICAgICBpZihuZXdOW3VdLnRpdGxlID09PSB0aXRsZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10b2RvLWhvbGRlclwiKS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbm4gPSAwOyBubiA8IG5ld05bdV0udG9kby5sZW5ndGg7IG5uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9EbyhuZXdOW3VdLnRvZG9bbm5dLnRvZG9UaXRsZSwgbmV3Tlt1XS50b2RvW25uXS5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0SW5mbyB9IiwiZnVuY3Rpb24gY3JlYXRlTmV3VG9Ebyh0aXRsZU4sIGRlc2NyaXB0aW9uTikge1xuICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10b2RvLWhvbGRlclwiKVxuICAgIFxuICAgIGNvbnN0IHRvZG9Ib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGRpdjEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBjb25zdCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgY29uc3QgZG9uZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKVxuXG4gICAgdG9kb0hvbGQuY2xhc3NMaXN0LmFkZChcInRvZG8taG9sZFwiKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpXG4gICAgZG9uZS5jbGFzc0xpc3QuYWRkKFwidG9kby1sYWJlbC1kb25lXCIpXG4gICAgZG9uZUJveC5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVja2JveFwiKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpXG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKFwiZGl2T25lXCIpXG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwiZGl2MlwiKVxuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZU5cbiAgICBkb25lLnRleHRDb250ZW50ID0gXCJEb25lOlwiXG4gICAgZG9uZUJveC50eXBlID0gXCJjaGVja2JveFwiXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbk5cblxuICAgIGRpdjEuYXBwZW5kQ2hpbGQoZG9uZSlcbiAgICBkaXYxLmFwcGVuZENoaWxkKGRvbmVCb3gpXG5cbiAgICBkaXYyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoYnIpXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChkaXYxKVxuXG4gICAgdG9kb0hvbGQuYXBwZW5kQ2hpbGQoZGl2MilcbiAgICB0b2RvSG9sZC5hcHBlbmRDaGlsZChicilcbiAgICB0b2RvSG9sZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIGhvbGRlci5hcHBlbmRDaGlsZCh0b2RvSG9sZClcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmV3VG9EbyB9IiwiaW1wb3J0IHsgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL3RvLWRvc1wiXG5cbi8vIGZ1bmN0aW9uIGFkZFRvRG9TdG9yYWdlKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuLy8gICAgIGxldCBteUFyciA9IFtdXG4vLyAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVRvRG9zXCIpKSB7XG4vLyAgICAgICAgIG15QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15VG9Eb3NcIikpXG4vLyAgICAgICAgIG15QXJyLnB1c2goe3RpdGxlLCBkZXNjcmlwdGlvbn0pXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgbXlBcnIucHVzaCh7dGl0bGUsIGRlc2NyaXB0aW9ufSlcbi8vICAgICB9XG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteVRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KG15QXJyKSlcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdG9kby1ob2xkZXJcIikudGV4dENvbnRlbnQgPSAnJ1xuLy8gICAgIGZvcihsZXQgdSA9IG15QXJyLmxlbmd0aDsgdSA9PT0gMDsgdS0tKSB7XG4vLyAgICAgICAgIGNyZWF0ZU5ld1RvRG8obXlBcnJbdV0udGl0bGUsIG15QXJyW3VdLmRlc2NyaXB0aW9uKVxuLy8gICAgIH1cbiAgICBcbi8vIH1cblxuZnVuY3Rpb24gYWRkVG9Eb1N0b3JhZ2UodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0VGl0bGUpIHtcbiAgICBsZXQgbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVByb2plY3RzXCIpKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG5baV0udGl0bGUgPT09IHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgICAgIG5baV0udG9kby5wdXNoKHt0b2RvVGl0bGUgOiB0aXRsZSwgZGVzY3JpcHRpb259KVxuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShuKSlcbiAgICBsZXQgbmV3TiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVByb2plY3RzXCIpKVxuICAgIGZvcihsZXQgdSA9IDA7IHUgPCBuZXdOLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgIGlmKG5ld05bdV0udGl0bGUgPT09IHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRvZG8taG9sZGVyXCIpLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgICAgIGZvcihsZXQgbm4gPSAwOyBubiA8IG5ld05bdV0udG9kby5sZW5ndGg7IG5uKyspIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb0RvKG5ld05bdV0udG9kb1tubl0udG9kb1RpdGxlLCBuZXdOW3VdLnRvZG9bbm5dLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBhZGRUb0RvU3RvcmFnZSB9IiwiaW1wb3J0IHsgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL3RvLWRvc1wiXG5pbXBvcnQgeyBhZGRUb0RvU3RvcmFnZSB9IGZyb20gXCIuL3RvZG8tbG9jYWxTdG9yYWdlXCJcblxuZnVuY3Rpb24gZ2V0VG9Eb0Zvcm0ocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgY3RuSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIilcbiAgICBjb25zdCBmb3JtRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKVxuICAgIFxuICAgIGN0bkhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgZm9ybUUudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgZm9ybUUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIFxuICAgIGNvbnN0IGZvcm1Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuXG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuXG4gICAgZm9ybUhvbGRlci5pZCA9IFwidG9kby1mb3JtLWFsbFwiXG4gICAgZm9ybS5pZCA9IFwidG9kby1mb3JtXCJcbiAgICB0aXRsZS5pZCA9IFwidG9kby10aXRsZVwiXG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidG9kby10aXRsZS1pbnB1dFwiXG4gICAgZGVzY3JpcHRpb24uaWQgPSBcInRvZG8tZGVzY3JpcHRpb25cIlxuICAgIHRleHRBcmVhLmlkID0gXCJ0b2RvLXRleHRBcmVhXCJcbiAgICBzdWJtaXRCdG4uaWQgPSBcInN1Ym1pdC1idXR0b25cIlxuICAgIGNhbmNlbC5pZCA9IFwiY2FuY2VsLWJ1dHRvblwiXG4gICAgZGl2MS5pZCA9IFwiZGl2T25lXCJcbiAgICBkaXYyLmlkID0gXCJkaXZUd29cIlxuXG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCJcbiAgICBzdWJtaXRCdG4udHlwZSA9IFwiYnV0dG9uXCJcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIlxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIlxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCJcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXG4gICAgdGV4dEFyZWEuY29scyA9IFwiNTRcIlxuICAgIHRleHRBcmVhLnJvd3MgPSBcIjEwXCJcblxuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdGl0bGVOID0gdGl0bGVJbnB1dC52YWx1ZVxuICAgICAgICBsZXQgZGVzY3JpcHRpb25OID0gdGV4dEFyZWEudmFsdWVcblxuICAgICAgICBhZGRUb0RvU3RvcmFnZSh0aXRsZU4sIGRlc2NyaXB0aW9uTiwgcHJvamVjdFRpdGxlLnRleHRDb250ZW50KVxuXG4gICAgICAgIGN0bkhvbGRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgZm9ybUUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGN0bkhvbGRlci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIlxuICAgIH0pXG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjdG5Ib2xkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGZvcm1FLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBjdG5Ib2xkZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCJcbiAgICB9KVxuXG4gICAgZGl2MS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBkaXYxLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXG5cbiAgICBkaXYyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGRpdjIuYXBwZW5kQ2hpbGQodGV4dEFyZWEpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjEpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYyKVxuXG4gICAgZm9ybUhvbGRlci5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoY2FuY2VsKVxuICAgIFxuICAgIGZvcm1FLmFwcGVuZENoaWxkKGZvcm1Ib2xkZXIpXG59XG5cbmV4cG9ydCB7IGdldFRvRG9Gb3JtIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgbm90ZXMgZnJvbSAnLi9ub3Rlcy5naWYnXG5pbXBvcnQgeyBwYWdlQXNzZW1ibGUgfSBmcm9tICcuL2NyZWF0ZVBhZ2UnXG5cbmNvbnN0IGV2ZXJ5dGhpbmdIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKVxuLy8gbGV0IHByb2plY3RzID0gW3t0aXRsZTogXCJ0aFwiLCBwcmlvcml0eTogXCJIaWdoXCIsIGR1ZURhdGU6IFwiMTR0aCBPY3RvYmVyXCJ9LCBcbi8vICAgICAgICAgICAgICAgICB7dGl0bGU6IFwidGhcIiwgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IFwiMTR0aCBPY3RvYmVyXCJ9LCBcbi8vICAgICAgICAgICAgICAgICB7dGl0bGU6IFwidGhcIiwgcHJpb3JpdHk6IFwiTW9kZXJhdGVcIiwgZHVlRGF0ZTogXCIxNHRoIE9jdG9iZXJcIn0sIFxuLy8gICAgICAgICAgICAgICAgIHt0aXRsZTogXCJ0aFwiLCBwcmlvcml0eTogXCJIaWdoXCIsIGR1ZURhdGU6IFwiMTR0aCBPY3RvYmVyXCJ9XVxuXG5jb25zdCBUb0RvID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldERhRGF0ZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudF90aW1lID0gbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XG4gICAgICAgIHJldHVybiB7Y3VycmVudF90aW1lfVxuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUaXRsZSA9ICh0aXRsZSwgdGFnbGluZSwgaW1hZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdGl0bGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKVxuICAgICAgICBjb25zdCBob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBjb25zdCBkYXRlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXG4gICAgICAgIHRpdGxlTmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIilcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxuICAgICAgICBob2xkZXIuY2xhc3NMaXN0LmFkZChcImhvbGRlclwiKVxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0YWctbGluZVwiKVxuICAgICAgICBkYXRlSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpXG4gICAgICAgIFxuICAgICAgICB0aXRsZU5hbWUudGV4dENvbnRlbnQgPSB0aXRsZVxuICAgICAgICBsaW5lLnRleHRDb250ZW50ID0gdGFnbGluZVxuICAgICAgICBsb2dvLnNyYyA9IGltYWdlXG4gICAgICAgIGRhdGVIb2xkZXIudGV4dENvbnRlbnQgPSBnZXREYURhdGVzKCkuY3VycmVudF90aW1lXG5cbiAgICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKHRpdGxlTmFtZSlcbiAgICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGxpbmUpXG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQobG9nbylcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChob2xkZXIpXG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoZGF0ZUhvbGRlcilcbiAgICAgICAgZXZlcnl0aGluZ0hvbGRlci5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICAgIH1cbiAgICByZXR1cm4ge2NyZWF0ZVRpdGxlfVxufVxuXG5jb25zdCBvbmVQcm9qZWN0ID0gVG9EbygpXG5vbmVQcm9qZWN0LmNyZWF0ZVRpdGxlKFwiQS1Ob3Rlc1wiLCBcIlRoZSBvbmx5IGFwcCB5b3UgbmVlZCB0byBub3RlIGRvd24gYWxsIG9mIHlvdXIgVG8tRG8nc1wiLCBub3RlcylcbmxldCBwcm9qZWN0cyA9IFtdICAgIFxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVByb2plY3RzXCIpKXtcbiAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVByb2plY3RzXCIpKVxufVxucGFnZUFzc2VtYmxlKHByb2plY3RzLCBldmVyeXRoaW5nSG9sZGVyKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==