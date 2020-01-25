import { useSiteData, RouteFlags } from 'react-static';

const useStaging = () => {
  const { routeFlags } = useSiteData<Record<'routeFlags', RouteFlags>>();

  return routeFlags.staging || routeFlags.stage === 'dev';
};

export default useStaging;
