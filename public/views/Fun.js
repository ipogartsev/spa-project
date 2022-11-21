import BasicView from "./BasicView.js"

export default class extends BasicView {
    constructor() {
        super()
        this.setTitle("Loisir et sortie")
    }

    async getHtml() {
        return (`<h1>Loisirs</h1>
        <h4>Sortie cinèma pour les enfants</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quis eaque facere, animi inventore.
        </p>
        `)
    }
}