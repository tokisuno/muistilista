/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home: () => (/* binding */ Home),
/* harmony export */   TodoItem: () => (/* binding */ TodoItem),
/* harmony export */   TodoList: () => (/* binding */ TodoList)
/* harmony export */ });
class Home {
    constructor() {
        this.lists = [];
    }
    addList = (list) => {
        this.lists.push(list);
    }
}

class TodoList {
    constructor(name = "default") {
        this.items = [];
        this.name = name;
    }
    addItem = (item) => {
        this.items.push(item);
    }
}

class TodoItem {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.priority = 0;
        this.status = false;
        this.id = Math.random().toString().slice(2,11);
        //this.id = generateItemId();
    }
    generateItemId = () => {
        const date = new Date();
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const hours = date.getHours().toString().padStart(2, "0");
        const mins = date.getMinutes().toString().padStart(2, "0");
        const secs = date.getSeconds().toString().padStart(2, "0");
        return `${year}${month}${day}${hours}${mins}${secs}`;
    }
}

let todo = new Home();
todo.addList(new TodoList());
todo.addList(new TodoList("second"));

(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("do homework", "finish assignment"));
(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("brush teeth", "teeth brushing time"));
(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("record video", "video recording time"));

(todo.lists.find((list) => list.name === "second")).addItem(new TodoItem("take photos", "taking photos with the lads"));

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
    localStorage.setItem('userData', JSON.stringify(todo));
} else {
    console.log('not nice');
}


/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ (() => {

console.log('dom');


/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* reexport module object */ _app_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   dom: () => (/* reexport module object */ _dom_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/modules/app.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dom_js__WEBPACK_IMPORTED_MODULE_1__);






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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init.js */ "./src/modules/init.js");


console.log(_modules_init_js__WEBPACK_IMPORTED_MODULE_0__.app, _modules_init_js__WEBPACK_IMPORTED_MODULE_0__.dom);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7Ozs7Ozs7OztBQ3pFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDQTs7QUFFWjs7Ozs7OztVQ0hwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042Qzs7QUFFN0MsWUFBWSxpREFBRyxFQUFFLGlEQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVpc3RpbGlzdGEvLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbXVpc3RpbGlzdGEvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vbXVpc3RpbGlzdGEvLi9zcmMvbW9kdWxlcy9pbml0LmpzIiwid2VicGFjazovL211aXN0aWxpc3RhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL211aXN0aWxpc3RhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL211aXN0aWxpc3RhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdWlzdGlsaXN0YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL211aXN0aWxpc3RhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXVpc3RpbGlzdGEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhvbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RzID0gW107XG4gICAgfVxuICAgIGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICB0aGlzLmxpc3RzLnB1c2gobGlzdCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcImRlZmF1bHRcIikge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9kb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IDA7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwxMSk7XG4gICAgICAgIC8vdGhpcy5pZCA9IGdlbmVyYXRlSXRlbUlkKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlSXRlbUlkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgICBjb25zdCBtaW5zID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIGNvbnN0IHNlY3MgPSBkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9JHttb250aH0ke2RheX0ke2hvdXJzfSR7bWluc30ke3NlY3N9YDtcbiAgICB9XG59XG5cbmxldCB0b2RvID0gbmV3IEhvbWUoKTtcbnRvZG8uYWRkTGlzdChuZXcgVG9kb0xpc3QoKSk7XG50b2RvLmFkZExpc3QobmV3IFRvZG9MaXN0KFwic2Vjb25kXCIpKTtcblxuKHRvZG8ubGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5uYW1lID09PSBcImRlZmF1bHRcIikpLmFkZEl0ZW0obmV3IFRvZG9JdGVtKFwiZG8gaG9tZXdvcmtcIiwgXCJmaW5pc2ggYXNzaWdubWVudFwiKSk7XG4odG9kby5saXN0cy5maW5kKChsaXN0KSA9PiBsaXN0Lm5hbWUgPT09IFwiZGVmYXVsdFwiKSkuYWRkSXRlbShuZXcgVG9kb0l0ZW0oXCJicnVzaCB0ZWV0aFwiLCBcInRlZXRoIGJydXNoaW5nIHRpbWVcIikpO1xuKHRvZG8ubGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5uYW1lID09PSBcImRlZmF1bHRcIikpLmFkZEl0ZW0obmV3IFRvZG9JdGVtKFwicmVjb3JkIHZpZGVvXCIsIFwidmlkZW8gcmVjb3JkaW5nIHRpbWVcIikpO1xuXG4odG9kby5saXN0cy5maW5kKChsaXN0KSA9PiBsaXN0Lm5hbWUgPT09IFwic2Vjb25kXCIpKS5hZGRJdGVtKG5ldyBUb2RvSXRlbShcInRha2UgcGhvdG9zXCIsIFwidGFraW5nIHBob3RvcyB3aXRoIHRoZSBsYWRzXCIpKTtcblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodG9kbykpO1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnbm90IG5pY2UnKTtcbn1cbiIsImNvbnNvbGUubG9nKCdkb20nKTtcbiIsImltcG9ydCAqIGFzIGFwcCBmcm9tIFwiLi9hcHAuanNcIjtcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb20uanNcIjtcblxuZXhwb3J0IHsgYXBwLCBkb20gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhcHAsIGRvbSB9IGZyb20gJy4vbW9kdWxlcy9pbml0LmpzJztcblxuY29uc29sZS5sb2coYXBwLCBkb20pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9