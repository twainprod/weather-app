(this.webpackJsonpcodica=this.webpackJsonpcodica||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n(10),i=n.n(r),s=(n(32),n(7)),o=(n(33),n(34),n(4)),u=n(8),d=n.n(u),l=n(16),j=n(9),b=n(2),m=n(42).default.create({request:{withCredentials:!0},baseURL:"https://api.openweathermap.org/data/2.5/",params:{units:"metric",appid:"000e2cf68861a3f1026427e9bf8a1b2d"}}),f=function(e){return m.get("weather?q=".concat(e))},O=function(e){var t=e.lat,n=e.lon;return m.get("onecall?lat=".concat(t,"&lon=").concat(n,"&exclude=current,minutely,daily"))},h="DELETE_CARD",p="SET_CARD_DATA",g="GET_STORAGE_DATA",x="TOGGLE_IS_LOADING",y="UPDATE_CURRENT_WEATHER",D="TOGGLE_INFO_MODE",v={cities:[],cardData:[],storageData:JSON.parse(localStorage.getItem("cities"))||[],isLoading:!1,isInfoMode:!1},w=function(e,t,n,a,c,r){return{type:p,cardData:{name:e,id:t,currentTemp:Math.round(n.temp),icon:a[0].icon,country:c.country,hourlyData:r}}},N=function(e,t,n){return{type:y,name:e,temp:Math.round(t.temp),icon:n[0].icon}},I=function(e){return{type:x,isLoading:e}},C=function(e){return{type:D,isInfoMode:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)(Object(b.a)({},e),{},{cities:e.storageData});case h:return Object(b.a)(Object(b.a)({},e),{},{isInfoMode:!1,cities:e.cities.filter((function(e){return e.id!==t.id})),storageData:localStorage.setItem("cities",JSON.stringify(e.cities.filter((function(e){return e.id!==t.id}))))});case p:return Object(b.a)(Object(b.a)({},e),{},{cardData:t.cardData,cities:e.cities.find((function(e){return e.name===t.cardData.name}))?Object(j.a)(e.cities):[].concat(Object(j.a)(e.cities),[{name:t.cardData.name,id:t.cardData.id,currentTemp:t.cardData.currentTemp,icon:t.cardData.icon,country:t.cardData.country,hourlyData:t.cardData.hourlyData}]),storageData:localStorage.setItem("cities",JSON.stringify(e.cities.find((function(e){return e.name===t.cardData.name}))?Object(j.a)(e.cities):[].concat(Object(j.a)(e.cities),[t.cardData])))});case y:return Object(b.a)(Object(b.a)({},e),{},{cities:e.cities.map((function(e){return e.name===t.name?Object(b.a)(Object(b.a)({},e),{},{currentTemp:t.temp,icon:t.icon}):e})),storageData:localStorage.setItem("cities",JSON.stringify(e.cities.map((function(e){return e.name===t.name?Object(b.a)(Object(b.a)({},e),{},{currentTemp:t.temp,icon:t.icon}):e}))))});case x:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.isLoading});case D:return Object(b.a)(Object(b.a)({},e),{},{isInfoMode:t.isInfoMode});default:return e}},S=Object(o.b)((function(e){return{cities:e.cities}}),{getCardInfo:function(e){return function(){var t=Object(l.a)(d.a.mark((function t(n){var a,c,r,i,s,o,u,l,j,b,m;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:return a=t.sent,n(I(!0)),c=a.data,r=c.name,i=c.id,s=c.main,o=c.weather,u=c.coord,l=c.sys,t.next=7,O(u);case 7:j=t.sent,b=j.data.hourly,m=b.splice(24,24),n(w(r,i,s,o,l,m)),n(I(!1));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(a.jsxs)("div",{className:"input-group my-5",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter city name...",value:r,onChange:function(e){i(e.target.value)}}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("button",{className:"btn btn-warning",type:"button",disabled:!r,onClick:function(){r&&e.getCardInfo(r),i("")},children:"Search"})})]})})),T=(n(60),function(e){return Object(a.jsx)("div",{className:"lds-dual-ring"})}),L=(n(61),function(e){return Object(a.jsx)("div",{className:"d-inline-block vertical-align-top mx-2 cardItem",children:Object(a.jsxs)("div",{className:"card mb-2",children:[Object(a.jsxs)("div",{className:"card-header d-flex justify-content-between align-items-center",children:[Object(a.jsxs)("div",{children:[e.name,Object(a.jsxs)("span",{className:"text-muted",children:[" / ",e.country]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn p-1",onClick:function(){return e.updateCurrentWeather(e.name)},children:Object(a.jsx)("i",{className:"fas fa-sync-alt"})}),Object(a.jsx)("button",{className:"btn p-1",onClick:function(){return e.deleteCard(e.id)},children:Object(a.jsx)("i",{className:"fas fa-trash-alt"})})]})]}),Object(a.jsxs)("div",{className:"card-body d-flex flex-column align-items-center",children:[e.icon?Object(a.jsx)("img",{alt:"weatherIcon",src:"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png")}):Object(a.jsx)(T,{}),Object(a.jsxs)("h5",{className:"card-title",children:[e.currentTemp," \xb0C"]}),Object(a.jsx)("div",{className:"btn-group",children:Object(a.jsx)("button",{className:"btn btn-warning btn-sm",onClick:function(){return e.showMoreInfo(e.hourlyData,e.name)},children:"View more..."})})]})]})})}),_=Object(o.b)((function(e){return{cities:e.cities,cardData:e.cardData,isLoading:e.isLoading}}),{deleteCard:function(e){return{type:h,id:e}},updateCurrentWeather:function(e){return function(){var t=Object(l.a)(d.a.mark((function t(n){var a,c,r,i,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(I(!0)),t.next=3,f(e);case 3:a=t.sent,c=a.data,r=c.name,i=c.main,s=c.weather,n(N(r,i,s)),n(I(!1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isLoading,n=e.cities,c=e.cardData,r=e.deleteCard,i=e.showMoreInfo,s=e.updateCurrentWeather;return t?Object(a.jsx)(T,{}):n.map((function(e,n){return Object(a.jsx)(L,{id:e.id,name:e.name,currentTemp:e.currentTemp,icon:e.icon,hourlyData:e.hourlyData,country:e.country,isLoading:t,cardData:c,deleteCard:r,showMoreInfo:i,updateCurrentWeather:s},n)}))})),M=(n(62),function(e){var t=new Date(1e3*e.time),n=t.getHours(),c=t.getMinutes(),r=n.toString().padStart(2,"0")+":"+c.toString().padStart(2,"0");return Object(a.jsx)("div",{className:"d-inline-block mb-2",children:Object(a.jsxs)("div",{className:"d-flex flex-column align-items-center infoItem",children:[Object(a.jsx)("span",{className:"text-black-50",children:r}),Object(a.jsx)("img",{alt:"weatherIcon",src:"http://openweathermap.org/img/wn/".concat(e.weather,".png")}),Object(a.jsxs)("span",{className:"badge badge-warning mb-2",children:[Math.round(e.temp),"\xb0C"]})]})})}),k=function(e){return e.hourlyData.map((function(e){return Object(a.jsx)(M,{time:e.dt,temp:e.temp,weather:e.weather[0].icon},e.dt+e.temp)}))},A=function(){var e=Object(o.d)((function(e){return e.isInfoMode})),t=Object(c.useState)([]),n=Object(s.a)(t,2),r=n[0],i=n[1],u=Object(c.useState)(""),d=Object(s.a)(u,2),l=d[0],j=d[1],b=Object(o.c)();Object(c.useEffect)((function(){return window.addEventListener("unhandledrejection",m),function(){window.removeEventListener("unhandledrejection",(function(){}))}}),[]),Object(c.useEffect)((function(){b({type:g})}),[]);var m=function(e){alert("Incorrect city name! Please, check the entered data.")};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"display-3 text-center mt-4",children:["WeatherApp on ",Object(a.jsx)("span",{className:"font-weight-bold",children:"ReactJS"})]}),Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:"cardsBlock",children:Object(a.jsx)(_,{showMoreInfo:function(e,t){b(C(!0)),j(t),i(e)}})}),e&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"display-4 text-center my-4",children:[Object(a.jsx)("button",{className:"btn btn-lg",onClick:function(){b(C(!1))},children:Object(a.jsx)("i",{className:"fas fa-chevron-up"})}),"Hourly Forecast for",Object(a.jsxs)("span",{className:"font-weight-bold",children:[" ",l]}),":"]}),Object(a.jsx)("div",{className:"infoBlock mb-3",children:Object(a.jsx)(k,{hourlyData:r})})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},F=n(5),G=n(26),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.c,W=Object(F.d)(E,J(Object(F.a)(G.a)));i.a.render(Object(a.jsx)(o.a,{store:W,children:Object(a.jsx)(A,{})}),document.getElementById("root")),R()}},[[63,1,2]]]);
//# sourceMappingURL=main.4f88e314.chunk.js.map