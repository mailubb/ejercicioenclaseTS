// export enum Attribute {
//     "msg" = "msg",
// }

// class Button extends HTMLElement{
//     msg?: string;
//     buttonSelected?: string

//     constructor(){
//         super()
//         this.attachShadow({mode:"open"})
//     }
    
// static get observedAttributes(){
//     const attrs: Record<Attribute,null> = {
//         msg:  null,
//     }
//         return Object.keys(attrs);
//     }

//     connectedCallback(){
//         this.buttonSelected = this.msg
//         this.mount();
//     }

//     mount(){
//      const btn = this.shadowRoot?.querySelector("button")
//         btn?.addEventListener("click",()=>{
//             if(this.buttonSelected === this.msg){ç
//                 this.buttonSelected 

//              }
//          })
//      }

//     attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
//         switch(propName){
//             default: this[propName] = newValue;
//         }
//     }
    
//     render(){
//         if(this.shadowRoot){
//             this.shadowRoot.innerHTML = `
//             <button>${this.msg}</button>
//             `
            
//         }
//     }
// }
// customElements.define("button-user",Button)
// export default Button