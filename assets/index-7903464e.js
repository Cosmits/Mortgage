(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(r){if(r.ep)return;r.ep=!0;const d=n(r);fetch(r.href,d)}})();var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W="Expected a function",P=0/0,X="[object Symbol]",G=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,z=/^0o[0-7]+$/i,J=parseInt,K=typeof h=="object"&&h&&h.Object===Object&&h,Q=typeof self=="object"&&self&&self.Object===Object&&self,Y=K||Q||Function("return this")(),Z=Object.prototype,ee=Z.toString,te=Math.max,ne=Math.min,j=function(){return Y.Date.now()};function ae(e,t,n){var o,r,d,l,c,u,b=0,S=!1,k=!1,E=!0;if(typeof e!="function")throw new TypeError(W);t=N(t)||0,F(n)&&(S=!!n.leading,k="maxWait"in n,d=k?te(N(n.maxWait)||0,t):d,E="trailing"in n?!!n.trailing:E);function T(s){var m=o,p=r;return o=r=void 0,b=s,l=e.apply(p,m),l}function q(s){return b=s,c=setTimeout(B,t),S?T(s):l}function H(s){var m=s-u,p=s-b,A=t-m;return k?ne(A,d-p):A}function M(s){var m=s-u,p=s-b;return u===void 0||m>=t||m<0||k&&p>=d}function B(){var s=j();if(M(s))return O(s);c=setTimeout(B,H(s))}function O(s){return c=void 0,E&&o?T(s):(o=r=void 0,l)}function R(){c!==void 0&&clearTimeout(c),b=0,o=u=r=c=void 0}function $(){return c===void 0?l:O(j())}function w(){var s=j(),m=M(s);if(o=arguments,r=this,u=s,m){if(c===void 0)return q(u);if(k)return c=setTimeout(B,t),T(u)}return c===void 0&&(c=setTimeout(B,t)),l}return w.cancel=R,w.flush=$,w}function F(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ie(e){return!!e&&typeof e=="object"}function oe(e){return typeof e=="symbol"||ie(e)&&ee.call(e)==X}function N(e){if(typeof e=="number")return e;if(oe(e))return P;if(F(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=F(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(G,"");var n=V.test(e);return n||z.test(e)?J(e.slice(2),n?2:8):U.test(e)?P:+e}var re=ae;const se=D(re);function L(e,t){const n=e.map(o=>`
        <li class='bankItems' data-id="${o.id}">
          <p>${o.name}</p>
          <div class="bank-btn-wrap">
            <button type="button" class="bank-items-btn">
              <p>Edit</p>
              <svg class="bank-icon"  width="21" height="20">
                <use href="./img/javascript.svg#icon-pencil" width= "21" height="20"></use>
              </svg>
            </button>
            <button type="button" class="bank-items-btn">
              <p>Delete</p>
              <svg class="bank-icon"  width="23" height="20">
                <use href="./img/javascript.svg#icon-bin2" width="23" height="20"></use>
              </svg>
            </button>
          </div>
        </li>`);t.bankList.innerHTML=n.join(" ")}function I(e,t){e.length>5?(t.divRoot.before(t.inputForFindBank),t.inputForFindBank.type="text",t.inputForFindBank.name="findBank",t.inputForFindBank.placeholder="Enter bank name for search ..",t.inputForFindBank.classList.add("js-inputForFindBank","bankItems"),t.inputForFindBank.classList.remove("hidden")):t.inputForFindBank.classList.add("hidden")}function de(e){let t=`
    <svg class="bank-icon"  width="23" height="22">
      <use href="./img/javascript.svg#icon-library" width="23" height="22"></use>
    </svg>`;e.addBankBtn.insertAdjacentHTML("afterbegin","<p>Add bank</p>"),e.addBankBtn.setAttribute("class","bank-items-btn"),e.addBankBtn.classList.add("class","add-btn-shadow"),e.addBankBtn.setAttribute("type","button"),e.addBankBtn.insertAdjacentHTML("beforeend",t),e.bottomContainerBtn.append(e.addBankBtn)}function le(e){let t=`
    <svg class="bank-icon"  width="23" height="24">
      <use href="./img/javascript.svg#icon-bin2" width="23" height="20"></use>
    </svg>`;e.clearBankBtn.insertAdjacentHTML("beforeend",t),e.clearBankBtn.insertAdjacentHTML("afterbegin","<p>Clear</p>"),e.clearBankBtn.classList.add("bank-items-btn","add-btn-shadow"),e.clearBankBtn.classList.add("hidden"),e.clearBankBtn.setAttribute("type","button"),e.bottomContainerBtn.append(e.clearBankBtn)}function ce(){return`
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
    `}function me(e){e.modalForm.id="MyIdForModalForm",e.modalForm.innerHTML=ce()}function ue(e){e.preventDefault(),document.querySelector(".js-modal").classList.add("is-show"),document.querySelector(".js-modal-overlay").classList.add("is-show")}const a={divRoot:document.getElementById("root"),inputForFindBank:document.createElement("input"),banksListContainerEl:document.createElement("div"),itemBankContainerEl:document.createElement("div"),bankList:document.createElement("ul"),bottomContainerBtn:document.createElement("div"),addBankBtn:document.createElement("button"),clearBankBtn:document.createElement("button"),modalForm:document.createElement("div")},i=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50},{id:"asdfw342rew4",name:"PrivatBank",interestRate:6,maxLoan:9e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew3",name:"Pivden",interestRate:5,maxLoan:8e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew2",name:"Pivnich",interestRate:4,maxLoan:7e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew1",name:"Moon",interestRate:3,maxLoan:6e5,minPayment:5e3,loanTerm:50}],v=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(n){console.error("Set state error: ",n.message)}},fe=e=>{try{const t=JSON.parse(localStorage.getItem(e));return t!==null&&(i.splice(0,i.length),t.length&&t.forEach(n=>i.push(n))),t}catch(t){console.error("Get state error: ",t.message)}};function be(){a.bankList.innerHTML="",a.itemBankContainerEl.innerHTML="",a.clearBankBtn.classList.add("hidden"),i.splice(0,i.length),v("Banks",i),I(i,a)}const g=(e,t)=>t.find(n=>n.id===e),ke=(e,t)=>t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase())),pe=(e,t)=>{const n=g(e,t);return t.indexOf(n)};function ge(e){return`
    <div class="bank-info">
        <p class="bank-info-text">Bank name: ${e.name}</p>
        <p class="bank-info-text">Interest rate: ${e.interestRate} %</p>
        <p class="bank-info-text">Max loan: ${e.maxLoan} uah</p>
        <p class="bank-info-text">Min payment: ${e.minPayment} uah </p>
        <p class="bank-info-text">Loan-term: ${e.loanTerm} month</p>
      </div>
    `}function C(e,t){const n=ge(e);t.itemBankContainerEl.innerHTML=n}function ve(e){if(e.target.nodeName==="UL")return;const t=e.target.closest(".bankItems").dataset.id;C(g(t,i),a)}function Be(e){let t=[];const n=e.target.value.trim();n.length>=2?t=ke(n,i):t=i,a.bankList.innerHTML="",L(t,a)}let f={},y="";function he(e){e.target.closest(".bank-items-btn")!==null&&e.target.closest(".bank-items-btn").innerText==="Edit"&&(y=e.target.closest(".bankItems").dataset.id,f={...g(y,i)},_())}function ye(e){e.insertAdjacentHTML("beforeend",x("save","SAVE")),e.insertAdjacentHTML("beforeend",x("exit","EXIT"))}function Le(){const e=document.querySelectorAll(".bank-info-text"),t=Object.keys(f).slice(1);e.forEach((n,o)=>n.insertAdjacentHTML("beforeend",x(t[o],"Change")))}function x(e,t){return`<button type="button" class="changeBtn" id="${e}">${t}</button>`}function _(){const e=document.querySelector(".bank-info");Le(),ye(e),e.addEventListener("click",Ee)}function Ee(e){const t=e.target.closest(".changeBtn");if(t!==null&&e.target.innerText!=="SAVE"&&e.target.innerText!=="EXIT"){const n=t.getAttribute("id");let o=prompt("Введіть нове значення");if(o===null||o==="")return;n!=="name"&&(o=Number(o)),f[n]=o,C(f,a),_()}else e.target.innerText==="SAVE"?(i.splice(i.indexOf(g(y,i)),1,f),a.bankList.innerHTML="",a.itemBankContainerEl.innerHTML="",L(i,a),v("Banks",i)):e.target.innerText==="EXIT"&&(f={...g(y,i)},C(f,a))}function Te(e){if(e.target.closest(".bank-items-btn")!==null&&e.target.closest(".bank-items-btn").innerText==="Delete"){const t=e.target.closest(".bankItems").dataset.id,n=pe(t,i);console.log(n),i.splice(n,1),a.itemBankContainerEl.innerHTML="",v("Banks",i),I(i,a),L(i,a)}}function we(e){e.bankList.children.length>3?e.clearBankBtn.classList.remove("hidden"):e.clearBankBtn.classList.add("hidden")}function je(e){e.preventDefault(),document.querySelector(".js-modal").classList.remove("is-show"),document.querySelector(".js-modal-overlay").classList.remove("is-show")}function Fe(){document.body.addEventListener("keyup",function(e){e.keyCode==27&&(document.querySelector(".js-modal").classList.remove("is-show"),document.querySelector(".js-modal-overlay").classList.remove("is-show"))},!1)}function Ce(){document.querySelector(".js-modal").classList.remove("is-show"),this.classList.remove("is-show")}function xe(e){const{elements:{bankName:t,interestRate:n,maxLoan:o,minPayment:r,loanTerm:d}}=e.target,l={id:String(Date.now()),name:t.value.trim(),interestRate:Number(n.value),maxLoan:Number(o.value),minPayment:Number(r.value),loanTerm:Number(d.value)};i.splice(i.length,0,l),v("Banks",i)}const Ie=new Promise((e,t)=>{fe("Banks")||v("Banks",i),e(!0)});Ie.then(e=>{a.banksListContainerEl.classList.add("banksListContainer"),a.itemBankContainerEl.classList.add("itemBankContainer"),a.bankList.classList.add("bankList"),a.bottomContainerBtn.classList.add("bank-btn-wrap"),a.divRoot.append(a.banksListContainerEl,a.itemBankContainerEl,a.modalForm),a.banksListContainerEl.append(a.bankList,a.bottomContainerBtn),I(i,a),L(i,a),de(a),le(a),we(a),me(a),a.inputForFindBank.addEventListener("input",se(Be,500)),a.bankList.addEventListener("click",ve),a.bankList.addEventListener("click",he),a.bankList.addEventListener("click",Te),a.addBankBtn.addEventListener("click",ue),a.clearBankBtn.addEventListener("click",be),document.querySelector(".js-close-modal").addEventListener("click",je),document.querySelector(".form").addEventListener("submit",xe),Fe(),document.querySelector(".overlay").addEventListener("click",Ce)});
