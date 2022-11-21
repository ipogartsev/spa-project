import Administration from "./views/Administration.js"
import Help from "./views/Help.js"
import Deals from "./views/Deals.js"
import Fun from "./views/Fun.js"
import Contacts from "./views/Contacts.js"
import Home from "./views/Home.js"
import annonce from "./views/Annonce.js"

const router = async () => {
    const routes = [
    {path: "/administration", view : Administration},
    {path: "/deals", view : Deals },
    {path: "/fun", view : Fun },
    {path: "/help", view : Help},
    {path: "/contact", view : Contacts},
]

    let currentRoute = routes.find( route => location.pathname === route.path)
    if(currentRoute === undefined){
        currentRoute = {path: "/", view: Home}
    } 
    let view = new currentRoute.view()
    let section = document.querySelector("#app")
    section.innerHTML = await view.getHtml()

    // Afficher button pour créeation d'annonce
    if(currentRoute.path != "/" && currentRoute.path != "/contact"){
        console.log( currentRoute.path);
        annonce(section)
        } else {console.log('not matched')};
    }

// Naviagation historique
window.addEventListener('popstate', router)

// Navigation 
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("nav").addEventListener("click", e => {
        e.preventDefault()
        window.history.pushState(null, null, e.target.href);
        router()
    })
})