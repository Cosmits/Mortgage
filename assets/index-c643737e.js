(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();function c(n){let t=`
    <svg class="bank-icon"  width="24" height="24">
      <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
    </svg>`;n.addBankBtn.insertAdjacentHTML("afterbegin","<p>Add bank</p>"),n.addBankBtn.setAttribute("class","bank-items-btn"),n.addBankBtn.setAttribute("type","button"),n.addBankBtn.insertAdjacentHTML("beforeend",t),n.banksListContainerEl.append(n.addBankBtn)}function l(n,t){const s=n.map(o=>`
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
        </li>`);t.bankList.insertAdjacentHTML("beforeend",s.join(" ")),c(t)}const i={divRoot:document.getElementById("root"),banksListContainerEl:document.createElement("div"),itemBankContainerEl:document.createElement("div"),bankList:document.createElement("ul"),addBankBtn:document.createElement("button")},d=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50},{id:"asdfw342rew4",name:"PrivatBank",interestRate:6,maxLoan:9e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew3",name:"Pivden",interestRate:5,maxLoan:8e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew2",name:"Pivnich",interestRate:4,maxLoan:7e5,minPayment:5e3,loanTerm:50},{id:"asdfw342rew1",name:"Moon",interestRate:3,maxLoan:6e5,minPayment:5e3,loanTerm:50}],m=(n,t)=>t.find(s=>s.id===n);function u(n){return`
    <div class="bank-info">
        <p class="bank-info-tex">name: ${n.name}</p>
        <p class="bank-info-tex">interest rate: ${n.interestRate} %</p>
        <p class="bank-info-tex">max loan: ${n.maxLoan} uah</p>
        <p class="bank-info-tex">min payment: ${n.minPayment} uah </p>
        <p class="bank-info-tex">loan-term: ${n.loanTerm} month</p>
      </div>
    `}function b(n){const t=u(n);i.itemBankContainerEl.innerHTML=t}function p(n){if(n.target.nodeName==="UL")return;const t=n.target.closest(".bankItems").dataset.id;b(m(t,d))}i.banksListContainerEl.classList.add("banksListContainer");i.itemBankContainerEl.classList.add("itemBankContainer");i.bankList.classList.add("bankList");i.divRoot.append(i.banksListContainerEl,i.itemBankContainerEl);i.banksListContainerEl.append(i.bankList);i.bankList.addEventListener("click",p);l(d,i);
