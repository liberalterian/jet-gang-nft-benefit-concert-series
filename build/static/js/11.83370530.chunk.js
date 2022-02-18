(this["webpackJsonpjet-gang-benefit"]=this["webpackJsonpjet-gang-benefit"]||[]).push([[11],{1403:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getSDKVersion=void 0;var i=s(n(1404));t.default=i.default,a(n(1404),t),a(n(2182),t),a(n(951),t),a(n(1405),t);var o=n(1406);Object.defineProperty(t,"getSDKVersion",{enumerable:!0,get:function(){return o.getSDKVersion}})},1404:function(e,t,n){"use strict";var r=n(96).default,a=n(95).default,s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=s(n(2175)),o=n(2178),u=n(2179),c=n(2180),f=r((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e);var n=t.whitelistedDomains,r=void 0===n?null:n,s=t.debug,f=void 0!==s&&s;this.communicator=new i.default(r,f),this.eth=new u.Eth(this.communicator),this.txs=new o.TXs(this.communicator),this.safe=new c.Safe(this.communicator)}));t.default=f},1405:function(e,t,n){"use strict";var r=n(96).default,a=n(95).default;Object.defineProperty(t,"__esModule",{value:!0}),t.MessageFormatter=void 0;var s=n(1406),i=n(2177),o=r((function e(){a(this,e)}));t.MessageFormatter=o,o.makeRequest=function(e,t){return{id:(0,i.generateRequestId)(),method:e,params:t,env:{sdkVersion:(0,s.getSDKVersion)()}}},o.makeResponse=function(e,t,n){return{id:e,success:!0,version:n,data:t}},o.makeErrorResponse=function(e,t,n){return{id:e,success:!1,error:t,version:n}}},1406:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getSDKVersion=void 0;var a=r(n(2176));t.getSDKVersion=function(){return a.default.version.slice(0,5)}},1407:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RPC_CALLS=void 0,t.RPC_CALLS={eth_call:"eth_call",eth_gasPrice:"eth_gasPrice",eth_getLogs:"eth_getLogs",eth_getBalance:"eth_getBalance",eth_getCode:"eth_getCode",eth_getBlockByHash:"eth_getBlockByHash",eth_getBlockByNumber:"eth_getBlockByNumber",eth_getStorageAt:"eth_getStorageAt",eth_getTransactionByHash:"eth_getTransactionByHash",eth_getTransactionReceipt:"eth_getTransactionReceipt",eth_getTransactionCount:"eth_getTransactionCount",eth_estimateGas:"eth_estimateGas"}},2175:function(e,t,n){"use strict";var r=n(96).default,a=n(95).default,s=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1405),u=r((function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a(this,e),this.allowedOrigins=null,this.callbacks=new Map,this.debugMode=!1,this.isValidMessage=function(e){var n=e.origin,r=e.data,a=!r,s=e.source===window.parent,i=("undefined"!==typeof r.version&&parseInt(r.version.split(".")[0]))>=1,o=!0;return Array.isArray(t.allowedOrigins)&&(o=void 0!==t.allowedOrigins.find((function(e){return e.test(n)}))),!a&&s&&i&&o},this.logIncomingMessage=function(e){console.info("Safe Apps SDK v1: A message was received from origin ".concat(e.origin,". "),e.data)},this.onParentMessage=function(e){t.isValidMessage(e)&&(t.debugMode&&t.logIncomingMessage(e),t.handleIncomingMessage(e.data))},this.handleIncomingMessage=function(e){var n=e.id,r=t.callbacks.get(n);r&&(r(e),t.callbacks.delete(n))},this.send=function(e,n){var r=o.MessageFormatter.makeRequest(e,n);if("undefined"===typeof window)throw new Error("Window doesn't exist");return window.parent.postMessage(r,"*"),new Promise((function(e,n){t.callbacks.set(r.id,(function(t){t.success?e(t):n(new Error(t.error))}))}))},this.allowedOrigins=n,this.debugMode=r,window.addEventListener("message",this.onParentMessage)}));t.default=u,i(n(951),t)},2176:function(e){e.exports=JSON.parse('{"name":"@gnosis.pm/safe-apps-sdk","version":"6.3.0","description":"SDK developed to integrate third-party apps with Safe app.","main":"dist/src/index.js","typings":"dist/src/index.d.ts","_files":["dist/**/*","README.md"],"keywords":["Gnosis","sdk","apps"],"scripts":{"test":"jest","format-dist":"sed -i \'s/\\"files\\":/\\"_files\\":/\' dist/package.json","build":"yarn rimraf dist && tsc && yarn format-dist","lint":"tslint -p tsconfig.json"},"author":"Gnosis (https://gnosis.io)","license":"MIT","dependencies":{"@gnosis.pm/safe-react-gateway-sdk":"^2.8.5","ethers":"^5.4.7"},"devDependencies":{"rimraf":"^3.0.2"},"repository":{"type":"git","url":"git+https://github.com/gnosis/safe-apps-sdk.git"},"bugs":{"url":"https://github.com/gnosis/safe-apps-sdk/issues"},"homepage":"https://github.com/gnosis/safe-apps-sdk#readme","publishConfig":{"access":"public"}}')},2177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateRequestId=void 0;var r=function(e){return e.toString(16).padStart(2,"0")};t.generateRequestId=function(){return"undefined"!==typeof window?function(e){var t=new Uint8Array((e||40)/2);return window.crypto.getRandomValues(t),Array.from(t,r).join("")}(10):(new Date).getTime().toString(36)}},2178:function(e,t,n){"use strict";var r=n(6),a=n(196).default,s=n(95).default,i=n(96).default;Object.defineProperty(t,"__esModule",{value:!0}),t.TXs=void 0;var o=n(951),u=function(){function e(t){s(this,e),this.communicator=t}return i(e,[{key:"getBySafeTxHash",value:function(){var e=a(r.mark((function e(t){var n;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("Invalid safeTxHash");case 2:return e.next=4,this.communicator.send(o.Methods.getTxBySafeTxHash,{safeTxHash:t});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"signMessage",value:function(){var e=a(r.mark((function e(t){var n,a;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={message:t},e.next=3,this.communicator.send(o.Methods.signMessage,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=a(r.mark((function e(t){var n,a,s,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.txs,a=t.params,n&&n.length){e.next=3;break}throw new Error("No transactions were passed");case 3:return s={txs:n,params:a},e.next=6,this.communicator.send(o.Methods.sendTransactions,s);case 6:return i=e.sent,e.abrupt("return",i.data);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.TXs=u},2179:function(e,t,n){"use strict";var r=n(6),a=n(196).default,s=n(95).default,i=n(96).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Eth=void 0;var o=n(1407),u=n(951),c={defaultBlockParam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"latest";return e},returnFullTxObjectParam:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e},blockNumberToHex:function(e){return Number.isInteger(e)?"0x".concat(e.toString(16)):e}},f=function(){function e(t){var n=this;s(this,e),this.communicator=t,this.call=this.buildRequest({call:o.RPC_CALLS.eth_call,formatters:[null,c.defaultBlockParam]}),this.getBalance=this.buildRequest({call:o.RPC_CALLS.eth_getBalance,formatters:[null,c.defaultBlockParam]}),this.getCode=this.buildRequest({call:o.RPC_CALLS.eth_getCode,formatters:[null,c.defaultBlockParam]}),this.getStorageAt=this.buildRequest({call:o.RPC_CALLS.eth_getStorageAt,formatters:[null,c.blockNumberToHex,c.defaultBlockParam]}),this.getPastLogs=this.buildRequest({call:o.RPC_CALLS.eth_getLogs}),this.getBlockByHash=this.buildRequest({call:o.RPC_CALLS.eth_getBlockByHash,formatters:[null,c.returnFullTxObjectParam]}),this.getBlockByNumber=this.buildRequest({call:o.RPC_CALLS.eth_getBlockByNumber,formatters:[c.blockNumberToHex,c.returnFullTxObjectParam]}),this.getTransactionByHash=this.buildRequest({call:o.RPC_CALLS.eth_getTransactionByHash}),this.getTransactionReceipt=this.buildRequest({call:o.RPC_CALLS.eth_getTransactionReceipt}),this.getTransactionCount=this.buildRequest({call:o.RPC_CALLS.eth_getTransactionCount,formatters:[null,c.defaultBlockParam]}),this.getGasPrice=this.buildRequest({call:o.RPC_CALLS.eth_gasPrice}),this.getEstimateGas=function(e){return n.buildRequest({call:o.RPC_CALLS.eth_estimateGas})([e])}}return i(e,[{key:"buildRequest",value:function(e){var t=this,n=e.call,s=e.formatters;return function(){var e=a(r.mark((function e(a){var i,o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s&&Array.isArray(a)&&s.forEach((function(e,t){e&&(a[t]=e(a[t]))})),i={call:n,params:a||[]},e.next=4,t.communicator.send(u.Methods.rpcCall,i);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]),e}();t.Eth=f},2180:function(e,t,n){"use strict";var r=n(6),a=n(196).default,s=n(95).default,i=n(96).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Safe=void 0;var o=n(138),u=n(2181),c=n(951),f=n(1407),d=function(){function e(t){s(this,e),this.communicator=t}return i(e,[{key:"getChainInfo",value:function(){var e=a(r.mark((function e(){var t;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.communicator.send(c.Methods.getChainInfo,void 0);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getInfo",value:function(){var e=a(r.mark((function e(){var t;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.communicator.send(c.Methods.getSafeInfo,void 0);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"experimental_getBalances",value:function(){var e=a(r.mark((function e(){var t,n,a,s,i=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},n=t.currency,a=void 0===n?"usd":n,e.next=3,this.communicator.send(c.Methods.getSafeBalances,{currency:a});case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"check1271Signature",value:function(){var e=a(r.mark((function e(t){var n,a,s,i,o,d=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:"0x",e.next=3,this.getInfo();case 3:return a=e.sent,s=u.EIP_1271_INTERFACE.encodeFunctionData("isValidSignature",[t,n]),i={call:f.RPC_CALLS.eth_call,params:[{to:a.safeAddress,data:s},"latest"]},e.prev=6,e.next=9,this.communicator.send(c.Methods.rpcCall,i);case 9:return o=e.sent,e.abrupt("return",o.data.slice(0,10).toLowerCase()===u.MAGIC_VALUE);case 13:return e.prev=13,e.t0=e.catch(6),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,this,[[6,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"check1271SignatureBytes",value:function(){var e=a(r.mark((function e(t){var n,a,s,i,d,l,h=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:"0x",e.next=3,this.getInfo();case 3:return a=e.sent,s=o.ethers.utils.arrayify(t),i=u.EIP_1271_BYTES_INTERFACE.encodeFunctionData("isValidSignature",[s,n]),d={call:f.RPC_CALLS.eth_call,params:[{to:a.safeAddress,data:i},"latest"]},e.prev=7,e.next=10,this.communicator.send(c.Methods.rpcCall,d);case 10:return l=e.sent,e.abrupt("return",l.data.slice(0,10).toLowerCase()===u.MAGIC_VALUE_BYTES);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,this,[[7,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"calculateMessageHash",value:function(e){return o.ethers.utils.hashMessage(e)}},{key:"isMessageSigned",value:function(){var e=a(r.mark((function e(t){var n,a,s,i=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"0x",a=this.calculateMessageHash(t),e.next=4,this.isMessageHashSigned(a,n);case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isMessageHashSigned",value:function(){var e=a(r.mark((function e(t){var n,a,s,i,o,u=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=u.length>1&&void 0!==u[1]?u[1]:"0x",a=[this.check1271Signature.bind(this),this.check1271SignatureBytes.bind(this)],s=0,i=a;case 3:if(!(s<i.length)){e.next=13;break}return o=i[s],e.next=7,o(t,n);case 7:if(!e.sent){e.next=10;break}return e.abrupt("return",!0);case 10:s++,e.next=3;break;case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Safe=d},2181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAGIC_VALUE_BYTES=t.MAGIC_VALUE=t.EIP_1271_BYTES_INTERFACE=t.EIP_1271_INTERFACE=void 0;var r=n(138);t.MAGIC_VALUE="0x1626ba7e";t.MAGIC_VALUE_BYTES="0x20c13b0b";var a=new r.ethers.utils.Interface(["function isValidSignature(bytes32 _dataHash, bytes calldata _signature) external view"]);t.EIP_1271_INTERFACE=a;var s=new r.ethers.utils.Interface(["function isValidSignature(bytes calldata _data, bytes calldata _signature) public view"]);t.EIP_1271_BYTES_INTERFACE=s},2182:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(2183),t),a(n(2184),t),a(n(2185),t),a(n(2187),t)},2183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},2184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},2185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TransferDirection=t.TransactionStatus=t.TokenType=t.Operation=void 0;var r=n(2186);Object.defineProperty(t,"Operation",{enumerable:!0,get:function(){return r.Operation}}),Object.defineProperty(t,"TokenType",{enumerable:!0,get:function(){return r.TokenType}}),Object.defineProperty(t,"TransactionStatus",{enumerable:!0,get:function(){return r.TransactionStatus}}),Object.defineProperty(t,"TransferDirection",{enumerable:!0,get:function(){return r.TransferDirection}})},2186:function(e,t,n){self,e.exports=function(){var e={204:function(e,t,n){e.exports=self.fetch||(self.fetch=n(869).default||n(869))},869:function(e,t,n){"use strict";function r(e,t){return t=t||{},new Promise((function(n,r){var a=new XMLHttpRequest,s=[],i=[],o={},u=function e(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:e,headers:{keys:function(){return s},entries:function(){return i},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}};for(var c in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){s.push(t=t.toLowerCase()),i.push([t,n]),o[t]=o[t]?o[t]+","+n:n})),n(u())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(c,t.headers[c]);a.send(t.body||null)}))}n.r(t),n.d(t,{default:function(){return r}})}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";n.r(r),n.d(r,{FEATURES:function(){return c},GAS_PRICE_TYPE:function(){return u},Operation:function(){return t},RPC_AUTHENTICATION:function(){return o},SafeAppAccessPolicyTypes:function(){return e},TokenType:function(){return i},TransactionStatus:function(){return a},TransferDirection:function(){return s},getBalances:function(){return g},getChainConfig:function(){return A},getChainsConfig:function(){return S},getCollectibles:function(){return b},getDecodedData:function(){return P},getFiatCurrencies:function(){return v},getMasterCopies:function(){return O},getOwnedSafes:function(){return _},getSafeApps:function(){return E},getSafeInfo:function(){return p},getTransactionDetails:function(){return I},getTransactionHistory:function(){return y},getTransactionQueue:function(){return m},postSafeGasEstimation:function(){return T},proposeTransaction:function(){return C}});var e,t,a,s,i,o,u,c,f=n(204),d=n.n(f);function l(e,t){return n=this,r=void 0,s=function(){var n,r,a,s,i;return function(e,t){var n,r,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}(this,(function(o){switch(o.label){case 0:return null!=t&&(n={method:"POST",body:"string"==typeof t?t:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),[4,d()(e,n)];case 1:return[4,(r=o.sent()).json()];case 2:if(a=o.sent(),!r.ok){s="";try{s=(i=a).code+": "+i.message}catch(e){s=r.statusText}throw new Error(s)}return[2,a]}}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{u(s.next(e))}catch(e){t(e)}}function o(e){try{u(s.throw(e))}catch(e){t(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,o)}u((s=s.apply(n,r||[])).next())}));var n,r,a,s}function h(e,t,n,r){if(r)return l(r);var a=n;return l(""+e+function(e,t){return t?Object.keys(t).reduce((function(e,n){return function(e,t,n){return e.replace(new RegExp("\\{"+t+"\\}","g"),n)}(e,n,String(t[n]))}),e):e}(t,null==a?void 0:a.path)+function(e){if(!e)return"";var t=new URLSearchParams;Object.keys(e).forEach((function(n){null!=e[n]&&t.append(n,String(e[n]))}));var n=t.toString();return n?"?"+n:""}(null==a?void 0:a.query),null==a?void 0:a.body)}function p(e,t,n){return h(e,"/v1/chains/{chainId}/safes/{address}",{path:{chainId:t,address:n}})}function g(e,t,n,r,a){return void 0===r&&(r="usd"),void 0===a&&(a={}),h(e,"/v1/chains/{chainId}/safes/{address}/balances/{currency}",{path:{chainId:t,address:n,currency:r},query:a})}function v(e){return h(e,"/v1/balances/supported-fiat-codes")}function _(e,t,n){return h(e,"/v1/chains/{chainId}/owners/{address}/safes",{path:{chainId:t,address:n}})}function b(e,t,n,r){return void 0===r&&(r={}),h(e,"/v1/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:t,address:n},query:r})}function y(e,t,n,r){return h(e,"/v1/chains/{chainId}/safes/{safe_address}/transactions/history",{path:{chainId:t,safe_address:n},query:{}},r)}function m(e,t,n,r){return h(e,"/v1/chains/{chainId}/safes/{safe_address}/transactions/queued",{path:{chainId:t,safe_address:n},query:{}},r)}function I(e,t,n){return h(e,"/v1/chains/{chainId}/transactions/{transactionId}",{path:{chainId:t,transactionId:n}})}function T(e,t,n,r){return h(e,"/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations",{path:{chainId:t,safe_address:n},body:r})}function C(e,t,n,r){return h(e,"/v1/chains/{chainId}/transactions/{safe_address}/propose",{path:{chainId:t,safe_address:n},body:r})}function S(e,t){return h(e,"/v1/chains",{query:t})}function A(e,t){return h(e,"/v1/chains/{chainId}",{path:{chainId:t}})}function E(e,t,n){return void 0===n&&(n={}),h(e,"/v1/chains/{chainId}/safe-apps",{path:{chainId:t},query:n})}function O(e,t){return h(e,"/v1/chains/{chainId}/about/master-copies",{path:{chainId:t}})}function P(e,t,n){return h(e,"/v1/chains/{chainId}/data-decoder",{path:{chainId:t},body:{data:n}})}!function(e){e.NoRestrictions="NO_RESTRICTIONS",e.DomainAllowlist="DOMAIN_ALLOWLIST"}(e||(e={})),function(e){e[e.CALL=0]="CALL",e[e.DELEGATE=1]="DELEGATE"}(t||(t={})),function(e){e.AWAITING_CONFIRMATIONS="AWAITING_CONFIRMATIONS",e.AWAITING_EXECUTION="AWAITING_EXECUTION",e.CANCELLED="CANCELLED",e.FAILED="FAILED",e.SUCCESS="SUCCESS",e.PENDING="PENDING",e.WILL_BE_REPLACED="WILL_BE_REPLACED"}(a||(a={})),function(e){e.INCOMING="INCOMING",e.OUTGOING="OUTGOING",e.UNKNOWN="UNKNOWN"}(s||(s={})),function(e){e.ERC20="ERC20",e.ERC721="ERC721",e.NATIVE_COIN="NATIVE_COIN"}(i||(i={})),function(e){e.API_KEY_PATH="API_KEY_PATH",e.NO_AUTHENTICATION="NO_AUTHENTICATION",e.UNKNOWN="UNKNOWN"}(o||(o={})),function(e){e.ORACLE="ORACLE",e.FIXED="FIXED",e.UNKNOWN="UNKNOWN"}(u||(u={})),function(e){e.ERC721="ERC721",e.SAFE_APPS="SAFE_APPS",e.CONTRACT_INTERACTION="CONTRACT_INTERACTION",e.DOMAIN_LOOKUP="DOMAIN_LOOKUP",e.SPENDING_LIMIT="SPENDING_LIMIT",e.EIP1559="EIP1559",e.SAFE_TX_GAS_OPTIONAL="SAFE_TX_GAS_OPTIONAL"}(c||(c={}))}(),r}()},2187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(951)},951:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Methods=void 0,function(e){e.sendTransactions="sendTransactions",e.rpcCall="rpcCall",e.getChainInfo="getChainInfo",e.getSafeInfo="getSafeInfo",e.getTxBySafeTxHash="getTxBySafeTxHash",e.getSafeBalances="getSafeBalances",e.signMessage="signMessage"}(t.Methods||(t.Methods={}))}}]);
//# sourceMappingURL=11.83370530.chunk.js.map