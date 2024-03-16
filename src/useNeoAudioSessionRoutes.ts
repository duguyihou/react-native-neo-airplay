import { useEffect, useState } from 'react';
import type { RoutesStatus } from './types';
import NeoRouteManager from './api/NeoRouteManager';

const routeManager = new NeoRouteManager();

export const useNeoAudioSessionRoutes = () => {
  const [routes, setRoutes] = useState<RoutesStatus>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      const result = await routeManager.fetchRoutes();
      setRoutes(result);
    };
    const subscription = routeManager.onChanged((rs) => setRoutes(rs));
    fetchRoutes();
    return subscription.remove();
  }, []);

  return routes;
};
