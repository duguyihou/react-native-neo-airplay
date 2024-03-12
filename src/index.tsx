import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-neo-airplay' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type NeoAirplayProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'NeoAirplayView';

export const NeoAirplayView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<NeoAirplayProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
