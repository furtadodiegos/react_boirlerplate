import React from 'react';
import renderer from 'react-test-renderer';
import delay from 'redux-saga';

import Home from '../home';

describe('The stateful notifications viewer', async () => {
  it('Should display the correct content of Home page', async () => {
    const tree = renderer.create(<Home />);

    await delay();
    const instance = tree.root;
    const component = instance.findByProps({ className: 'page_home' });
    const text = component.children[0];

    expect(text).toEqual('Home page');
  });
});
