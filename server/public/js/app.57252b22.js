(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"093b":function(e,t,r){e.exports=r.p+"img/add.e3712c95.jpg"},1:function(e,t){},2:function(e,t){},2811:function(e,t,r){e.exports=r.p+"img/exercise.493ea178.png"},"2b56":function(e,t,r){"use strict";var n=r("31f8"),o=r.n(n);o.a},"31f8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),r("router-link",{attrs:{to:"/get-started"}},[e._v(" "+e._s(this.$store.state.usermessage))]),e._v(" |\n    "),r("router-link",{attrs:{to:"/dashboard"}},[e._v("Private Link")])],1),r("router-view")],1)},s=[],a=(r("7f7f"),r("2f62")),i=r("bc3a"),u=r.n(i),c=(r("9490"),r("8c4f")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("h1",[e._v(" Home Page for Deutsch App")]),n("p",[e._v(" Your login status: "+e._s(e.status)+" ")])])},p=[],d=(r("8e6e"),r("ac6a"),r("456d"),r("bd86"));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"home",data:function(){return{}},computed:g({},Object(a["c"])(["status"])),created:function(){localStorage.clear()}},v=f,h=r("2877"),b=Object(h["a"])(v,l,p,!1,null,null,null),w=b.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"login"},[r("h1",[e._v("Log-in Section")]),r("form",{attrs:{action:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.logMeIn(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newLogin.email,expression:"newLogin.email"}],attrs:{type:"text",placeholder:"Your E-mail"},domProps:{value:e.newLogin.email},on:{input:function(t){t.target.composing||e.$set(e.newLogin,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newLogin.password,expression:"newLogin.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.newLogin.password},on:{input:function(t){t.target.composing||e.$set(e.newLogin,"password",t.target.value)}}})]),r("button",{on:{click:e.logMeIn}},[e._v(" Log In")]),r("br"),r("br"),r("hr"),r("div",[r("form",{attrs:{action:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newSignup.name,expression:"newSignup.name"}],attrs:{type:"text",placeholder:"Your name"},domProps:{value:e.newSignup.name},on:{input:function(t){t.target.composing||e.$set(e.newSignup,"name",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newSignup.email,expression:"newSignup.email"}],attrs:{type:"text",placeholder:"Your E-mail"},domProps:{value:e.newSignup.email},on:{input:function(t){t.target.composing||e.$set(e.newSignup,"email",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newSignup.password,expression:"newSignup.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.newSignup.password},on:{input:function(t){t.target.composing||e.$set(e.newSignup,"password",t.target.value)}}})]),r("button",{on:{click:e.signMeUp}},[e._v(" Sign Up ")])]),e.signUpError?r("p",[e._v(" "+e._s(e.status)+" ")]):e._e()])])},O=[];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={data:function(){return{newLogin:{email:"",password:""},newSignup:{name:"",email:"",password:""}}},methods:j({},Object(a["b"])(["login","signup"]),{logMeIn:function(){this.login(this.newLogin)},signMeUp:function(){this.signup(this.newSignup)}}),computed:j({},Object(a["c"])(["status","signUpError"]))},x=P,S=Object(h["a"])(x,y,O,!1,null,null,null),D=S.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("The Page to Add Words")]),r("br"),r("form",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.userInput.type,expression:"userInput.type"}],attrs:{name:"typeSelector"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.userInput,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"noun"}},[e._v(" Noun ")]),r("option",{attrs:{value:"verb"}},[e._v(" Verb")]),r("option",{attrs:{value:"sentence"}},[e._v(" Sentence or Phrase")])]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInput.german,expression:"userInput.german"}],attrs:{type:"text",placeholder:"German Word/ mit Artikel"},domProps:{value:e.userInput.german},on:{input:function(t){t.target.composing||e.$set(e.userInput,"german",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInput.english,expression:"userInput.english"}],attrs:{type:"text",placeholder:"English Translation"},domProps:{value:e.userInput.english},on:{input:function(t){t.target.composing||e.$set(e.userInput,"english",t.target.value)}}}),r("br")]),r("input",{attrs:{type:"submit"},on:{click:e.addMe}})])},I=[];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={name:"addWords",data:function(){return{userInput:{german:"",english:"",type:""}}},methods:A({},Object(a["b"])(["addWords"]),{addMe:function(){this.addWords(this.userInput)}})},$=L,N=Object(h["a"])($,E,I,!1,null,null,null),W=N.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" Exercise Page ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.exerciseData.amount,expression:"exerciseData.amount"}],attrs:{type:"number",value:"How many words do you want to see?"},domProps:{value:e.exerciseData.amount},on:{input:function(t){t.target.composing||e.$set(e.exerciseData,"amount",t.target.value)}}}),r("select",{directives:[{name:"model",rawName:"v-model",value:e.exerciseData.type,expression:"exerciseData.type"}],attrs:{name:"typeSelector"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.exerciseData,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"noun"}},[e._v(" Noun ")]),r("option",{attrs:{value:"verb"}},[e._v(" Verb ")]),r("option",{attrs:{value:"sentence"}},[e._v(" Sentence or Phrase ")]),r("option",{attrs:{value:"random"}},[e._v(" Random ")])]),r("br"),r("button",{on:{click:e.beginExercise}},[e._v(" Start the Show")]),e.inputError?r("p",[e._v(" "+e._s(e.message))]):e._e(),r("div",[r("hr"),r("br"),r("br"),e._l(e.exerciseQuestions,(function(t,n){return r("div",{key:t.id,staticClass:"question"},[r("p",[e._v(" "+e._s(t.english)+" ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userAnswers[n],expression:"userAnswers[index]"}],class:{correct:e.userAnswers[n]==t.german},attrs:{type:"text",placeholder:"Deutsch Übersetzung"},domProps:{value:e.userAnswers[n]},on:{input:function(t){t.target.composing||e.$set(e.userAnswers,n,t.target.value)}}})])}))],2)])},C=[];r("1c4c"),r("5df3"),r("4f7f");function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U={name:"Exercise",data:function(){return{exerciseData:{amount:0,type:""},inputError:!1,message:"",exerciseQuestions:[],userAnswers:[]}},methods:{randomNumberGen:function(e){var t=Math.floor(Math.random()*Math.floor(e));return t},beginExercise:function(){var e=this.user.words.length;if(this.inputError=!1,this.message="",this.exerciseQuestions=[],"random"==this.exerciseData.type)if(e<this.exerciseData.amount)this.inputError=!0,this.message="You want to practice more words than you have in your database. Want to add more words? Currently you have"+e+" words in your DB.";else{for(var t=0;t<this.exerciseData.amount;t++)this.userAnswers.push("");var r=new Set([]),n=this.user.words.length;while(this.exerciseData.amount>r.size){var o=this.randomNumberGen(n-1);r.add(o)}for(var s=Array.from(r.values()),a=0;a<s.length;a++)this.exerciseQuestions.push(this.user.words[s[a]])}else if("random"!=this.exerciseData.type){for(var i=this.exerciseData.type,u=[],c=0;c<e;c++)this.user.words[c].type==i&&u.push(this.user.words[c]);if(u.length<this.exerciseData.amount)this.inputError=!0,this.message="You want to practice more words than you have in your database. Want to add more words? Currently you have "+u.length+" "+i+"(s) in your DB.";else{for(var l=0;l<this.exerciseData.amount;l++)this.userAnswers.push("");var p=new Set([]),d=u.length;while(this.exerciseData.amount>p.size){var m=this.randomNumberGen(d-1);p.add(m)}for(var g=Array.from(p.values()),f=0;f<g.length;f++)this.exerciseQuestions.push(u[g[f]])}}}},computed:q({},Object(a["c"])(["user"]))},Y=U,Q=(r("a6ec"),Object(h["a"])(Y,M,C,!1,null,null,null)),G=Q.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e.firstTime?r("div",[r("h2",[e._v("Welcome "+e._s(e.user.username)+" ")]),r("br"),r("h3",[e._v("It's your first time here! How exciting")]),r("br"),r("h4",[e._v(" You can start by adding new words to your database to practice them later. Viel Erfolg!!")])]):e._e(),e.firstTime?e._e():r("div",[r("h2",[e._v("Welcome "+e._s(e.user.username)+" ")]),r("br"),r("h3",[e._v("Nice to have you back here!")]),r("br"),r("h4",[e._v(" Are you ready to practice?")])])]),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/add-words"}},[r("img",{staticClass:"dashImg",attrs:{src:e.addImage,alt:"Add Words"}})]),r("router-link",{attrs:{to:"/exercise"}},[r("img",{staticClass:"dashImg",attrs:{src:e.practiceImage,alt:"Add Words"}})]),r("router-link",{attrs:{to:"/edit-words"}},[r("img",{staticClass:"dashImg",attrs:{src:e.editImage,alt:"Edit Words"}})])],1),r("button",{on:{click:e.logOut}},[e._v(" Log Out ")])])},V=[];function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={name:"Dashboard",data:function(){return{addImage:r("093b"),practiceImage:r("2811"),editImage:r("8170")}},methods:B({},Object(a["b"])(["logOut"])),computed:B({},Object(a["c"])(["status","user","firstTime"]))},R=J,X=(r("2b56"),Object(h["a"])(R,H,V,!1,null,null,null)),F=X.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v(" See / Update / Delete the Words")]),r("paginate",{attrs:{"page-count":5,"page-range":3,"margin-pages":2,"prev-text":"'Prev'","next-text":"Next","container-class":"pagination","page-class":"page-item"}}),e._l(e.user.words,(function(t,n){return r("div",{key:n,staticClass:"wordBox"},[r("p",[e._v(" "+e._s(t.german)+" -- "+e._s(t.english)+" ")]),r("button",[e._v("X")])])}))],2)},Z=[];function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re={name:"AllWords",data:function(){return{editImage:r("8170")}},methods:{},computed:te({},Object(a["c"])(["user"]))},ne=re,oe=Object(h["a"])(ne,K,Z,!1,null,null,null),se=oe.exports;n["a"].use(c["a"]);var ae=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:w},{path:"/get-started",name:"get-started",component:D},{path:"/add-words",name:"addWords",component:W,meta:{requiresAuth:!0}},{path:"/exercise",name:"Exercise",component:G,meta:{requiresAuth:!0}},{path:"/dashboard",name:"Dashboard",component:F,meta:{requiresAuth:!0}},{path:"/edit-words",name:"EditWords",component:se,meta:{requiresAuth:!0}}]});ae.beforeEach((function(e,t,r){if(e.meta.requiresAuth){if(!ue.getters.isLoggedIn)return void r("/get-started");r()}else r()}));var ie=ae;n["a"].use(a["a"]);var ue=new a["a"].Store({state:{status:localStorage.getItem("user-status")||"not logged in",usermessage:"Login",signUpError:!1,token:localStorage.getItem("auth-token")||"",user:{username:"",email:"",firstTime:!1,words:[]}},getters:{isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status}},mutations:{auth_request:function(e){e.status="Loading"},auth_success:function(e,t){var r=t.header,n=t.user;e.status="Logged In",e.usermessage="Logout",e.token=r.token,e.user.username=n.name,e.user.email=n.email,e.user.words=n.words,localStorage.setItem("auth-token",r.token),localStorage.setItem("user",n),localStorage.setItem("user-status",e.status)},auth_error:function(e){e.status="Error"},signup_request:function(e){e.signUpError=!1,e.status="Trying to sign up"},signup_success:function(e){e.status="Sign-up Successful, logging you in now...",e.firstTime=!0},signup_error:function(e,t){e.status=t},incorrect_values:function(e,t){e.status=t,e.signUpError=!0},logout_success:function(e){e.status="not logged in",e.usermessage="Login",e.firstTime=!1},add_word_success:function(e,t){e.user.words=t.data}},actions:{login:function(e,t){var r=e.commit;return new Promise((function(e,n){r("auth_request"),u.a.post("/login",t).then((function(t){var n=t.data,o=t.headers;r("auth_success",{header:o,user:n}),ie.push("/dashboard"),e(t)})).catch((function(e){r("auth_error"),localStorage.removeItem("auth-token"),console.log(e),n()}))}))},signup:function(e,t){var r=e.commit,n=e.dispatch;return new Promise((function(e,o){r("signup_request"),u.a.post("/signup",t).then((function(o){r("signup_request"),200==o.status?(r("signup_success"),console.log(o),console.log(o.data.name+" registered sucesfully"),n("login",{email:t.email,password:t.password}).then((function(t){console.log(t),e()}))):(r("incorrect_values",o.data),console.log(o),e())})).catch((function(e){r("signup_error"),console.log(),o(e)}))}))},logOut:function(e){var t=e.commit;localStorage.removeItem("auth-token"),localStorage.removeItem("user"),localStorage.removeItem("user-status"),ie.push("/get-started"),t("logout_success")},addWords:function(e,t){var r=e.commit,n=e.state;return new Promise((function(e,o){var s=n.user.email;u.a.post("/api",{newWord:t,user:s}).then((function(t){console.log(t),r("add_word_success",t),e()})).catch((function(e){return o()}))}))}}}),ce={},le=ce,pe=(r("034f"),Object(h["a"])(le,o,s,!1,null,null,null)),de=pe.exports,me=r("8832"),ge=r.n(me);n["a"].component("paginate",ge.a),n["a"].config.productionTip=!1,new n["a"]({router:ie,store:ue,render:function(e){return e(de)}}).$mount("#app")},"64a9":function(e,t,r){},8170:function(e,t,r){e.exports=r.p+"img/edit.9cdc8e75.png"},8557:function(e,t,r){},a6ec:function(e,t,r){"use strict";var n=r("8557"),o=r.n(n);o.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.57252b22.js.map