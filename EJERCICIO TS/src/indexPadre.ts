import * as components from "./components/indexHijo"
import {data} from "./data"
import Card, {Attribute} from "./components/cards/card"

class AppContainer extends HTMLElement {

    cards: Card[] = [];

    constructor(){
        super()
        this.attachShadow({mode:"open"})
        data.forEach((cards) =>{
            const cardBox = this.ownerDocument.createElement("card-user") as Card
            cardBox.setAttribute(Attribute.name, cards.name)
            cardBox.setAttribute(Attribute.gender, cards.gender)
            cardBox.setAttribute(Attribute.city, cards.city)
            cardBox.setAttribute(Attribute.img, cards.imageLink)
            this.cards.push(cardBox)
        })
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.cards.forEach ((carduser) =>{
                this.shadowRoot?.appendChild(carduser)
            })
        }
    }
}

customElements.define("app-container",AppContainer)

