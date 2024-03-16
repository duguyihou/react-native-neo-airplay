import { useNeoAirplayRoutes } from './useNeoAirplayRoutes';

export const useNeoAirplayConnectivity = () => {
  const routes = useNeoAirplayRoutes();
  return routes && routes.length > 0;
};
