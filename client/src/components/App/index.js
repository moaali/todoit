import React from 'react'
import { Provider } from 'mobx-react'
import { hot } from 'react-hot-loader'

import stores from 'stores'
import { Root } from 'components'
import { Index } from 'screens'

const App = () => (
  <Provider store={{...stores}}>
    <Root>
      <Index />
    </Root>
  </Provider>
);

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  loader.classList.add('loader--hidden');
  document.body.classList.remove('loading');
});

export default hot(module)(App);
