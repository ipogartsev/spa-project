import BasicView from "./BasicView.js"

export default class extends BasicView {
    constructor() {
        super()
        this.setTitle("Entraide")
    }

    async getHtml() {
        return (`<h1>Entraide</h1>
        <div class="card">
        <h4>Soutien scolaire</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quis eaque facere, animi inventore.</p> 
        <p>Contacter Julie: tél 06 22 33 33 33</p>
        </div>
        <div class="card">
        <h4>Promener votre chien</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quis eaque facere, animi inventore.
        </p>
        </div>
        `)
    }
}