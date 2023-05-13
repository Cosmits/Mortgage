(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W="Expected a function",P=0/0,X="[object Symbol]",G=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,z=/^0o[0-7]+$/i,J=parseInt,K=typeof B=="object"&&B&&B.Object===Object&&B,Q=typeof self=="object"&&self&&self.Object===Object&&self,Y=K||Q||Function("return this")(),Z=Object.prototype,ee=Z.toString,ne=Math.max,te=Math.min,j=function(){return Y.Date.now()};function ae(e,n,t){var o,r,l,d,c,u,b=0,S=!1,k=!1,E=!0;if(typeof e!="function")throw new TypeError(W);n=N(n)||0,F(t)&&(S=!!t.leading,k="maxWait"in t,l=k?ne(N(t.maxWait)||0,n):l,E="trailing"in t?!!t.trailing:E);function T(s){var m=o,p=r;return o=r=void 0,b=s,d=e.apply(p,m),d}function q(s){return b=s,c=setTimeout(y,n),S?T(s):d}function H(s){var m=s-u,p=s-b,A=n-m;return k?te(A,l-p):A}function M(s){var m=s-u,p=s-b;return u===void 0||m>=n||m<0||k&&p>=l}function y(){var s=j();if(M(s))return O(s);c=setTimeout(y,H(s))}function O(s){return c=void 0,E&&o?T(s):(o=r=void 0,d)}function R(){c!==void 0&&clearTimeout(c),b=0,o=u=r=c=void 0}function $(){return c===void 0?d:O(j())}function w(){var s=j(),m=M(s);if(o=arguments,r=this,u=s,m){if(c===void 0)return q(u);if(k)return c=setTimeout(y,n),T(u)}return c===void 0&&(c=setTimeout(y,n)),d}return w.cancel=R,w.flush=$,w}function F(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function ie(e){return!!e&&typeof e=="object"}function oe(e){return typeof e=="symbol"||ie(e)&&ee.call(e)==X}function N(e){if(typeof e=="number")return e;if(oe(e))return P;if(F(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=F(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(G,"");var t=V.test(e);return t||z.test(e)?J(e.slice(2),t?2:8):U.test(e)?P:+e}var re=ae;const se=D(re);function L(e,n){const t=e.map(o=>`
        <li class='bankItems' data-id="${o.id}">
          <p>${o.name}</p>
          <div class="bank-btn-wrap">
            <button type="button" class="bank-items-btn">
              <p>Edit</p>
              <svg class="bank-icon"  width="23" height="20">
                <use href="./img/javascript.svg#icon-pencil" width= "23" height="20"></use>
              </svg>
            </button>
            <button type="button" class="bank-items-btn">
              <p>Delete</p>
              <svg class="bank-icon"  width="24" height="20">
                <use href="./img/javascript.svg#icon-bin2" width="24" height="22"></use>
              </svg>
            </button>
          </div>
        </li>`);n.bankList.innerHTML=t.join(" ")}function I(e,n){e.length>5?(n.divRoot.before(n.inputForFindBank),n.inputForFindBank.type="text",n.inputForFindBank.name="findBank",n.inputForFindBank.placeholder="Enter bank name for search ..",n.inputForFindBank.classList.add("js-inputForFindBank","bankItems"),n.inputForFindBank.classList.remove("hidden")):n.inputForFindBank.classList.add("hidden")}function le(e){let n=`
    <svg class="bank-icon"  width="24" height="24">
      <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
    </svg>`;e.addBankBtn.insertAdjacentHTML("afterbegin","<p>Add bank</p>"),e.addBankBtn.setAttribute("class","bank-items-btn"),e.addBankBtn.setAttribute("type","button"),e.addBankBtn.insertAdjacentHTML("beforeend",n),e.bottomContainerBtn.append(e.addBankBtn)}function de(e){let n=`
    <svg class="bank-icon"  width="24" height="24">
      <use href="./img/javascript.svg#icon-bin2" width="24" height="24"></use>
    </svg>`;e.clearBankBtn.insertAdjacentHTML("beforeend",n),e.clearBankBtn.insertAdjacentHTML("afterbegin","<p>Clear</p>"),e.clearBankBtn.classList.add("bank-items-btn"),e.clearBankBtn.classList.add("hidden"),e.clearBankBtn.setAttribute("type","button"),e.bottomContainerBtn.append(e.clearBankBtn)}function ce(){return`
     <div class="js-modal modal" data-modal="createNewBank">
      <button class="backdrop-modal-close js-close-modal" type="button" data-modal="close">
        <svg class="modal-close-btn-svg" width="15" height="15">
          <use href="./img/javascript.svg#icon-cross"></use>
        </svg>
      </button>

      <h2 class="modal-title">Add new bank</h2>

      <form class="form" autocomplete="off">
        <div class="modal-input-wrap">
          <label for="bankName">Bank name</label>
          <input type="text" name="bankName" required />
        </div>

        <div class="modal-input-wrap">
          <label for="interestRate">Interest rate</label>
          <input type="number" name="interestRate" required />
        </div>
        
        <div class="modal-input-wrap">
          <label for="maxLoan">Max loan</label>
          <input type="number" name="maxLoan" required />
        </div>

        <div class="modal-input-wrap">
          <label for="minPayment">Min payment</label>
          <input type="number" name="minPayment" required />
        </div>

        <div class="modal-input-wrap">
          <label for="loanTerm">Loan term</label>
          <input type="number" name="loanTerm" required />
        </div>

        <button class="bank-items-btn modal-add-btn" type="submit">
          <p>Add new bank</p>
          <svg class="bank-icon"  width="24" height="24">
            <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
          </svg>
        </button>
      </form>
    </div>

    <div class="js-modal-overlay overlay"></div>
    `}function me(e){e.modalForm.id="MyIdForModalForm",e.modalForm.innerHTML=ce()}function ue(e){e.preventDefault(),document.querySelector(".js-modal").classList.add("is-show"),document.querySelector(".js-modal-overlay").classList.add("is-show")}const a={divRoot:document.getElementById("root"),inputForFindBank:document.createElement("input"),banksListContainerEl:document.createElement("div"),itemBankContainerEl:document.createElement("div"),bankList:document.createElement("ul"),bottomContainerBtn:document.createElement("div"),addBankBtn:document.createElement("button"),clearBankBtn:document.createElement("button"),modalForm:document.createElement("div")},i=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50},{id:"asdfw342rew4",name:"PrivatBank",interestRate:6,maxLoan:9e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew3",name:"Pivden",interestRate:5,maxLoan:8e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew2",name:"Pivnich",interestRate:4,maxLoan:7e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew1",name:"Moon",interestRate:3,maxLoan:6e5,minPayment:5e3,loanTerm:50}],v=(e,n)=>{try{const t=JSON.stringify(n);localStorage.setItem(e,t)}catch(t){console.error("Set state error: ",t.message)}},fe=e=>{try{const n=JSON.parse(localStorage.getItem(e));return n!==null&&(i.splice(0,i.length),n.length&&n.forEach(t=>i.push(t))),n}catch(n){console.error("Get state error: ",n.message)}};function be(){a.bankList.innerHTML="",a.itemBankContainerEl.innerHTML="",a.clearBankBtn.classList.add("hidden"),i.splice(0,i.length),v("Banks",i),I(i,a)}const g=(e,n)=>n.find(t=>t.id===e),ke=(e,n)=>n.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())),pe=(e,n)=>{const t=g(e,n);return n.indexOf(t)};function ge(e){return`
    <div class="bank-info">
        <p class="bank-info-tex">Bank name: ${e.name}</p>
        <p class="bank-info-tex">Interest rate: ${e.interestRate} %</p>
        <p class="bank-info-tex">Max loan: ${e.maxLoan} uah</p>
        <p class="bank-info-tex">Min payment: ${e.minPayment} uah </p>
        <p class="bank-info-tex">Loan-term: ${e.loanTerm} month</p>
      </div>
    `}function C(e,n){const t=ge(e);n.itemBankContainerEl.innerHTML=t}function ve(e){if(e.target.nodeName==="UL")return;const n=e.target.closest(".bankItems").dataset.id;C(g(n,i),a)}function ye(e){let n=[];const t=e.target.value.trim();t.length>=2?n=ke(t,i):n=i,a.bankList.innerHTML="",L(n,a)}let f={},h="";function Be(e){e.target.closest(".bank-items-btn")!==null&&e.target.closest(".bank-items-btn").innerText==="Edit"&&(h=e.target.closest(".bankItems").dataset.id,f={...g(h,i)},_())}function he(e){e.insertAdjacentHTML("beforeend",x("save","SAVE")),e.insertAdjacentHTML("beforeend",x("exit","EXIT"))}function Le(){const e=document.querySelectorAll(".bank-info-tex"),n=Object.keys(f).slice(1);e.forEach((t,o)=>t.insertAdjacentHTML("beforeend",x(n[o],"Change")))}function x(e,n){return`<button type="button" class="changeBtn" id="${e}">${n}</button>`}function _(){const e=document.querySelector(".bank-info");Le(),he(e),e.addEventListener("click",Ee)}function Ee(e){const n=e.target.closest(".changeBtn");if(n!==null&&e.target.innerText!=="SAVE"&&e.target.innerText!=="EXIT"){const t=n.getAttribute("id");let o=prompt("Введіть нове значення");if(o===null||o==="")return;t!=="name"&&(o=Number(o)),f[t]=o,C(f,a),_()}else e.target.innerText==="SAVE"?(i.splice(i.indexOf(g(h,i)),1,f),a.bankList.innerHTML="",a.itemBankContainerEl.innerHTML="",L(i,a),v("Banks",i)):e.target.innerText==="EXIT"&&(f={...g(h,i)},C(f,a))}function Te(e){if(e.target.closest(".bank-items-btn")!==null&&e.target.closest(".bank-items-btn").innerText==="Delete"){const n=e.target.closest(".bankItems").dataset.id,t=pe(n,i);console.log(t),i.splice(t,1),a.itemBankContainerEl.innerHTML="",v("Banks",i),I(i,a),L(i,a)}}function we(e){e.bankList.children.length>3?e.clearBankBtn.classList.remove("hidden"):e.clearBankBtn.classList.add("hidden")}function je(e){e.preventDefault(),document.querySelector(".js-modal").classList.remove("is-show"),document.querySelector(".js-modal-overlay").classList.remove("is-show")}function Fe(){document.body.addEventListener("keyup",function(e){e.keyCode==27&&(document.querySelector(".js-modal").classList.remove("is-show"),document.querySelector(".js-modal-overlay").classList.remove("is-show"))},!1)}function Ce(){document.querySelector(".js-modal").classList.remove("is-show"),this.classList.remove("is-show")}function xe(e){const{elements:{bankName:n,interestRate:t,maxLoan:o,minPayment:r,loanTerm:l}}=e.target,d={id:String(Date.now()),name:n.value.trim(),interestRate:Number(t.value),maxLoan:Number(o.value),minPayment:Number(r.value),loanTerm:Number(l.value)};i.splice(i.length,0,d),v("Banks",i)}const Ie=new Promise((e,n)=>{fe("Banks")||v("Banks",i),e(!0)});Ie.then(e=>{a.banksListContainerEl.classList.add("banksListContainer"),a.itemBankContainerEl.classList.add("itemBankContainer"),a.bankList.classList.add("bankList"),a.bottomContainerBtn.classList.add("bank-btn-wrap"),a.divRoot.append(a.banksListContainerEl,a.itemBankContainerEl,a.modalForm),a.banksListContainerEl.append(a.bankList,a.bottomContainerBtn),I(i,a),L(i,a),le(a),de(a),we(a),me(a),a.inputForFindBank.addEventListener("input",se(ye,500)),a.bankList.addEventListener("click",ve),a.bankList.addEventListener("click",Be),a.bankList.addEventListener("click",Te),a.addBankBtn.addEventListener("click",ue),a.clearBankBtn.addEventListener("click",be),document.querySelector(".js-close-modal").addEventListener("click",je),document.querySelector(".form").addEventListener("submit",xe),Fe(),document.querySelector(".overlay").addEventListener("click",Ce)});
