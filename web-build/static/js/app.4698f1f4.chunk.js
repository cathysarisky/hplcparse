(this.webpackJsonp=this.webpackJsonp||[]).push([[0],[,,function(t,e){t.exports={GAMESTATE:"wait for roll",DICESTATE:[],SCORE:0,screen1:null}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return V}));var a=r(0),n=r(8),o=r.n(n),i=r(9),s=r.n(i),c=r(62),p=r.n(c),u=r(16),l=r.n(u),f=r(17),d=r.n(f),y=r(11),m=r.n(y),h=r(23),x=r(6),g=r(5),T=r(64),b=r(25),S=r(93),E=r(43),v=r.n(E),j=r(1),w=r.n(j),A=r(15),C=r.n(A),k=r(34),I=r(2),O=r.n(I),R=r(3);function D(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=m()(t);if(e){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var _={africa0:r(107),africa1:r(108),africa2:r(109),africa3:r(110),africa4:r(111),africa5:r(112),africa6:r(113),africa7:r(114),africa8:r(115),africa9:r(116),africa10:r(117),asia0:r(118),asia1:r(119),asia2:r(120),asia3:r(121),asia4:r(122),asia5:r(123),asia6:r(124),asia7:r(125),asia8:r(126),asia9:r(127),asia10:r(128),europe0:r(129),europe1:r(130),europe2:r(131),europe3:r(132),europe4:r(133),europe5:r(134),europe6:r(135),europe7:r(136),europe8:r(137),europe9:r(138),europe10:r(139),americas0:r(140),americas1:r(141),americas2:r(142),americas3:r(143),americas4:r(144),americas5:r(145),americas6:r(146),americas7:r(147),americas8:r(148),americas9:r(149),americas10:r(150)};var B=function(t){l()(r,t);var e=D(r);function r(t){return o()(this,r),e.call(this,t)}return s()(r,[{key:"render",value:function(){var t=this.props.rowpath+this.props.mykey.toString(),e=_[t];return Object(R.jsxs)(b.a,{onPress:"live"==this.props.mydetails?this.props.onPress:this.props.onPressFail,children:["live"==this.props.mydetails?Object(R.jsx)(x.a,{style:[M.letterbox_live,{backgroundColor:this.props.mycolor}],children:Object(R.jsx)(h.a,{style:M.white,children:this.props.mystring},this.props.mykey)},this.props.mykey):void 0,"selected"==this.props.mydetails?Object(R.jsx)(x.a,{style:M.letterbox_selected,children:Object(R.jsx)(k.a,{style:M.stretch,source:e})},this.props.mykey):void 0,"skipped"==this.props.mydetails?Object(R.jsx)(x.a,{style:M.letterbox_skipped,children:Object(R.jsx)(h.a,{style:M.greyed,children:this.props.mystring},this.props.mykey)},this.props.mykey):void 0]})}}]),r}(a.Component);B.propTypes={onPress:C.a.func.isRequired,onPressFail:C.a.func.isRequired,mykey:C.a.number.isRequired,rowstatus:C.a.number.isRequired,mydetails:C.a.string.isRequired,mycolor:C.a.string.isRequired,rowpath:C.a.string.isRequired};var M=g.a.create({letterbox_live:{flex:0,backgroundColor:"#bbb",alignItems:"center",justifyContent:"center",padding:10,margin:2,marginTop:2,width:40,height:40,borderWidth:2},letterbox_skipped:{flex:0,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:10,margin:2,marginTop:2,width:40,height:40,borderWidth:1},letterbox_selected:{flex:0,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:0,margin:2,marginTop:2,width:40,height:40,borderWidth:0},greyed:{color:"#ccc"},white:{color:"#fff",fontSize:15},stretch:{width:40,height:40,display:"flex"}});var P=r(44);function q(t){return[0,1,3,5,7,9,11,13,15,17,19,21][t]}function G(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=m()(t);if(e){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var W=function(t){l()(a,t);var e=G(a);function a(t){var r;return o()(this,a),(r=e.call(this,t)).state={rowStatus:-1,detailsArray:Array(12).fill("live"),rowScore:0},r}return s()(a,[{key:"componentDidMount",value:function(){var t;return w.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:P.a.setAudioModeAsync({staysActiveInBackground:!0,allowRecordingIOS:!1,interruptionModeIOS:P.a.INTERRUPTION_MODE_IOS_DO_NOT_MIX,playsInSilentModeIOS:!0}),this.sound=new P.a.Sound,this.soundfail=new P.a.Sound,t={shouldPlay:!1},this.sound.loadAsync(r(168),t,!1),this.soundfail.loadAsync(r(169),t,!1);case 6:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"playSound",value:function(){this.sound.replayAsync()}},{key:"playFailSound",value:function(){this.soundfail.replayAsync()}},{key:"render",value:function(){var t,e=this;return t=this.props.reverseBool?["12","11","10","9","8","7","6","5","4","3","2"]:["2","3","4","5","6","7","8","9","10","11","12"],Object(R.jsx)(x.a,{style:F.one_row,children:t.map((function(t,r){return Object(R.jsx)(B,{mydetails:e.state.detailsArray[r],rowstatus:e.state.rowStatus,rowpath:e.props.mykey,mystring:t,mycolor:e.props.rowcolor,mykey:r,onPressFail:function(){e.playFailSound(),console.log("bad click but this is not working")},onPress:function(){if(console.log("rowscore is "+e.state.rowScore),r>e.state.rowStatus&&"wait for first pick"==O.a.GAMESTATE&&function(t,e){return e?12-t==O.a.DICESTATE[4]+O.a.DICESTATE[5]:t+2==O.a.DICESTATE[4]+O.a.DICESTATE[5]}(r,e.props.reverseBool)){e.setState({rowStatus:r});var t=v()(e.state.detailsArray);(t=t.map((function(t,e){return e<r&&"live"==t?"skipped":t})))[r]="selected",e.setState({detailsArray:v()(t)}),O.a.screen1.setState({score:O.a.screen1.state.score+q(e.state.rowScore+1),statetext:"Click dice to roll or pick a color+white trip"}),O.a.GAMESTATE="roll or pick color",e.setState({rowScore:e.state.rowScore+1}),e.playSound()}else if(r>e.state.rowStatus&&("wait for first pick"==O.a.GAMESTATE||"roll or pick color"==O.a.GAMESTATE)&&function(t,e,r){return r?"africa"==e&&(O.a.DICESTATE[0]+O.a.DICESTATE[4]==12-t||O.a.DICESTATE[0]+O.a.DICESTATE[5]==12-t)||("americas"==e&&(O.a.DICESTATE[1]+O.a.DICESTATE[4]==12-t||O.a.DICESTATE[1]+O.a.DICESTATE[5]==12-t)||("asia"==e&&(O.a.DICESTATE[2]+O.a.DICESTATE[4]==12-t||O.a.DICESTATE[2]+O.a.DICESTATE[5]==12-t)||"europe"==e&&(O.a.DICESTATE[3]+O.a.DICESTATE[4]==12-t||O.a.DICESTATE[3]+O.a.DICESTATE[5]==12-t))):"africa"==e&&(O.a.DICESTATE[0]+O.a.DICESTATE[4]==t+2||O.a.DICESTATE[0]+O.a.DICESTATE[5]==t+2)||("americas"==e&&(O.a.DICESTATE[1]+O.a.DICESTATE[4]==t+2||O.a.DICESTATE[1]+O.a.DICESTATE[5]==t+2)||("asia"==e&&(O.a.DICESTATE[2]+O.a.DICESTATE[4]==t+2||O.a.DICESTATE[2]+O.a.DICESTATE[5]==t+2)||"europe"==e&&(O.a.DICESTATE[3]+O.a.DICESTATE[4]==t+2||O.a.DICESTATE[3]+O.a.DICESTATE[5]==t+2)))}(r,e.props.mykey,e.props.reverseBool)){e.playSound(),e.setState({rowStatus:r});var a=v()(e.state.detailsArray);(a=a.map((function(t,e){return e<r&&"live"==t?"skipped":t})))[r]="selected",e.setState({detailsArray:v()(a)}),e.playSound(),O.a.screen1.setState({score:O.a.screen1.state.score+q(e.state.rowScore+1),statetext:"click dice to roll"}),O.a.GAMESTATE="wait for roll",e.setState({rowScore:e.state.rowScore+1})}else e.playFailSound()}},r)}))},this.props.mykey)}}]),a}(a.Component);W.propTypes={mykey:C.a.string.isRequired,rowcolor:C.a.string.isRequired,reverseBool:C.a.bool.isRequired};var F=g.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},one_row:{flex:1,alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"row",flexWrap:"wrap",width:"100%",marginTop:5,marginBottom:5}});function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=m()(t);if(e){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var J={1:r(170),2:r(171),3:r(172),4:r(173),5:r(174),6:r(175)};var L=function(t){l()(r,t);var e=N(r);function r(t){return o()(this,r),e.call(this,t)}return s()(r,[{key:"render",value:function(){var t=J[this.props.myvalue.toString()];return Object(R.jsx)(x.a,{style:[z.letterbox_selected,{backgroundColor:this.props.mycolor}],children:Object(R.jsx)(k.a,{style:[z.stretch,{backgroundColor:this.props.mycolor}],source:t})},this.props.mykey)}}]),r}(a.Component);L.propTypes={mykey:C.a.string.isRequired,myvalue:C.a.number.isRequired,mycolor:C.a.string.isRequired};var z=g.a.create({letterbox_selected:{flex:0,flexBasis:40,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:0,margin:2,width:40,height:40,borderWidth:0,flexShrink:40},stretch:{width:40,height:40}});function U(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=m()(t);if(e){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var X=function(t){l()(r,t);var e=U(r);function r(t){var a;return o()(this,r),(a=e.call(this,t)).state={diceStates:[6,6,6,6,6,6]},a}return s()(r,[{key:"render",value:function(){var t=this;return Object(R.jsx)(x.a,{style:Y.one_row,children:Object(R.jsxs)(b.a,{style:Y.one_row,onPress:function(){if("wait for roll"==O.a.GAMESTATE||"roll or pick color"==O.a.GAMESTATE){for(var e=[],r=0;r<6;r++)e.push(Math.floor(6*Math.random()+1));t.setState({diceStates:[].concat(e)}),O.a.DICESTATE=[].concat(e),O.a.GAMESTATE="wait for first pick",O.a.screen1.setState({statetext:"Choose white+white or white+color"})}},children:[Object(R.jsx)(L,{mykey:"red",mycolor:"#fd4a4a",myvalue:this.state.diceStates[0]}),Object(R.jsx)(L,{mykey:"yellow",mycolor:"#ffe77c",myvalue:this.state.diceStates[1]}),Object(R.jsx)(L,{mykey:"green",mycolor:"#009c87",myvalue:this.state.diceStates[2]}),Object(R.jsx)(L,{mykey:"grey",mycolor:"#acb0b5",myvalue:this.state.diceStates[3]}),Object(R.jsx)(L,{mykey:"w1",mycolor:"white",myvalue:this.state.diceStates[4]}),Object(R.jsx)(L,{mykey:"w2",mycolor:"white",myvalue:this.state.diceStates[5]})]})})}}]),r}(a.Component),Y=g.a.create({one_row:{alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"row",marginTop:0,marginBottom:0,flexShrink:40},stretch:{width:40,height:40}});function H(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=m()(t);if(e){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var K=function(t){l()(r,t);var e=H(r);function r(t){var a;return o()(this,r),(a=e.call(this,t)).state={score:0,statetext:"Click dice to roll",gameno:0,travelins:1},O.a.screen1=p()(a),a}return s()(r,[{key:"render",value:function(){return Object(R.jsx)(T.a,{style:Q.outer_container,children:Object(R.jsx)(S.a,{children:Object(R.jsxs)(x.a,{style:Q.container,children:[Object(R.jsx)(W,{mykey:"africa",rowcolor:"#fd4a4a",reverseBool:!0}),Object(R.jsx)(W,{mykey:"americas",rowcolor:"#ffe77c",reverseBool:!0}),Object(R.jsx)(W,{mykey:"asia",rowcolor:"#009c87",reverseBool:!1}),Object(R.jsx)(W,{mykey:"europe",rowcolor:"#acb0b5",reverseBool:!1}),Object(R.jsx)(X,{mykey:"dicerow"}),Object(R.jsx)(x.a,{style:Q.mystatus,children:Object(R.jsxs)(h.a,{children:["Your score is: ",this.state.score,".  ",this.state.statetext]})}),Object(R.jsxs)(x.a,{style:Q.myrows,children:[Object(R.jsx)(b.a,{onPress:function(){O.a.screen1.setState({gameno:O.a.screen1.state.gameno+1,score:0,statetext:"Restarted! Click dice to roll.",travelins:1}),O.a.GAMESTATE="wait for roll"},children:Object(R.jsx)(x.a,{style:Q.mybox,children:Object(R.jsx)(h.a,{children:"Restart"})})}),O.a.screen1.state.travelins>0?Object(R.jsx)(b.a,{onPress:function(){O.a.screen1.setState({travelins:0,statetext:"Ready to reroll"}),O.a.GAMESTATE="wait for roll"},children:Object(R.jsx)(x.a,{style:Q.mybox,children:Object(R.jsx)(h.a,{children:"Insurance"})})}):null]})]})})},O.a.screen1.state.gameno)}}]),r}(a.Component),Q=g.a.create({outer_container:{backgroundColor:"#000",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap",flex:1},myrows:{flex:1,flexDirection:"row",alignItems:"center",alignContent:"space-around"},container:{backgroundColor:"#fff",alignItems:"center",alignContent:"space-between",justifyContent:"space-between",flexWrap:"wrap"},flex_me:{flex:1,flexWrap:"wrap"},mybox:{backgroundColor:"#fd4a4a",borderWidth:2,marginLeft:20,marginRight:20,marginBottom:10,padding:10},mystatus:{height:45,marginLeft:5,marginTop:0,marginRight:5,padding:10}});function V(){return Object(R.jsx)(K,{})}},,,,,,,function(t,e,r){t.exports=r(181)},,,,,,,,function(t,e,r){t.exports=r.p+"static/media/0.74c9c609.png"},function(t,e,r){t.exports=r.p+"static/media/1.43bb6c66.png"},function(t,e,r){t.exports=r.p+"static/media/2.1013b002.png"},function(t,e,r){t.exports=r.p+"static/media/3.39cb378b.png"},function(t,e,r){t.exports=r.p+"static/media/4.5e710933.png"},function(t,e,r){t.exports=r.p+"static/media/5.d264bd64.png"},function(t,e,r){t.exports=r.p+"static/media/6.505edf61.png"},function(t,e,r){t.exports=r.p+"static/media/7.0650de80.png"},function(t,e,r){t.exports=r.p+"static/media/8.3b2e7782.png"},function(t,e,r){t.exports=r.p+"static/media/9.30ae91ae.png"},function(t,e,r){t.exports=r.p+"static/media/10.6b2c5fac.png"},function(t,e,r){t.exports=r.p+"static/media/0.d80280c1.png"},function(t,e,r){t.exports=r.p+"static/media/1.18511568.png"},function(t,e,r){t.exports=r.p+"static/media/2.93f43f87.png"},function(t,e,r){t.exports=r.p+"static/media/3.beb3ab6c.png"},function(t,e,r){t.exports=r.p+"static/media/4.a4f95aac.png"},function(t,e,r){t.exports=r.p+"static/media/5.edc3c901.png"},function(t,e,r){t.exports=r.p+"static/media/6.c3ca1770.png"},function(t,e,r){t.exports=r.p+"static/media/7.bd1b2c66.png"},function(t,e,r){t.exports=r.p+"static/media/8.337a332c.png"},function(t,e,r){t.exports=r.p+"static/media/9.c9595e2a.png"},function(t,e,r){t.exports=r.p+"static/media/10.ec582a48.png"},function(t,e,r){t.exports=r.p+"static/media/0.1244d6ed.png"},function(t,e,r){t.exports=r.p+"static/media/1.5e3177be.png"},function(t,e,r){t.exports=r.p+"static/media/2.43032ba1.png"},function(t,e,r){t.exports=r.p+"static/media/3.fce8209d.png"},function(t,e,r){t.exports=r.p+"static/media/4.3a01128f.png"},function(t,e,r){t.exports=r.p+"static/media/5.5f74b40f.png"},function(t,e,r){t.exports=r.p+"static/media/6.3cabb390.png"},function(t,e,r){t.exports=r.p+"static/media/7.836c1b1d.png"},function(t,e,r){t.exports=r.p+"static/media/8.3c9fd71d.png"},function(t,e,r){t.exports=r.p+"static/media/9.3008a906.png"},function(t,e,r){t.exports=r.p+"static/media/10.ea61f861.png"},function(t,e,r){t.exports=r.p+"static/media/0.7171656a.png"},function(t,e,r){t.exports=r.p+"static/media/1.be951864.png"},function(t,e,r){t.exports=r.p+"static/media/2.64a17d10.png"},function(t,e,r){t.exports=r.p+"static/media/3.17f62520.png"},function(t,e,r){t.exports=r.p+"static/media/4.eb760629.png"},function(t,e,r){t.exports=r.p+"static/media/5.25472fd1.png"},function(t,e,r){t.exports=r.p+"static/media/6.141619c8.png"},function(t,e,r){t.exports=r.p+"static/media/7.e22b6be3.png"},function(t,e,r){t.exports=r.p+"static/media/8.8e489ff3.png"},function(t,e,r){t.exports=r.p+"static/media/9.4121fd5f.png"},function(t,e,r){t.exports=r.p+"static/media/10.81ed5948.png"},,,,,,,,,,,,,,,,,,function(t,e,r){t.exports=r.p+"static/media/546078__stavsounds__button-pressed.d54c816d.wav"},function(t,e,r){t.exports=r.p+"static/media/538540__sjonas88__fail-sound.3dd93b56.wav"},function(t,e,r){t.exports=r.p+"static/media/1.1ac8ff57.png"},function(t,e,r){t.exports=r.p+"static/media/2.229991bc.png"},function(t,e,r){t.exports=r.p+"static/media/3.7f2e60af.png"},function(t,e,r){t.exports=r.p+"static/media/4.2539fe56.png"},function(t,e,r){t.exports=r.p+"static/media/5.a0c19f9b.png"},function(t,e,r){t.exports=r.p+"static/media/6.15abaea5.png"}],[[99,1,2]]]);
//# sourceMappingURL=app.4698f1f4.chunk.js.map