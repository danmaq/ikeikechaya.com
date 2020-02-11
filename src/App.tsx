import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Router } from '@reach/router';
import React from 'react';
import { Root, Routes } from 'react-static';
import theme from './components/theme';
import Loading from './components/atoms/Loading';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';

const useStyles = makeStyles({
  innerContainer: { paddingTop: '2rem' }
});

const App: React.FC = () => (
  <Root>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="content">
        <Header />
        <Container component="main" maxWidth="md">
          <React.Suspense fallback={<Loading />}>
            <div className={useStyles().innerContainer}>
              <Router>
                <Routes path="*" />
              </Router>
            </div>
          </React.Suspense>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  </Root>
);
App.displayName = 'App';

export default App;
