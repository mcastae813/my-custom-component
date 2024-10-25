/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./LinearInputControl/index.ts":
/*!*************************************!*\
  !*** ./LinearInputControl/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinearInputControl: () => (/* binding */ LinearInputControl)\n/* harmony export */ });\nclass LinearInputControl {\n  /**\r\n   * Empty constructor.\r\n   */\n  constructor() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n  init(context, notifyOutputChanged, state, container) {\n    // Add control initialization code\n    this._context = context;\n    this._container = document.createElement(\"div\");\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._refreshData = this.refreshData.bind(this);\n    // creating HTML elements for the input type range and binding it to the function which \n    // refreshes the control data\n    this.inputElement = document.createElement(\"input\");\n    this.inputElement.setAttribute(\"type\", \"range\");\n    this.inputElement.addEventListener(\"input\", this._refreshData);\n    //setting the max and min values for the control.\n    this.inputElement.setAttribute(\"min\", \"1\");\n    this.inputElement.setAttribute(\"max\", \"1000\");\n    this.inputElement.setAttribute(\"class\", \"linearslider\");\n    this.inputElement.setAttribute(\"id\", \"linearrangeinput\");\n    // creating a HTML label element that shows the value that is set on the linear range control\n    this.labelElement = document.createElement(\"label\");\n    this.labelElement.setAttribute(\"class\", \"LinearRangeLabel\");\n    this.labelElement.setAttribute(\"id\", \"lrclabel\");\n    // retrieving the latest value from the control and setting it to the HTMl elements.\n    this._value = context.parameters.controlValue.raw;\n    this.inputElement.setAttribute(\"value\", context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"0\");\n    this.labelElement.innerHTML = context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"0\";\n    // appending the HTML elements to the control's HTML container element.\n    this._container.appendChild(this.inputElement);\n    this._container.appendChild(this.labelElement);\n    container.appendChild(this._container);\n  }\n  refreshData(evt) {\n    this._value = this.inputElement.value;\n    this.labelElement.innerHTML = this.inputElement.value;\n    this._notifyOutputChanged();\n  }\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n  updateView(context) {\n    // Add code to update control view\n  }\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as \"bound\" or \"output\"\r\n   */\n  getOutputs() {\n    return {};\n  }\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  destroy() {\n    // Add code to cleanup control if necessary\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./LinearInputControl/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./LinearInputControl/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('ContosoNamespace.LinearInputControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LinearInputControl);
} else {
	var ContosoNamespace = ContosoNamespace || {};
	ContosoNamespace.LinearInputControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LinearInputControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}