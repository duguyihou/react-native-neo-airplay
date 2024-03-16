#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NeoAudioSessionRoutes, NSObject)

RCT_EXTERN_METHOD(fetchAVAudioSessionRoutes:
                  (RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end
