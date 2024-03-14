import AVKit

class NeoAirplayView : AVRoutePickerView  {
  
  @objc override var tintColor: UIColor! {
    get {
      return super.tintColor
    }
    set {
      super.tintColor = newValue
    }
  }
  
  @objc override var activeTintColor: UIColor! {
    get {
      return super.activeTintColor
    }
    set {
      super.activeTintColor = newValue
    }
  }
  
  @objc override var prioritizesVideoDevices: Bool {
    get {
      return super.prioritizesVideoDevices
    }
    set {
      super.prioritizesVideoDevices = newValue
    }
  }
}
