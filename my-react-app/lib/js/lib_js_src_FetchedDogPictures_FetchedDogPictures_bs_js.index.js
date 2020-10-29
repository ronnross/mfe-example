/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_react_app"] = self["webpackChunkmy_react_app"] || []).push([["lib_js_src_FetchedDogPictures_FetchedDogPictures_bs_js"],{

/***/ "./lib/js/src/FetchedDogPictures/FetchedDogPictures.bs.js":
/*!****************************************************************!*\
  !*** ./lib/js/src/FetchedDogPictures/FetchedDogPictures.bs.js ***!
  \****************************************************************/
/*! default exports */
/*! export make [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ \"./node_modules/bs-platform/lib/js/curry.js\");\n\nvar React = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n\nvar Belt_Array = __webpack_require__(/*! bs-platform/lib/js/belt_Array.js */ \"./node_modules/bs-platform/lib/js/belt_Array.js\");\n\nfunction FetchedDogPictures(Props) {\n  var match = React.useState(function () {\n    return (\n      /* LoadingDogs */\n      0\n    );\n  });\n  var setState = match[1];\n  var state = match[0];\n  React.useEffect(function () {\n    fetch(\"https://dog.ceo/api/breeds/image/random/3\").then(function (response) {\n      return response.json();\n    }).then(function (jsonResponse) {\n      Curry._1(setState, function (_previousState) {\n        return (\n          /* LoadedDogs */\n          [jsonResponse.message]\n        );\n      });\n\n      return Promise.resolve(undefined);\n    }).catch(function (_err) {\n      Curry._1(setState, function (_previousState) {\n        return (\n          /* ErrorFetchingDogs */\n          1\n        );\n      });\n\n      return Promise.resolve(undefined);\n    });\n  }, []);\n  var tmp;\n\n  if (typeof state === \"number\") {\n    tmp = state !== 0 ? \"An error occurred!\" : \"Loading...\";\n  } else {\n    var dogs = state[0];\n    tmp = Belt_Array.mapWithIndex(dogs, function (i, dog) {\n      var imageStyle = {\n        backgroundImage: \"url(\" + (String(dog) + \")\"),\n        backgroundPosition: \"center\",\n        height: \"120px\",\n        marginRight: i === (dogs.length - 1 | 0) ? \"0px\" : \"8px\",\n        width: \"100%\",\n        backgroundSize: \"cover\",\n        borderRadius: \"8px\",\n        boxShadow: \"0px 4px 16px rgb(200, 200, 200)\"\n      };\n      return React.createElement(\"div\", {\n        key: dog,\n        style: imageStyle\n      });\n    });\n  }\n\n  return React.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"120px\",\n      alignItems: \"center\",\n      justifyContent: \"center\"\n    }\n  }, tmp);\n}\n\nvar make = FetchedDogPictures;\nexports.make = make;\n/* react Not a pure module */\n\n//# sourceURL=webpack://my-react-app/./lib/js/src/FetchedDogPictures/FetchedDogPictures.bs.js?");

/***/ })

}]);