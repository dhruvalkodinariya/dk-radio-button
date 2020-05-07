import { LitElement, html } from 'lit-element';

export class DkRadioGroup extends LitElement {


  static get properties() {
    return {
      name: { type: String },
      value: { type: String }
    };
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  connectedCallback(){
		super.connectedCallback();

		this.addEventListener('change', (e) => {
      this.value = e.target.value;
		});
  }

  updated(changeProps){
    if(changeProps.has('value')){
      const slotElement = this.querySelectorAll('*');

      if(!this.value){
        return;
      }
      
      slotElement.forEach((element) => {
        if(element.value == this.value){
          element.checked = true;
        }
        else {
          element.checked = false;
        }
      });
    }
  }
}
customElements.define('dk-radio-group', DkRadioGroup);