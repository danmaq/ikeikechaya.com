import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Router } from '@reach/router';
import classNames from 'classnames';
import React from 'react';
import { Root, Routes } from 'react-static';
import Loading from './components/atoms/Loading';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import theme from './theme';

export interface DOMProps {
  containerClassName?: string;
  footerClassName?: string;
  headerClassName?: string;
}

const DOM: React.FC<DOMProps> = ({
  containerClassName,
  footerClassName,
  headerClassName
}) => (
  <Root>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="content">
        <React.Suspense fallback={<Loading />}>
          <Header containerClassName={headerClassName} />
          <Container className={containerClassName} maxWidth="md" role="main">
            <Router>
              <Routes path="*" />
            </Router>
          </Container>
          <Footer className={footerClassName} />
        </React.Suspense>
      </div>
    </ThemeProvider>
  </Root>
);
DOM.displayName = 'AppDOM';

const useStyles = makeStyles({
  innerContainer: { paddingTop: '2rem' },
  safeArea: {
    paddingLeft: 'env(safe-area-inset-left)',
    paddingRight: 'env(safe-area-inset-right)'
  }
});

const App: React.FC = () => {
  const { innerContainer, safeArea } = useStyles();
  return (
    <DOM
      containerClassName={classNames(innerContainer, safeArea)}
      footerClassName={safeArea}
      headerClassName={safeArea}
    />
  );
};
App.displayName = 'App';

export default App;
