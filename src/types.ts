export type AudioSessionPortType =
  | 'continuityMicrophone'
  | 'lineIn'
  | 'BuiltInMic'
  | 'HeadsetMic'
  | 'LineIn'
  | 'AirPlay'
  | 'BluetoothA2DP'
  | 'BluetoothLE'
  | 'BuiltInReceiver'
  | 'BuiltInSpeaker'
  | 'HDMI'
  | 'Headphones'
  | 'LineOut'
  | 'AVB'
  | 'BluetoothHFP'
  | 'DisplayPort'
  | 'CarAudio'
  | 'FireWire'
  | 'PCI'
  | 'Thunderbolt'
  | 'UsbAudio'
  | 'Virtual';

export type AudioSessionChannel = {
  channelName: string;
  channelNumber: number;
  owningPortUID: string;
  channelLabel: string;
};

export type AudioSessionRoute = {
  portName: string;
  portType: AudioSessionPortType;
  channels: AudioSessionChannel[];
  uid: string;
  hasHardwareVoiceCallProcessing: boolean;
  isSpatialAudioEnabled: boolean;
};

export type RoutesStatus = AudioSessionRoute[] | null;
