(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./docs/components/TimePicker.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),l=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),c=n("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),u=n("./node_modules/react-native-web/dist/exports/View/index.js"),s=n("./node_modules/react-native-web/dist/exports/Text/index.js"),p=n("./node_modules/react-native-web/dist/exports/TextInput/index.js"),d=n("./src/modules/theme.ts"),f=n("./src/modules/layout.ts"),m=n("./src/modules/validation.ts");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=h(this,(e=v(t)).call.apply(e,[this].concat(r)))).backspace=!1,n.getStyles=function(){var e=Object(d.a)();return l.a.create({container:{paddingHorizontal:16,paddingVertical:8,borderWidth:1,borderColor:e.borderColor1,borderRadius:3},label:{color:e.textColor2,fontFamily:"Lato-Regular",fontSize:Object(f.a)()?15:12,lineHeight:16},input:{color:e.textColor1,fontFamily:"Lato-Bold",fontSize:16,minHeight:22,padding:0,margin:0,outline:"0"},readonly:{backgroundColor:e.disabledColor}})},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.label,r=t.style,a=t.disabled,i=t.value,l=this.getStyles();return o.createElement(c.a,{accessible:!1,disabled:a},o.createElement(u.a,{style:[l.container,r,a?l.readonly:null]},o.createElement(s.a,{style:l.label},n),o.createElement(p.a,{value:i,style:l.input,maxLength:5,onKeyPress:function(t){"Backspace"===t.key&&(e.backspace=!0)},onChangeText:function(t){2!==t.length||e.backspace||(t+=":"),3!==t.length||t.includes(":")||(t=t.substr(0,2)+":"+t.substr(2)),t.length<=2&&(e.backspace=!1),Object(m.a)(t+"00:00".substr(t.length))&&e.props.onChange(t)}})))}}])&&y(n.prototype,r),a&&y(n,a),t}();w.defaultProps={disabled:!1};try{w.displayName="TimePicker",w.__docgenInfo={description:"",displayName:"TimePicker",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TimePicker.web.tsx#TimePicker"]={docgenInfo:w.__docgenInfo,name:"TimePicker",path:"src/components/TimePicker.web.tsx#TimePicker"})}catch(e){}function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=O(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"timepicker"}},"TimePicker"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(i.PropsTable,{of:w}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(i.Playground,{__position:1,__code:"{() => {\n  class TimePickerExample extends React.Component {\n    constructor() {\n      this.state = {\n        value: '08:00',\n        endDate: new Date(1990, 9, 31),\n      }\n    }\n    render() {\n      return (\n        <TimePicker\n          label=\"Time\"\n          value={this.state.value}\n          onChange={value => this.setState({ value })}\n        />\n      )\n    }\n  }\n\n  return <TimePickerExample />\n}}",__scope:{props:n,TimePicker:w}},function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(void 0).state={value:"08:00",endDate:new Date(1990,9,31)},S(void 0)}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this;return r.a.createElement(w,{label:"Time",value:this.state.value,onChange:function(t){return e.setState({value:t})}})}}])&&x(n.prototype,o),a&&x(n,a),t}();return r.a.createElement(e,null)}))}}}]);