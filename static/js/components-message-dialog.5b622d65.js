(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./docs/components/MessageDialog.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/react-native-web-modal/es/index.web.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),c=n("./node_modules/react-native-web/dist/exports/Text/index.js"),u=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),p=n("./node_modules/react-native-vector-icons/FontAwesome.js"),m=n("./src/modules/theme.ts"),f=n("./src/modules/layout.ts"),y=n("./src/components/Button.tsx"),d=n("./src/components/Space.tsx");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=v(this,(e=x(t)).call.apply(e,[this].concat(r)))).getIconName=function(){switch(n.props.type){case"info":return"info";case"warning":return"warning";case"question":return"question";case"success":default:return"check-circle"}},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.message,n=e.visible,r=e.type,a=e.nativeID,s=e.okButton,u=e.cancelButton,m=this.getIconName();return o.createElement(i.a,{animationType:"fade",transparent:!0,visible:n},o.createElement(l.a,{style:[O.overlay],nativeID:a},o.createElement(l.a,{style:O.container},o.createElement(p.a,{name:m,color:"warning"===r?w.warningColor:w.successColor,size:Object(f.a)()?52:42}),o.createElement(c.a,{style:O.text},t),o.createElement(d.a,null),o.createElement(l.a,{style:O.botoesAcao},u&&o.createElement(y.a,{text:u.text,onPress:u.onPress,style:u.customStyle,textStyle:u.textStyle,primary:u.primary,nativeID:u.nativeID}),s&&o.createElement(y.a,{text:s.text,onPress:s.onPress,style:s.customStyle,textStyle:s.textStyle,primary:s.primary,nativeID:s.nativeID})))))}}])&&g(n.prototype,r),a&&g(n,a),t}();h.defaultProps={type:"info"};var w=Object(m.a)(),O=u.a.create({botoesAcao:{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",width:"100%"},overlay:{flex:1,backgroundColor:"rgba(33, 33, 33, 0.7)",alignItems:"center"},text:{color:w.textColor1,fontFamily:"Lato-Bold",fontSize:Object(f.a)()?25:16,textAlign:"center",marginTop:Object(f.a)()?15:5,width:"100%"},container:{backgroundColor:w.backgroundColor1,borderRadius:6,padding:Object(f.a)()?25:16,width:Object(f.a)()?350:250,marginTop:Object(f.a)()?250:140,alignItems:"center"}});try{h.displayName="MessageDialog",h.__docgenInfo={description:"",displayName:"MessageDialog",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:'"info" | "warning" | "question" | "success"'}},nativeID:{defaultValue:null,description:"",name:"nativeID",required:!1,type:{name:"string"}},okButton:{defaultValue:null,description:"",name:"okButton",required:!1,type:{name:"{ text: string; onPress: () => void; customStyle?: StyleProp<ViewStyle>; textStyle?: StyleProp<TextStyle>; primary?: boolean; nativeID?: string; }"}},cancelButton:{defaultValue:null,description:"",name:"cancelButton",required:!1,type:{name:"{ text: string; onPress: () => void; customStyle?: StyleProp<ViewStyle>; textStyle?: StyleProp<TextStyle>; primary?: boolean; nativeID?: string; }"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MessageDialog.tsx#MessageDialog"]={docgenInfo:h.__docgenInfo,name:"MessageDialog",path:"src/components/MessageDialog.tsx#MessageDialog"})}catch(e){}function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=D(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"message"}},"Message"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(s.PropsTable,{of:h}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(s.Playground,{__position:1,__code:"{() => {\n  class MessageDialogExample extends React.Component {\n    constructor() {\n      this.state = {\n        messageVisible: true,\n      }\n    }\n    render() {\n      return (\n        <MessageDialog\n          message=\"This is a message\"\n          type=\"question\"\n          visible={this.state.messageVisible}\n          okButton={{\n            text: 'Ok',\n            primary: true,\n            onPress: () => {\n              alert('Ok Button Pressed')\n            },\n          }}\n          cancelButton={{\n            text: 'Cancel',\n            primary: false,\n            onPress: () => {\n              this.setState({ messageVisible: false })\n            },\n          }}\n        />\n      )\n    }\n  }\n\n  return <MessageDialogExample />\n}}",__scope:{props:n,MessageDialog:h}},function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(void 0).state={messageVisible:!0},E(void 0)}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this;return r.a.createElement(h,{message:"This is a message",type:"question",visible:this.state.messageVisible,okButton:{text:"Ok",primary:!0,onPress:function(){alert("Ok Button Pressed")}},cancelButton:{text:"Cancel",primary:!1,onPress:function(){e.setState({messageVisible:!1})}}})}}])&&j(n.prototype,o),a&&j(n,a),t}();return r.a.createElement(e,null)}))}}}]);