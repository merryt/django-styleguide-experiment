import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Django + storybook + figma',
  component: Button,
  decorators: [withDesign]
};

export const Heading = () => '<h1>Hello World</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

Button.story = {
  name: 'My hopes and dreams',
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/AUoQEAdfbF9zOuGjeAIuYe/Learn-Figma-Togeather?node-id=0%3A1'
    }
  }
}

