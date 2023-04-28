(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const d=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50}],l=document.getElementById("root"),r=document.createElement("div");r.classList.add("banksListContainer");const c=document.createElement("div");c.classList.add("itemBankContainer");l.append(r,c);function u(t){const n=document.createElement("ul");r.append(n),n.classList.add("bankList");const o=t.map(s=>`
        <li class='bankItems'>
            <p>${s.name}</p>
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
        </li>`);n.insertAdjacentHTML("beforeend",o.join(" ")),f(),document.querySelectorAll(".bankItems").forEach(s=>{s.addEventListener("click",()=>{console.log(m(s.firstElementChild.textContent,t))})})}const m=(t,n)=>n.find(o=>o.name===t);function f(){const t=document.createElement("button");let n=`
        <svg class="bank-icon"  width="24" height="24">
            <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
        </svg>`;t.insertAdjacentHTML("afterbegin","<p>Add bank</p>"),t.setAttribute("class","bank-items-btn"),t.setAttribute("type","button"),t.insertAdjacentHTML("beforeend",n),r.append(t)}u(d);
