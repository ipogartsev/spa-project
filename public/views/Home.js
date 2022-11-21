import BasicView from "./BasicView.js"

export default class extends BasicView {
    constructor() {
        super()
        this.setTitle("Home")
    }

    async getHtml() {
        return (`<h1>Bienvenue sur le site des habitans de quartier Belleville</h1>
        `)
    }
}