export default () => {
    
    // creation du formulaire
    const form = document.createElement("form")
    form.setAttribute("method", "post");
    form.setAttribute("action", location.pathname);
    
    // Create input element pour title
    const adHeader = document.createElement("input");
    adHeader.setAttribute("type", "text");
    adHeader.setAttribute("name", "title");
    adHeader.required = true
    adHeader.setAttribute("placeholder", "Titre de votre annonce");
    // Create input element pour nom
    const adName = document.createElement("input");
    adName.setAttribute("type", "text");
    adName.setAttribute("name", "user");
    adName.required = true
    adName.setAttribute("placeholder", "Votre nom");
    // Create input element pour contact
    const adContact = document.createElement("input");
    adContact.setAttribute("type", "text");
    adContact.setAttribute("name", "contact");
    adContact.required = true
    adContact.setAttribute("placeholder", "Contact");
    // create textarea
    const adText = document.createElement("textarea");
    adText.setAttribute("name", "text");
    adText.required = true
    adText.setAttribute("rows", "3");
    adText.setAttribute("cols", "30");
    adText.setAttribute("placeholder", "Text de votre annonce");
    // create submit button 
    const send = document.createElement("button");
    send.innerText =  "Envoyer"

    // Append champs de formulaire
    form.appendChild(adHeader);
    form.appendChild(adName);
    form.appendChild(adContact);
    form.appendChild(adText);
    form.appendChild(send);
    return form
}