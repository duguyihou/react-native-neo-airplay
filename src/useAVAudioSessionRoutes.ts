import { useEffect, useState } from 'react';
import type { AVAudioSessionRoute } from './types';
import AVAudioSessionRoutes, {
  fetchAVAudioSessionRoutes,
} from './api/AVAudioSessionRoutes';

export const useAVAudioSessionRoutes = () => {
  const [routes, setRoutes] = useState<AVAudioSessionRoute[] | null>(null);

  useEffect(() => {
    // const fetchRoutes = async () => {
    //   const result = await fetchAVAudioSessionRoutes();
    //   setRoutes(result);
    // };
    const subscription = AVAudioSessionRoutes.onChanged(setRoutes);
    // fetchRoutes();
    return subscription.remove();
  }, []);

  return routes;
};
