export enum Attribute {
    "name" = "name",
    "gender" = "gender",
    "city" = "city",
    "img" = "img"
    
}

class Card extends HTMLElement{
    name?: string;
    gender?: string;
    city?: string;
    img?: string;
    // buttonSelected?: string

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    
static get observedAttributes(){
    const attrs: Record<Attribute,null> = {
        name:  null,
        gender: null,
        city: null,
        img: null,
    }
        return Object.keys(attrs);
    }

    connectedCallback(){
        // this.buttonSelected = this.name
        this.render();
    }

    // mount(){
    //     const btn = this.shadowRoot?.querySelector("button")
    //     btn?.addEventListener("click",()=>{
    //         if(this.buttonSelected === this.name){

    //         }
    //     })
    // }

    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: this[propName] = newValue;
        }
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <h1>${this.name}</h1>
            <h2>${this.gender}</h2>
            <p>${this.city}</p>
            <img src="${this.img}" width= "80px" height= "80px">
            <button>Me gusta</button>
            </section>
            `
            
        }
    }
}
customElements.define("card-user",Card)
export default Card