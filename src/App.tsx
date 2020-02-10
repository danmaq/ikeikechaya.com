import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Root, Routes } from 'react-static';
import { Switch, Route } from 'react-router-dom';
import theme from './components/theme';
import Loading from './components/atoms/Loading';

const App: React.FC = () => (
  <Root>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="content">
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </div>
    </ThemeProvider>
  </Root>
);
App.displayName = 'App';

export default App;
