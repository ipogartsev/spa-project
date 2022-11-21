export default () => {
    
    // creation du formulaire
    const form = document.createElement("form")
    form.setAttribute("method", "post");
    form.setAttribute("action", location.pathname);

    // Create input element pour title
    const adHeader = document.createElement("input");
    adHeader.setAttribute("type", "text");
    adHeader.setAttribute("name", "header");
    adHeader.required = true
    adHeader.setAttribute("placeholder", "Titre de votre annonce");
    // create textarea
    const adText = document.createElement("textarea");
    adText.setAttribute("name", "adtext");
    adText.required = true
    adText.setAttribute("rows", "3");
    adText.setAttribute("cols", "30");
    adText.setAttribute("placeholder", "Text de votre annonce");
    // create submit button 
    const send = document.createElement("button");
    send.innerText =  "Envoyer"

    // Append champs de formulaire
    form.appendChild(adHeader);
    form.appendChild(adText);
    form.appendChild(send);
    return form
}