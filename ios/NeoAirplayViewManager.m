#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(NeoAirplayViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(tintColor, UIColor *)
RCT_EXPORT_VIEW_PROPERTY(activeTintColor, UIColor *)
RCT_EXPORT_VIEW_PROPERTY(prioritizesVideoDevices, BOOL)


@end

@interface RCT_EXTERN_MODULE(NeoAirplayModule, NSObject)

RCT_EXTERN_METHOD(fetchAVAudioSessionRoutes:
                  (RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end
