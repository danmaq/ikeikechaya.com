import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Router } from '@reach/router';
import React from 'react';
import { Root, Routes } from 'react-static';
import Loading from './components/atoms/Loading';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import theme from './theme';

const useStyles = makeStyles({
  innerContainer: { paddingTop: '2rem' }
});

const App: React.FC = () => (
  <Root>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="content">
        <React.Suspense fallback={<Loading />}>
          <Header />
          <Container className={useStyles().innerContainer} maxWidth="md">
            <Router>
              <Routes path="*" />
            </Router>
          </Container>
          <Footer />
        </React.Suspense>
      </div>
    </ThemeProvider>
  </Root>
);
App.displayName = 'App';

export default App;
