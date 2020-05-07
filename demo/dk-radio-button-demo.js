import { LitElement, html ,css} from 'lit-element';
import '../dk-radio-button';
import '../dk-radio-group';
import {Typography} from '@dhruval/material-styles/typography';
import {Theme} from '@dhruval/material-styles/theme';
export class DkRadioButtonDemo extends LitElement {

  static get styles(){
    return[
      Typography,
      Theme,
      css`
        :host{
          display: block;
          padding: 14px;
        }

        #group{
          display:flex;
        }
        span{
          color:var(--mdc-theme-text-primary);
        }
      `
    ];
  }

  render() {
    return html`
      <span class="button">Simple radio buttons</span>
      <br>
      <span class="body2">Normal buttons</span>
      <dk-radio-button name="gujarati" value="gujarati">Gujarati</dk-radio-button>
      <dk-radio-button name="hindi" value="hindi">Hindi</dk-radio-button>

      <span class="body2">Disabled</span>
      <dk-radio-button disabled name="english" value="english">English</dk-radio-button>

      <span class="body2">Disabled - Checked</span>
      <dk-radio-button disabled name="elish" checked value="english">English</dk-radio-button>

      <span class="button">Radio button groups</span><br>
      <span class="body2">Horizontal layout</span>

      <dk-radio-group id="group" name="language" value="hindi" @change="${(e)=>{console.log(e.target.value)}}">
        <dk-radio-button value="english">English</dk-radio-button>
        <dk-radio-button value="gujarati">Gujarati</dk-radio-button>
        <dk-radio-button value="hindi">Hindi</dk-radio-button>
      </dk-radio-group>

      <span class="body2">Vertical layout</span>

      <dk-radio-group name="language" value="hindi" @change="${(e)=>{console.log(e.target.value)}}">
        <dk-radio-button value="english">English</dk-radio-button>
        <dk-radio-button value="gujarati">Gujarati</dk-radio-button>
        <dk-radio-button value="hindi">Hindi</dk-radio-button>
      </dk-radio-group>
    `;
  }
}
customElements.define('dk-radio-button-demo', DkRadioButtonDemo);