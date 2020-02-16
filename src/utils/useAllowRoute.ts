import React from 'react';

const shouldDisableRoute = () =>
  typeof window !== 'undefined' &&
  window.document?.createElement &&
  // MSIE should disable navigating with SPA because it has a problem.
  /Trident\//.test(window.navigator.userAgent);

export default () => {
  const [route, setRoute] = React.useState(true);
  React.useEffect(() => {
    if (shouldDisableRoute()) {
      setRoute(false);
    }
  }, []);
  return route;
};
