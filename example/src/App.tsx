import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import NeoAirplay, {
  useNeoAudioSessionRoutes,
  useNeoAirplayConnectivity,
} from 'react-native-neo-airplay';

export default function App() {
  const uri =
    'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_928.m3u8';
  const routes = useNeoAudioSessionRoutes();
  console.log(`🐵 ------ routes`, routes);
  const isAirplayConnected = useNeoAirplayConnectivity();
  console.log(`🐵 ------  isAirplayConnected`, isAirplayConnected);
  return (
    <View style={styles.container}>
      <Video source={{ uri }} style={styles.backgroundVideo} />
      <NeoAirplay
        style={styles.box}
        tintColor="red"
        activeTintColor="green"
        prioritizesVideoDevices={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    bottom: 200,
    width: 60,
    height: 60,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
