(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=e(r);fetch(r.href,c)}})();var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var X="Expected a function",A=0/0,q="[object Symbol]",G=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,z=/^0o[0-7]+$/i,J=parseInt,K=typeof B=="object"&&B&&B.Object===Object&&B,Q=typeof self=="object"&&self&&self.Object===Object&&self,Y=K||Q||Function("return this")(),Z=Object.prototype,nn=Z.toString,tn=Math.max,en=Math.min,T=function(){return Y.Date.now()};function an(n,t,e){var o,r,c,l,d,f,b=0,w=!1,k=!1,y=!0;if(typeof n!="function")throw new TypeError(X);t=P(t)||0,I(e)&&(w=!!e.leading,k="maxWait"in e,c=k?tn(P(e.maxWait)||0,t):c,y="trailing"in e?!!e.trailing:y);function v(s){var u=o,p=r;return o=r=void 0,b=s,l=n.apply(p,u),l}function N(s){return b=s,d=setTimeout(g,t),w?v(s):l}function R(s){var u=s-f,p=s-b,M=t-u;return k?en(M,c-p):M}function S(s){var u=s-f,p=s-b;return f===void 0||u>=t||u<0||k&&p>=c}function g(){var s=T();if(S(s))return O(s);d=setTimeout(g,R(s))}function O(s){return d=void 0,y&&o?v(s):(o=r=void 0,l)}function D(){d!==void 0&&clearTimeout(d),b=0,o=f=r=d=void 0}function _(){return d===void 0?l:O(T())}function E(){var s=T(),u=S(s);if(o=arguments,r=this,f=s,u){if(d===void 0)return N(f);if(k)return d=setTimeout(g,t),v(f)}return d===void 0&&(d=setTimeout(g,t)),l}return E.cancel=D,E.flush=_,E}function I(n){var t=typeof n;return!!n&&(t=="object"||t=="function")}function rn(n){return!!n&&typeof n=="object"}function on(n){return typeof n=="symbol"||rn(n)&&nn.call(n)==q}function P(n){if(typeof n=="number")return n;if(on(n))return A;if(I(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=I(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=n.replace(G,"");var e=V.test(n);return e||z.test(n)?J(n.slice(2),e?2:8):U.test(n)?A:+n}var sn=an;const cn=W(sn);function h(n,t){const e=n.map(o=>`
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
        </li>`);t.bankList.innerHTML=e.join(" ")}function j(n,t){n.length>5?(t.divRoot.before(t.inputForFindBank),t.inputForFindBank.type="text",t.inputForFindBank.name="findBank",t.inputForFindBank.placeholder="Enter bank name for search ..",t.inputForFindBank.classList.add("js-inputForFindBank","bankItems"),t.inputForFindBank.classList.remove("hidden")):t.inputForFindBank.classList.add("hidden")}function dn(n){let t=`
    <svg class="bank-icon"  width="24" height="24">
      <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
    </svg>`;n.addBankBtn.insertAdjacentHTML("afterbegin","<p>Add bank</p>"),n.addBankBtn.setAttribute("class","bank-items-btn"),n.addBankBtn.setAttribute("type","button"),n.addBankBtn.insertAdjacentHTML("beforeend",t),n.bottomContainerBtn.append(n.addBankBtn)}function ln(n){let t=`
    <svg class="bank-icon"  width="24" height="24">
      <use href="./img/javascript.svg#icon-bin2" width="24" height="24"></use>
    </svg>`;n.clearBankBtn.insertAdjacentHTML("beforeend",t),n.clearBankBtn.setAttribute("type","button"),n.clearBankBtn.insertAdjacentHTML("afterbegin","<p>Clear</p>"),n.clearBankBtn.classList.add("bank-items-btn"),n.clearBankBtn.classList.add("hidden"),n.bottomContainerBtn.append(n.clearBankBtn)}function un(n){n.bankList.children.length>3?n.clearBankBtn.classList.remove("hidden"):n.clearBankBtn.classList.add("hidden")}const a={divRoot:document.getElementById("root"),inputForFindBank:document.createElement("input"),banksListContainerEl:document.createElement("div"),itemBankContainerEl:document.createElement("div"),bankList:document.createElement("ul"),bottomContainerBtn:document.createElement("div"),addBankBtn:document.createElement("button"),clearBankBtn:document.createElement("button")},i=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50},{id:"asdfw342rew4",name:"PrivatBank",interestRate:6,maxLoan:9e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew3",name:"Pivden",interestRate:5,maxLoan:8e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew2",name:"Pivnich",interestRate:4,maxLoan:7e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew1",name:"Moon",interestRate:3,maxLoan:6e5,minPayment:5e3,loanTerm:50}],L=(n,t)=>{try{const e=JSON.stringify(t);localStorage.setItem(n,e)}catch(e){console.error("Set state error: ",e.message)}},fn=n=>{try{const t=JSON.parse(localStorage.getItem(n));return t!==null&&(i.splice(0,i.length),t.length&&t.forEach(e=>i.push(e))),t}catch(t){console.error("Get state error: ",t.message)}};function mn(){a.bankList.innerHTML="",a.itemBankContainerEl.innerHTML="",a.clearBankBtn.classList.add("hidden"),i.splice(0,i.length),L("Banks",i),j(i,a)}const F=(n,t)=>t.find(e=>e.id===n),bn=(n,t)=>t.filter(e=>e.name.toLowerCase().includes(n.toLowerCase())),kn=(n,t)=>{const e=F(n,t);return t.indexOf(e)};function pn(n){return`
    <div class="bank-info">
        <p class="bank-info-tex">name: ${n.name}</p>
        <p class="bank-info-tex">interest rate: ${n.interestRate} %</p>
        <p class="bank-info-tex">max loan: ${n.maxLoan} uah</p>
        <p class="bank-info-tex">min payment: ${n.minPayment} uah </p>
        <p class="bank-info-tex">loan-term: ${n.loanTerm} month</p>
      </div>
    `}function x(n,t){const e=pn(n);t.itemBankContainerEl.innerHTML=e}function gn(n){if(n.target.nodeName==="UL")return;const t=n.target.closest(".bankItems").dataset.id;x(F(t,i),a)}function Bn(n){let t=[];const e=n.target.value.trim();e.length>2?t=bn(e,i):t=i,a.bankList.innerHTML="",h(t,a)}let m={},H="";function hn(n){H=n.target.closest(".bankItems").dataset.id,m=F(H,i),n.target.closest(".bank-items-btn")!==null&&n.target.closest(".bank-items-btn").innerText==="Edit"&&$()}function Ln(n){n.insertAdjacentHTML("beforeend",C("save","SAVE")),n.insertAdjacentHTML("beforeend",C("exit","EXIT"))}function yn(){const n=document.querySelectorAll(".bank-info-tex"),t=Object.keys(m).slice(1);n.forEach((e,o)=>e.insertAdjacentHTML("beforeend",C(t[o],"Change")))}function C(n,t){return`<button type="button" class="changeBtn" id="${n}">${t}</button>`}function $(){const n=document.querySelector(".bank-info");yn(),Ln(n),n.addEventListener("click",vn)}function vn(n){const t=n.target.closest(".changeBtn");if(t!==null&&n.target.innerText!=="SAVE"&&n.target.innerText!=="EXIT"){const e=t.getAttribute("id");let o=prompt("Введіть нове значення");if(o===null)return;e!=="name"&&(o=Number(o)),m[e]=o,x(m,a),$()}else n.target.innerText==="SAVE"?(i.splice(i.indexOf(m),1,m),a.bankList.textContent="",a.itemBankContainerEl.textContent="",h(i,a),L("Banks",i)):n.target.innerText==="EXIT"&&x(m,a)}function En(n){if(n.target.closest(".bank-items-btn")!==null&&n.target.closest(".bank-items-btn").innerText==="Delete"){const t=n.target.closest(".bankItems").dataset.id,e=kn(t,i);console.log(e),i.splice(e,1),a.itemBankContainerEl.innerHTML="",L("Banks",i),j(i,a),h(i,a)}}a.banksListContainerEl.classList.add("banksListContainer");a.itemBankContainerEl.classList.add("itemBankContainer");a.bankList.classList.add("bankList");a.bottomContainerBtn.classList.add("bank-btn-wrap");a.divRoot.append(a.banksListContainerEl,a.itemBankContainerEl);a.banksListContainerEl.append(a.bankList,a.bottomContainerBtn);const Tn=fn("Banks");Tn||L("Banks",i);j(i,a);h(i,a);dn(a);ln(a);un(a);a.inputForFindBank.addEventListener("input",cn(Bn,500));a.bankList.addEventListener("click",gn);a.bankList.addEventListener("click",hn);a.bankList.addEventListener("click",En);a.clearBankBtn.addEventListener("click",mn);
