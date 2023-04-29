(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const u=(e,n)=>n.find(a=>a.id===e);function m(e){return`
    <div class="bank-info">
        <p class="bank-info-tex">name: ${e.name}</p>
        <p class="bank-info-tex">interest rate: ${e.interestRate} %</p>
        <p class="bank-info-tex">max loan: ${e.maxLoan} uah</p>
        <p class="bank-info-tex">min payment: ${e.minPayment} uah </p>
        <p class="bank-info-tex">loan-term: ${e.loanTerm} month</p>
      </div>
    `}const d=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50}],p=document.getElementById("root"),s=document.createElement("div");s.classList.add("banksListContainer");const l=document.createElement("div");l.classList.add("itemBankContainer");p.append(s,l);const o=document.createElement("ul");s.append(o);o.classList.add("bankList");function f(e){const n=e.map(a=>`
        <li class='bankItems' data-id="${a.id}">
            <p>${a.name}</p>
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
        </li>`);o.insertAdjacentHTML("beforeend",n.join(" ")),g()}o.addEventListener("click",e=>{if(e.target.nodeName==="UL")return;const n=e.target.closest(".bankItems").dataset.id;b(u(n,d))});function b(e){const n=m(e),a=document.querySelector(".itemBankContainer");a.innerHTML=n}function g(){const e=document.createElement("button");let n=`
        <svg class="bank-icon"  width="24" height="24">
            <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
        </svg>`;e.insertAdjacentHTML("afterbegin","<p>Add bank</p>"),e.setAttribute("class","bank-items-btn"),e.setAttribute("type","button"),e.insertAdjacentHTML("beforeend",n),s.append(e)}f(d);
