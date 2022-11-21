import CreateForm from "./CreateForm.js";

export default (section) => {
        console.log('appelle annonce');
        // Function pour creation d'annonce
        const ad = () => {
                
                annonceButton.hidden = true
               
                // Create div pour le formulaire d'annonce
                const div = document.createElement("div")

                // Générer formulaire
                const form = CreateForm()
                // create cancel form button
                const cancel = document.createElement("button");
                cancel.innerText =  "Annuler"
                div.appendChild(cancel);
                div.appendChild(form)

                
                section.appendChild(div);
                cancel.addEventListener('click',  () => {
                        div.textContent = ""
                        annonceButton.hidden = false
                })

                // Envoyer les données et cacher le formulaire
                div.addEventListener('submit', (e) => {
                        e.preventDefault()
                        form.submit()
                        div.textContent = ""
                        annonceButton.hidden = false
                })
                
        }

        // Création de button pour appeler le formulaire de création d'annonce
        const annonceButton = document.createElement("button")
        let textAnnonceButton = document.createTextNode("Créer")
        annonceButton.appendChild(textAnnonceButton)
        section.appendChild(annonceButton)
        annonceButton.addEventListener("click", ad)
        
}       

       