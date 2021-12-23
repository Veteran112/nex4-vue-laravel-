"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7475],{7475:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const a={data:function(){return{email:"",password:"",loginShow:!1}},computed:(0,s(629).rn)({error:function(t){return t.auth.error},button_loading:function(t){return t.auth.button_loading}}),mounted:function(){var t=this;setTimeout((function(){t.loginShow=!0}),200)},methods:{login:function(){var t=this;this.$validator.validateAll().then((function(e){e&&t.$store.dispatch("LOGIN",{email:t.email,password:t.password})}))}}};const r=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("div",{staticClass:"background-image"}),t._v(" "),s("div",{staticClass:"nav-list"},[s("router-link",{attrs:{to:{name:"discover"}}},[t._v(t._s(t.$t("register.discover")))]),t._v(" "),s("router-link",{attrs:{to:{name:"privacy"}}},[t._v(t._s(t.$t("register.privacy")))]),t._v(" "),s("router-link",{attrs:{to:{name:"about-us"}}},[t._v(t._s(t.$t("register.aboutus")))]),t._v(" "),s("router-link",{attrs:{to:{name:"contact-us"}}},[t._v(t._s(t.$t("register.contactus")))])],1),t._v(" "),s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loginShow,expression:"loginShow"}],staticClass:"\n        login\n        col-12 col-md-6 col-lg-6 col-xl-4\n        offset-md-5 offset-lg-5 offset-xl-7\n      "},[s("div",{staticClass:"login-box"},[s("div",{staticClass:"col-12 login-form",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}}},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:"/images/logo.png",alt:"logo",width:"100%"}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-addon icon"},[s("svg",{staticStyle:{"enable-background":"new 0 0 483.3 483.3"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 483.3 483.3","xml:space":"preserve",width:"30px"}},[s("g",[s("g",[s("path",{attrs:{d:"M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1\n                                              v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5\n                                              c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z",fill:"#e7e7e7"}}),t._v(" "),s("path",{attrs:{d:"M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3\n                                              c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95\n                                              c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4\n                                              c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z",fill:"#e7e7e7"}})])])])]),t._v(" "),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"},{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{input:!0,"input-danger":t.errors.has("email")},attrs:{name:"email",type:"email",placeholder:t.$t("setting.mail"),autocomplete:"off"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-addon icon"},[s("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve",width:"30px"}},[s("g",[s("g",[s("path",{attrs:{d:"M334.974,0c-95.419,0-173.049,77.63-173.049,173.049c0,21.213,3.769,41.827,11.211,61.403L7.672,399.928\n                                                          c-2.365,2.366-3.694,5.573-3.694,8.917v90.544c0,6.965,5.646,12.611,12.611,12.611h74.616c3.341,0,6.545-1.325,8.91-3.686\n                                                          l25.145-25.107c2.37-2.366,3.701-5.577,3.701-8.925v-30.876h30.837c6.965,0,12.611-5.646,12.611-12.611v-12.36h12.361\n                                                          c6.964,0,12.611-5.646,12.611-12.611v-27.136h27.136c3.344,0,6.551-1.329,8.917-3.694l40.121-40.121\n                                                          c19.579,7.449,40.196,11.223,61.417,11.223c95.419,0,173.049-77.63,173.049-173.049C508.022,77.63,430.393,0,334.974,0z\n                                                          M334.974,320.874c-20.642,0-40.606-4.169-59.339-12.393c-4.844-2.126-10.299-0.956-13.871,2.525\n                                                          c-0.039,0.037-0.077,0.067-0.115,0.106l-42.354,42.354h-34.523c-6.965,0-12.611,5.646-12.611,12.611v27.136H159.8\n                                                          c-6.964,0-12.611,5.646-12.611,12.611v12.36h-30.838c-6.964,0-12.611,5.646-12.611,12.611v38.257l-17.753,17.725H29.202v-17.821\n                                                          l154.141-154.14c4.433-4.433,4.433-11.619,0-16.051s-11.617-4.434-16.053,0L29.202,436.854V414.07l167.696-167.708\n                                                          c0.038-0.038,0.067-0.073,0.102-0.11c3.482-3.569,4.656-9.024,2.53-13.872c-8.216-18.732-12.38-38.695-12.38-59.33\n                                                          c0-81.512,66.315-147.827,147.827-147.827S482.802,91.537,482.802,173.05C482.8,254.56,416.484,320.874,334.974,320.874z",fill:"#e7e7e7"}})])]),t._v(" "),s("g",[s("g",[s("path",{attrs:{d:"M387.638,73.144c-26.047,0-47.237,21.19-47.237,47.237s21.19,47.237,47.237,47.237s47.237-21.19,47.237-47.237\n                                                          S413.686,73.144,387.638,73.144z M387.638,142.396c-12.139,0-22.015-9.876-22.015-22.015s9.876-22.015,22.015-22.015\n                                                          s22.015,9.876,22.015,22.015S399.777,142.396,387.638,142.396z",fill:"#e7e7e7"}})])])])]),t._v(" "),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:100",expression:"'required|min:6|max:100'"},{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{input:!0,"input-danger":t.errors.has("password")},attrs:{type:"password",name:"password",placeholder:t.$t("setting.password"),autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password"),expression:"errors.has('password')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("password")))])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"form-group"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"text-danger"},[t._v("E-mail or password is incorrect")])])]),t._v(" "),s("div",{staticClass:"form-group form-inline"},[s("div",{staticClass:"col-12 forget-password"},[s("router-link",{attrs:{to:{name:"forget_password"}}},[t._v(t._s(t.$t("register.forget_password")))])],1)]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-12 col-md-6 offset-md-3"},[t.button_loading?t._e():s("button",{staticClass:"btn btn-warning",on:{click:t.login}},[t._v("\n                "+t._s(t.$t("register.login"))+"\n              ")]),t._v(" "),t.button_loading?s("button",{staticClass:"btn btn-warning"},[s("i",{attrs:{id:"btn-progress"}}),t._v("\n                "+t._s(t.$t("register.loading"))+"\n              ")]):t._e()])]),t._v(" "),s("div",{staticClass:"form-group text-center dark-text"},[t._v("\n            "+t._s(t.$t("register.create_accont"))+"\n            "),t.$Helper.getIntGatewayStatus("int_gateway")?t._e():s("router-link",{attrs:{to:{name:"plan"}}},[t._v(t._s(t.$t("register.signup")))]),t._v(" "),t.$Helper.getIntGatewayStatus("int_gateway")?s("router-link",{attrs:{to:{name:"signup-non-payment"}}},[t._v(t._s(t.$t("register.signup")))]):t._e()],1)])])])])],1)}),[],!1,null,null,null).exports},1900:(t,e,s)=>{function a(t,e,s,a,r,n,i,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:c}}s.d(e,{Z:()=>a})}}]);