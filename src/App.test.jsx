import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contexts from './configs/contexts';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Contexts>
      <App>Ola</App>
    </Contexts>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});
