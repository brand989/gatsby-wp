webpackHotUpdate("prodom",{

/***/ "./packages/prodom-theme/src/components/list.js":
/*!******************************************************!*\
  !*** ./packages/prodom-theme/src/components/list.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const List=({state,actions})=>{const data=state.source.get(state.router.link);const[contentWindow,setcontentWindow]=useState('');const visible=false;function openNews(type,id){// console.log( type, id)\n// console.log(state.source[`${type}`][`${id}`].content.rendered)\n// visible = !visible\nthis.contentWindow=state.source[`${type}`][`${id}`].content.rendered;console.log(this.contentWindow);}return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(Items,{children:[data.items.map(item=>{const post=state.source[item.type][item.id];const media=state.source.post[item.id].featured_media;const mediaUrl=state.source.attachment[`${media}`];let image;if(mediaUrl){image=mediaUrl.source_url;}return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{link:post.link,children:[post.title.rendered,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"br\",{})]},item.id),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"button\",{onClick:e=>openNews(item.type,item.id),children:\"\\u043F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435\"}),image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"img\",{alt:post.title.rendered,src:image},item.id):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\",{children:\"\\u043D\\u0435\\u0442 \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u043A\\u0438\"})]});}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(PrevNextNav,{children:[data.previous&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"button\",{onClick:()=>{actions.router.set(data.previous);},children:\"\\xAB Prev\"}),data.next&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"button\",{onClick:()=>{actions.router.set(data.next);},children:\"Next \\xBB\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(\"div\",{children:[\"\\u041A\\u043E\\u043D\\u0442\\u0435\\u043D\\u0442\",contentWindow]}),visible?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{children:contentWindow}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{children:\"\\u043F\\u0443\\u0441\\u0442\\u043E\"})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(List));const Items=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"styled\"])(\"div\", false?undefined:{target:\"enx81fd1\",label:\"Items\"})( false?undefined:{name:\"ic0kai\",styles:\"&>a{display:block;margin:6px 0;font-size:1.2em;color:steelblue;text-decoration:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxqc1xcZ2F0c2J5LXdwXFxwYWNrYWdlc1xccHJvZG9tLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkV3QiIsImZpbGUiOiJDOlxcanNcXGdhdHNieS13cFxccGFja2FnZXNcXHByb2RvbS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCJcclxuXHJcblxyXG5cclxuY29uc3QgTGlzdCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcclxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICBjb25zdCBbY29udGVudFdpbmRvdywgc2V0Y29udGVudFdpbmRvd10gPSB1c2VTdGF0ZSgnJyk7XHJcbiBcclxuICBjb25zdCB2aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgZnVuY3Rpb24gIG9wZW5OZXdzICh0eXBlLCBpZCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coIHR5cGUsIGlkKVxyXG4gICAgLy8gY29uc29sZS5sb2coc3RhdGUuc291cmNlW2Ake3R5cGV9YF1bYCR7aWR9YF0uY29udGVudC5yZW5kZXJlZClcclxuICAgIC8vIHZpc2libGUgPSAhdmlzaWJsZVxyXG4gICAgdGhpcy5jb250ZW50V2luZG93ID0gc3RhdGUuc291cmNlW2Ake3R5cGV9YF1bYCR7aWR9YF0uY29udGVudC5yZW5kZXJlZFxyXG4gICAgY29uc29sZS5sb2codGhpcy5jb250ZW50V2luZG93KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJdGVtcz5cclxuICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdXHJcbiAgICAgICAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UucG9zdFtpdGVtLmlkXS5mZWF0dXJlZF9tZWRpYVxyXG4gICAgICAgIGNvbnN0IG1lZGlhVXJsID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbYCR7bWVkaWF9YF1cclxuICAgICAgICBsZXQgaW1hZ2VcclxuICAgICAgICBcclxuICAgICAgICBpZihtZWRpYVVybCl7XHJcbiAgICAgICAgICBpbWFnZSA9IG1lZGlhVXJsLnNvdXJjZV91cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGxpbms9e3Bvc3QubGlua30+XHJcbiAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9Pm9wZW5OZXdzKGl0ZW0udHlwZSwgaXRlbS5pZCApfT7Qv9C+0LTRgNC+0LHQvdC10LU8L2J1dHRvbj5cclxuICAgICAgICAgICAge2ltYWdlID8gKDxpbWcgYWx0PXtwb3N0LnRpdGxlLnJlbmRlcmVkfSBzcmM9e2ltYWdlfSAga2V5PXtpdGVtLmlkfS8+KSA6ICg8cD7QvdC10YIg0LrQsNGA0YLQuNC90LrQuDwvcD4pIH1cclxuICAgICAgICAgPC8+XHJcbiAgICAgICl9KX1cclxuXHJcbiAgICAgPFByZXZOZXh0TmF2PlxyXG4gICAgICAgIHtkYXRhLnByZXZpb3VzICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLnByZXZpb3VzKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAmIzE3MTsgUHJldlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZGF0YS5uZXh0ICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLm5leHQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5leHQgJiMxODc7XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1ByZXZOZXh0TmF2PlxyXG4gICAgICA8ZGl2PtCa0L7QvdGC0LXQvdGCe2NvbnRlbnRXaW5kb3d9PC9kaXY+XHJcblxyXG4gICAgICB7dmlzaWJsZSA/ICg8ZGl2Pntjb250ZW50V2luZG93fTwvZGl2PikgOiAoPGRpdj7Qv9GD0YHRgtC+PC9kaXY+KSB9XHJcbiAgICAgIFxyXG4gICAgPC9JdGVtcz5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KVxyXG5cclxuXHJcbmNvbnN0IEl0ZW1zID0gc3R5bGVkLmRpdmBcclxuICAmID4gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbmBcclxuY29uc3QgUHJldk5leHROYXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcclxuXHJcbiAgJiA+IGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gIH1cclxuICAmID4gYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmBcclxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PrevNextNav=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"styled\"])(\"div\", false?undefined:{target:\"enx81fd0\",label:\"PrevNextNav\"})( false?undefined:{name:\"19yg2n3\",styles:\"padding-top:1.5em;&>button{background:#eee;text-decoration:none;padding:0.5em 1em;color:#888;border:1px solid #aaa;font-size:0.8em;margin-right:2em;}&>button:hover{cursor:pointer;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxqc1xcZ2F0c2J5LXdwXFxwYWNrYWdlc1xccHJvZG9tLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0Y4QiIsImZpbGUiOiJDOlxcanNcXGdhdHNieS13cFxccGFja2FnZXNcXHByb2RvbS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCJcclxuXHJcblxyXG5cclxuY29uc3QgTGlzdCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcclxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICBjb25zdCBbY29udGVudFdpbmRvdywgc2V0Y29udGVudFdpbmRvd10gPSB1c2VTdGF0ZSgnJyk7XHJcbiBcclxuICBjb25zdCB2aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgZnVuY3Rpb24gIG9wZW5OZXdzICh0eXBlLCBpZCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coIHR5cGUsIGlkKVxyXG4gICAgLy8gY29uc29sZS5sb2coc3RhdGUuc291cmNlW2Ake3R5cGV9YF1bYCR7aWR9YF0uY29udGVudC5yZW5kZXJlZClcclxuICAgIC8vIHZpc2libGUgPSAhdmlzaWJsZVxyXG4gICAgdGhpcy5jb250ZW50V2luZG93ID0gc3RhdGUuc291cmNlW2Ake3R5cGV9YF1bYCR7aWR9YF0uY29udGVudC5yZW5kZXJlZFxyXG4gICAgY29uc29sZS5sb2codGhpcy5jb250ZW50V2luZG93KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJdGVtcz5cclxuICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdXHJcbiAgICAgICAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UucG9zdFtpdGVtLmlkXS5mZWF0dXJlZF9tZWRpYVxyXG4gICAgICAgIGNvbnN0IG1lZGlhVXJsID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbYCR7bWVkaWF9YF1cclxuICAgICAgICBsZXQgaW1hZ2VcclxuICAgICAgICBcclxuICAgICAgICBpZihtZWRpYVVybCl7XHJcbiAgICAgICAgICBpbWFnZSA9IG1lZGlhVXJsLnNvdXJjZV91cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGxpbms9e3Bvc3QubGlua30+XHJcbiAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9Pm9wZW5OZXdzKGl0ZW0udHlwZSwgaXRlbS5pZCApfT7Qv9C+0LTRgNC+0LHQvdC10LU8L2J1dHRvbj5cclxuICAgICAgICAgICAge2ltYWdlID8gKDxpbWcgYWx0PXtwb3N0LnRpdGxlLnJlbmRlcmVkfSBzcmM9e2ltYWdlfSAga2V5PXtpdGVtLmlkfS8+KSA6ICg8cD7QvdC10YIg0LrQsNGA0YLQuNC90LrQuDwvcD4pIH1cclxuICAgICAgICAgPC8+XHJcbiAgICAgICl9KX1cclxuXHJcbiAgICAgPFByZXZOZXh0TmF2PlxyXG4gICAgICAgIHtkYXRhLnByZXZpb3VzICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLnByZXZpb3VzKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAmIzE3MTsgUHJldlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZGF0YS5uZXh0ICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLm5leHQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5leHQgJiMxODc7XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1ByZXZOZXh0TmF2PlxyXG4gICAgICA8ZGl2PtCa0L7QvdGC0LXQvdGCe2NvbnRlbnRXaW5kb3d9PC9kaXY+XHJcblxyXG4gICAgICB7dmlzaWJsZSA/ICg8ZGl2Pntjb250ZW50V2luZG93fTwvZGl2PikgOiAoPGRpdj7Qv9GD0YHRgtC+PC9kaXY+KSB9XHJcbiAgICAgIFxyXG4gICAgPC9JdGVtcz5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KVxyXG5cclxuXHJcbmNvbnN0IEl0ZW1zID0gc3R5bGVkLmRpdmBcclxuICAmID4gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbmBcclxuY29uc3QgUHJldk5leHROYXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcclxuXHJcbiAgJiA+IGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gIH1cclxuICAmID4gYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmBcclxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9wcm9kb20tdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC5qcz83NTZlIl0sIm5hbWVzIjpbIkxpc3QiLCJzdGF0ZSIsImFjdGlvbnMiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImNvbnRlbnRXaW5kb3ciLCJzZXRjb250ZW50V2luZG93IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwib3Blbk5ld3MiLCJ0eXBlIiwiaWQiLCJjb250ZW50IiwicmVuZGVyZWQiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwicG9zdCIsIm1lZGlhIiwiZmVhdHVyZWRfbWVkaWEiLCJtZWRpYVVybCIsImF0dGFjaG1lbnQiLCJpbWFnZSIsInNvdXJjZV91cmwiLCJ0aXRsZSIsImUiLCJwcmV2aW91cyIsInNldCIsIm5leHQiLCJjb25uZWN0IiwiSXRlbXMiLCJzdHlsZWQiLCJQcmV2TmV4dE5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7cVJBTUEsS0FBTUEsS0FBSSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQUQsR0FBd0IsQ0FDbkMsS0FBTUMsS0FBSSxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxLQUFNLENBQUNDLGFBQUQsQ0FBZ0JDLGdCQUFoQixFQUFvQ0MsUUFBUSxDQUFDLEVBQUQsQ0FBbEQsQ0FFQSxLQUFNQyxRQUFPLENBQUcsS0FBaEIsQ0FFQSxRQUFVQyxTQUFWLENBQW9CQyxJQUFwQixDQUEwQkMsRUFBMUIsQ0FBOEIsQ0FDNUI7QUFDQTtBQUNBO0FBQ0EsS0FBS04sYUFBTCxDQUFxQlAsS0FBSyxDQUFDRyxNQUFOLENBQWMsR0FBRVMsSUFBSyxFQUFyQixFQUF5QixHQUFFQyxFQUFHLEVBQTlCLEVBQWlDQyxPQUFqQyxDQUF5Q0MsUUFBOUQsQ0FDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1YsYUFBakIsRUFDRCxDQUVELE1BQ0UseUVBQUMsS0FBRCxZQUNHTCxJQUFJLENBQUNnQixLQUFMLENBQVdDLEdBQVgsQ0FBZ0JDLElBQUQsRUFBVSxDQUN4QixLQUFNQyxLQUFJLENBQUdyQixLQUFLLENBQUNHLE1BQU4sQ0FBYWlCLElBQUksQ0FBQ1IsSUFBbEIsRUFBd0JRLElBQUksQ0FBQ1AsRUFBN0IsQ0FBYixDQUNBLEtBQU1TLE1BQUssQ0FBR3RCLEtBQUssQ0FBQ0csTUFBTixDQUFha0IsSUFBYixDQUFrQkQsSUFBSSxDQUFDUCxFQUF2QixFQUEyQlUsY0FBekMsQ0FDQSxLQUFNQyxTQUFRLENBQUd4QixLQUFLLENBQUNHLE1BQU4sQ0FBYXNCLFVBQWIsQ0FBeUIsR0FBRUgsS0FBTSxFQUFqQyxDQUFqQixDQUNBLEdBQUlJLE1BQUosQ0FFQSxHQUFHRixRQUFILENBQVksQ0FDVkUsS0FBSyxDQUFHRixRQUFRLENBQUNHLFVBQWpCLENBQ0QsQ0FHRCxNQUNFLHdKQUVFLHdFQUFDLGlFQUFELEVBQW9CLElBQUksQ0FBRU4sSUFBSSxDQUFDZixJQUEvQixXQUNHZSxJQUFJLENBQUNPLEtBQUwsQ0FBV2IsUUFEZCxDQUVFLCtFQUZGLEdBQVdLLElBQUksQ0FBQ1AsRUFBaEIsQ0FGRixDQU1FLGlGQUFRLE9BQU8sQ0FBR2dCLENBQUQsRUFBS2xCLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDUixJQUFOLENBQVlRLElBQUksQ0FBQ1AsRUFBakIsQ0FBOUIsb0VBTkYsQ0FPR2EsS0FBSyxDQUFJLDhFQUFLLEdBQUcsQ0FBRUwsSUFBSSxDQUFDTyxLQUFMLENBQVdiLFFBQXJCLENBQStCLEdBQUcsQ0FBRVcsS0FBcEMsRUFBaUROLElBQUksQ0FBQ1AsRUFBdEQsQ0FBSixDQUFvRSw0SkFQNUUsR0FERixDQVVBLENBckJELENBREgsQ0F3QkMsd0VBQUMsV0FBRCxZQUNJWCxJQUFJLENBQUM0QixRQUFMLEVBQ0MsaUZBQ0UsT0FBTyxDQUFFLElBQU0sQ0FDYjdCLE9BQU8sQ0FBQ0ksTUFBUixDQUFlMEIsR0FBZixDQUFtQjdCLElBQUksQ0FBQzRCLFFBQXhCLEVBQ0QsQ0FISCx1QkFGTCxDQVVJNUIsSUFBSSxDQUFDOEIsSUFBTCxFQUNDLGlGQUNFLE9BQU8sQ0FBRSxJQUFNLENBQ2IvQixPQUFPLENBQUNJLE1BQVIsQ0FBZTBCLEdBQWYsQ0FBbUI3QixJQUFJLENBQUM4QixJQUF4QixFQUNELENBSEgsdUJBWEwsR0F4QkQsQ0E0Q0Usc0lBQWF6QixhQUFiLEdBNUNGLENBOENHRyxPQUFPLENBQUksdUZBQU1ILGFBQU4sRUFBSixDQUFtQyx5SEE5QzdDLEdBREYsQ0FvREQsQ0FsRUQsQ0FvRWUwQix1SEFBTyxDQUFDbEMsSUFBRCxDQUF0QixFQUdBLEtBQU1tQyxNQUFLLGNBQUdDLHVEQUFILCtsSUFBWCxDQVNBLEtBQU1DLFlBQVcsY0FBR0QsdURBQUgscXNJQUFqQiIsImZpbGUiOiIuL3BhY2thZ2VzL3Byb2RvbS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCJcclxuXHJcblxyXG5cclxuY29uc3QgTGlzdCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcclxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICBjb25zdCBbY29udGVudFdpbmRvdywgc2V0Y29udGVudFdpbmRvd10gPSB1c2VTdGF0ZSgnJyk7XHJcbiBcclxuICBjb25zdCB2aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgZnVuY3Rpb24gIG9wZW5OZXdzICh0eXBlLCBpZCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coIHR5cGUsIGlkKVxyXG4gICAgLy8gY29uc29sZS5sb2coc3RhdGUuc291cmNlW2Ake3R5cGV9YF1bYCR7aWR9YF0uY29udGVudC5yZW5kZXJlZClcclxuICAgIC8vIHZpc2libGUgPSAhdmlzaWJsZVxyXG4gICAgdGhpcy5jb250ZW50V2luZG93ID0gc3RhdGUuc291cmNlW2Ake3R5cGV9YF1bYCR7aWR9YF0uY29udGVudC5yZW5kZXJlZFxyXG4gICAgY29uc29sZS5sb2codGhpcy5jb250ZW50V2luZG93KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJdGVtcz5cclxuICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdXHJcbiAgICAgICAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UucG9zdFtpdGVtLmlkXS5mZWF0dXJlZF9tZWRpYVxyXG4gICAgICAgIGNvbnN0IG1lZGlhVXJsID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbYCR7bWVkaWF9YF1cclxuICAgICAgICBsZXQgaW1hZ2VcclxuICAgICAgICBcclxuICAgICAgICBpZihtZWRpYVVybCl7XHJcbiAgICAgICAgICBpbWFnZSA9IG1lZGlhVXJsLnNvdXJjZV91cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGxpbms9e3Bvc3QubGlua30+XHJcbiAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9Pm9wZW5OZXdzKGl0ZW0udHlwZSwgaXRlbS5pZCApfT7Qv9C+0LTRgNC+0LHQvdC10LU8L2J1dHRvbj5cclxuICAgICAgICAgICAge2ltYWdlID8gKDxpbWcgYWx0PXtwb3N0LnRpdGxlLnJlbmRlcmVkfSBzcmM9e2ltYWdlfSAga2V5PXtpdGVtLmlkfS8+KSA6ICg8cD7QvdC10YIg0LrQsNGA0YLQuNC90LrQuDwvcD4pIH1cclxuICAgICAgICAgPC8+XHJcbiAgICAgICl9KX1cclxuXHJcbiAgICAgPFByZXZOZXh0TmF2PlxyXG4gICAgICAgIHtkYXRhLnByZXZpb3VzICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLnByZXZpb3VzKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAmIzE3MTsgUHJldlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZGF0YS5uZXh0ICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMucm91dGVyLnNldChkYXRhLm5leHQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5leHQgJiMxODc7XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1ByZXZOZXh0TmF2PlxyXG4gICAgICA8ZGl2PtCa0L7QvdGC0LXQvdGCe2NvbnRlbnRXaW5kb3d9PC9kaXY+XHJcblxyXG4gICAgICB7dmlzaWJsZSA/ICg8ZGl2Pntjb250ZW50V2luZG93fTwvZGl2PikgOiAoPGRpdj7Qv9GD0YHRgtC+PC9kaXY+KSB9XHJcbiAgICAgIFxyXG4gICAgPC9JdGVtcz5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KVxyXG5cclxuXHJcbmNvbnN0IEl0ZW1zID0gc3R5bGVkLmRpdmBcclxuICAmID4gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbmBcclxuY29uc3QgUHJldk5leHROYXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcclxuXHJcbiAgJiA+IGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gIH1cclxuICAmID4gYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/prodom-theme/src/components/list.js\n");

/***/ })

})