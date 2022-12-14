#ifndef RNTMapView_h
#define RNTMapView_h

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

@interface RNTMapView: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

#endif
