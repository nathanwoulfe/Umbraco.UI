import { html } from 'lit-html';
import './index';

export default {
  title: 'Basics/Radio',
  component: 'uui-radio',
};

export const Default = () => html` <uui-radio>Label</uui-radio>`;

export const Disabled = () => html` <uui-radio>Active</uui-radio>
  <uui-radio disabled>Disabled</uui-radio>
  <uui-radio disabled checked>Selected disabled</uui-radio>`;

export const InAForm = () => html`
  <form id="testForm">
    <uui-radio name="tets" value="test">Active</uui-radio>
  </form>
`;