/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/js/src/FetchedDogPictures/FetchedDogPictures.bs.js":
/*!****************************************************************!*\
  !*** ./lib/js/src/FetchedDogPictures/FetchedDogPictures.bs.js ***!
  \****************************************************************/
/*! default exports */
/*! export make [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ \"./node_modules/bs-platform/lib/js/curry.js\");\n\nvar React = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n\nvar Belt_Array = __webpack_require__(/*! bs-platform/lib/js/belt_Array.js */ \"./node_modules/bs-platform/lib/js/belt_Array.js\");\n\nfunction FetchedDogPictures(Props) {\n  var match = React.useState(function () {\n    return (\n      /* LoadingDogs */\n      0\n    );\n  });\n  var setState = match[1];\n  var state = match[0];\n  React.useEffect(function () {\n    fetch(\"https://dog.ceo/api/breeds/image/random/3\").then(function (response) {\n      return response.json();\n    }).then(function (jsonResponse) {\n      Curry._1(setState, function (_previousState) {\n        return (\n          /* LoadedDogs */\n          [jsonResponse.message]\n        );\n      });\n\n      return Promise.resolve(undefined);\n    }).catch(function (_err) {\n      Curry._1(setState, function (_previousState) {\n        return (\n          /* ErrorFetchingDogs */\n          1\n        );\n      });\n\n      return Promise.resolve(undefined);\n    });\n  }, []);\n  var tmp;\n\n  if (typeof state === \"number\") {\n    tmp = state !== 0 ? \"An error occurred!\" : \"Loading...\";\n  } else {\n    var dogs = state[0];\n    tmp = Belt_Array.mapWithIndex(dogs, function (i, dog) {\n      var imageStyle = {\n        backgroundImage: \"url(\" + (String(dog) + \")\"),\n        backgroundPosition: \"center\",\n        height: \"120px\",\n        marginRight: i === (dogs.length - 1 | 0) ? \"0px\" : \"8px\",\n        width: \"100%\",\n        backgroundSize: \"cover\",\n        borderRadius: \"8px\",\n        boxShadow: \"0px 4px 16px rgb(200, 200, 200)\"\n      };\n      return React.createElement(\"div\", {\n        key: dog,\n        style: imageStyle\n      });\n    });\n  }\n\n  return React.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"120px\",\n      alignItems: \"center\",\n      justifyContent: \"center\"\n    }\n  }, tmp);\n}\n\nvar make = FetchedDogPictures;\nexports.make = make;\n/* react Not a pure module */\n\n//# sourceURL=webpack://my-react-app/./lib/js/src/FetchedDogPictures/FetchedDogPictures.bs.js?");

/***/ }),

/***/ "./node_modules/bs-platform/lib/js/belt_Array.js":
/*!*******************************************************!*\
  !*** ./node_modules/bs-platform/lib/js/belt_Array.js ***!
  \*******************************************************/
/*! default exports */
/*! export blit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export blitUnsafe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cmp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cmpU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export concat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export concatMany [provided] [no usage info] [missing usage info prevents renaming] */
/*! export eq [provided] [no usage info] [missing usage info prevents renaming] */
/*! export eqU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export every [provided] [no usage info] [missing usage info prevents renaming] */
/*! export every2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export every2U [provided] [no usage info] [missing usage info prevents renaming] */
/*! export everyU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fill [provided] [no usage info] [missing usage info prevents renaming] */
/*! export forEach [provided] [no usage info] [missing usage info prevents renaming] */
/*! export forEachU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export forEachWithIndex [provided] [no usage info] [missing usage info prevents renaming] */
/*! export forEachWithIndexU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getBy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getByU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getExn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getIndexBy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getIndexByU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keep [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keepMap [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keepMapU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keepU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keepWithIndex [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keepWithIndexU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export make [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeBy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeByAndShuffle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeByAndShuffleU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeByU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export map [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mapU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mapWithIndex [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mapWithIndexU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export partition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export partitionU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export range [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rangeBy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reduce [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reduceReverse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reduceReverse2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reduceReverse2U [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reduceReverseU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reduceU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reduceWithIndex [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reduceWithIndexU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reverse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reverseInPlace [provided] [no usage info] [missing usage info prevents renaming] */
/*! export set [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setExn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shuffle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shuffleInPlace [provided] [no usage info] [missing usage info prevents renaming] */
/*! export slice [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sliceToEnd [provided] [no usage info] [missing usage info prevents renaming] */
/*! export some [provided] [no usage info] [missing usage info prevents renaming] */
/*! export some2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export some2U [provided] [no usage info] [missing usage info prevents renaming] */
/*! export someU [provided] [no usage info] [missing usage info prevents renaming] */
/*! export unzip [provided] [no usage info] [missing usage info prevents renaming] */
/*! export zip [provided] [no usage info] [missing usage info prevents renaming] */
/*! export zipBy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export zipByU [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar Curry = __webpack_require__(/*! ./curry.js */ \"./node_modules/bs-platform/lib/js/curry.js\");\nvar Js_math = __webpack_require__(/*! ./js_math.js */ \"./node_modules/bs-platform/lib/js/js_math.js\");\nvar Caml_option = __webpack_require__(/*! ./caml_option.js */ \"./node_modules/bs-platform/lib/js/caml_option.js\");\nvar Caml_primitive = __webpack_require__(/*! ./caml_primitive.js */ \"./node_modules/bs-platform/lib/js/caml_primitive.js\");\n\nfunction get(arr, i) {\n  if (i >= 0 && i < arr.length) {\n    return Caml_option.some(arr[i]);\n  }\n  \n}\n\nfunction getExn(arr, i) {\n  if (!(i >= 0 && i < arr.length)) {\n    throw new Error(\"File \\\"belt_Array.ml\\\", line 25, characters 6-12\");\n  }\n  return arr[i];\n}\n\nfunction set(arr, i, v) {\n  if (i >= 0 && i < arr.length) {\n    arr[i] = v;\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction setExn(arr, i, v) {\n  if (!(i >= 0 && i < arr.length)) {\n    throw new Error(\"File \\\"belt_Array.ml\\\", line 31, characters 4-10\");\n  }\n  arr[i] = v;\n  \n}\n\nfunction swapUnsafe(xs, i, j) {\n  var tmp = xs[i];\n  xs[i] = xs[j];\n  xs[j] = tmp;\n  \n}\n\nfunction shuffleInPlace(xs) {\n  var len = xs.length;\n  for(var i = 0; i < len; ++i){\n    swapUnsafe(xs, i, Js_math.random_int(i, len));\n  }\n  \n}\n\nfunction shuffle(xs) {\n  var result = xs.slice(0);\n  shuffleInPlace(result);\n  return result;\n}\n\nfunction reverseInPlace(xs) {\n  var len = xs.length;\n  var ofs = 0;\n  for(var i = 0 ,i_finish = len / 2 | 0; i < i_finish; ++i){\n    swapUnsafe(xs, ofs + i | 0, ((ofs + len | 0) - i | 0) - 1 | 0);\n  }\n  \n}\n\nfunction reverse(xs) {\n  var len = xs.length;\n  var result = new Array(len);\n  for(var i = 0; i < len; ++i){\n    result[i] = xs[(len - 1 | 0) - i | 0];\n  }\n  return result;\n}\n\nfunction make(l, f) {\n  if (l <= 0) {\n    return [];\n  }\n  var res = new Array(l);\n  for(var i = 0; i < l; ++i){\n    res[i] = f;\n  }\n  return res;\n}\n\nfunction makeByU(l, f) {\n  if (l <= 0) {\n    return [];\n  }\n  var res = new Array(l);\n  for(var i = 0; i < l; ++i){\n    res[i] = f(i);\n  }\n  return res;\n}\n\nfunction makeBy(l, f) {\n  return makeByU(l, Curry.__1(f));\n}\n\nfunction makeByAndShuffleU(l, f) {\n  var u = makeByU(l, f);\n  shuffleInPlace(u);\n  return u;\n}\n\nfunction makeByAndShuffle(l, f) {\n  return makeByAndShuffleU(l, Curry.__1(f));\n}\n\nfunction range(start, finish) {\n  var cut = finish - start | 0;\n  if (cut < 0) {\n    return [];\n  }\n  var arr = new Array(cut + 1 | 0);\n  for(var i = 0; i <= cut; ++i){\n    arr[i] = start + i | 0;\n  }\n  return arr;\n}\n\nfunction rangeBy(start, finish, step) {\n  var cut = finish - start | 0;\n  if (cut < 0 || step <= 0) {\n    return [];\n  }\n  var nb = (cut / step | 0) + 1 | 0;\n  var arr = new Array(nb);\n  var cur = start;\n  for(var i = 0; i < nb; ++i){\n    arr[i] = cur;\n    cur = cur + step | 0;\n  }\n  return arr;\n}\n\nfunction zip(xs, ys) {\n  var lenx = xs.length;\n  var leny = ys.length;\n  var len = lenx < leny ? lenx : leny;\n  var s = new Array(len);\n  for(var i = 0; i < len; ++i){\n    s[i] = /* tuple */[\n      xs[i],\n      ys[i]\n    ];\n  }\n  return s;\n}\n\nfunction zipByU(xs, ys, f) {\n  var lenx = xs.length;\n  var leny = ys.length;\n  var len = lenx < leny ? lenx : leny;\n  var s = new Array(len);\n  for(var i = 0; i < len; ++i){\n    s[i] = f(xs[i], ys[i]);\n  }\n  return s;\n}\n\nfunction zipBy(xs, ys, f) {\n  return zipByU(xs, ys, Curry.__2(f));\n}\n\nfunction concat(a1, a2) {\n  var l1 = a1.length;\n  var l2 = a2.length;\n  var a1a2 = new Array(l1 + l2 | 0);\n  for(var i = 0; i < l1; ++i){\n    a1a2[i] = a1[i];\n  }\n  for(var i$1 = 0; i$1 < l2; ++i$1){\n    a1a2[l1 + i$1 | 0] = a2[i$1];\n  }\n  return a1a2;\n}\n\nfunction concatMany(arrs) {\n  var lenArrs = arrs.length;\n  var totalLen = 0;\n  for(var i = 0; i < lenArrs; ++i){\n    totalLen = totalLen + arrs[i].length | 0;\n  }\n  var result = new Array(totalLen);\n  totalLen = 0;\n  for(var j = 0; j < lenArrs; ++j){\n    var cur = arrs[j];\n    for(var k = 0 ,k_finish = cur.length; k < k_finish; ++k){\n      result[totalLen] = cur[k];\n      totalLen = totalLen + 1 | 0;\n    }\n  }\n  return result;\n}\n\nfunction slice(a, offset, len) {\n  if (len <= 0) {\n    return [];\n  }\n  var lena = a.length;\n  var ofs = offset < 0 ? Caml_primitive.caml_int_max(lena + offset | 0, 0) : offset;\n  var hasLen = lena - ofs | 0;\n  var copyLength = hasLen < len ? hasLen : len;\n  if (copyLength <= 0) {\n    return [];\n  }\n  var result = new Array(copyLength);\n  for(var i = 0; i < copyLength; ++i){\n    result[i] = a[ofs + i | 0];\n  }\n  return result;\n}\n\nfunction sliceToEnd(a, offset) {\n  var lena = a.length;\n  var ofs = offset < 0 ? Caml_primitive.caml_int_max(lena + offset | 0, 0) : offset;\n  var len = lena - ofs | 0;\n  var result = new Array(len);\n  for(var i = 0; i < len; ++i){\n    result[i] = a[ofs + i | 0];\n  }\n  return result;\n}\n\nfunction fill(a, offset, len, v) {\n  if (len <= 0) {\n    return ;\n  }\n  var lena = a.length;\n  var ofs = offset < 0 ? Caml_primitive.caml_int_max(lena + offset | 0, 0) : offset;\n  var hasLen = lena - ofs | 0;\n  var fillLength = hasLen < len ? hasLen : len;\n  if (fillLength <= 0) {\n    return ;\n  }\n  for(var i = ofs ,i_finish = ofs + fillLength | 0; i < i_finish; ++i){\n    a[i] = v;\n  }\n  \n}\n\nfunction blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {\n  if (srcofs2 <= srcofs1) {\n    for(var j = 0; j < blitLength; ++j){\n      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];\n    }\n    return ;\n  }\n  for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){\n    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];\n  }\n  \n}\n\nfunction blit(a1, ofs1, a2, ofs2, len) {\n  var lena1 = a1.length;\n  var lena2 = a2.length;\n  var srcofs1 = ofs1 < 0 ? Caml_primitive.caml_int_max(lena1 + ofs1 | 0, 0) : ofs1;\n  var srcofs2 = ofs2 < 0 ? Caml_primitive.caml_int_max(lena2 + ofs2 | 0, 0) : ofs2;\n  var blitLength = Caml_primitive.caml_int_min(len, Caml_primitive.caml_int_min(lena1 - srcofs1 | 0, lena2 - srcofs2 | 0));\n  if (srcofs2 <= srcofs1) {\n    for(var j = 0; j < blitLength; ++j){\n      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];\n    }\n    return ;\n  }\n  for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){\n    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];\n  }\n  \n}\n\nfunction forEachU(a, f) {\n  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){\n    f(a[i]);\n  }\n  \n}\n\nfunction forEach(a, f) {\n  return forEachU(a, Curry.__1(f));\n}\n\nfunction mapU(a, f) {\n  var l = a.length;\n  var r = new Array(l);\n  for(var i = 0; i < l; ++i){\n    r[i] = f(a[i]);\n  }\n  return r;\n}\n\nfunction map(a, f) {\n  return mapU(a, Curry.__1(f));\n}\n\nfunction getByU(a, p) {\n  var l = a.length;\n  var i = 0;\n  var r;\n  while(r === undefined && i < l) {\n    var v = a[i];\n    if (p(v)) {\n      r = Caml_option.some(v);\n    }\n    i = i + 1 | 0;\n  };\n  return r;\n}\n\nfunction getBy(a, p) {\n  return getByU(a, Curry.__1(p));\n}\n\nfunction getIndexByU(a, p) {\n  var l = a.length;\n  var i = 0;\n  var r;\n  while(r === undefined && i < l) {\n    var v = a[i];\n    if (p(v)) {\n      r = i;\n    }\n    i = i + 1 | 0;\n  };\n  return r;\n}\n\nfunction getIndexBy(a, p) {\n  return getIndexByU(a, Curry.__1(p));\n}\n\nfunction keepU(a, f) {\n  var l = a.length;\n  var r = new Array(l);\n  var j = 0;\n  for(var i = 0; i < l; ++i){\n    var v = a[i];\n    if (f(v)) {\n      r[j] = v;\n      j = j + 1 | 0;\n    }\n    \n  }\n  r.length = j;\n  return r;\n}\n\nfunction keep(a, f) {\n  return keepU(a, Curry.__1(f));\n}\n\nfunction keepWithIndexU(a, f) {\n  var l = a.length;\n  var r = new Array(l);\n  var j = 0;\n  for(var i = 0; i < l; ++i){\n    var v = a[i];\n    if (f(v, i)) {\n      r[j] = v;\n      j = j + 1 | 0;\n    }\n    \n  }\n  r.length = j;\n  return r;\n}\n\nfunction keepWithIndex(a, f) {\n  return keepWithIndexU(a, Curry.__2(f));\n}\n\nfunction keepMapU(a, f) {\n  var l = a.length;\n  var r = new Array(l);\n  var j = 0;\n  for(var i = 0; i < l; ++i){\n    var v = a[i];\n    var v$1 = f(v);\n    if (v$1 !== undefined) {\n      r[j] = Caml_option.valFromOption(v$1);\n      j = j + 1 | 0;\n    }\n    \n  }\n  r.length = j;\n  return r;\n}\n\nfunction keepMap(a, f) {\n  return keepMapU(a, Curry.__1(f));\n}\n\nfunction forEachWithIndexU(a, f) {\n  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){\n    f(i, a[i]);\n  }\n  \n}\n\nfunction forEachWithIndex(a, f) {\n  return forEachWithIndexU(a, Curry.__2(f));\n}\n\nfunction mapWithIndexU(a, f) {\n  var l = a.length;\n  var r = new Array(l);\n  for(var i = 0; i < l; ++i){\n    r[i] = f(i, a[i]);\n  }\n  return r;\n}\n\nfunction mapWithIndex(a, f) {\n  return mapWithIndexU(a, Curry.__2(f));\n}\n\nfunction reduceU(a, x, f) {\n  var r = x;\n  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){\n    r = f(r, a[i]);\n  }\n  return r;\n}\n\nfunction reduce(a, x, f) {\n  return reduceU(a, x, Curry.__2(f));\n}\n\nfunction reduceReverseU(a, x, f) {\n  var r = x;\n  for(var i = a.length - 1 | 0; i >= 0; --i){\n    r = f(r, a[i]);\n  }\n  return r;\n}\n\nfunction reduceReverse(a, x, f) {\n  return reduceReverseU(a, x, Curry.__2(f));\n}\n\nfunction reduceReverse2U(a, b, x, f) {\n  var r = x;\n  var len = Caml_primitive.caml_int_min(a.length, b.length);\n  for(var i = len - 1 | 0; i >= 0; --i){\n    r = f(r, a[i], b[i]);\n  }\n  return r;\n}\n\nfunction reduceReverse2(a, b, x, f) {\n  return reduceReverse2U(a, b, x, Curry.__3(f));\n}\n\nfunction reduceWithIndexU(a, x, f) {\n  var r = x;\n  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){\n    r = f(r, a[i], i);\n  }\n  return r;\n}\n\nfunction reduceWithIndex(a, x, f) {\n  return reduceWithIndexU(a, x, Curry.__3(f));\n}\n\nfunction everyU(arr, b) {\n  var len = arr.length;\n  var _i = 0;\n  while(true) {\n    var i = _i;\n    if (i === len) {\n      return true;\n    }\n    if (!b(arr[i])) {\n      return false;\n    }\n    _i = i + 1 | 0;\n    continue ;\n  };\n}\n\nfunction every(arr, f) {\n  return everyU(arr, Curry.__1(f));\n}\n\nfunction someU(arr, b) {\n  var len = arr.length;\n  var _i = 0;\n  while(true) {\n    var i = _i;\n    if (i === len) {\n      return false;\n    }\n    if (b(arr[i])) {\n      return true;\n    }\n    _i = i + 1 | 0;\n    continue ;\n  };\n}\n\nfunction some(arr, f) {\n  return someU(arr, Curry.__1(f));\n}\n\nfunction everyAux2(arr1, arr2, _i, b, len) {\n  while(true) {\n    var i = _i;\n    if (i === len) {\n      return true;\n    }\n    if (!b(arr1[i], arr2[i])) {\n      return false;\n    }\n    _i = i + 1 | 0;\n    continue ;\n  };\n}\n\nfunction every2U(a, b, p) {\n  return everyAux2(a, b, 0, p, Caml_primitive.caml_int_min(a.length, b.length));\n}\n\nfunction every2(a, b, p) {\n  return every2U(a, b, Curry.__2(p));\n}\n\nfunction some2U(a, b, p) {\n  var _i = 0;\n  var len = Caml_primitive.caml_int_min(a.length, b.length);\n  while(true) {\n    var i = _i;\n    if (i === len) {\n      return false;\n    }\n    if (p(a[i], b[i])) {\n      return true;\n    }\n    _i = i + 1 | 0;\n    continue ;\n  };\n}\n\nfunction some2(a, b, p) {\n  return some2U(a, b, Curry.__2(p));\n}\n\nfunction eqU(a, b, p) {\n  var lena = a.length;\n  var lenb = b.length;\n  if (lena === lenb) {\n    return everyAux2(a, b, 0, p, lena);\n  } else {\n    return false;\n  }\n}\n\nfunction eq(a, b, p) {\n  return eqU(a, b, Curry.__2(p));\n}\n\nfunction cmpU(a, b, p) {\n  var lena = a.length;\n  var lenb = b.length;\n  if (lena > lenb) {\n    return 1;\n  } else if (lena < lenb) {\n    return -1;\n  } else {\n    var _i = 0;\n    while(true) {\n      var i = _i;\n      if (i === lena) {\n        return 0;\n      }\n      var c = p(a[i], b[i]);\n      if (c !== 0) {\n        return c;\n      }\n      _i = i + 1 | 0;\n      continue ;\n    };\n  }\n}\n\nfunction cmp(a, b, p) {\n  return cmpU(a, b, Curry.__2(p));\n}\n\nfunction partitionU(a, f) {\n  var l = a.length;\n  var i = 0;\n  var j = 0;\n  var a1 = new Array(l);\n  var a2 = new Array(l);\n  for(var ii = 0; ii < l; ++ii){\n    var v = a[ii];\n    if (f(v)) {\n      a1[i] = v;\n      i = i + 1 | 0;\n    } else {\n      a2[j] = v;\n      j = j + 1 | 0;\n    }\n  }\n  a1.length = i;\n  a2.length = j;\n  return /* tuple */[\n          a1,\n          a2\n        ];\n}\n\nfunction partition(a, f) {\n  return partitionU(a, Curry.__1(f));\n}\n\nfunction unzip(a) {\n  var l = a.length;\n  var a1 = new Array(l);\n  var a2 = new Array(l);\n  for(var i = 0; i < l; ++i){\n    var match = a[i];\n    a1[i] = match[0];\n    a2[i] = match[1];\n  }\n  return /* tuple */[\n          a1,\n          a2\n        ];\n}\n\nexports.get = get;\nexports.getExn = getExn;\nexports.set = set;\nexports.setExn = setExn;\nexports.shuffleInPlace = shuffleInPlace;\nexports.shuffle = shuffle;\nexports.reverseInPlace = reverseInPlace;\nexports.reverse = reverse;\nexports.make = make;\nexports.range = range;\nexports.rangeBy = rangeBy;\nexports.makeByU = makeByU;\nexports.makeBy = makeBy;\nexports.makeByAndShuffleU = makeByAndShuffleU;\nexports.makeByAndShuffle = makeByAndShuffle;\nexports.zip = zip;\nexports.zipByU = zipByU;\nexports.zipBy = zipBy;\nexports.unzip = unzip;\nexports.concat = concat;\nexports.concatMany = concatMany;\nexports.slice = slice;\nexports.sliceToEnd = sliceToEnd;\nexports.fill = fill;\nexports.blit = blit;\nexports.blitUnsafe = blitUnsafe;\nexports.forEachU = forEachU;\nexports.forEach = forEach;\nexports.mapU = mapU;\nexports.map = map;\nexports.getByU = getByU;\nexports.getBy = getBy;\nexports.getIndexByU = getIndexByU;\nexports.getIndexBy = getIndexBy;\nexports.keepU = keepU;\nexports.keep = keep;\nexports.keepWithIndexU = keepWithIndexU;\nexports.keepWithIndex = keepWithIndex;\nexports.keepMapU = keepMapU;\nexports.keepMap = keepMap;\nexports.forEachWithIndexU = forEachWithIndexU;\nexports.forEachWithIndex = forEachWithIndex;\nexports.mapWithIndexU = mapWithIndexU;\nexports.mapWithIndex = mapWithIndex;\nexports.partitionU = partitionU;\nexports.partition = partition;\nexports.reduceU = reduceU;\nexports.reduce = reduce;\nexports.reduceReverseU = reduceReverseU;\nexports.reduceReverse = reduceReverse;\nexports.reduceReverse2U = reduceReverse2U;\nexports.reduceReverse2 = reduceReverse2;\nexports.reduceWithIndexU = reduceWithIndexU;\nexports.reduceWithIndex = reduceWithIndex;\nexports.someU = someU;\nexports.some = some;\nexports.everyU = everyU;\nexports.every = every;\nexports.every2U = every2U;\nexports.every2 = every2;\nexports.some2U = some2U;\nexports.some2 = some2;\nexports.cmpU = cmpU;\nexports.cmp = cmp;\nexports.eqU = eqU;\nexports.eq = eq;\n/* No side effect */\n\n\n//# sourceURL=webpack://my-react-app/./node_modules/bs-platform/lib/js/belt_Array.js?");

/***/ }),

/***/ "./node_modules/bs-platform/lib/js/caml_array.js":
/*!*******************************************************!*\
  !*** ./node_modules/bs-platform/lib/js/caml_array.js ***!
  \*******************************************************/
/*! default exports */
/*! export caml_array_blit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_array_concat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_array_dup [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_array_get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_array_set [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_array_sub [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_make_float_vect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_make_vect [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar Caml_builtin_exceptions = __webpack_require__(/*! ./caml_builtin_exceptions.js */ \"./node_modules/bs-platform/lib/js/caml_builtin_exceptions.js\");\n\nfunction caml_array_sub(x, offset, len) {\n  var result = new Array(len);\n  var j = 0;\n  var i = offset;\n  while(j < len) {\n    result[j] = x[i];\n    j = j + 1 | 0;\n    i = i + 1 | 0;\n  };\n  return result;\n}\n\nfunction len(_acc, _l) {\n  while(true) {\n    var l = _l;\n    var acc = _acc;\n    if (!l) {\n      return acc;\n    }\n    _l = l[1];\n    _acc = l[0].length + acc | 0;\n    continue ;\n  };\n}\n\nfunction fill(arr, _i, _l) {\n  while(true) {\n    var l = _l;\n    var i = _i;\n    if (!l) {\n      return ;\n    }\n    var x = l[0];\n    var l$1 = x.length;\n    var k = i;\n    var j = 0;\n    while(j < l$1) {\n      arr[k] = x[j];\n      k = k + 1 | 0;\n      j = j + 1 | 0;\n    };\n    _l = l[1];\n    _i = k;\n    continue ;\n  };\n}\n\nfunction caml_array_concat(l) {\n  var v = len(0, l);\n  var result = new Array(v);\n  fill(result, 0, l);\n  return result;\n}\n\nfunction caml_array_set(xs, index, newval) {\n  if (index < 0 || index >= xs.length) {\n    throw [\n          Caml_builtin_exceptions.invalid_argument,\n          \"index out of bounds\"\n        ];\n  }\n  xs[index] = newval;\n  \n}\n\nfunction caml_array_get(xs, index) {\n  if (index < 0 || index >= xs.length) {\n    throw [\n          Caml_builtin_exceptions.invalid_argument,\n          \"index out of bounds\"\n        ];\n  }\n  return xs[index];\n}\n\nfunction caml_make_vect(len, init) {\n  var b = new Array(len);\n  for(var i = 0; i < len; ++i){\n    b[i] = init;\n  }\n  return b;\n}\n\nfunction caml_make_float_vect(len) {\n  var b = new Array(len);\n  for(var i = 0; i < len; ++i){\n    b[i] = 0;\n  }\n  return b;\n}\n\nfunction caml_array_blit(a1, i1, a2, i2, len) {\n  if (i2 <= i1) {\n    for(var j = 0; j < len; ++j){\n      a2[j + i2 | 0] = a1[j + i1 | 0];\n    }\n    return ;\n  }\n  for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){\n    a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];\n  }\n  \n}\n\nfunction caml_array_dup(prim) {\n  return prim.slice(0);\n}\n\nexports.caml_array_dup = caml_array_dup;\nexports.caml_array_sub = caml_array_sub;\nexports.caml_array_concat = caml_array_concat;\nexports.caml_make_vect = caml_make_vect;\nexports.caml_make_float_vect = caml_make_float_vect;\nexports.caml_array_blit = caml_array_blit;\nexports.caml_array_get = caml_array_get;\nexports.caml_array_set = caml_array_set;\n/* No side effect */\n\n\n//# sourceURL=webpack://my-react-app/./node_modules/bs-platform/lib/js/caml_array.js?");

/***/ }),

/***/ "./node_modules/bs-platform/lib/js/caml_builtin_exceptions.js":
/*!********************************************************************!*\
  !*** ./node_modules/bs-platform/lib/js/caml_builtin_exceptions.js ***!
  \********************************************************************/
/*! default exports */
/*! export assert_failure [provided] [no usage info] [missing usage info prevents renaming] */
/*! export division_by_zero [provided] [no usage info] [missing usage info prevents renaming] */
/*! export end_of_file [provided] [no usage info] [missing usage info prevents renaming] */
/*! export failure [provided] [no usage info] [missing usage info prevents renaming] */
/*! export invalid_argument [provided] [no usage info] [missing usage info prevents renaming] */
/*! export match_failure [provided] [no usage info] [missing usage info prevents renaming] */
/*! export not_found [provided] [no usage info] [missing usage info prevents renaming] */
/*! export out_of_memory [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stack_overflow [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sys_blocked_io [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sys_error [provided] [no usage info] [missing usage info prevents renaming] */
/*! export undefined_recursive_module [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\n\nvar out_of_memory = /* tuple */[\n  \"Out_of_memory\",\n  0\n];\n\nvar sys_error = /* tuple */[\n  \"Sys_error\",\n  -1\n];\n\nvar failure = /* tuple */[\n  \"Failure\",\n  -2\n];\n\nvar invalid_argument = /* tuple */[\n  \"Invalid_argument\",\n  -3\n];\n\nvar end_of_file = /* tuple */[\n  \"End_of_file\",\n  -4\n];\n\nvar division_by_zero = /* tuple */[\n  \"Division_by_zero\",\n  -5\n];\n\nvar not_found = /* tuple */[\n  \"Not_found\",\n  -6\n];\n\nvar match_failure = /* tuple */[\n  \"Match_failure\",\n  -7\n];\n\nvar stack_overflow = /* tuple */[\n  \"Stack_overflow\",\n  -8\n];\n\nvar sys_blocked_io = /* tuple */[\n  \"Sys_blocked_io\",\n  -9\n];\n\nvar assert_failure = /* tuple */[\n  \"Assert_failure\",\n  -10\n];\n\nvar undefined_recursive_module = /* tuple */[\n  \"Undefined_recursive_module\",\n  -11\n];\n\nout_of_memory.tag = 248;\n\nsys_error.tag = 248;\n\nfailure.tag = 248;\n\ninvalid_argument.tag = 248;\n\nend_of_file.tag = 248;\n\ndivision_by_zero.tag = 248;\n\nnot_found.tag = 248;\n\nmatch_failure.tag = 248;\n\nstack_overflow.tag = 248;\n\nsys_blocked_io.tag = 248;\n\nassert_failure.tag = 248;\n\nundefined_recursive_module.tag = 248;\n\nexports.out_of_memory = out_of_memory;\nexports.sys_error = sys_error;\nexports.failure = failure;\nexports.invalid_argument = invalid_argument;\nexports.end_of_file = end_of_file;\nexports.division_by_zero = division_by_zero;\nexports.not_found = not_found;\nexports.match_failure = match_failure;\nexports.stack_overflow = stack_overflow;\nexports.sys_blocked_io = sys_blocked_io;\nexports.assert_failure = assert_failure;\nexports.undefined_recursive_module = undefined_recursive_module;\n/*  Not a pure module */\n\n\n//# sourceURL=webpack://my-react-app/./node_modules/bs-platform/lib/js/caml_builtin_exceptions.js?");

/***/ }),

/***/ "./node_modules/bs-platform/lib/js/caml_option.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/js/caml_option.js ***!
  \********************************************************/
/*! default exports */
/*! export null_to_opt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export nullable_to_opt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export option_get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export option_get_unwrap [provided] [no usage info] [missing usage info prevents renaming] */
/*! export some [provided] [no usage info] [missing usage info prevents renaming] */
/*! export undefined_to_opt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export valFromOption [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\n\nvar undefinedHeader = [];\n\nfunction some(x) {\n  if (x === undefined) {\n    var block = /* tuple */[\n      undefinedHeader,\n      0\n    ];\n    block.tag = 256;\n    return block;\n  }\n  if (!(x !== null && x[0] === undefinedHeader)) {\n    return x;\n  }\n  var nid = x[1] + 1 | 0;\n  var block$1 = /* tuple */[\n    undefinedHeader,\n    nid\n  ];\n  block$1.tag = 256;\n  return block$1;\n}\n\nfunction nullable_to_opt(x) {\n  if (x === null || x === undefined) {\n    return ;\n  } else {\n    return some(x);\n  }\n}\n\nfunction undefined_to_opt(x) {\n  if (x === undefined) {\n    return ;\n  } else {\n    return some(x);\n  }\n}\n\nfunction null_to_opt(x) {\n  if (x === null) {\n    return ;\n  } else {\n    return some(x);\n  }\n}\n\nfunction valFromOption(x) {\n  if (!(x !== null && x[0] === undefinedHeader)) {\n    return x;\n  }\n  var depth = x[1];\n  if (depth === 0) {\n    return ;\n  } else {\n    return /* tuple */[\n            undefinedHeader,\n            depth - 1 | 0\n          ];\n  }\n}\n\nfunction option_get(x) {\n  if (x === undefined) {\n    return ;\n  } else {\n    return valFromOption(x);\n  }\n}\n\nfunction option_get_unwrap(x) {\n  if (x === undefined) {\n    return ;\n  } else {\n    return valFromOption(x)[1];\n  }\n}\n\nexports.nullable_to_opt = nullable_to_opt;\nexports.undefined_to_opt = undefined_to_opt;\nexports.null_to_opt = null_to_opt;\nexports.valFromOption = valFromOption;\nexports.some = some;\nexports.option_get = option_get;\nexports.option_get_unwrap = option_get_unwrap;\n/* No side effect */\n\n\n//# sourceURL=webpack://my-react-app/./node_modules/bs-platform/lib/js/caml_option.js?");

/***/ }),

/***/ "./node_modules/bs-platform/lib/js/caml_primitive.js":
/*!***********************************************************!*\
  !*** ./node_modules/bs-platform/lib/js/caml_primitive.js ***!
  \***********************************************************/
/*! default exports */
/*! export caml_bool_compare [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_bool_max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_bool_min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_bytes_compare [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_bytes_equal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_float_compare [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_float_max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_float_min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_int32_compare [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_int32_max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_int32_min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_int_compare [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_int_max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_int_min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_nativeint_compare [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_nativeint_max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_nativeint_min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_string_compare [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_string_max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export caml_string_min [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\n\nfunction caml_int_compare(x, y) {\n  if (x < y) {\n    return -1;\n  } else if (x === y) {\n    return 0;\n  } else {\n    return 1;\n  }\n}\n\nfunction caml_bool_compare(x, y) {\n  if (x) {\n    if (y) {\n      return 0;\n    } else {\n      return 1;\n    }\n  } else if (y) {\n    return -1;\n  } else {\n    return 0;\n  }\n}\n\nfunction caml_float_compare(x, y) {\n  if (x === y) {\n    return 0;\n  } else if (x < y) {\n    return -1;\n  } else if (x > y || x === x) {\n    return 1;\n  } else if (y === y) {\n    return -1;\n  } else {\n    return 0;\n  }\n}\n\nfunction caml_string_compare(s1, s2) {\n  if (s1 === s2) {\n    return 0;\n  } else if (s1 < s2) {\n    return -1;\n  } else {\n    return 1;\n  }\n}\n\nfunction caml_bytes_compare_aux(s1, s2, _off, len, def) {\n  while(true) {\n    var off = _off;\n    if (off >= len) {\n      return def;\n    }\n    var a = s1[off];\n    var b = s2[off];\n    if (a > b) {\n      return 1;\n    }\n    if (a < b) {\n      return -1;\n    }\n    _off = off + 1 | 0;\n    continue ;\n  };\n}\n\nfunction caml_bytes_compare(s1, s2) {\n  var len1 = s1.length;\n  var len2 = s2.length;\n  if (len1 === len2) {\n    return caml_bytes_compare_aux(s1, s2, 0, len1, 0);\n  } else if (len1 < len2) {\n    return caml_bytes_compare_aux(s1, s2, 0, len1, -1);\n  } else {\n    return caml_bytes_compare_aux(s1, s2, 0, len2, 1);\n  }\n}\n\nfunction caml_bytes_equal(s1, s2) {\n  var len1 = s1.length;\n  var len2 = s2.length;\n  if (len1 === len2) {\n    var _off = 0;\n    while(true) {\n      var off = _off;\n      if (off === len1) {\n        return true;\n      }\n      var a = s1[off];\n      var b = s2[off];\n      if (a !== b) {\n        return false;\n      }\n      _off = off + 1 | 0;\n      continue ;\n    };\n  } else {\n    return false;\n  }\n}\n\nfunction caml_bool_min(x, y) {\n  if (x) {\n    return y;\n  } else {\n    return x;\n  }\n}\n\nfunction caml_int_min(x, y) {\n  if (x < y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_float_min(x, y) {\n  if (x < y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_string_min(x, y) {\n  if (x < y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_nativeint_min(x, y) {\n  if (x < y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_int32_min(x, y) {\n  if (x < y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_bool_max(x, y) {\n  if (x) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_int_max(x, y) {\n  if (x > y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_float_max(x, y) {\n  if (x > y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_string_max(x, y) {\n  if (x > y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_nativeint_max(x, y) {\n  if (x > y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nfunction caml_int32_max(x, y) {\n  if (x > y) {\n    return x;\n  } else {\n    return y;\n  }\n}\n\nvar caml_nativeint_compare = caml_int_compare;\n\nvar caml_int32_compare = caml_int_compare;\n\nexports.caml_bytes_compare = caml_bytes_compare;\nexports.caml_bytes_equal = caml_bytes_equal;\nexports.caml_int_compare = caml_int_compare;\nexports.caml_bool_compare = caml_bool_compare;\nexports.caml_float_compare = caml_float_compare;\nexports.caml_nativeint_compare = caml_nativeint_compare;\nexports.caml_string_compare = caml_string_compare;\nexports.caml_int32_compare = caml_int32_compare;\nexports.caml_bool_min = caml_bool_min;\nexports.caml_int_min = caml_int_min;\nexports.caml_float_min = caml_float_min;\nexports.caml_string_min = caml_string_min;\nexports.caml_nativeint_min = caml_nativeint_min;\nexports.caml_int32_min = caml_int32_min;\nexports.caml_bool_max = caml_bool_max;\nexports.caml_int_max = caml_int_max;\nexports.caml_float_max = caml_float_max;\nexports.caml_string_max = caml_string_max;\nexports.caml_nativeint_max = caml_nativeint_max;\nexports.caml_int32_max = caml_int32_max;\n/* No side effect */\n\n\n//# sourceURL=webpack://my-react-app/./node_modules/bs-platform/lib/js/caml_primitive.js?");

/***/ }),

/***/ "./node_modules/bs-platform/lib/js/curry.js":
/*!**************************************************!*\
  !*** ./node_modules/bs-platform/lib/js/curry.js ***!
  \**************************************************/
/*! default exports */
/*! export _1 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export _2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export _3 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export _4 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export _5 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export _6 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export _7 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export _8 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __1 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __3 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __4 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __5 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __6 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __7 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __8 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export app [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar Caml_array = __webpack_require__(/*! ./caml_array.js */ \"./node_modules/bs-platform/lib/js/caml_array.js\");\n\nfunction app(_f, _args) {\n  while(true) {\n    var args = _args;\n    var f = _f;\n    var init_arity = f.length;\n    var arity = init_arity === 0 ? 1 : init_arity;\n    var len = args.length;\n    var d = arity - len | 0;\n    if (d === 0) {\n      return f.apply(null, args);\n    }\n    if (d >= 0) {\n      return (function(f,args){\n      return function (x) {\n        return app(f, args.concat([x]));\n      }\n      }(f,args));\n    }\n    _args = Caml_array.caml_array_sub(args, arity, -d | 0);\n    _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity));\n    continue ;\n  };\n}\n\nfunction _1(o, a0) {\n  var arity = o.length;\n  if (arity === 1) {\n    return o(a0);\n  } else {\n    switch (arity) {\n      case 1 :\n          return o(a0);\n      case 2 :\n          return (function (param) {\n              return o(a0, param);\n            });\n      case 3 :\n          return (function (param, param$1) {\n              return o(a0, param, param$1);\n            });\n      case 4 :\n          return (function (param, param$1, param$2) {\n              return o(a0, param, param$1, param$2);\n            });\n      case 5 :\n          return (function (param, param$1, param$2, param$3) {\n              return o(a0, param, param$1, param$2, param$3);\n            });\n      case 6 :\n          return (function (param, param$1, param$2, param$3, param$4) {\n              return o(a0, param, param$1, param$2, param$3, param$4);\n            });\n      case 7 :\n          return (function (param, param$1, param$2, param$3, param$4, param$5) {\n              return o(a0, param, param$1, param$2, param$3, param$4, param$5);\n            });\n      default:\n        return app(o, [a0]);\n    }\n  }\n}\n\nfunction __1(o) {\n  var arity = o.length;\n  if (arity === 1) {\n    return o;\n  } else {\n    return (function (a0) {\n        return _1(o, a0);\n      });\n  }\n}\n\nfunction _2(o, a0, a1) {\n  var arity = o.length;\n  if (arity === 2) {\n    return o(a0, a1);\n  } else {\n    switch (arity) {\n      case 1 :\n          return app(o(a0), [a1]);\n      case 2 :\n          return o(a0, a1);\n      case 3 :\n          return (function (param) {\n              return o(a0, a1, param);\n            });\n      case 4 :\n          return (function (param, param$1) {\n              return o(a0, a1, param, param$1);\n            });\n      case 5 :\n          return (function (param, param$1, param$2) {\n              return o(a0, a1, param, param$1, param$2);\n            });\n      case 6 :\n          return (function (param, param$1, param$2, param$3) {\n              return o(a0, a1, param, param$1, param$2, param$3);\n            });\n      case 7 :\n          return (function (param, param$1, param$2, param$3, param$4) {\n              return o(a0, a1, param, param$1, param$2, param$3, param$4);\n            });\n      default:\n        return app(o, [\n                    a0,\n                    a1\n                  ]);\n    }\n  }\n}\n\nfunction __2(o) {\n  var arity = o.length;\n  if (arity === 2) {\n    return o;\n  } else {\n    return (function (a0, a1) {\n        return _2(o, a0, a1);\n      });\n  }\n}\n\nfunction _3(o, a0, a1, a2) {\n  var arity = o.length;\n  if (arity === 3) {\n    return o(a0, a1, a2);\n  } else {\n    switch (arity) {\n      case 1 :\n          return app(o(a0), [\n                      a1,\n                      a2\n                    ]);\n      case 2 :\n          return app(o(a0, a1), [a2]);\n      case 3 :\n          return o(a0, a1, a2);\n      case 4 :\n          return (function (param) {\n              return o(a0, a1, a2, param);\n            });\n      case 5 :\n          return (function (param, param$1) {\n              return o(a0, a1, a2, param, param$1);\n            });\n      case 6 :\n          return (function (param, param$1, param$2) {\n              return o(a0, a1, a2, param, param$1, param$2);\n            });\n      case 7 :\n          return (function (param, param$1, param$2, param$3) {\n              return o(a0, a1, a2, param, param$1, param$2, param$3);\n            });\n      default:\n        return app(o, [\n                    a0,\n                    a1,\n                    a2\n                  ]);\n    }\n  }\n}\n\nfunction __3(o) {\n  var arity = o.length;\n  if (arity === 3) {\n    return o;\n  } else {\n    return (function (a0, a1, a2) {\n        return _3(o, a0, a1, a2);\n      });\n  }\n}\n\nfunction _4(o, a0, a1, a2, a3) {\n  var arity = o.length;\n  if (arity === 4) {\n    return o(a0, a1, a2, a3);\n  } else {\n    switch (arity) {\n      case 1 :\n          return app(o(a0), [\n                      a1,\n                      a2,\n                      a3\n                    ]);\n      case 2 :\n          return app(o(a0, a1), [\n                      a2,\n                      a3\n                    ]);\n      case 3 :\n          return app(o(a0, a1, a2), [a3]);\n      case 4 :\n          return o(a0, a1, a2, a3);\n      case 5 :\n          return (function (param) {\n              return o(a0, a1, a2, a3, param);\n            });\n      case 6 :\n          return (function (param, param$1) {\n              return o(a0, a1, a2, a3, param, param$1);\n            });\n      case 7 :\n          return (function (param, param$1, param$2) {\n              return o(a0, a1, a2, a3, param, param$1, param$2);\n            });\n      default:\n        return app(o, [\n                    a0,\n                    a1,\n                    a2,\n                    a3\n                  ]);\n    }\n  }\n}\n\nfunction __4(o) {\n  var arity = o.length;\n  if (arity === 4) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3) {\n        return _4(o, a0, a1, a2, a3);\n      });\n  }\n}\n\nfunction _5(o, a0, a1, a2, a3, a4) {\n  var arity = o.length;\n  if (arity === 5) {\n    return o(a0, a1, a2, a3, a4);\n  } else {\n    switch (arity) {\n      case 1 :\n          return app(o(a0), [\n                      a1,\n                      a2,\n                      a3,\n                      a4\n                    ]);\n      case 2 :\n          return app(o(a0, a1), [\n                      a2,\n                      a3,\n                      a4\n                    ]);\n      case 3 :\n          return app(o(a0, a1, a2), [\n                      a3,\n                      a4\n                    ]);\n      case 4 :\n          return app(o(a0, a1, a2, a3), [a4]);\n      case 5 :\n          return o(a0, a1, a2, a3, a4);\n      case 6 :\n          return (function (param) {\n              return o(a0, a1, a2, a3, a4, param);\n            });\n      case 7 :\n          return (function (param, param$1) {\n              return o(a0, a1, a2, a3, a4, param, param$1);\n            });\n      default:\n        return app(o, [\n                    a0,\n                    a1,\n                    a2,\n                    a3,\n                    a4\n                  ]);\n    }\n  }\n}\n\nfunction __5(o) {\n  var arity = o.length;\n  if (arity === 5) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3, a4) {\n        return _5(o, a0, a1, a2, a3, a4);\n      });\n  }\n}\n\nfunction _6(o, a0, a1, a2, a3, a4, a5) {\n  var arity = o.length;\n  if (arity === 6) {\n    return o(a0, a1, a2, a3, a4, a5);\n  } else {\n    switch (arity) {\n      case 1 :\n          return app(o(a0), [\n                      a1,\n                      a2,\n                      a3,\n                      a4,\n                      a5\n                    ]);\n      case 2 :\n          return app(o(a0, a1), [\n                      a2,\n                      a3,\n                      a4,\n                      a5\n                    ]);\n      case 3 :\n          return app(o(a0, a1, a2), [\n                      a3,\n                      a4,\n                      a5\n                    ]);\n      case 4 :\n          return app(o(a0, a1, a2, a3), [\n                      a4,\n                      a5\n                    ]);\n      case 5 :\n          return app(o(a0, a1, a2, a3, a4), [a5]);\n      case 6 :\n          return o(a0, a1, a2, a3, a4, a5);\n      case 7 :\n          return (function (param) {\n              return o(a0, a1, a2, a3, a4, a5, param);\n            });\n      default:\n        return app(o, [\n                    a0,\n                    a1,\n                    a2,\n                    a3,\n                    a4,\n                    a5\n                  ]);\n    }\n  }\n}\n\nfunction __6(o) {\n  var arity = o.length;\n  if (arity === 6) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3, a4, a5) {\n        return _6(o, a0, a1, a2, a3, a4, a5);\n      });\n  }\n}\n\nfunction _7(o, a0, a1, a2, a3, a4, a5, a6) {\n  var arity = o.length;\n  if (arity === 7) {\n    return o(a0, a1, a2, a3, a4, a5, a6);\n  } else {\n    switch (arity) {\n      case 1 :\n          return app(o(a0), [\n                      a1,\n                      a2,\n                      a3,\n                      a4,\n                      a5,\n                      a6\n                    ]);\n      case 2 :\n          return app(o(a0, a1), [\n                      a2,\n                      a3,\n                      a4,\n                      a5,\n                      a6\n                    ]);\n      case 3 :\n          return app(o(a0, a1, a2), [\n                      a3,\n                      a4,\n                      a5,\n                      a6\n                    ]);\n      case 4 :\n          return app(o(a0, a1, a2, a3), [\n                      a4,\n                      a5,\n                      a6\n                    ]);\n      case 5 :\n          return app(o(a0, a1, a2, a3, a4), [\n                      a5,\n                      a6\n                    ]);\n      case 6 :\n          return app(o(a0, a1, a2, a3, a4, a5), [a6]);\n      case 7 :\n          return o(a0, a1, a2, a3, a4, a5, a6);\n      default:\n        return app(o, [\n                    a0,\n                    a1,\n                    a2,\n                    a3,\n                    a4,\n                    a5,\n                    a6\n                  ]);\n    }\n  }\n}\n\nfunction __7(o) {\n  var arity = o.length;\n  if (arity === 7) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3, a4, a5, a6) {\n        return _7(o, a0, a1, a2, a3, a4, a5, a6);\n      });\n  }\n}\n\nfunction _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {\n  var arity = o.length;\n  if (arity === 8) {\n    return o(a0, a1, a2, a3, a4, a5, a6, a7);\n  } else {\n    switch (arity) {\n      case 1 :\n          return app(o(a0), [\n                      a1,\n                      a2,\n                      a3,\n                      a4,\n                      a5,\n                      a6,\n                      a7\n                    ]);\n      case 2 :\n          return app(o(a0, a1), [\n                      a2,\n                      a3,\n                      a4,\n                      a5,\n                      a6,\n                      a7\n                    ]);\n      case 3 :\n          return app(o(a0, a1, a2), [\n                      a3,\n                      a4,\n                      a5,\n                      a6,\n                      a7\n                    ]);\n      case 4 :\n          return app(o(a0, a1, a2, a3), [\n                      a4,\n                      a5,\n                      a6,\n                      a7\n                    ]);\n      case 5 :\n          return app(o(a0, a1, a2, a3, a4), [\n                      a5,\n                      a6,\n                      a7\n                    ]);\n      case 6 :\n          return app(o(a0, a1, a2, a3, a4, a5), [\n                      a6,\n                      a7\n                    ]);\n      case 7 :\n          return app(o(a0, a1, a2, a3, a4, a5, a6), [a7]);\n      default:\n        return app(o, [\n                    a0,\n                    a1,\n                    a2,\n                    a3,\n                    a4,\n                    a5,\n                    a6,\n                    a7\n                  ]);\n    }\n  }\n}\n\nfunction __8(o) {\n  var arity = o.length;\n  if (arity === 8) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {\n        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);\n      });\n  }\n}\n\nexports.app = app;\nexports._1 = _1;\nexports.__1 = __1;\nexports._2 = _2;\nexports.__2 = __2;\nexports._3 = _3;\nexports.__3 = __3;\nexports._4 = _4;\nexports.__4 = __4;\nexports._5 = _5;\nexports.__5 = __5;\nexports._6 = _6;\nexports.__6 = __6;\nexports._7 = _7;\nexports.__7 = __7;\nexports._8 = _8;\nexports.__8 = __8;\n/* No side effect */\n\n\n//# sourceURL=webpack://my-react-app/./node_modules/bs-platform/lib/js/curry.js?");

/***/ }),

/***/ "./node_modules/bs-platform/lib/js/js_int.js":
/*!***************************************************!*\
  !*** ./node_modules/bs-platform/lib/js/js_int.js ***!
  \***************************************************/
/*! default exports */
/*! export equal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export min [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\n\nfunction equal(x, y) {\n  return x === y;\n}\n\nvar max = 2147483647;\n\nvar min = -2147483648;\n\nexports.equal = equal;\nexports.max = max;\nexports.min = min;\n/* No side effect */\n\n\n//# sourceURL=webpack://my-react-app/./node_modules/bs-platform/lib/js/js_int.js?");

/***/ }),

/***/ "./node_modules/bs-platform/lib/js/js_math.js":
/*!****************************************************!*\
  !*** ./node_modules/bs-platform/lib/js/js_math.js ***!
  \****************************************************/
/*! default exports */
/*! export ceil [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ceil_int [provided] [no usage info] [missing usage info prevents renaming] */
/*! export floor [provided] [no usage info] [missing usage info prevents renaming] */
/*! export floor_int [provided] [no usage info] [missing usage info prevents renaming] */
/*! export random_int [provided] [no usage info] [missing usage info prevents renaming] */
/*! export unsafe_ceil [provided] [no usage info] [missing usage info prevents renaming] */
/*! export unsafe_floor [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar Js_int = __webpack_require__(/*! ./js_int.js */ \"./node_modules/bs-platform/lib/js/js_int.js\");\n\nfunction unsafe_ceil(prim) {\n  return Math.ceil(prim);\n}\n\nfunction ceil_int(f) {\n  if (f > Js_int.max) {\n    return Js_int.max;\n  } else if (f < Js_int.min) {\n    return Js_int.min;\n  } else {\n    return Math.ceil(f);\n  }\n}\n\nfunction unsafe_floor(prim) {\n  return Math.floor(prim);\n}\n\nfunction floor_int(f) {\n  if (f > Js_int.max) {\n    return Js_int.max;\n  } else if (f < Js_int.min) {\n    return Js_int.min;\n  } else {\n    return Math.floor(f);\n  }\n}\n\nfunction random_int(min, max) {\n  return floor_int(Math.random() * (max - min | 0)) + min | 0;\n}\n\nvar ceil = ceil_int;\n\nvar floor = floor_int;\n\nexports.unsafe_ceil = unsafe_ceil;\nexports.ceil_int = ceil_int;\nexports.ceil = ceil;\nexports.unsafe_floor = unsafe_floor;\nexports.floor_int = floor_int;\nexports.floor = floor;\nexports.random_int = random_int;\n/* No side effect */\n\n\n//# sourceURL=webpack://my-react-app/./node_modules/bs-platform/lib/js/js_math.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "my-react-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => typeof console !== "undefined" && console.warn && console.warn(msg);;
/******/ 			var uniqueName = "my-react-app";
/******/ 			var register = (name, version, factory) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || !activeVersion.loaded && uniqueName > activeVersion.from) versions[version] = { get: factory, from: uniqueName };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => warn("Initialization of sharing external failed: " + err);
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => module && module.init && module.init(__webpack_require__.S[name], initScope)
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult.catch(handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("react", "16.14.0", () => __webpack_require__.e("vendors-node_modules_react_index_js").then(() => () => __webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js")));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => initPromises[name] = 1);
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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(1===range.length)return"*";if(0 in range){var r="",n=range[0];r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,r+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return r}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = (scopeName, key) => {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = (scope, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = (fn) => function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		};
/******/ 		
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/react/react": () => loadSingletonVersionCheckFallback("default", "react", [1,16,8,1], () => __webpack_require__.e("vendors-node_modules_react_index_js").then(() => () => __webpack_require__(/*! react */ "./node_modules/react/index.js")))
/******/ 		};
/******/ 		var initialConsumes = ["webpack/sharing/consume/default/react/react"];
/******/ 		initialConsumes.forEach((id) => {
/******/ 			__webpack_modules__[id] = (module) => {
/******/ 				// Handle case when module is used sync
/******/ 				installedModules[id] = 0;
/******/ 				delete __webpack_module_cache__[id];
/******/ 				var factory = moduleToHandlerMapping[id]();
/******/ 				if(typeof factory !== "function") throw new Error("Shared module is not available for eager consumption: " + id);
/******/ 				module.exports = factory();
/******/ 			}
/******/ 		});
/******/ 		var chunkMapping = {};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							delete __webpack_module_cache__[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							delete __webpack_module_cache__[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_react_app"] = self["webpackChunkmy_react_app"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./lib/js/src/FetchedDogPictures/FetchedDogPictures.bs.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;