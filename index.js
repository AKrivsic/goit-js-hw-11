import{a as m,S as y,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const g="49742817-2a5c8f84523d00bf5c0bae38f",h="https://pixabay.com/api/";async function v(s){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(h,{params:o})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom"});function b(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <div class="info-item">
          <p class="info-title">Likes</p>
          <p class="info-value">${e.likes}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Views</p>
          <p class="info-value">${e.views}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Comments</p>
          <p class="info-value">${e.comments}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Downloads</p>
          <p class="info-value">${e.downloads}</p>
        </div>
      </div>
  `).join("");l.insertAdjacentHTML("beforeend",o),L.refresh()}function f(){l.innerHTML=""}function u(){c.classList.add("visible")}function d(){c.classList.remove("visible")}const p=document.querySelector(".form"),w=p.elements["search-text"];f();u();d();p.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search term."});return}f(),u();try{const e=await v(o);if(e.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits)}catch(e){a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}finally{d()}});
//# sourceMappingURL=index.js.map
