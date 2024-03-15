import React
import AVKit

@objc(NeoAirplayModule)
class NeoAirplayModule: RCTEventEmitter {
  private struct Constants {
    static var AVAudioSessionRoutesChanged = "AVAudioSessionRoutesChanged"
    static var portName = "portName"
    static var portType = "portType"
    static var channels = "channels"
    static var channelName = "channelName"
    static var channelNumber = "channelNumber"
    static var owningPortUID = "owningPortUID"
    static var channelLabel = "channelLabel"
    static var uid = "uid"
    static var hasHardwareVoiceCallProcessing = "hasHardwareVoiceCallProcessing"
  }

  private var AVAudioSessionRoutes: [[String: Any]] {
    let session = AVAudioSession.sharedInstance()
    let outputs = session.currentRoute.outputs
    let routes = outputs.map {
      var route: [String: Any] = [
        Constants.portName: $0.portName,
        Constants.portType: $0.portType,
        Constants.uid: $0.uid,
        Constants.hasHardwareVoiceCallProcessing: $0.hasHardwareVoiceCallProcessing,
      ]
      let channels = $0.channels?.map { channel in [
        Constants.channelName: channel.channelName,
        Constants.channelNumber: channel.channelNumber,
        Constants.owningPortUID: channel.owningPortUID,
        Constants.channelLabel: channel.channelLabel,
      ]}
      route[Constants.channels] = channels
      return route
    }
    return routes
  }

  override class func requiresMainQueueSetup() -> Bool {
    return false
  }
}

extension NeoAirplayModule {
  @objc func fetchAVAudioSessionRoutes(
    _ resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock) {
      resolve(AVAudioSessionRoutes)
    }
}

extension NeoAirplayModule {
  override func constantsToExport() -> [AnyHashable : Any]! {
    return [Constants.AVAudioSessionRoutesChanged: Constants.AVAudioSessionRoutesChanged]
  }
  override func supportedEvents() -> [String]! {
    return [Constants.AVAudioSessionRoutesChanged]
  }

  override func startObserving() {
    super.startObserving()
    NotificationCenter.default
      .addObserver(self,
                   selector: #selector(handleRouteChange(notification:)),
                   name: AVAudioSession.routeChangeNotification,
                   object: nil)
  }

  override func stopObserving() {
    super.stopObserving()
    NotificationCenter.default.removeObserver(self)
  }

  @objc private func handleRouteChange(notification: NSNotification) {
    if let userInfo = notification.userInfo {
      let reason = userInfo[AVAudioSessionRouteChangeReasonKey] as? AVAudioSession.RouteChangeReason
      print("🐵 --- reason \(reason)")

      sendEvent(withName: Constants.AVAudioSessionRoutesChanged, body: AVAudioSessionRoutes)
    }
  }
}
