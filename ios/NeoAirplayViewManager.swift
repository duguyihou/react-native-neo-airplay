@objc(NeoAirplayViewManager)
class NeoAirplayViewManager: RCTViewManager {

  override func view() -> (NeoAirplayView) {
    return NeoAirplayView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}


