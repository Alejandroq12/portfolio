import projects from"./projects.js";const popupContainer=document.querySelector("#popup-container"),bodyEl=document.querySelector("body"),popupTemplate=`
  <div class="popup">
    <button class="popup-close">
      <img src="./assets/images/icons/x.svg" alt="Close">
    </button>
    <h2 class="popup-header"></h2>
    <img class="popup-image" alt="" loading="lazy">
    <p class="popup-description"></p>
    <ul class="popup-technologies"></ul>
    <div class="popup-buttons">
      <a class="button popup-button live-link" id="live-link" target="_blank" rel="noopener noreferrer">
        See Live <img src="assets/images/icons/live3.png" alt="Live Link Logo" class="popup-link-logo">
      </a>
      <a class="button popup-button source-link" id="source-link" target="_blank" rel="noopener noreferrer">
        See Source <img src="assets/images/icons/github.png" alt="Source Link Logo" class="popup-link-logo">
      </a>
    </div>
  </div>
`,closeButton=(popupContainer.innerHTML=popupTemplate,popupContainer.style.display="none",document.querySelector(".popup-close")),header=document.querySelector(".popup-header"),image=document.querySelector(".popup-image"),description=document.querySelector(".popup-description"),technologiesList=document.querySelector(".popup-technologies"),liveLinkButton=document.getElementById("live-link"),sourceLinkButton=document.getElementById("source-link");function updatePopup(e){header.textContent=e.name,image.src=e.image,image.alt=e.name,description.textContent=e.description,technologiesList.innerHTML=e.technologies.map(e=>`<li>${e}</li>`).join(""),liveLinkButton.href=e.liveLink,sourceLinkButton.href=e.sourceLink,popupContainer.style.display="block",bodyEl.classList.add("popup-open")}closeButton.addEventListener("click",()=>{popupContainer.style.display="none",bodyEl.classList.remove("popup-open")});const seeProjectButtons=document.querySelectorAll(".button-card");seeProjectButtons.forEach((e,o)=>{e.addEventListener("click",()=>{updatePopup(projects[o])})});