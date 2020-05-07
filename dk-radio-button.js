import { html, css} from 'lit-element';
import {Radio} from '@material/mwc-radio/mwc-radio';
import {Typography} from '@dhruval/material-styles/typography';

export class DkRadioButton extends Radio {

  static get styles(){
    return[
      Radio.styles,
      Typography,
      css`
        :host{
          display: block;
          cursor: pointer;
        }

        .main{
          display: flex;
        }

        .mdc-radio {
          height: 40px;
          margin-right: 4px;
          display:flex;
          flex-direction: column;
          justify-content: center;
        }

        .main span{
          display:flex;
          flex-direction: column;
          justify-content: center;
          color: var(--mdc-theme-text-primary, rgba(0, 0, 0, 0.87));
        }

        .main:hover .mdc-radio .mdc-radio__ripple::before{
          background-color: var(--mdc-theme-secondary, #018786);
          opacity: 0.04;
        }

        :host([disabled]) {
          pointer-events: none;
        }

        :host([disabled]) .main span{
          color: var(--mdc-theme-text-disabled, rgba(0, 0, 0, 0.38));
        }

        .mdc-radio .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {
          border-color: var(--mdc-theme-text-secondary,rgba(0, 0, 0, 0.54));
        }

        .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle,
        .mdc-radio .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {
          border-color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.38));
        }
        .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,
        .mdc-radio .mdc-radio__native-control:disabled:checked + .mdc-radio__background .mdc-radio__outer-circle {
          border-color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.38));
        }

        .mdc-radio [aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,
        .mdc-radio .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {
          border-color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.38));
        }
      `
    ];
  }

  render() {
    let superElementRender = super.render();
    return html`
      <div class="main" @click="${this._onClick}">
        ${superElementRender}
        <span class="body2"><slot></slot></span>
      </div>
    `;
  }

  _selectRadioButton(){
    this.click();
  }

  _onClick(){
    this._selectRadioButton();
    this.blur();
  }
}
customElements.define('dk-radio-button', DkRadioButton);