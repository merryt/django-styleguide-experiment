import Vue from 'vue';
import myButton from '../src/components/Button.vue'
import djangoComponent from '../src/components/DjangoComponent.vue'
import { withDesign } from 'storybook-addon-designs'
import axios from "axios";

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


export const filterButton = () => ({
  components: { myButton },
  template: `<myButton label="2019">Button</myButton>`
})


export const sampleDjangoComponent = () => ({
  components: { djangoComponent },
  created: function(){
      axios.post("http://127.0.0.1:8000/compile_django/", JSON.stringify(this.props)
          , {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      )
      .then(response => {
          console.log(response.data)
          this.content = response.data
      })
  },
  data: function(){
      return {
          props: {
            "template": "templatetags/_basic_button.html",
            "context": {
                "button_text": "Please work!"
                }
            },
          content: "<p>loading</p>"
      }
  },
  template: `<djangoComponent :content="content"></djangoComponent>`
})


// // Create props for context
// var props = {
//     "template": 'templatetags/_basic_button.html',
//     "context": {
//         "button_text": "this text comes from react, through vue to a template tag"
//     }
// }
//
// export const DjangoButton = () => {
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "http://0.0.0.0:8000/compile_django/", true);
//     xhr.setRequestHeader('Content-type',    'application/json')
//     var template;
//     xhr.onload = () => {
//         template = xhr.response;
//         console.log(template);
//         this.setState({ template });
//     }
//
//     xhr.send(JSON.stringify( props ));
//
//     return `<div>${template}</div>`
//
// }

