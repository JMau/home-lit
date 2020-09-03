import { html, css, LitElement } from 'lit-element';

export class HomeLit extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--home-lit-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      user: { type: String },
    };
  }

  constructor() {
    super();
    this.user = '';
  }

  render() {
    return html`
      <h2>¡Bienvenido! ${this.user}</h2>
    `;
  }
}
