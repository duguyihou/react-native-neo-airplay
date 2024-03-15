import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import NeoAirplay from 'react-native-neo-airplay';
import { useAVAudioSessionRoutes } from '../../src/useAVAudioSessionRoutes';

export default function App() {
  useAVAudioSessionRoutes();
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
