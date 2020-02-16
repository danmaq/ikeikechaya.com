import * as Sentry from '@sentry/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const { host } = window.location;
  const enabledSentry = !/(localhost|127\.0\.0\.1)/.test(host);
  Sentry.init({
    dsn: 'https://50b5b88a078a4c33853096b39a458177@sentry.io/2476275',
    enabled: enabledSentry
  });

  const target = document.getElementById('root');
  const renderMethod = target?.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;
  const render = (Comp: Function) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    );
  };
  // Render!
  render(App);

  // Hot Module Replacement
  if (module?.hot) {
    module.hot.accept('./App', () => render(App));
  }
}
