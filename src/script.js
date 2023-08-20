import join from 'lodash/join';
import AgentImg from '../public/static/agent-precious.jpeg';
import './index.css';

function component() {
  let app = document.createElement('div');
  app.innerHTML = join(['Hello', 'Webpack', 'from', 'Nitro']);
  app.classList.add('hello');
  const image = new Image();
  image.src = AgentImg;
  app.appendChild(image);
  return app;
}

document.body.appendChild(component());
