import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  processColor,
  type ColorValue,
  type ProcessedColorValue,
  type ViewProps,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-neo-airplay' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface NeoAirplayProps extends ViewProps {
  tintColor: number | ColorValue;
  activeTintColor: number | ColorValue;
  prioritizesVideoDevices: boolean;
}

interface NeoAirplayViewProps
  extends Omit<NeoAirplayProps, 'tintColor' | 'activeTintColor'> {
  tintColor: ProcessedColorValue | null;
  activeTintColor: ProcessedColorValue | null;
}

const ComponentName = 'NeoAirplayView';

export const NeoAirplayView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<Partial<NeoAirplayViewProps>>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

const NeoAirplay = ({
  tintColor,
  activeTintColor,
  prioritizesVideoDevices,
  ...props
}: Partial<NeoAirplayProps>) => {
  return (
    <NeoAirplayView
      {...props}
      tintColor={processColor(tintColor)}
      activeTintColor={processColor(activeTintColor)}
      prioritizesVideoDevices={prioritizesVideoDevices}
    />
  );
};

export default NeoAirplay;
