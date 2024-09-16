"use strict";(self["webpackChunkcouple_find_number"]=self["webpackChunkcouple_find_number"]||[]).push([[189],{940:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var i=n(641),s=n(33),o=n(751);const r=t=>((0,i.Qi)("data-v-0e9df189"),t=t(),(0,i.jt)(),t),a={class:"container"},d={class:"game_container"},l={class:"my_number",ref:"my_number"},c={class:"my_tries"},u={class:"digits_container"},p=["onClick"],m={class:"response_container"},h={class:"correct_container"},y={class:"correct_number"},g=r((()=>(0,i.Lk)("span",{class:"material-symbols-rounded"}," check ",-1))),f={class:"positioned_container"},v={class:"positioned_container"},_=r((()=>(0,i.Lk)("span",{class:"material-symbols-rounded"}," done_all ",-1))),k={class:"input_container",ref:"input_container"},b={class:"announcer_container"};function x(t,e,n,r,x,L){const E=(0,i.g2)("LoaderComponent");return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.bo)((0,i.Lk)("div",d,[(0,i.Lk)("div",l,[(0,i.Lk)("h1",null,(0,s.v_)(x.number||"####"),1)],512),(0,i.Lk)("div",c,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(x.myTries,((t,e)=>((0,i.uX)(),(0,i.CE)("div",{class:"try",key:e,ref_for:!0,ref:e},[(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.digits,((t,n)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(`digit ${t[1]}`),key:t[0],onClick:(0,o.D$)((t=>L.changeState(e,n)),["stop"])},(0,s.v_)(t[0]),11,p)))),128))]),(0,i.Lk)("div",m,[(0,i.Lk)("div",h,[(0,i.Lk)("p",y,(0,s.v_)(t.correct),1),g]),(0,i.Lk)("div",f,[(0,i.Lk)("p",v,(0,s.v_)(t.positioned),1),_])])])))),128))])],512),[[o.aG,!x.gameHasEnded]]),(0,i.bo)((0,i.Lk)("div",k,[n.turn?(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{key:0,onKeydown:e[0]||(e[0]=(...t)=>L.eraser&&L.eraser(...t)),onKeypress:e[1]||(e[1]=(...t)=>L.writer&&L.writer(...t)),autofocus:"",maxlength:"4",placeholder:"Type Your Number",type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>x.inputValue=t)},null,544)),[[o.Jo,x.inputValue]]):((0,i.uX)(),(0,i.Wv)(E,{key:1,reduced:"true"}))],512),[[o.aG,!x.gameHasEnded]]),(0,i.bo)((0,i.Lk)("div",b,[(0,i.Lk)("h1",null,(0,s.v_)(x.winner?"YOU WIN! 🏆":"YOU LOSE! 🥲"),1),(0,i.Lk)("div",{onClick:e[3]||(e[3]=(0,o.D$)((e=>t.$router.replace({name:"start"})),["stop"])),class:"back_btn"}," HOME ")],512),[[o.aG,x.gameHasEnded]])])}var L=n(808),E=n(130),C={beforeUnmount(){!this.gameHasEnded&&this.started&&(this.socket.emit("game_abbandoned"),this.$router.replace({name:"start"}))},created(){this.socket=L.A,this.socket.emit("request_number",(t=>{this.number=t})),this.socket.on("you_win",(()=>{this.gameHasEnded=!0,this.winner=!0})),this.socket.on("you_lose",(()=>{this.gameHasEnded=!0,this.winner=!1}))},components:{LoaderComponent:E.A},data(){return{gameHasEnded:!1,inputValue:"",myTries:[],number:null,socket:null,winner:!0}},methods:{changeState(t,e){const n=document.createElement("div");n.classList.add("changer_container"),n.style.alignItems="center",n.style.backdropFilter="blur(10px)",n.style.display="flex",n.style.flexDirection="row",n.style.height="100%",n.style.justifyContent="center",n.style.left="0",n.style.position="fixed",n.style.top="0",n.style.width="100%",n.style.zIndex="2",n.innerHTML='\n\t\t\t\t<ul style="list-style: none;width: max-content;">\n\t\t\t\t\t<li id="normal_opt" style="display: flex;flex-direction: row;align-items: center;justify-content: center; background-color: #151515;margin: 10px 0;border-radius: 15px;padding: 10px;font-size: 1.5em;">\n\t\t\t\t\t\tNormal\n\t\t\t\t\t</li>\n\t\t\t\t\t<li id="correct_opt" style="display: flex;flex-direction: row;align-items: center;justify-content: center; background-color: rgb(69, 65, 190);margin: 10px 0;border-radius: 15px;padding: 10px;font-size: 1.5em;">\n\t\t\t\t\t\tCorrect\n\t\t\t\t\t</li>\n\t\t\t\t\t<li id="positioned_opt" style="display: flex;flex-direction: row;align-items: center;justify-content: center; background-color: rgb(80, 184, 80);margin: 10px 0;border-radius: 15px;padding: 10px;font-size: 1.5em;">\n\t\t\t\t\t\tPositioned\n\t\t\t\t\t</li>\n\t\t\t\t\t<li id="wrong_opt" style="display: flex;flex-direction: row;align-items: center;justify-content: center; background-color: rgb(184, 60, 60);margin: 10px 0;border-radius: 15px;padding: 10px;font-size: 1.5em;">\n\t\t\t\t\t\tWrong\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t',n.querySelector("#normal_opt").addEventListener("click",(i=>{i.stopPropagation(),i.preventDefault(),this.myTries[t].digits[e][1]="normal",n.remove()})),n.querySelector("#correct_opt").addEventListener("click",(i=>{i.stopPropagation(),i.preventDefault(),this.myTries[t].digits[e][1]="correct",n.remove()})),n.querySelector("#positioned_opt").addEventListener("click",(i=>{i.stopPropagation(),i.preventDefault(),this.myTries[t].digits[e][1]="positioned",n.remove()})),n.querySelector("#wrong_opt").addEventListener("click",(i=>{i.stopPropagation(),i.preventDefault(),this.myTries[t].digits[e][1]="wrong",n.remove()})),document.getElementById("app").appendChild(n)},request(){this.socket.emit("new_try",this.inputValue,(({correct:t,positioned:e})=>{this.myTries.unshift({number:this.inputValue,digits:this.inputValue.split("").map((t=>[t,"normal"])),correct:t,positioned:e}),this.inputValue="",this.$emit("end_turn")}))},writer(t){t.stopPropagation(),t.preventDefault(),this.inputValue=String(this.inputValue);const{charCode:e,key:n}=t;47<e&&e<58&&!this.inputValue.includes(n)&&this.inputValue.length<4?this.inputValue+=n:13===e&&(4!==this.inputValue.length?this.invalidToast():this.request())},eraser(t){8===t.keyCode&&(t.stopPropagation(),t.preventDefault(),this.inputValue=this.inputValue.slice(0,this.inputValue.length-1))},invalidToast(){const t=document.getElementById("app").querySelector(".toast");t&&t.remove();const e=document.createElement("div");e.classList.add("toast"),e.innerHTML='\n\t\t\t\t<span class="material-symbols-rounded toast_icon">error</span>\n\t\t\t\t<h3 class="toast_text">Invalid Number</h3>\n\t\t\t\t<div class="toast_timer"></div>\n\t\t\t',document.getElementById("app").appendChild(e),e.style.left=document.getElementById("app").offsetWidth/2-e.offsetWidth/2+"px",setTimeout((()=>{e.remove()}),1500)}},mounted(){const t=this.$refs.input_container.offsetHeight,e=this.$refs.my_number.offsetHeight;this.$el.style.setProperty("--input_height",`${t}px`),this.$el.style.setProperty("--my_number_height",`${e}px`)},name:"GameComponent",props:{started:Boolean,turn:Boolean},watch:{turn(t){t&&this.$refs.input_container.focus()}}},w=n(262);const V=(0,w.A)(C,[["render",x],["__scopeId","data-v-0e9df189"]]);var T=V},130:function(t,e,n){n.d(e,{A:function(){return u}});var i=n(641),s=n(33);const o=(0,i.Fv)('<svg data-v-4402d0a2><g data-v-4402d0a2><path d="M 50,100 A 1,1 0 0 1 50,0" data-v-4402d0a2></path></g><g data-v-4402d0a2><path d="M 50,75 A 1,1 0 0 0 50,-25" data-v-4402d0a2></path></g><defs data-v-4402d0a2><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%" data-v-4402d0a2><stop offset="0%" style="stop-color:#50b850;stop-opacity:1;" data-v-4402d0a2></stop><stop offset="100%" style="stop-color:#4541be;stop-opacity:1;" data-v-4402d0a2></stop></linearGradient></defs></svg>',1),r=[o];function a(t,e,n,o,a,d){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["loader_container",{reduced:n.reduced}])},r,2)}var d={name:"LoaderComponent",props:{reduced:Boolean}},l=n(262);const c=(0,l.A)(d,[["render",a],["__scopeId","data-v-4402d0a2"]]);var u=c}}]);
//# sourceMappingURL=game_component.6f1d1ff7.js.map