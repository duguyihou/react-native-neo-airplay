#import <React/RCTBridgeModule.h>

//@interface RCT_EXTERN_MODULE(NeoAirplayModule, NSObject)

RCT_EXTERN_METHOD(fetchAVAudioSessionRoutes:
                  (RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end
