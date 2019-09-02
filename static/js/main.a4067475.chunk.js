(window["webpackJsonpstat-roller"]=window["webpackJsonpstat-roller"]||[]).push([[0],{14:function(e,t,l){},15:function(e,t,l){},16:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),o=l(8),i=l.n(o),s=(l(14),l(15),l(2)),r=l(3),c=l(6),u=l(4),h=l(1),d=l(5),m=function(e){function t(e){var l;return Object(s.a)(this,t),(l=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},l.rolled=!1,l.level=1,l.class="Artificer",l.generation="3d6",l.handleLevel=l.handleLevel.bind(Object(h.a)(l)),l.handleClass=l.handleClass.bind(Object(h.a)(l)),l.handleGenerationMethod=l.handleGenerationMethod.bind(Object(h.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(h.a)(l)),l}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleLevel",value:function(e){this.level=e.target.value,this.forceUpdate()}},{key:"handleClass",value:function(e){"Class"===e.target.value?this.class=null:this.class=e.target.value,this.forceUpdate()}},{key:"handleGenerationMethod",value:function(e){"Generation Method"===e.target.value?this.generation=null:this.generation=e.target.value,this.forceUpdate()}},{key:"handleSubmit",value:function(e){null===this.class||null===this.class?console.error("Please choose class and generation method before you proceed"):(this.rolled=!0,this.props.onClick({rolled:this.rolled,level:this.level,class:this.class,generation:this.generation})),e.preventDefault()}},{key:"render",value:function(){var e="";e=null!==this.class&&null!==this.generation?"button-active":"button-inactive";var t=this.props.isMobile?"mobile-input-box":"input-box";return n.a.createElement("div",{className:t},n.a.createElement("form",{className:"character-form",onSubmit:this.handleSubmit},n.a.createElement("label",{className:"lb-label",htmlFor:"lb"},"Level:"),n.a.createElement("input",{className:"levelbox",type:"number",min:"1",max:"20",value:this.level,onChange:this.handleLevel,id:"lb"}),n.a.createElement("select",{className:"dropdown-class",onChange:this.handleClass},n.a.createElement("option",null,"Artificer"),n.a.createElement("option",null,"Blood Hunter"),n.a.createElement("option",null,"Barbarian"),n.a.createElement("option",null,"Bard"),n.a.createElement("option",null,"Cleric"),n.a.createElement("option",null,"Druid"),n.a.createElement("option",null,"Fighter"),n.a.createElement("option",null,"Monk"),n.a.createElement("option",null,"Paladin"),n.a.createElement("option",null,"Ranger"),n.a.createElement("option",null,"Rogue"),n.a.createElement("option",null,"Warlock"),n.a.createElement("option",null,"Wizard")),n.a.createElement("select",{className:"dropdown-generation-method",onChange:this.handleGenerationMethod},n.a.createElement("option",null,"3d6"),n.a.createElement("option",null,"4d6"),n.a.createElement("option",null,"CR")),n.a.createElement("input",{className:e,type:"submit",value:"Roll"})))}}]),t}(a.Component),p=function(e){function t(e){var l;return Object(s.a)(this,t),(l=Object(c.a)(this,Object(u.a)(t).call(this,e))).keys=["STR","DEX","CON","INT","WIS","CHA","HEALTH"],l.tooltips=["Strength","Dexteriry","Constitution","Intelligence","Wisdom","Charisma","Rolled health not including CON modifier"],l.rolls=[{sum:"--",dice:"--"},{sum:"--",dice:"--"},{sum:"--",dice:"--"},{sum:"--",dice:"--"},{sum:"--",dice:"--"},{sum:"--",dice:"--"}],l.health={sum:"--",dice:"--"},l}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){console.log(this.props.rolled),this.props.rolled&&(this.rolls=this.props.rolls,this.health=this.props.health),console.log(this.rolls);for(var e=[],t=0;t<6;t++){if(!this.props.isMobile)var l=n.a.createElement("span",{className:"tooltiptext"},this.tooltips[t]),a=n.a.createElement("span",{className:"tooltiptext"},"["+this.rolls[t].dice+"]");e.push(n.a.createElement("div",{className:"stat-block"},n.a.createElement("div",{className:"stat"},this.rolls[t].sum,a),n.a.createElement("div",{className:"lab-"+this.keys[t].toLowerCase()},this.keys[t],l)))}if(!this.props.isMobile)l=n.a.createElement("span",{className:"tooltiptext"},this.tooltips[6]),a=n.a.createElement("span",{className:"tooltiptext"},"["+this.health.dice+"]");e.push(n.a.createElement("div",{className:"stat-block"},n.a.createElement("div",{className:"stat"},this.health.sum,a),n.a.createElement("div",{className:"lab-health"}," HP",l)));var o=this.props.isMobile?"stats-mobile":"stats";return n.a.createElement("div",{className:o},e)}}]),t}(a.Component);function v(e){return Math.ceil(Math.random()*e)}function f(){for(var e=[],t=0;t<3;t++)e.push(v(6));console.log("Rolls: "+e);var l=function(e){return e.reduce(function(e,t){return e+t},0)}(e);return console.log("Total sum: "+l),console.log("====================="),{sum:l,dice:e}}function b(){for(var e=[],t=6,l=0,a=0;a<4;a++){var n=v(6);n<t&&(t=n,l=a),e.push(n)}console.log("Rolls: "+e),console.log("Dropped: "+e[l]);var o=e.splice(l,1),i=function(e){return e.reduce(function(e,t){return e+t},0)}(e);return e.push(o),console.log("Total sum: "+i),console.log("====================="),{sum:i,dice:e}}var g=function(e){function t(e){var l;return Object(s.a)(this,t),(l=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleWindowSizeChange=function(){l.setState({width:window.innerWidth})},l.state={width:window.innerWidth},l.rolled=!1,l.level=1,l.class=null,l.generation=null,l.stats=null,l.health=null,l.updateState=l.updateState.bind(Object(h.a)(l)),l}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"updateState",value:function(e){this.rolled=e.rolled,this.level=e.level,this.class=e.class,this.generation=e.generation,this.stats=function(e){var t=[];if("3d6"===e)for(var l=0;l<6;l++)t.push(f());else if("4d6"===e)for(l=0;l<6;l++)t.push(b());else if("CR"===e)for(;;){for(l=0;l<6;l++)t.push(b()),t[l].sum;if(!(t.reduce(function(e,t){return e+t},0)<70))break;t=[]}return t}(this.generation),this.health=function(e,t){var l=[];if(["Barbarian"].includes(e)){l.push(12);for(var a=0;a<t-1;a++)l.push(v(12))}if(["Blood Hunter","Fighter","Paladin","Ranger"].includes(e))for(l.push(10),a=0;a<t-1;a++)l.push(v(10));if(["Artificer","Bard","Cleric","Druid","Monk","Rogue","Warlock"].includes(e))for(l.push(8),a=0;a<t-1;a++)l.push(v(8));if(["Sorcerer","Warlock","Wizard"].includes(e))for(l.push(6),a=0;a<t-1;a++)l.push(v(6));console.log("Rolled health",l);var n=l.reduce(function(e,t){return e+t},0);return console.log("Total health",l),console.log("====================="),{sum:n,dice:l}}(this.class,this.level),console.log(this.stats),this.forceUpdate()}},{key:"render",value:function(){var e=this.state.width<=600,t=e?"layout-mobile":"layout";return n.a.createElement("div",{className:t},n.a.createElement(p,{rolled:this.rolled,level:this.level,cls:this.class,gen:this.generation,rolls:this.stats,health:this.health,isMobile:e}),n.a.createElement(m,{onClick:this.updateState,isMobile:e}))}}]),t}(a.Component);var E=function(){return document.title="Stat Roller",n.a.createElement("div",{className:"container"},n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,l){e.exports=l(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a4067475.chunk.js.map