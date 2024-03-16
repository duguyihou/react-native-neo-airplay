import { NativeEventEmitter, NativeModules } from 'react-native';
import type { AudioSessionRoute, RoutesStatus } from '../types';

const { NeoAudioSessionRoutes: Native } = NativeModules;

class NeoRouteManager {
  onChanged(listener: (routes: RoutesStatus) => void) {
    const eventEmitter = new NativeEventEmitter(Native);
    return eventEmitter.addListener(
      Native.AVAudioSessionRoutesChanged,
      listener
    );
  }

  fetchRoutes(): Promise<AudioSessionRoute[]> {
    return Native.fetchAVAudioSessionRoutes();
  }
}

export default NeoRouteManager;
