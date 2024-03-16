import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import NeoAirplay, {
  useNeoAudioSessionRoutes,
  useNeoAirplayConnectivity,
} from 'react-native-neo-airplay';

export default function App() {
  const routes = useNeoAudioSessionRoutes();
  console.log(`🐵 ------ routes`, routes);
  const isAirplayConnected = useNeoAirplayConnectivity();
  console.log(`🐵 ------  isAirplayConnected`, isAirplayConnected);
  return (
    <View style={styles.container}>
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
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
