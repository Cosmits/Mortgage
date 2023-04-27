(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50}],l=document.getElementById("root"),r=document.createElement("div");r.classList.add("banksListContainer");const c=document.createElement("div");c.classList.add("itemBankContainer");l.append(r,c);function u(o){const n=document.createElement("ul");r.append(n),n.classList.add("bankList");const s=o.map(i=>`
        <li class='bankItems'>
            <p>${i.name}</p>
            <div class="bank-btn-wrap">
                <button type="button" class="bank-items-btn">Edit
                <svg class="bank-icon"  width="24" height="20">
                <use href="./img/javascript.svg#icon-library" width= "24" height="20"></use>
                </svg>
                </button>
                <button type="button" class="bank-items-btn">Delete
                 <svg class="bank-icon"  width="24" height="20">
                <use href="./img/javascript.svg#icon-bin2" width="24" height="20"></use>
                 </svg>
                </button>
            </div>
        </li>`);n.insertAdjacentHTML("beforeend",s.join(" ")),f(),document.querySelectorAll(".bankItems").forEach(i=>{i.addEventListener("click",()=>{console.log(m(i.firstElementChild.textContent,o))})})}const m=(o,n)=>n.find(s=>s.name===o);function f(){const o=document.createElement("button");o.textContent="Add bank",r.append(o)}u(d);
