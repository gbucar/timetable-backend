(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{158:function(e,t,a){"use strict";a.d(t,"a",(function(){return ae}));var n=a(24),r=a.n(n),i=a(8),o=a.n(i),s=a(10),l=a.n(s),u=a(22),c=a.n(u),p=a(11),h=a.n(p),f=a(12),d=a.n(f),m=a(7),k=a.n(m),v=a(13),g=a.n(v),j=a(80),b=a(0),y=a.n(b),x=a(1),w=a(3),R=a(160),C=a(6),z=a(29),P=a(157);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var V=function(e){h()(a,e);var t=E(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).state={rotateValue:new C.a.Value(0),left:!0,sizeValue:new C.a.Value(0),topValue:new C.a.Value(0)},n.handlePress=n.handlePress.bind(c()(n)),n.rotateRight=n.rotateRight.bind(c()(n)),n.rotateLeft=n.rotateLeft.bind(c()(n)),n.disappearAnim=n.disappearAnim.bind(c()(n)),n.animate=n.animate.bind(c()(n)),n}return l()(a,[{key:"componentDidMount",value:function(){C.a.timing(this.state.sizeValue,{toValue:1,duration:500,useNativeDriver:!1,easing:z.a.back()}).start(),this.setState({size:this.state.sizeValue.interpolate({inputRange:[0,1],outputRange:["0px","53px"]})})}},{key:"componentWillUnmount",value:function(){C.a.timing(this.state.sizeValue,{toValue:0,duration:500,useNativeDriver:!1,easing:z.a.back()}).start(),this.setState({size:this.state.sizeValue.interpolate({inputRange:[0,1],outputRange:["0px","53px"]})})}},{key:"rotateLeft",value:function(){C.a.timing(this.state.rotateValue,{toValue:1,duration:500,useNativeDriver:!1,easing:z.a.back()}).start(),this.setState({left:!1})}},{key:"rotateRight",value:function(){C.a.timing(this.state.rotateValue,{toValue:0,duration:500,useNativeDriver:!1,easing:z.a.back()}).start(),this.setState({left:!0})}},{key:"resetDirection",value:function(){this.state.left&&this.rotateRight()}},{key:"animate",value:function(){var e=this;this.disappearAnim(),setTimeout((function(){e.props.loading&&e.animate()}),2e3)}},{key:"handlePress",value:function(){return g.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.animate(),e.next=3,g.a.awrap(this.props.onPress());case 3:if(e.sent){e.next=9;break}return this.disappearAnim(),e.abrupt("return");case 9:this.disappearAnim(),this.state.left?this.rotateLeft():this.rotateRight(),this.setState({rotation:this.state.rotateValue.interpolate({inputRange:[0,1],outputRange:["0deg","-180deg"]})});case 12:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"disappearAnim",value:function(){var e=this;C.a.timing(this.state.topValue,{toValue:0,duration:500,useNativeDriver:!1,easing:z.a.back()}).start(),new Promise((function(){setTimeout((function(){C.a.timing(e.state.topValue,{toValue:1,duration:500,useNativeDriver:!1,easing:z.a.back()}).start()}),500)})),this.setState({size:this.state.topValue.interpolate({inputRange:[0,1],outputRange:["0px","53px"]})})}},{key:"render",value:function(){return y.a.createElement(C.a.View,{style:[N.navigationArrow,{transform:[{rotate:this.state.rotation}],width:this.state.size,height:this.state.size}],onPress:this.props.onPress},y.a.createElement(P.a,{style:N.navigationArrowIcon,onPress:this.handlePress,color:"#909090",name:"arrow-right",type:"font-awesome-5"}))}}]),a}(b.Component),N=x.a.create({navigationArrow:{color:"#fff",width:"53px",height:"53px",borderRadius:"53px",justifyContent:"center",alignItems:"center",backgroundColor:"#EFEFEF",transform:[{rotate:"100deg"}],overflow:"hidden"},navigationArrowIcon:{}}),S=a(2),T=a.n(S),A=a(61);function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var F=function(e){h()(a,e);var t=D(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).state={widthValue:new C.a.Value(0),width:"",height:""},n.componentWillUnmount=n.componentWillUnmount.bind(c()(n)),n.componentDidMount=n.componentDidMount.bind(c()(n)),n}return l()(a,[{key:"componentDidMount",value:function(){C.a.timing(this.state.widthValue,{toValue:1,duration:500,useNativeDriver:!1,easing:z.a.back()}).start(),this.setState({width:this.state.widthValue.interpolate({inputRange:[0,1],outputRange:["0%",this.props.width||"90%"]}),height:this.state.widthValue.interpolate({inputRange:[0,1],outputRange:["0px",this.props.height&&this.props.height.endsWith("px")?this.props.height:"53px"]})})}},{key:"componentWillUnmount",value:function(){C.a.timing(this.state.widthValue,{toValue:0,duration:500,useNativeDriver:!1,easing:z.a.back()}).start(),this.setState({width:this.state.widthValue.interpolate({inputRange:[0,1],outputRange:["0%",this.props.width||"90%"]}),height:this.state.widthValue.interpolate({inputRange:[0,1],outputRange:["0px",this.props.height&&this.props.height.endsWith("px")?this.props.height:"53px"]})})}},{key:"handlePress",value:function(){this.props.onPress()}},{key:"render",value:function(){return y.a.createElement(C.a.View,{onPress:this.props.onPress,onRelease:!0,style:[O.box,{width:this.props.overrideWidth?this.props.overrideWidth:this.state.width,overflow:this.props.overflow?this.props.overflow:"hidden",paddingRight:this.props.paddingRight,justifyContent:this.props.justifyContent?this.props.justifyContent:"center",padding:this.props.padding,height:this.props.height?this.props.height:this.state.height,margin:this.props.margin,borderRasius:this.props.borderRadius?this.props.borderRadius:"25px",backgroundColor:this.props.backgroundColor?this.props.backgroundColor:"#EFEFEF",minWidth:this.props.minWidth,marginRight:this.props.marginRight}]},this.props.children)}}]),a}(b.Component),O=x.a.create({box:{borderRadius:"25px",height:"53px",backgroundColor:"#EFEFEF",justifyContent:"space-around",overflow:"hidden",alignItems:"center",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",flexDirection:"row"}});function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var B=function(e){h()(a,e);var t=I(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).state={borderColor:"#909090"},n.onFocus=n.onFocus.bind(c()(n)),n}return l()(a,[{key:"onFocus",value:function(){this.setState({borderColor:"#909090"})}},{key:"render",value:function(){return y.a.createElement(F,null,y.a.createElement(A.a,T()({value:this.props.value,onChangeText:this.props.onChangeText,onFocus:this.onFocus},this.props,{style:[W.text,{borderColor:this.state.borderColor}]})))}}]),a}(b.Component),W=new x.a.create({text:{color:"#909090",borderColor:"#909090",height:"53px",width:"110vw",borderRadius:"53px",textAlign:"center",fontSize:"150%",textTransform:"capitalize"}});function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var M=function(e){h()(a,e);var t=L(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).state={text:n.props.textOne,opacityValue:new C.a.Value(0),opacity:1},n.switchText=n.switchText.bind(c()(n)),n.handlePress=n.handlePress.bind(c()(n)),n}return l()(a,[{key:"componentDidMount",value:function(){this.fadeText()}},{key:"fadeText",value:function(){C.a.sequence([C.a.timing(this.state.opacityValue,{toValue:0,duration:100,useNativeDriver:!1}),C.a.timing(this.state.opacityValue,{toValue:1,duration:100,useNativeDriver:!1})]).start(),this.setState({opacity:this.state.opacityValue.interpolate({inputRange:[0,1],outputRange:[0,1]})})}},{key:"switchText",value:function(){var e=this.props.textOne==this.state.text?this.props.textTwo:this.props.textOne;this.setState({text:e})}},{key:"handlePress",value:function(){var e=this;this.props.onPress(),this.fadeText(),new Promise((function(){return setTimeout(e.switchText,100)}))}},{key:"render",value:function(){return y.a.createElement(F,null,y.a.createElement(C.a.Text,{style:[U.text,{opacity:this.state.opacity}],onPress:this.handlePress},this.state.text))}}]),a}(b.Component),U=x.a.create({text:{color:"#909090",fontSize:"150%"}}),J=a(16),_=a(155),K=a(27),q=a(20);function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var H=function(e){h()(a,e);var t=G(a);function a(e){return o()(this,a),t.call(this,e)}return l()(a,[{key:"render",value:function(){return y.a.createElement(F,this.props,y.a.createElement(J.a,{onPress:this.props.onPress,style:[Q.text,{fontSize:this.props.fontSize?this.props.fontSize:"150%",color:this.props.color?this.props.color:"#909090"}]},this.props.text),this.props.children)}}]),a}(b.Component),Q=new x.a.create({text:{color:"#909090",borderColor:"#909090",textAlign:"center",fontSize:"150%",textTransform:"capitalize",marginVertical:"auto",padding:3}});function X(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var Y=function(e){h()(n,e);var t=X(n);function n(e){var a;return o()(this,n),(a=t.call(this,e)).openTimetable=a.openTimetable.bind(c()(a)),a.state={timetable:[],fullName:"NAPAKA :/"},a.getColor=a.getColor.bind(c()(a)),a}return l()(n,[{key:"formateTimetableLink",value:function(){var e=new Date;return e=e.getMonth()+1,(e=String(e)).length&&(e="0"+e),"https://gz.zelimlje.si/wp-content/uploads/sites/2/2021/"+e+"/Urnik_teden.pdf"}},{key:"formateApiLink",value:function(e,t,a,n){return"https://timetable-gz.herokuapp.com/personalized?first_name="+e+"&second_name="+t+"&online="+(a?"1":"0")+"&class_name="+n}},{key:"componentDidMount",value:function(){var e,t,a,n,r=this;return g.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=this.props.user[0],t=this.props.user[1],a=this.props.online,n=this.props.className,i.next=6,g.a.awrap(fetch(this.formateApiLink(e,t,a,n)).then((function(e){return e.json()})).then((function(e){console.log(e),r.setState({timetable:e.timetable,gender:e.gender,fullName:e.fullName})})));case 6:case"end":return i.stop()}}),null,this,null,Promise)}},{key:"openTimetable",value:function(){_.a.openURL("https://docs.google.com/gview?url="+this.formateTimetableLink())}},{key:"getColor",value:function(e){return this.state.gender?{m:["#008CAB","#ffffff"],f:["#FFA7A7","#ffffff"],r:["#E2FF90"]}[this.state.gender][e]:""}},{key:"render",value:function(){var e=this,t=["P","T","S","\u010c","P"];return y.a.createElement(w.a,{style:[Z.container,this.state.timetable.length?{}:{display:"none"}]},y.a.createElement(H,{backgroundColor:this.getColor(0),color:this.getColor(1),text:this.state.fullName,style:Z.title},y.a.createElement(q.a,{onPress:this.openTimetable},y.a.createElement(K.a,{style:Z.imageLink,source:a("r"==this.state.gender?219:220)}))),y.a.createElement(w.a,{style:Z.timetableContainer},this.state.timetable.map((function(a,n){var r=(new Date).getDay()-1;return y.a.createElement(F,{justifyContent:"center",width:"98%",key:n,style:[Z.dayContainer]},y.a.createElement(J.a,{style:[Z.text,{fontWeight:r==n?"bold":""}]},t[n]),y.a.createElement(F,{padding:"5px",borderRadius:"5px",overflow:"scroll",backgroundColor:r==n?"#cbcbcb":"#EFEFEF",justifyContent:"safe center",maxWidth:"95%",minWidth:"90%"},y.a.createElement(w.a,{style:Z.subjectsContainer},a.map((function(t){return t=t&&"---"!=t?t:";)",y.a.createElement(H,{backgroundColor:n>=r||r<6?e.getColor(0):"#cbcbcb",margin:"3px",overrideWidth:"auto",padding:5,fontSize:"100%",key:Math.random(),text:t,height:"auto",color:e.getColor(1)})})))))}))))}}]),n}(b.Component),Z=x.a.create({title:{},dayContainer:{},container:{width:"100%",height:"60%",alignItems:"center"},timetableContainer:{width:"100%",height:"60vh",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},text:{color:"#909090",textAlign:"center",fontSize:"150%",margin:"auto"},imageLink:{width:"40px",height:"40px",margin:"10px"},subjectsContainer:{minWidth:"100%",justifyContent:"space-around",alignItems:"center",flexDirection:"row"}}),$=a(85),ee=(a(221),a(222),a(86));function te(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var ae=function(e){h()(a,e);var t=te(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).state={logged:!1,name:"",secondName:"",online:!0},n.handleNavigationArrowPress=n.handleNavigationArrowPress.bind(c()(n)),n.handlePress=n.handlePress.bind(c()(n)),n}return l()(a,[{key:"getClass",value:function(e,t){for(var a in $)if($[a].includes((e.split(" ")[1]?e.split(" ")[0]+" "+e.split(" ")[1][0]+". ":e+" ")+t))return a}},{key:"componentDidMount",value:function(){var e,t,a,n,i;return g.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.t0=JSON,o.next=3,g.a.awrap(ee.a.getItem("credentials"));case 3:o.t1=o.sent,e=o.t0.parse.call(o.t0,o.t1),t=e||["",""],a=r()(t,2),n=a[0],i=a[1],this.setState({name:n,secondName:i});case 7:case"end":return o.stop()}}),null,this,null,Promise)}},{key:"saveCredentials",value:function(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=JSON.stringify(e),a.next=3,g.a.awrap(ee.a.setItem("credentials",t));case 3:case"end":return a.stop()}}),null,null,null,Promise)}},{key:"handleNavigationArrowPress",value:function(){var e,t,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.state.logged){n.next=5;break}return this.setState({logged:!1,online:!0}),n.abrupt("return",!0);case 5:if(e=this.state.name.trim().toLowerCase(),t=this.state.secondName.trim().toLowerCase(),this.state.online,a=this.getClass(e,t),e&&t&&a){n.next=11;break}return n.abrupt("return");case 11:return a&&(this.saveCredentials([e,t]),this.setState({logged:!0,loading:!0}),this.setState({loading:!1,cls:a})),n.abrupt("return",!0);case 13:case"end":return n.stop()}}),null,this,null,Promise)}},{key:"handlePress",value:function(){this.setState({online:!this.state.online})}},{key:"render",value:function(){var e=this;return y.a.createElement(R.a,null,y.a.createElement(w.a,{style:ne.container},y.a.createElement(j.a,{hidden:!0}),this.state.logged?this.state.loading?"":y.a.createElement(Y,{user:[this.state.name,this.state.secondName,this.state.cls],online:this.state.online,className:this.state.className}):y.a.createElement(w.a,{style:[ne.inputFormContainer,{visibility:this.state.logged?"hidden":""}]},y.a.createElement(B,{value:this.state.name,onChangeText:function(t){return e.setState({name:t})},placeholder:"IME"}),y.a.createElement(B,{value:this.state.secondName,onChangeText:function(t){return e.setState({secondName:t})},placeholder:"PRIIMEK"}),y.a.createElement(M,{onPress:this.handlePress,textOne:"ONLINE URNIK",textTwo:"OSNOVEN URNIK"})),y.a.createElement(V,{loading:this.state.loading,onPress:this.handleNavigationArrowPress})))}}]),a}(b.Component),ne=x.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"space-around"},inputFormContainer:{width:"100%",height:"40%",alignItems:"center",justifyContent:"space-around"}})},162:function(e,t,a){e.exports=a(224)},219:function(e,t,a){e.exports=a.p+"static/media/link_gray.27d2191b.png"},220:function(e,t,a){e.exports=a.p+"static/media/link.a0e509c9.png"},221:function(e){e.exports=JSON.parse("{}")},222:function(e){e.exports=JSON.parse("{}")},85:function(e){e.exports=JSON.parse('{"1.a":"franc absec, ga\u0161per alja\u017e, monika avbelj, lucija bajde, ema bajec, janez bartol, klara burnik, emilija cukjati, izak debeljak, david erharti\u010d, eva fajfar, maru\u0161a filipi\u010d, anja golob, peter jakelj, matej kafol, vid koli\u0107, ema krnc, lara lahajner, lucijan lebar, petra levstik, gaja merc, rebeka merljak, bor mihelak, monika milkovi\u010d, nika planin\u0161ek, nejc plevel, bla\u017eka polj\u0161ak, maks rode, aleksandra ne\u017ea su\u0161nik, nu\u0161a \u0161ef, bla\u017e \u0161tangelj, andra\u017e ulaga, bla\u017e \u0161tangelj","1.b":"nu\u0161a ali\u010d, jurij cvikl, katarina dem\u0161ar, rahela dem\u0161ar, julija ferlan, o\u017ebej grilc, lucija grimani, sara hozjan, jakob ir\u0161i\u010d, jakob jereb, domen kav\u010di\u010d, aja knez, nejc kocjan\u010di\u010d, vid kranjc, katarina lamov\u0161ek, ana lisac, ma\u0161a medve\u0161ek, luka ogrinc, zala peternelj, katarina poklukar, lucija por, ma\u0161a rajk, taja regeis, liza snoj, ajda \u0161tempihar, leon \u0161tukelj, tinkara tu\u0161ek, rebeka ana vogrin\u010di\u010d, veronika von\u010dina","2.a":"amadej \u0161afner, luka mami\u0107, ga\u0161per koren, matej kuhelj, tina omahen, kristina muri, jera ru\u010digaj, jakob debevec, gregor gabrov\u0161ek, marko kalita, o\u017ebe juras, mitja trost, manca lajevec, iza gros, ne\u017ea urani\u010d, veronika jezer\u0161ek, albin \u017euber, rebeka feher, mirjam hrovat, marta mlinar, eva logar, leon oblak, tia lo\u017ear, tai padubsky, ekaterina selivonik","2.b":"ma\u0161a mahkovec, manca mirka slosar, kri\u0161tof bu\u010dar, tadej mar\u0161i\u010d, \u017ean ko\u0161merl, jo\u0161t prestor, bine grilc, david gosar colner, matev\u017e kranjc, marija kri\u010dej, jo\u017eica bec, ana kapler, hana debeljak, julija adami\u010d, alja arih, sara kora\u017eija, anavita babi\u010d, marta ku\u0161ar, ivana cecilija ker\u0161i\u010d, liza debeljak, ne\u017eka pintar, maja lenar\u010di\u010d, tereza lombar, monika loboda, klara kocmur, ma\u0161a dacar, pavlina \u0161ifrar, vid kikelj, janez nagode","2.c":"rafael ferluga, \u017eiga zupan\u010di\u010d, marko \u017eugec, val bajc, lev \u0161pes, bruno \u017ei\u017emund, vid zupan, kri\u0161tof ku\u0161ar, primo\u017e jurjev\u010di\u010d, santiago mikli\u010d, jan vodopivec suhadolc, lovrenc cink, anja kastelec, jacinta drnov\u0161ek, lucija vrbinc, glorija krt, maja petelin, sara tehovnik, klara \u0161inkovec, \u0161pela marolt, karolina nosan, tina \u0161tern, vanja porok, aja knez, ma\u0161a petelin, ne\u017ea mo\u010denik, vita pintar, eva pungartnik, rebeka fink","3.a":"klemen kav\u010dnik, gregor kav\u010di\u010d, luka drenik, matej breskvar, sara dovi\u010d, matev\u017e bregar, florjan \u0161inkovec, miha osredkar, petra vin\u010dec, lana lunder, ur\u0161ka jur\u0161ak, metka nemani\u010d, meta malava\u0161i\u010d, klara vrtar, maja bobik, manca \u0161karja, kristina dolgan, mirjam mer\u0161e, nadja rozman, sara sobo\u010dan, nina pegam, 1. vrsta*: matic \u017eibrik, irenej beden, eva \u017eibrik, lucija jan\u0161a, barbara absec, eva miklav\u010di\u010d, ula ko\u0161\u010dak, ana sever, david dem\u0161ar, nika kermavnar","3.b":"matev\u017e blatnik, neja benedi\u010di\u010d, nika fi\u0161ter, ga\u0161per posedi, razredni\u010darka, luka von\u010dina, david kranjc, \u017eiga menegatti, filip ferlan, elijas b. mernik, manca oblak, ana klobu\u010dar, petra vrbinc, \u0161pela gorenc, mirjam zvonar, klaudija mencin, neja martin\u010di\u010d, karla pintar, vida mlinar, matev\u017e dem\u0161ar, ida kogov\u0161ek, ajda lavri\u010d, maja poto\u010dan, veronika ponikvar, klara dem\u0161ar, julija medve\u0161ek, elizabeta sara glas, ne\u017ea ali\u010d, manca lahajner, jera kr\u017ei\u0161nik","4.a":"manca verta\u010dnik, beno krnc, ga\u0161per mali, anej an\u017ei\u010d, andra\u017e snedec, andrej mer\u0161e, erik r. ga\u010dnik, matic snoj, lenart polc, mojca dolenc, ema \u010dop, miha rovtar, kristina \u010depon, nika hren, klara \u0161tukelj, lovro jereb, vojko hysz, marta lajevec, ne\u017ea govekar, klara levec, lina l. lapornik, meta drobni\u010d, vesna lenar\u010di\u010d, katarina jereb, maja levstek","4.b":"bla\u017e klinc, svit pekle gole\u017e, jakob pintar, jakob erharti\u010d, an\u017ee prijatelj, tit merhar, ambro\u017e kastelic, razredni\u010darka, neli markelj, ana vali\u010d, 2. vrsta*: ur\u0161a \u0161karja, \u0161pela hribar, ana strah, manca ozimek, jera grm, lara intihar, nadja kranjc, zoja horvat, ana sagadin, monika rudolf, katja indihar, tinkara perhaj, katarina \u0161vigelj, nives bo\u017ei\u010d, jerneja ku\u0161ar, nina sket, tinkara kova\u010d, liza vidic, sara prijatelj, lara pungartnik, loti vita rep","4.c":"ur\u0161ula filipi\u010d, eva gabrijel, kaya ga\u010dnik, tobija kikelj, klara er\u010dulj, joshua w. moolman, lucija sara jak\u0161e, \u017ean m. verli\u010d, ne\u017ea zupan\u010di\u010d, ne\u017ea dulc, nadja padar, gregor bu\u010dar, sara bevc, maja bogataj, ne\u017ea zvonar, viva horvat, zala kosma\u010d, ma\u0161a verbi\u010d, \u017eiva horvat, petra ur\u0161i\u010d, zala jagodic, ne\u017ea kav\u010di\u010d, jernej antloga, jan oblak, ur\u0161a lajevec, tinkara \u017eukovec, jerica kocjan\u010di\u010d, klara kadunc, ema nagode, marija ana klan\u010dar, ana mate, alja\u017e smoli\u010d"}')}},[[162,1,2]]]);
//# sourceMappingURL=app.b3b01168.chunk.js.map