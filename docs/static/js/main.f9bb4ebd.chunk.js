(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/mk64_firstplace.8c2cc698.wav"},33:function(e,t,a){e.exports=a.p+"static/media/mk64_loser.51310d77.wav"},34:function(e,t,a){e.exports=a.p+"static/media/mk64_racestart.bd61c949.wav"},35:function(e,t,a){e.exports=a.p+"static/media/mk64_multiplayerstart.fc64c37d.wav"},36:function(e,t,a){e.exports=a.p+"static/media/mk64_finallap.3d63ec69.wav"},40:function(e,t,a){e.exports=a(60)},45:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),s=a.n(i),l=a(15),o=a(39),c=(a(45),a(11)),m=a(3),u=a(4),p=a(5),d=a(6),g=a(7),h=a(24),b=a.n(h);try{b.a.initializeApp({databaseURL:"https://bingo-voisinage.firebaseio.com"})}catch(me){/already exists/.test(me.message)||console.error("Firebase initialization error",me.stack)}var y=b.a,f=a(23),v=a.n(f),E=a(31),k=a.n(E),O={free:{color:"#666",fontSize:"1em",background:"#DDD",borderColor:"#666"},common:{margin:10,borderRadius:4,height:60,border:"1px solid #DDD",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5em",color:"#999"},hover:{color:"#666",border:"1px solid #AAA",background:"#EEE",cursor:"pointer"},selected:{color:"#EA3",border:"1px solid #EA3",background:"#FEA"},hoverSelected:{color:"#C92",border:"1px solid #C92",background:"#ED9"},checked:{border:"1px solid #6C6",background:"#EFE",color:"#6C6"},mistake:{border:"1px solid #C66",background:"#FEE",color:"#C66"}},j=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).mouseToggle=function(e){return function(){n.setState({hover:e})}},n.toggle=function(){n.props.toggleNumber(n.props.number)},n.state={hover:!1},n}return Object(p.a)(a,[{key:"render",value:function(){if("_"===this.props.number)return r.a.createElement("div",{style:Object(m.a)({},O.common,{},O.free)},"FREE");var e=this.props.playerNumbers.indexOf(this.props.number)>=0,t=!this.props.gameNumbers.includes(this.props.number);return r.a.createElement("div",{style:Object(m.a)({},O.common,{},e&&O.selected,{},e&&this.props.finish&&!t&&O.checked,{},e&&this.props.finish&&t&&O.mistake,{},!this.props.finish&&this.state.hover&&O.hover,{},!this.props.finish&&this.state.hover&&e&&O.hoverSelected),onMouseEnter:this.mouseToggle(!0),onMouseLeave:this.mouseToggle(!1),onClick:!this.props.finish&&this.toggle},this.props.number)}}]),a}(r.a.Component),N=["#00A","#FA0","#0A0","#F00","#A0A"],C=["#EEF","#FED","#EFE","#FEE","#FEF"],x={container:{},circle:{margin:"20px auto",borderRadius:"50%",background:"#EEE",color:"#DDD",height:70,width:70,display:"flex",justifyContent:"center",alignItems:"center",fontSize:"250%"},activated:function(e){return{background:N[e],color:C[e]}}},w=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=Object(c.a)(this.props.gridNumbers).splice(5*this.props.index,5).every((function(t){return"_"===t||e.props.playerNumbers.includes(t)}));return r.a.createElement("div",{style:x.container},r.a.createElement("div",{style:Object(m.a)({},x.circle,{},t&&x.activated(this.props.index))},this.props.letter))}}]),a}(r.a.Component),M="BINGO".split(""),S={container:{},wrapper:{display:"grid",gridTemplate:"repeat(5, 1fr) / repeat(5, 1fr)",gridAutoFlow:"column"},header:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)"}},G=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:S.container},r.a.createElement("div",{style:S.header},M.map((function(t,a){return r.a.createElement(w,{index:a,letter:t,playerNumbers:e.props.playerNumbers,gridNumbers:e.props.gridNumbers})}))),this.props.start&&r.a.createElement("div",{style:S.wrapper},this.props.gridNumbers.map((function(t){return r.a.createElement(j,{number:t,playerNumbers:e.props.playerNumbers,finish:e.props.finish,gameNumbers:e.props.gameNumbers,toggleNumber:e.props.toggleNumber})}))))}}]),a}(r.a.Component),A={container:{display:"flex",width:"100%",alignItems:"center",height:30},count:{flex:1,color:"#999"},game:{padding:"0 10px 0 20px",fontWeight:"bold"},player:{paddingRight:10},quit:{paddingRight:20,background:"#FEE",padding:"3px 10px",border:"2px solid #FCC",color:"#F66",borderRadius:3,cursor:"pointer"}},F=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(p.a)(a,[{key:"render",value:function(){return this.props.admin?r.a.createElement("div",{style:A.container},r.a.createElement("span",{style:A.game},this.props.gameName),r.a.createElement("span",{style:A.count},"ADMINISTRATION"),r.a.createElement("span",{style:A.quit,onClick:this.props.quitGame},"Quitter")):0===this.props.gridNumbers.length?r.a.createElement("div",{style:A.container}):r.a.createElement("div",{style:A.container},r.a.createElement("span",{style:A.game},this.props.gameName),r.a.createElement("span",{style:A.count},this.props.playersCount," joueur",this.props.playersCount>1&&"s"),r.a.createElement("span",{style:A.player},this.props.playerName),r.a.createElement("span",{style:A.quit,onClick:this.props.quitGame},"Quitter"))}}]),a}(r.a.Component),R={container:{textAlign:"center"},menuOpened:{background:"#EEE",border:"2px solid #666",color:"#666",padding:20,width:"75%",maxWidth:"250px",margin:"20px auto",fontSize:"1.5em",borderRadius:10},header:{cursor:"pointer"},menuClosed:{textDecoration:"underline",color:"#CCC",marginTop:40,cursor:"pointer"},form:{borderTop:"1px solid #CCC",marginTop:20},label:{display:"flex",width:"100%",textAlign:"right",marginTop:20,alignItems:"center"},input:{flex:1,width:"100%",outline:"none",fontSize:"0.75em",padding:"3px 10px",border:0,background:"#DDD",borderBottom:"1px solid #BBB",borderRadius:0,color:"#333"},field:{flex:"0 70px",marginRight:20,fontSize:"0.75em",boxSizing:"border-box"},go:{display:"inline-block",margin:"20px auto 0",background:"#E6E6E6",color:"#CCC",padding:"5px 20px",borderRadius:10},goActivated:{background:"#666"}},T=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).toggleForm=function(e){return function(){var t=null;n.props.formOpened!==e&&(t=e),n.setState({pass:""}),n.props.changeFormOpened(t)}},n.changeValue=function(e){return function(t){"pass"===e?n.setState({pass:t.target.value}):"game"===e?n.props.changeGameName(t.target.value):"player"===e&&n.props.changePlayerName(t.target.value)}},n.createGame=function(){n.props.createGame(n.state.pass)},n.state={pass:""},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:R.container},"create"!==this.props.formOpened&&r.a.createElement("div",{style:R.menuOpened},r.a.createElement("div",{style:R.header,onClick:this.toggleForm("join")},r.a.createElement("b",null,"Joindre")," une partie"),"join"===this.props.formOpened&&r.a.createElement("div",{style:R.form},r.a.createElement("label",{htmlFor:"gameName",style:R.label},r.a.createElement("div",{style:R.field},"Partie"),r.a.createElement("input",{style:R.input,value:this.props.gameName,id:"gameName",onChange:this.changeValue("game")})),r.a.createElement("label",{htmlFor:"playerName",style:R.label},r.a.createElement("div",{style:R.field},"Pr\xe9nom"),r.a.createElement("input",{style:R.input,value:this.props.playerName,id:"playerName",onChange:this.changeValue("player")})),r.a.createElement("div",{style:Object(m.a)({},R.go,{},this.props.gameName&&this.props.playerName&&R.goActivated),onClick:this.props.joinGame},"Go !"))),"join"!==this.props.formOpened&&r.a.createElement("div",{style:"create"===this.props.formOpened?R.menuOpened:R.menuClosed},r.a.createElement("div",{style:R.header,onClick:this.toggleForm("create")},r.a.createElement("b",null,"Administrer")," une partie"),"create"===this.props.formOpened&&r.a.createElement("div",{style:R.form},r.a.createElement("label",{htmlFor:"gameName",style:R.label},r.a.createElement("div",{style:R.field},"Partie"),r.a.createElement("input",{style:R.input,value:this.props.gameName,id:"gameName",onChange:this.changeValue("game")})),r.a.createElement("label",{htmlFor:"gamePass",style:R.label},r.a.createElement("div",{style:R.field},"Clef"),r.a.createElement("input",{type:"password",style:R.input,value:this.state.pass,id:"gamePass",onChange:this.changeValue("pass")})),r.a.createElement("div",{style:Object(m.a)({},R.go,{},this.props.gameName&&this.state.pass&&R.goActivated),onClick:this.createGame},"Go !"))))}}]),a}(r.a.Component),q={number:{display:"flex",width:20,height:20,borderRadius:10,background:"#EEE",color:"#AAA",justifyContent:"center",alignItems:"center",fontSize:"0.75em",marginBottom:5},checked:{background:"#EFE",color:"#6C6"},mistake:{background:"#FEE",color:"#C66"},oversight:{background:"#FED",color:"#FA0"},grid:{maxWidth:150,display:"grid",gridTemplate:"repeat(5, 1fr) / repeat(5, 1fr)",gridAutoFlow:"column"}},D=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).styleNumber=function(e){return"_"===e?null:n.props.gameNumbers.includes(e)?n.props.playerNumbers.includes(e)?q.checked:q.oversight:n.props.playerNumbers.includes(e)?q.mistake:void 0},n.state={},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:q.grid},this.props.gridNumbers.map((function(t){return r.a.createElement("div",{style:Object(m.a)({},q.number,{},e.styleNumber(t))},"_"===t?"":t)})))}}]),a}(r.a.Component),z={container:{display:"inline-block",width:140,padding:5,margin:5,background:"#F9F9F9",borderRadius:5},winner:{background:"#0D0"},loser:{background:"#D00"},title:{textAlign:"center",marginBottom:10}},P=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:Object(m.a)({},z.container,{},this.props.winner&&z.winner,{},this.props.player.finish&&!this.props.winner&&z.loser)},r.a.createElement("div",{style:z.title},this.props.player.name,this.props.player.auto&&" (auto)"),r.a.createElement(D,{playerNumbers:this.props.player.numbers,gridNumbers:this.props.player.grid,gameNumbers:this.props.gameNumbers}))}}]),a}(r.a.Component),B={container:{marginTop:20},title:{fontWeight:"bold",paddingRight:20,fontSize:"1.5em",margin:"30px 0"},grid:{margin:"30px auto",maxWidth:400,display:"grid",gridTemplateColumns:"repeat(15, 1fr)"},number:{display:"flex",width:20,height:20,borderRadius:10,background:"#EEE",color:"#AAA",justifyContent:"center",alignItems:"center",fontSize:"0.75em",marginBottom:5},drawn:{background:"#999",color:"#EEE"},draw:{background:"#EFE",padding:"3px 10px",border:"2px solid #ADA",color:"#6C6",borderRadius:3,cursor:"pointer"},reinit:{background:"#EEF",padding:"3px 10px",border:"2px solid #AAD",color:"#66C",borderRadius:3,cursor:"pointer",marginRight:10},list:{}},I=Object(c.a)(Array(75).keys()).map((function(e){return e+1})),W=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:B.container},this.props.start?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",{style:B.title},"Num\xe9ros"),!this.props.winner&&this.props.gameNumbers.length<75&&r.a.createElement("span",{style:B.draw,onClick:this.props.drawNumber},"Tirer un num\xe9ro")),r.a.createElement("div",{style:B.grid},I.map((function(t){return r.a.createElement("div",{style:Object(m.a)({},B.number,{},e.props.gameNumbers.includes(t)&&B.drawn)},t)})))):this.props.players.length?r.a.createElement("div",null,r.a.createElement("span",{style:B.draw,onClick:this.props.startMatch},"D\xe9marrer la partie")):r.a.createElement("br",null),r.a.createElement("div",{style:B.title},this.props.players.length," participant",this.props.players.length>1&&"s"),r.a.createElement("div",{style:B.list},this.props.players.map((function(t){return r.a.createElement(P,{player:t,winner:e.props.winner===t.key,gameNumbers:e.props.gameNumbers})}))),r.a.createElement("br",null),r.a.createElement("div",null,this.props.start&&r.a.createElement("span",{style:B.reinit,onClick:this.props.reinitMatch},"R\xe9initialiser la partie"),r.a.createElement("span",{style:B.reinit,onClick:this.props.cancelMatch},"Supprimer la partie")))}}]),a}(r.a.Component),_={container:{position:"absolute",top:0,right:0,left:0,bottom:0,minHeight:"100vw"},background:{position:"absolute",height:"100%",width:"100%",background:"#FFF",opacity:.75},wrapper:{position:"sticky",margin:"170px auto 50px",maxWidth:"75%",width:400,background:"#EEE",border:"2px solid #666",color:"#666",padding:20,fontSize:"1.25em",borderRadius:10},actions:{marginTop:20,textAlign:"center"},button:{display:"inline-block",margin:"10px 20px",background:"#E6E6E6",color:"#999",padding:"5px 20px",borderRadius:10,cursor:"pointer"},confirm:{background:"#666",color:"#CCC"},cancel:{}},L=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onClick=function(t){return function(){return e.props.message.callback(t)}},e.getContent=function(){var t=e.props.message.content;return"function"===typeof t?t(e.props.message.data):t},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return this.timer&&clearTimeout(this.timer),this.props.message.timeout&&(this.timer=setTimeout((function(){e.props.removeMessage()}),this.props.message.timeout)),r.a.createElement("div",{style:_.container},r.a.createElement("div",{style:_.background}),r.a.createElement("div",{style:_.wrapper},r.a.createElement("div",{style:_.content},this.getContent()),(this.props.message.confirm||this.props.message.cancel)&&r.a.createElement("div",{style:_.actions},this.props.message.confirm&&r.a.createElement("div",{style:Object(m.a)({},_.button,{},_.confirm),onClick:this.onClick(!0)},this.props.message.confirm),this.props.message.cancel&&r.a.createElement("div",{style:Object(m.a)({},_.button,{},_.cancel),onClick:this.onClick(!1)},this.props.message.cancel))))}}]),a}(r.a.Component);function V(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return[].concat(Object(c.a)(Q(1,15,5)),Object(c.a)(Q(16,30,5)),Object(c.a)(U(31,45,5,e,2)),Object(c.a)(Q(46,60,5)),Object(c.a)(Q(61,75,5)))}function Q(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=Object(c.a)(Array(t-e+1).keys()).sort((function(){return.5-Math.random()})).map((function(t){return t+e})).slice(0,a);return n}function U(e,t,a,n,r){var i=Q(e,t,a);return n&&(i[r]="_"),i}var H=a(32),J=a.n(H),K=a(33),X=a.n(K),Y=a(34),Z=a.n(Y),$=a(35),ee=a.n($),te=a(36),ae=a.n(te),ne={first:J.a,loser:X.a,start:Z.a,begin:ee.a,final:ae.a},re={container:{margin:"auto",maxWidth:"500px",padding:"20px 10px"},newNumber:{display:"block",textAlign:"center",fontWeight:"bold",fontSize:"3em",marginTop:20}},ie={key:null,name:null,hash:"",count:0,players:[],numbers:[],winner:null,start:!1},se={key:null,name:null,grid:[],numbers:[],finish:!1},le=["yoshi","mario","peach","toad"],oe=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).playSound=function(e){n.beep&&n.beep.setVolume(0),ne[e]&&(n.beep=new k.a(ne[e]),n.beep.setVolume(1),n.beep.play())},n.quitGame=function(){if(n.removeMessage(),n.state.game&&n.state.game.key&&(n.games.child(n.state.game.key).off(),n.games.child(n.state.game.key).child("count").off(),n.players.orderByChild("game").equalTo(n.state.game.key).off(),n.games.orderByChild("name").equalTo(n.state.game.name).off()),n.state.player&&n.state.player.key&&(n.players.child(n.state.player.key).off(),0===n.state.player.numbers.length)){n.players.child(n.state.player.key).remove();var e=n.state.game.key;n.games.child(e).child("count").once("value",(function(t){n.games.child(e).child("count").set((t.val()||1)-1),n.games.child(e).child("count").off()}))}n.setState({admin:!1,game:Object(m.a)({},ie,{name:n.state.game.name}),player:Object(m.a)({},se,{name:n.state.player.name})})},n.reinitMatch=function(e){n.removeMessage(),e&&(n.games.child(n.state.game.key).remove(),n.initGame(n.state.game.name,n.state.game.hash,null,null))},n.cancelMatch=function(e){n.removeMessage(),e&&(n.games.child(n.state.game.key).remove(),n.quitGame())},n.reinitGame=function(e){e?(n.removeMessage(),n.reinitMatch()):n.quitGame()},n.maybeCreate=function(e){e?n.changeFormOpened("create"):n.setState({game:ie}),n.removeMessage()},n.drawNewMaybe=function(e){n.removeMessage(),e||n.drawNumber()},n.submitGrid=function(e){e?(n.players.child(n.state.player.key).child("finish").set(!0),n.compareGrid()):n.removeMessage()},n.displayMessage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.setState({message:Object(m.a)({},n.MESSAGES.default,{},n.MESSAGES[e],{data:t})})},n.compareGrid=function(){n.state.player.numbers.every((function(e){return n.state.game.numbers.includes(e)}))?n.games.child(n.state.game.key).child("winner").set(n.state.player.key):(n.playSound("loser"),n.displayMessage("eliminated"))},n.toggleNumber=function(e){var t=n.state.player.numbers.indexOf(e),a=n.state.player.numbers;t<0?a.push(e):a.splice(t,1),a.length>=24&&n.displayMessage("fullGrid"),n.players.child(n.state.player.key).child("numbers").set(a)},n.removeMessage=function(){n.setState({message:null})},n.changeGameName=function(e){n.setState({game:Object(m.a)({},n.state.game,{name:e})})},n.changePlayerName=function(e){n.setState({player:Object(m.a)({},n.state.player,{name:e})})},n.changeFormOpened=function(e){n.setState({formOpened:e})},n.searchGame=function(e,t){n.games.orderByChild("name").equalTo(e).once("value",(function(e){var a=e.val();null===a?t(null,null):t(Object.values(a)[0],Object.keys(a)[0])}))},n.joinGame=function(){var e=n.state.game.name.trim().toLowerCase(),t=n.state.player.name;n.searchGame(e,(function(a,r){if(null===r)return n.displayMessage("notExists"),null;if(a.winner)n.players.child(a.winner).once("value",(function(e){n.playSound("final"),n.displayMessage("announceWinner",{name:e.val().name})}));else if(a.start)n.displayMessage("inProgress");else{var i=Object(m.a)({},se,{name:t,grid:V(!0)});n.displayMessage("waitGame"),n.setState({player:i,game:Object(m.a)({},ie,{name:e,key:r})},(function(){var e=n.players.push(Object(m.a)({},i,{game:r})).key;n.setState({player:Object(m.a)({},n.state.player,{key:e})});var t=!1;n.games.child(r).on("value",(function(e){if(e.val()){var a=e.val().numbers||[],r=e.val().winner,i=e.val().start;n.setState({game:Object(m.a)({},n.state.game,{winner:r,start:i,numbers:a})}),i&&(n.removeMessage(),t?n.displayMessage("newNumber",{number:a[a.length-1]}):(n.playSound("start"),t=!0),r&&(n.state.player.key===r?(n.playSound("first"),n.displayMessage("winner")):n.players.child(r).once("value",(function(e){n.playSound("final"),n.displayMessage("displayWinner",{name:e.val().name})}))))}else n.displayMessage("cleanGame")})),n.games.child(r).child("count").set((a.count||0)+1).then((function(){n.games.child(r).child("count").on("value",(function(e){n.setState({game:Object(m.a)({},n.state.game,{count:e.val()})})}))})),n.players.child(e).on("value",(function(t){n.setState({player:Object(m.a)({},n.state.player,{key:e,finish:t.val().finish||!1,numbers:t.val().numbers||[]})})}))}))}}))},n.createGame=function(e){var t=v()(e),a=n.state.game.name.trim().toLowerCase();n.searchGame(a,(function(e,r){n.initGame(a,t,e,r)}))},n.initGame=function(e,t,a,r){if(null===r){a=Object(m.a)({},ie,{name:e,hash:t});var i=n.games.push(a);r=i.key}else if(a.hash!==t)return n.displayMessage("badHash"),null;n.setState({admin:!0,game:Object(m.a)({},ie,{name:a.name,hash:a.hash,key:r})},(function(){if(a.start&&0===a.count)return n.displayMessage("zeroPlayer"),null;n.games.child(r).on("value",(function(e){var t=e.val()||{},a=t.numbers||[],r=t.winner,i=!!t.start;n.setState({game:Object(m.a)({},n.state.game,{numbers:a,winner:r,start:i})}),r&&n.players.child(r).once("value",(function(e){n.playSound("final"),n.displayMessage("announceWinner",{name:e.val().name})})),i&&0===a.length&&n.playSound("begin")})),n.players.orderByChild("game").equalTo(r).on("value",(function(e){var t=e.val()||{},a=Object.keys(t);n.setState({game:Object(m.a)({},n.state.game,{players:a.map((function(e){return Object(m.a)({},se,{},t[e],{key:e})}))})}),n.state.game.start&&0===a.length&&n.displayMessage("zeroPlayer")}))}))},n.drawNumber=function(){if(n.state.game.numbers.length>=75)return null;for(var e=Q(1,75,75),t=0;n.state.game.numbers.includes(e[t]);)t++;n.games.child(n.state.game.key).child("numbers").set([].concat(Object(c.a)(n.state.game.numbers),[e[t]])),n.displayMessage("newNumberAdmin",{number:e[t]})},n.startMatch=function(){n.games.child(n.state.game.key).child("start").set(!0)},n.askCancel=function(){n.displayMessage("askCancel")},n.askReinit=function(){n.displayMessage("askReinit")},n.MESSAGES={default:{confirm:"Ok !",cancel:!1,callback:n.removeMessage,timeout:!1},fullGrid:{content:r.a.createElement("span",null,"Il semblerait que tu aies un ",r.a.createElement("b",null,"BINGO !"),r.a.createElement("br",null),"Attention, si tu soumets une grille avec une erreur tu seras \xe9limin\xe9 ! ",r.a.createElement("br",null),r.a.createElement("br",null),"Veux-tu soumettre ta grille ou la corriger ?"),confirm:"Soumettre !",cancel:"Corriger",callback:n.submitGrid},winner:{content:function(){return r.a.createElement("span",null,"Tu es le vainqueur de cette partie, bravo !!",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("img",{src:"./".concat(le[Math.floor(Math.random()*le.length)],".gif"),alt:""})))}},eliminated:{content:r.a.createElement("span",null,"Tu as des erreurs dans ta grille, tu as \xe9t\xe9 \xe9limin\xe9 :(")},notExists:{content:r.a.createElement("span",null,"Cette partie n'existe pas, choisis en une autre ou lance la en choissant une clef !"),confirm:"La lancer !",cancel:"Une autre...",callback:n.maybeCreate},newNumber:{content:function(e){return r.a.createElement("center",null,"Nouveau nombre !",r.a.createElement("br",null),r.a.createElement("span",{style:re.newNumber},e.number))},confirm:!1,timeout:1500},newNumberAdmin:{content:function(e){return r.a.createElement("span",{style:re.newNumber},e.number)},cancel:"Retirer",callback:n.drawNewMaybe},badHash:{content:r.a.createElement("span",null,"Ce mot de passe ne correspond pas \xe0 celui choisi lors de la cr\xe9ation de la partie.")},announceWinner:{content:function(e){return r.a.createElement("span",null,"Cette partie est finie ! Le vainqueur est ...",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("b",null,e.name)))}},displayWinner:{content:function(e){return r.a.createElement("span",null,"Fin de la partie... Une personne a \xe9t\xe9 meilleure que toi :/ Bravo au vainqueur ...",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("b",null,e.name)))},confirm:"Quitter la partie",callback:n.quitGame},waitGame:{content:function(){return r.a.createElement("span",null,"Partie en attente de lancement, merci de patienter...",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("img",{src:"./".concat(le[Math.floor(Math.random()*le.length)],".gif"),alt:""})))},confirm:"Quitter",callback:n.quitGame},inProgress:{content:r.a.createElement("span",null,"D\xe9sol\xe9, la partie est en cours, il n'est plus possible de la rejoindre :(")},zeroPlayer:{content:r.a.createElement("span",null,"La partie bien que lanc\xe9e n'a plus de joueur...."),confirm:"R\xe9initialiser",cancel:"Quitter",callback:n.reinitGame},cleanGame:{content:r.a.createElement("span",null,"Malheureusement, la partie a \xe9t\xe9 r\xe9initialis\xe9e..."),callback:n.quitGame},askReinit:{content:r.a.createElement("span",null,"Es-tu s\xfbr de vouloir r\xe9initialiser la partie ?"),cancel:"Annuler",callback:n.reinitMatch},askCancel:{content:r.a.createElement("span",null,"Es-tu s\xfbr de vouloir supprimer la partie ?"),cancel:"Annuler",callback:n.cancelMatch}},n.ref=y.database().ref("/"),n.games=n.ref.child("games"),n.players=n.ref.child("players"),n.state={admin:!1,formOpened:"join",game:Object(m.a)({},ie,{},n.props.gameName&&{name:n.props.gameName}),player:se,message:null},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:re.container},r.a.createElement(F,{admin:this.state.admin,gameName:this.state.game.name,playerName:this.state.player.name,gridNumbers:this.state.player.grid,playersCount:this.state.game.count,quitGame:this.quitGame}),r.a.createElement(G,{playerNumbers:this.state.player.numbers,gridNumbers:this.state.player.grid,finish:this.state.game.winner||this.state.player.finish,start:this.state.game.start,gameNumbers:this.state.game.numbers,toggleNumber:this.toggleNumber}),!this.state.game.key&&!this.state.admin&&r.a.createElement(T,{formOpened:this.state.formOpened,gameName:this.state.game.name,playerName:this.state.player.name,changeGameName:this.changeGameName,changePlayerName:this.changePlayerName,changeFormOpened:this.changeFormOpened,joinGame:this.joinGame,createGame:this.createGame}),this.state.admin&&r.a.createElement(W,{drawNumber:this.drawNumber,startMatch:this.startMatch,reinitMatch:this.askReinit,cancelMatch:this.askCancel,gameNumbers:this.state.game.numbers,players:this.state.game.players,winner:this.state.game.winner,start:this.state.game.start}),this.state.message&&r.a.createElement(L,{message:this.state.message,removeMessage:this.removeMessage}))}}]),a}(r.a.Component);function ce(){var e=new URLSearchParams(Object(l.d)().search);return r.a.createElement(oe,{gameName:e.get("game")})}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(ce,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f9bb4ebd.chunk.js.map