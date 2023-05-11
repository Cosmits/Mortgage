(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var D="Expected a function",O=0/0,W="[object Symbol]",X=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,V=/^0o[0-7]+$/i,G=parseInt,K=typeof B=="object"&&B&&B.Object===Object&&B,z=typeof self=="object"&&self&&self.Object===Object&&self,J=K||z||Function("return this")(),Q=Object.prototype,Y=Q.toString,Z=Math.max,nn=Math.min,v=function(){return J.Date.now()};function tn(n,t,e){var r,a,s,d,c,f,b=0,I=!1,k=!1,L=!0;if(typeof n!="function")throw new TypeError(D);t=A(t)||0,E(e)&&(I=!!e.leading,k="maxWait"in e,s=k?Z(A(e.maxWait)||0,t):s,L="trailing"in e?!!e.trailing:L);function h(o){var u=r,p=a;return r=a=void 0,b=o,d=n.apply(p,u),d}function $(o){return b=o,c=setTimeout(g,t),I?h(o):d}function N(o){var u=o-f,p=o-b,F=t-u;return k?nn(F,s-p):F}function j(o){var u=o-f,p=o-b;return f===void 0||u>=t||u<0||k&&p>=s}function g(){var o=v();if(j(o))return w(o);c=setTimeout(g,N(o))}function w(o){return c=void 0,L&&r?h(o):(r=a=void 0,d)}function R(){c!==void 0&&clearTimeout(c),b=0,r=f=a=c=void 0}function H(){return c===void 0?d:w(v())}function y(){var o=v(),u=j(o);if(r=arguments,a=this,f=o,u){if(c===void 0)return $(f);if(k)return c=setTimeout(g,t),h(f)}return c===void 0&&(c=setTimeout(g,t)),d}return y.cancel=R,y.flush=H,y}function E(n){var t=typeof n;return!!n&&(t=="object"||t=="function")}function en(n){return!!n&&typeof n=="object"}function an(n){return typeof n=="symbol"||en(n)&&Y.call(n)==W}function A(n){if(typeof n=="number")return n;if(an(n))return O;if(E(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=E(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=n.replace(X,"");var e=U.test(n);return e||V.test(n)?G(n.slice(2),e?2:8):q.test(n)?O:+n}var rn=tn;const on=_(rn);function C(n,t){const e=n.map(r=>`
        <li class='bankItems' data-id="${r.id}">
          <p>${r.name}</p>
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
        </li>`);t.bankList.insertAdjacentHTML("beforeend",e.join(" "))}function sn(n,t){n.length>5&&(t.divRoot.before(t.inputForFindBank),t.inputForFindBank.type="text",t.inputForFindBank.name="findBank",t.inputForFindBank.placeholder="Enter bank name for search ..",t.inputForFindBank.classList.add("js-inputForFindBank","bankItems"))}function cn(n){let t=`
    <svg class="bank-icon"  width="24" height="24">
      <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
    </svg>`;n.addBankBtn.insertAdjacentHTML("afterbegin","<p>Add bank</p>"),n.addBankBtn.setAttribute("class","bank-items-btn"),n.addBankBtn.setAttribute("type","button"),n.addBankBtn.insertAdjacentHTML("beforeend",t),n.banksListContainerEl.append(n.addBankBtn)}function dn(n){n.clearBankBtn.textContent="Clear",n.clearBankBtn.classList.add("bank-items"),n.clearBankBtn.classList.add("hidden"),n.banksListContainerEl.append(n.clearBankBtn)}function ln(n){n.bankList.children.length>3?n.clearBankBtn.classList.remove("hidden"):n.clearBankBtn.classList.add("hidden")}function un(n){const t=n.bankList;t.innerHTML="",n.clearBankBtn.classList.add("hidden")}const l=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50},{id:"asdfw342rew4",name:"PrivatBank",interestRate:6,maxLoan:9e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew3",name:"Pivden",interestRate:5,maxLoan:8e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew2",name:"Pivnich",interestRate:4,maxLoan:7e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew1",name:"Moon",interestRate:3,maxLoan:6e5,minPayment:5e3,loanTerm:50}],i={divRoot:document.getElementById("root"),banksListContainerEl:document.createElement("div"),itemBankContainerEl:document.createElement("div"),bankList:document.createElement("ul"),addBankBtn:document.createElement("button"),clearBankBtn:document.createElement("button"),inputForFindBank:document.createElement("input")},P=(n,t)=>t.find(e=>e.id===n),fn=(n,t)=>t.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));function mn(n){return`
    <div class="bank-info">
        <p class="bank-info-tex">name: ${n.name}</p>
        <p class="bank-info-tex">interest rate: ${n.interestRate} %</p>
        <p class="bank-info-tex">max loan: ${n.maxLoan} uah</p>
        <p class="bank-info-tex">min payment: ${n.minPayment} uah </p>
        <p class="bank-info-tex">loan-term: ${n.loanTerm} month</p>
      </div>
    `}function T(n,t){const e=mn(n);t.itemBankContainerEl.innerHTML=e}function bn(n){if(n.target.nodeName==="UL")return;const t=n.target.textContent.toLowerCase();t.includes("edit")&&console.log(t),t.includes("delete")&&console.log(t);const e=n.target.closest(".bankItems").dataset.id;T(P(e,l),i)}function kn(n){let t=[];const e=n.target.value.trim();e.length>2?t=fn(e,l):t=l,i.bankList.innerHTML="",C(t,i)}let m={},M="";function pn(n){M=n.target.closest(".bankItems").dataset.id,m=P(M,l),n.target.closest(".bank-items-btn")!==null&&n.target.closest(".bank-items-btn").innerText==="Edit"&&S()}function gn(n){n.insertAdjacentHTML("beforeend",x("save","SAVE")),n.insertAdjacentHTML("beforeend",x("exit","EXIT"))}function Bn(){const n=document.querySelectorAll(".bank-info-tex"),t=Object.keys(m).slice(1);n.forEach((e,r)=>e.insertAdjacentHTML("beforeend",x(t[r],"Change")))}function x(n,t){return`<button type="button" class="changeBtn" id="${n}">${t}</button>`}function S(){const n=document.querySelector(".bank-info");Bn(),gn(n),n.addEventListener("click",Ln)}function Ln(n){const t=n.target.closest(".changeBtn");if(t!==null&&n.target.innerText!=="SAVE"&&n.target.innerText!=="EXIT"){const e=t.getAttribute("id");let r=prompt("Введіть нове значення");if(r===null)return;e!=="name"&&(r=Number(r)),m[e]=r,T(m,i),S()}else n.target.innerText==="SAVE"?(l.splice(l.indexOf(m),1,m),i.bankList.textContent="",i.itemBankContainerEl.textContent="",C(l,i)):n.target.innerText==="EXIT"&&T(m,i)}i.banksListContainerEl.classList.add("banksListContainer");i.itemBankContainerEl.classList.add("itemBankContainer");i.bankList.classList.add("bankList");i.divRoot.append(i.banksListContainerEl,i.itemBankContainerEl);i.banksListContainerEl.append(i.bankList);C(l,i);cn(i);sn(l,i);dn(i);ln(i);i.bankList.addEventListener("click",bn);i.inputForFindBank.addEventListener("input",on(kn,500));i.bankList.addEventListener("click",pn);i.clearBankBtn.addEventListener("click",()=>{un(i)});
