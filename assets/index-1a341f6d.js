(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(i){if(i.ep)return;i.ep=!0;const d=a(i);fetch(i.href,d)}})();var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U="Expected a function",_=0/0,V="[object Symbol]",z=/^\s+|\s+$/g,J=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,Y=parseInt,Z=typeof L=="object"&&L&&L.Object===Object&&L,ee=typeof self=="object"&&self&&self.Object===Object&&self,ne=Z||ee||Function("return this")(),te=Object.prototype,ae=te.toString,oe=Math.max,re=Math.min,S=function(){return ne.Date.now()};function ie(e,n,a){var r,i,d,c,l,f,p=0,A=!1,k=!1,x=!0;if(typeof e!="function")throw new TypeError(U);n=H(n)||0,w(a)&&(A=!!a.leading,k="maxWait"in a,d=k?oe(H(a.maxWait)||0,n):d,x="trailing"in a?!!a.trailing:x);function T(s){var m=r,g=i;return r=i=void 0,p=s,c=e.apply(g,m),c}function $(s){return p=s,l=setTimeout(v,n),A?T(s):c}function D(s){var m=s-f,g=s-p,N=n-m;return k?re(N,d-g):N}function O(s){var m=s-f,g=s-p;return f===void 0||m>=n||m<0||k&&g>=d}function v(){var s=S();if(O(s))return P(s);l=setTimeout(v,D(s))}function P(s){return l=void 0,x&&r?T(s):(r=i=void 0,c)}function W(){l!==void 0&&clearTimeout(l),p=0,r=f=i=l=void 0}function X(){return l===void 0?c:P(S())}function I(){var s=S(),m=O(s);if(r=arguments,i=this,f=s,m){if(l===void 0)return $(f);if(k)return l=setTimeout(v,n),T(f)}return l===void 0&&(l=setTimeout(v,n)),c}return I.cancel=W,I.flush=X,I}function w(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function se(e){return!!e&&typeof e=="object"}function de(e){return typeof e=="symbol"||se(e)&&ae.call(e)==V}function H(e){if(typeof e=="number")return e;if(de(e))return _;if(w(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=w(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(z,"");var a=K.test(e);return a||Q.test(e)?Y(e.slice(2),a?2:8):J.test(e)?_:+e}var ce=ie;const le=G(ce);function E(e,n){const a=e.map(r=>`
        <li class='bankItems' data-id="${r.id}">
          <p>${r.name}</p>
          <div class="bank-btn-wrap">
            <button type="button" class="bank-items-btn">
              <p>Edit</p>
              <svg class="bank-icon"  width="20" height="18">
                <use href="./img/javascript.svg#icon-pencil" width= "20" height="18"></use>
              </svg>
            </button>
            <button type="button" class="bank-items-btn">
              <p>Delete</p>
              <svg class="bank-icon"  width="20" height="18">
                <use href="./img/javascript.svg#icon-bin2" width="20" height="18"></use>
              </svg>
            </button>
          </div>
        </li>`);n.bankList.innerHTML=a.join(" ")}function F(e,n){e.length>5?(n.divRoot.before(n.inputForFindBank),n.inputForFindBank.type="text",n.inputForFindBank.name="findBank",n.inputForFindBank.placeholder="Enter bank name for search ..",n.inputForFindBank.classList.add("js-inputForFindBank","bankItems"),n.inputForFindBank.classList.remove("hidden")):n.inputForFindBank.classList.add("hidden")}function me(e){let n=`
    <svg class="bank-icon"  width="21" height="20">
      <use href="./img/javascript.svg#icon-library" width="21" height="20"></use>
    </svg>`;e.addBankBtn.insertAdjacentHTML("afterbegin","<p>Add bank</p>"),e.addBankBtn.setAttribute("class","bank-items-btn"),e.addBankBtn.classList.add("class","add-btn-shadow"),e.addBankBtn.setAttribute("type","button"),e.addBankBtn.insertAdjacentHTML("beforeend",n),e.bottomContainerBtn.append(e.addBankBtn)}function ue(e){let n=`
    <svg class="bank-icon"  width="20" height="18">
      <use href="./img/javascript.svg#icon-bin2" width="20" height="18"></use>
    </svg>`;e.clearBankBtn.insertAdjacentHTML("beforeend",n),e.clearBankBtn.insertAdjacentHTML("afterbegin","<p>Clear</p>"),e.clearBankBtn.classList.add("bank-items-btn","add-btn-shadow"),e.clearBankBtn.classList.add("hidden"),e.clearBankBtn.setAttribute("type","button"),e.bottomContainerBtn.append(e.clearBankBtn)}function fe(){return`
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
          <input type="text" name="bankName" minlength="3" required />
        </div>

        <div class="modal-input-wrap">
          <label for="interestRate">Interest rate</label>
          <input type="number" name="interestRate" min="5" max="50" required />
        </div>
        
        <div class="modal-input-wrap">
          <label for="maxLoan">Max loan</label>
          <input type="number" name="maxLoan" min="5000" max="450000" required />
        </div>

        <div class="modal-input-wrap">
          <label for="minPayment">Min payment</label>
          <input type="number" name="minPayment" min="500" max="50000" required />
        </div>

        <div class="modal-input-wrap">
          <label for="loanTerm">Loan term</label>
          <input type="number" name="loanTerm" min="3" max="60" required />
        </div>

        <button class="bank-items-btn modal-add-btn" type="submit">
          <p>Add new bank</p>
          <svg class="bank-icon"  width="24" height="22">
            <use href="./img/javascript.svg#icon-library" width="24" height="22"></use>
          </svg>
        </button>
      </form>
    </div>

    <div class="js-modal-overlay overlay"></div>
    `}function be(e){e.modalForm.id="MyIdForModalForm",e.modalForm.innerHTML=fe()}function pe(e){e.preventDefault(),document.querySelector(".js-modal").classList.add("is-show"),document.querySelector(".js-modal-overlay").classList.add("is-show")}const t={divRoot:document.getElementById("root"),inputForFindBank:document.createElement("input"),banksListContainerEl:document.createElement("div"),itemBankContainerEl:document.createElement("div"),bankList:document.createElement("ul"),bottomContainerBtn:document.createElement("div"),addBankBtn:document.createElement("button"),clearBankBtn:document.createElement("button"),modalForm:document.createElement("div")},o=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50},{id:"asdfw342rew4",name:"PrivatBank",interestRate:6,maxLoan:9e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew3",name:"Pivden",interestRate:5,maxLoan:8e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew2",name:"Pivnich",interestRate:4,maxLoan:7e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew1",name:"Moon",interestRate:3,maxLoan:6e5,minPayment:5e3,loanTerm:50}],y=(e,n)=>{try{const a=JSON.stringify(n);localStorage.setItem(e,a)}catch(a){console.error("Set state error: ",a.message)}},ke=e=>{try{const n=JSON.parse(localStorage.getItem(e));return n!==null&&(o.splice(0,o.length),n.length&&n.forEach(a=>o.push(a))),n}catch(n){console.error("Get state error: ",n.message)}};function ge(){t.bankList.innerHTML="",t.itemBankContainerEl.innerHTML="",t.clearBankBtn.classList.add("hidden"),o.splice(0,o.length),y("Banks",o),F(o,t)}const h=(e,n)=>n.find(a=>a.id===e),he=(e,n)=>n.filter(a=>a.name.toLowerCase().includes(e.toLowerCase())),ye=(e,n)=>{const a=h(e,n);return n.indexOf(a)};function ve(e){return`
    <div class="bank-info">
        <p class="bank-info-text">Bank name: ${e.name}</p>
        <p class="bank-info-text">Interest rate: ${e.interestRate} %</p>
        <p class="bank-info-text">Max loan: ${e.maxLoan} uah</p>
        <p class="bank-info-text">Min payment: ${e.minPayment} uah </p>
        <p class="bank-info-text">Loan-term: ${e.loanTerm} month</p>
      </div>
    `}function q(e,n){const a=ve(e);n.itemBankContainerEl.innerHTML=a}function Le(e){if(e.target.nodeName==="UL")return;const n=e.target.closest(".bankItems");if(!n)return;const a=n.dataset.id;Be(n),q(h(a,o),t)}function Be(e){document.querySelectorAll(".bankItems").forEach(a=>{a.classList.remove("selected-bank")}),e.classList.add("selected-bank")}function Me(e){let n=[];const a=e.target.value.trim();a.length>=2?n=he(a,o):n=o,t.bankList.innerHTML="",E(n,t)}let b={},B="",u="",M="";function Ee(e){e.target.closest(".bank-items-btn")!==null&&e.target.closest(".bank-items-btn").innerText==="Edit"&&(C(),B=e.target.closest(".bankItems").dataset.id,b={...h(B,o)},R(),je())}function xe(e){e.insertAdjacentHTML("beforeend",j("save","SAVE")),e.insertAdjacentHTML("beforeend",j("exit","EXIT"))}function Te(){const e=document.querySelectorAll(".bank-info-text"),n=Object.keys(b).slice(1);e.forEach((a,r)=>a.insertAdjacentHTML("beforeend",j(n[r],"Change")))}function j(e,n){return`<button type="button" class="changeBtn " id="${e}">${n}</button>`}function R(){const e=document.querySelector(".bank-info");Te(),xe(e),e.addEventListener("click",Ie)}function Ie(e){const n=e.target.closest(".changeBtn");if(n!==null&&e.target.innerText!=="SAVE"&&e.target.innerText!=="EXIT"){switch(M=n.getAttribute("id"),t.changeModalInput=document.querySelector(".change-modal-input"),t.changeModalText=document.querySelector(".change-modal-text"),M){case"name":t.changeModalText.innerText="Enter bank's name:",t.changeModalInput.type="text",t.changeModalInput.minlength=3,t.changeModalInput.placeholder="Bank name";break;case"interestRate":t.changeModalText.innerText="Enter interest rate:",t.changeModalInput.type="number",t.changeModalInput.min=5,t.changeModalInput.max=50,t.changeModalInput.placeholder="5...50";break;case"maxLoan":t.changeModalText.innerText="Enter max loan:",t.changeModalInput.type="number",t.changeModalInput.min="5000",t.changeModalInput.max="450000",t.changeModalInput.placeholder="5000...450000";break;case"minPayment":t.changeModalText.innerText="Enter min payment:",t.changeModalInput.type="number",t.changeModalInput.min="500",t.changeModalInput.max="50000",t.changeModalInput.placeholder="500...50000";break;case"loanTerm":t.changeModalText.innerText="Enter loan term:",t.changeModalInput.type="number",t.changeModalInput.min="3",t.changeModalInput.max="60",t.changeModalInput.placeholder="6...60";break;default:t.changeModalInput.type="text";break}we(),document.addEventListener("keydown",r=>{r.key==="Escape"&&(document.querySelector(".backdrop").classList.add("is-hidden"),document.querySelector(".change-modal-form").reset())}),document.querySelector(".modal-close").addEventListener("click",r=>{r.preventDefault(),document.querySelector(".backdrop").classList.add("is-hidden"),document.querySelector(".change-modal-form").reset()})}else e.target.innerText==="SAVE"?(o.splice(o.indexOf(h(B,o)),1,b),t.bankList.innerHTML="",t.itemBankContainerEl.innerHTML="",E(o,t),y("Banks",o),C()):e.target.innerText==="EXIT"&&(b={...h(B,o)},q(b,t),C())}function Se(){u===null||u===""||u===void 0||(M!=="name"&&(u=Number(u)),b[M]=u,q(b,t),R())}function C(){const e=document.querySelector(".backdrop");e!==null&&e.remove()}function we(){document.querySelector(".backdrop").classList.remove("is-hidden")}function je(){document.body.insertAdjacentHTML("beforeend",Ce()),document.querySelector(".backdrop").addEventListener("submit",Fe),document.querySelector(".change-modal-input").addEventListener("blur",e=>{u=e.target.value}),document.querySelector(".change-modal-form").lastElementChild.addEventListener("click",e=>{u=document.querySelector(".change-modal-input").value,Se()})}function Ce(){return`
  <div class="backdrop is-hidden">
    <div class="change-modal">
      <button type="button" class="modal-close">
        <svg class="modal-button" width="8" height="8">
          <use href="./img/javascript.svg#icon-cross"></use>
        </svg>
      </button>
      <form class="change-modal-form">
        <label for="name"
          ><span class="change-modal-text">Enter new data:</span>
        </label>
        <input class="change-modal-input" type="text" name="name" id="name" required />
        <button class="change-modal-ok" type="submit">OK</button>
      </form>
    </div>
  </div>`}function Fe(e){e.preventDefault();const n=document.querySelector(".backdrop"),a=document.querySelector(".modal-close"),r=document.querySelector(".change-modal-form");(e.target===n||e.target===a||e.target===r)&&(n.classList.add("is-hidden"),document.querySelector(".change-modal-form").reset())}function qe(e){if(e.target.closest(".bank-items-btn")!==null&&e.target.closest(".bank-items-btn").innerText==="Delete"){const n=e.target.closest(".bankItems").dataset.id,a=ye(n,o);console.log(a),o.splice(a,1),t.itemBankContainerEl.innerHTML="",y("Banks",o),F(o,t),E(o,t)}}function Ae(e){e.bankList.children.length>3?e.clearBankBtn.classList.remove("hidden"):e.clearBankBtn.classList.add("hidden")}function Oe(e){e.preventDefault(),document.querySelector(".js-modal").classList.remove("is-show"),document.querySelector(".js-modal-overlay").classList.remove("is-show")}function Pe(){document.body.addEventListener("keyup",function(e){e.keyCode==27&&(document.querySelector(".js-modal").classList.remove("is-show"),document.querySelector(".js-modal-overlay").classList.remove("is-show"))},!1)}function Ne(){document.querySelector(".js-modal").classList.remove("is-show"),this.classList.remove("is-show")}function _e(e){const{elements:{bankName:n,interestRate:a,maxLoan:r,minPayment:i,loanTerm:d}}=e.target,c={id:String(Date.now()),name:n.value.trim(),interestRate:Number(a.value),maxLoan:Number(r.value),minPayment:Number(i.value),loanTerm:Number(d.value)};o.splice(o.length,0,c),y("Banks",o)}const He=new Promise((e,n)=>{ke("Banks")||y("Banks",o),e(!0)});He.then(e=>{t.banksListContainerEl.classList.add("banksListContainer"),t.itemBankContainerEl.classList.add("itemBankContainer"),t.bankList.classList.add("bankList"),t.bottomContainerBtn.classList.add("bank-btn-wrap"),t.divRoot.append(t.banksListContainerEl,t.itemBankContainerEl,t.modalForm),t.banksListContainerEl.append(t.bankList,t.bottomContainerBtn),F(o,t),E(o,t),me(t),ue(t),Ae(t),be(t),t.inputForFindBank.addEventListener("input",le(Me,500)),t.bankList.addEventListener("click",Le),t.bankList.addEventListener("click",Ee),t.bankList.addEventListener("click",qe),t.addBankBtn.addEventListener("click",pe),t.clearBankBtn.addEventListener("click",ge),document.querySelector(".js-close-modal").addEventListener("click",Oe),document.querySelector(".form").addEventListener("submit",_e),Pe(),document.querySelector(".overlay").addEventListener("click",Ne)});
