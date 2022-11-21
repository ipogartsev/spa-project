import BasicView from "./BasicView.js"

export default class extends BasicView {
    constructor() {
        super()
        this.setTitle("Bonnes affaires")
    }

    async getHtml() {
        return (`<h1>Le bon coin</h1>
        <h4>Table</h4>
        <p>Je propose une table à manger pour 4 personnes.<br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quis eaque facere, animi inventore.
        </p>
        `)
    }
}