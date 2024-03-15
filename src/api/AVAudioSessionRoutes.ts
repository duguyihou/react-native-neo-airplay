import { NativeEventEmitter, NativeModules } from 'react-native';
import type { AVAudioSessionRoute } from '../types';

const { NeoAirplayModule: Native } = NativeModules;

class AudioSessionRoute {
  static onChanged(listener: () => void) {
    const eventEmitter = new NativeEventEmitter(Native);
    return eventEmitter.addListener(
      Native.AVAudioSessionRoutesChanged,
      listener
    );
  }
}

export async function fetchAVAudioSessionRoutes(): Promise<
  AVAudioSessionRoute[]
> {
  return await Native.fetchAVAudioSessionRoutes();
}
export default AudioSessionRoute;
