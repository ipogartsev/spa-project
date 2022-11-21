import BasicView from "./BasicView.js"

export default class extends BasicView {
    constructor() {
        super()
        this.setTitle("Administration")
    }

    async getHtml() {
        return (`<h1>Annonces copropriété</h1>
        <h4>Chauffage</h4>
        <p>Chers voisins, le chauffage est mis en route le 14 novembre 2022. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quis eaque facere, animi inventore.
        </p>
        `)
    }
}