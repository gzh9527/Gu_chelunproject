webpackJsonp([9],{"0/9m":function(t,n){},"756A":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("IvJb"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{"enter-active-class":"animated fadeInRight"}},[n("router-view")],1)],1)},staticRenderFns:[]};var i=e("C7Lr")({name:"App"},r,!1,function(t){e("Rwi+")},null,null).exports,c=(e("maTV"),e("0/9m"),e("H93t")),o=e.n(c),u=(e("TsY+"),e("756A"),e("zO6J"));a.default.use(u.a);var l=new u.a({routes:[{path:"/index",name:"index",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"mlqX"))}},{path:"/detailcar",name:"detailcar",component:function(){return e.e(5).then(e.bind(null,"3p5s"))}},{path:"/city",name:"city",component:function(){return e.e(7).then(e.bind(null,"X/ee"))}},{path:"/xunwen",name:"xunwen",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"dKe7"))}},{path:"/color",name:"color",component:function(){return e.e(3).then(e.bind(null,"u0hk"))}},{path:"/imgcar",name:"imgcar",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"RySL"))}},{path:"/chekuan",name:"chekuan",component:function(){return e.e(6).then(e.bind(null,"GW0b"))}},{path:"*",redirect:"/index"}]}),s=(e("kw8N"),e("9rMa")),f=e("6LYt"),d=e.n(f),m=e("gyMJ"),h={namespaced:!0,state:{carslist:"",rightdata:[],detail:[],tablist:[],nian:[],newdata:[],mergeCar:null,sortCar:null,filter:null,cardetail:[],city:[],twocity:[],cityids:201},mutations:{updata:function(t,n){for(var e=[],a="",r=[],i=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],c=0;c<i.length;c++)a=i[c],n.forEach(function(t,n){var i=t.Spelling.slice(0,1);i==a&&(-1==r.indexOf(i)?(r.push(i),t.keys=i,e.push(t)):(t.keys="",e.push(t)))});t.carslist=n},tabdata:function(t,n){t.mergeCar(t.sortCar(t.filter(n,t.detail.list)))},carlistright:function(t,n){t.rightdata=n},xunwendata:function(t,n){var e,a;t.mergeCar=function(t){var n=[],e={};return t.forEach(function(t,a){var r=t.exhaust_str+"/"+t.max_power_str+t.inhale_type;-1!=n.indexOf(r)?e[r].push(t):(n.push(r),e[r]=[t])}),e},t.sortCar=function(n){return t.tablist=n,n.sort(function(t,n){return t.exhaust!=n.exhaust?t.exhaust-n.exhaust:t.max_power_str!=n.max_power_str?t.max_power_str-n.max_power_str:t.inhale_type>n.inhale_type?(t.inhale_type,void n.inhale_type):t.market_attribute.year>n.market_attribute.year})},t.filter=function(n,e){return t.tablist=e,"全部"==n?e.filter(function(t){return t}):e.filter(function(t){return t.market_attribute.year==n})},t.detail=n,t.filter(n,t.detail.list),t.sortCar(n.list),t.mergeCar(n.list),e=n.list,(a=[]).push("全部"),e.forEach(function(t,n){-1==a.indexOf(t.market_attribute.year)&&a.push(t.market_attribute.year)}),t.nian=a},cityids:function(t,n){t.cityids=n},cardetail:function(t,n){t.cardetail=n},updatacity:function(t,n){t.city=n},twocitydata:function(t,n){t.twocity=n}},actions:{getcarslist:function(t){var n=t.commit;Object(m.d)().then(function(t){n("updata",t.data)})},rightList:function(t,n){var e=t.commit;Object(m.i)(n).then(function(t){e("carlistright",t.data)})},xunwencar:function(t,n){var e=t.commit;Object(m.a)(n).then(function(t){e("xunwendata",t.data)})},tab:function(t,n){(0,t.commit)("tabdata",n)},cardetail:function(t,n){var e=t.commit;Object(m.b)(n.carzhi,n.cityzhi).then(function(t){e("cardetail",t.data),e("cityids",n.carzhi)})},citydata:function(t){var n=t.commit;Object(m.c)().then(function(t){n("updatacity",t.data)})},twocityfun:function(t,n){var e=t.commit;Object(m.e)(n).then(function(t){e("twocitydata",t.data)})}}},p=[],g={namespaced:!0,state:{arr:[],colorarr:[],colorimgarr:""},actions:{getimgs:function(t,n){var e=t.commit;Object(m.h)(n.payload,n.imgid,n.page,n.pagesize).then(function(t){var a=[];t.data.List.map(function(t,e){var r=t.Url.replace("{0}",n.imgid);a.push(r)}),e("updatapic",a)})},colors:function(t,n){var e=t.commit;Object(m.f)(n).then(function(t){e("colordata",t.data)})},getcolorimg:function(t,n){var e=t.commit;console.log(n.ser),console.log(n.carcolor),Object(m.g)(n.ser,n.carcolor).then(function(t){var n=[];t.data.map(function(t,e){t.List.map(function(t,e){var a=t.Url.replace("{0}",t.HighSize);n.push(a)})}),e("colorimg",n)})}},mutations:{updatapic:function(t,n){n.forEach(function(t,n){p.push(t)}),t.arr=p},colordata:function(t,n){t.colorarr=n},colorimg:function(t,n){t.colorimgarr=n}}};a.default.use(s.a);var v=new s.a.Store({modules:{app:h,img:g},plugin:[d()()]});a.default.use(o.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:l,store:v,components:{App:i},template:"<App/>"})},"Rwi+":function(t,n){},"TsY+":function(t,n){},gyMJ:function(t,n,e){"use strict";e.d(n,"d",function(){return o}),e.d(n,"i",function(){return u}),e.d(n,"a",function(){return l}),e.d(n,"b",function(){return s}),e.d(n,"c",function(){return f}),e.d(n,"h",function(){return d}),e.d(n,"e",function(){return m}),e.d(n,"f",function(){return h}),e.d(n,"g",function(){return p});var a=e("3cXf"),r=e.n(a),i=/localhost/.test(window.location.host)?"https://baojia.chelun.com":"http://baojia-test.chelun.com";function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={method:n};return"POST"==n&&(a.body=r()(e)),-1==t.indexOf("?")?t+="?_="+ +new Date:t+="&_="+ +new Date,fetch(i+t,a).then(function(t){return t.json()}).then(function(t){return t})}var o=function(){return c("/v2-car-getMasterBrandList.html")},u=function(t){return c("/v2-car-getMakeListByMasterBrandId.html?MasterID="+t)},l=function(t){return c("/v2-car-getInfoAndListById.html?SerialID="+t)},s=function(t,n){return c("/v2-dealer-alllist.html?carId="+t+"&cityId="+n)},f=function(){return c("/v1-city-alllist.html")},d=function(t,n,e,a){return c("/v2-car-getCategoryImageList.html?"+("SerialID="+t+"&ImageID="+n+"&Page="+e+"&PageSize="+a))},m=function(t){return c("/v1-city-alllist.html?provinceid="+t)},h=function(t){return c("/v2-car-getModelImageYearColor.html?SerialID="+t)},p=function(t,n){return c("/v2-car-getImageList.html?SerialID="+t+"&ColorID="+n)}},kw8N:function(t,n){},maTV:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.f5b710b6fc139a19acbd.js.map