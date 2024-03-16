import { useNeoAudioSessionRoutes } from './useNeoAudioSessionRoutes';

export const useNeoAirplayRoutes = () => {
  const routes = useNeoAudioSessionRoutes();
  return routes?.filter((route) => route.portType === 'AirPlay');
};
