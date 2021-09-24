import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@umbraco-ui/uui-avatar/index';

export default {
  title: 'Displays/Avatar',
  component: 'uui-avatar',
  args: {
    title: 'First Last',
  },
  // argTypes: {
  //   'img-src': { table: { disable: true } },
  //   'img-srcset': { table: { disable: true } },
  // },
  // parameters: { controls: { exclude: ["img-src"] } }
};

const avatarSrc =
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&s=b616b2c5b373a80ffc9636ba24f7a4a9';

// @ts-ignore
const avatarSrcSet = [
  `${avatarSrc}&h=100&w=100`,
  `${avatarSrc}&h=200&w=200`,
  `${avatarSrc}&h=300&w=300`,
];

const Template: Story = (props: any) => html`<uui-avatar
  .overflow=${props.overflow}
  .imgSrc=${props.imgSrc}
  .imgSrcset=${props.imgSrcset}
  .title=${props.title}
  style="font-size: ${1 +
  props.fontSize /
    2}em; background-color: ${props.backgroundColor}; color: ${props.color}"
  >${props.slot}</uui-avatar
>`;

export const Overview = Template.bind({});
Overview.args = { color: '#1b264f', backgroundColor: '#f5c1bc', fontSize: 1 };
Overview.argTypes = {
  color: { table: { category: 'inline styling' } },
  backgroundColor: { table: { category: 'inline styling' } },
  fontSize: { table: { category: 'inline styling' } },
};

export const Picture = Template.bind({});
Picture.args = { imgSrc: avatarSrcSet[0] };
Picture.parameters = {
  controls: { include: ['imgSrc', 'imgSrcset', 'title'] },
};

export const Sizes = Template.bind({});
Sizes.args = { fontSize: 4 };
Sizes.argTypes = {
  fontSize: { table: { category: 'inline styling' } },
};
Sizes.parameters = { controls: { include: ['fontSize', 'title'] } };

export const Colors = Template.bind({});
Colors.args = { color: 'white', backgroundColor: 'blue', fontSize: 1 };
Colors.argTypes = {
  color: { table: { category: 'inline styling' } },
  backgroundColor: { table: { category: 'inline styling' } },
};
Colors.parameters = {
  controls: { include: ['backgroundColor', 'color', 'title'] },
};

export const SlottedContent = Template.bind({});
SlottedContent.args = { slot: 'what' };
SlottedContent.argTypes = {
  slot: { table: { category: 'slots' }, control: { type: 'text' } },
};
SlottedContent.parameters = {
  controls: { include: ['slot', 'overflow', 'title'] },
};

export const WidthBadge = Template.bind({});
WidthBadge.args = { slot: html`<uui-badge>!</uui-badge>`, overflow: true };
WidthBadge.argTypes = {
  slot: { table: { category: 'slots' }, control: { type: 'text' } },
};
WidthBadge.parameters = {
  controls: { include: ['slot', 'overflow', 'title'] },
};