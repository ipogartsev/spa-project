import BasicView from "./BasicView.js"

export default class extends BasicView {
    constructor() {
        super()
        this.setTitle("Contacts")
    }

    async getHtml() {
        return (`<h1>Contacts</h1>
        <h4>Syndic</h4>
        <p><i class="fa-solid fa-phone-flip"></i>01 42 35 35 35</p>
        <p><i class="fa-solid fa-envelope"></i>csrueBelleville@orange.fr</p>
        `)
    }
}