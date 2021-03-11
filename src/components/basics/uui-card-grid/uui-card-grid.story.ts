import { html } from 'lit-html';
import './index';

export default {
  title: 'Basics/Card Grid',
  component: 'uui-card-grid',
};

const randomArray = (length: number, min: number, max: number) =>
  [...new Array(length)].map(() =>
    Math.round(Math.random() * (max - min) + min)
  );

export const Basic = () =>
  html`
    <uui-card-grid>
      ${randomArray(40, 100, 800).map(
        el => html`<uui-card selectable title="Doggo ${el}"
          ><img slot="img" src="https://placedog.net/${el}/?random"
        /></uui-card>`
      )}
    </uui-card-grid>
  `;
