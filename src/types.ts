export type AVAudioSessionPortType =
  | 'continuityMicrophone'
  | 'lineIn'
  | 'builtInMic'
  | 'headsetMic'
  | 'lineOut'
  | 'headphones'
  | 'bluetoothA2DP'
  | 'builtInReceiver'
  | 'builtInSpeaker'
  | 'HDMI'
  | 'airPlay'
  | 'bluetoothLE'
  | 'bluetoothHFP'
  | 'usbAudio'
  | 'carAudio'
  | 'virtual'
  | 'PCI'
  | 'fireWire'
  | 'displayPort'
  | 'AVB'
  | 'thunderbolt';

export type AVAudioSessionChannel = {
  channelName: string;
  channelNumber: number;
  owningPortUID: string;
  channelLabel: string;
};

export type AVAudioSessionRoute = {
  portName: string;
  portType: AVAudioSessionPortType;
  channels: AVAudioSessionChannel[];
  uid: string;
  hasHardwareVoiceCallProcessing: boolean;
  isSpatialAudioEnabled: boolean;
};
