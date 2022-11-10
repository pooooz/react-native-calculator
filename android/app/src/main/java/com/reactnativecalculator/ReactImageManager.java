package com.reactnativecalculator;

import android.content.Context;
import android.view.View;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.views.image.ImageResizeMethod;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

import java.util.Map;

import javax.annotation.Nullable;

class MyCustomView extends View {
    public MyCustomView(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    public MyCustomView(Context context) {
        super(context);
    }

    public MyCustomView(ThemedReactContext context) {
        super(context);
    }

    public void onReceiveNativeEvent() {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");
        ReactContext reactContext = (ReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(getId(), "topChange", event);
    }
}

public class ReactImageManager extends SimpleViewManager<ReactImageView> {
    public static final String REACT_CLASS = "RCTImageView";
    ReactApplicationContext mCallerContext;

    public ReactImageManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put(
            "topChange",
                MapBuilder.of(
                    "phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onChange"))
        ).build();
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public ReactImageView createViewInstance(ThemedReactContext context) {
        return new ReactImageView(
            context,
            Fresco.newDraweeControllerBuilder(),
            null,
            mCallerContext
        );
    }

    @ReactProp(name = "src")
    public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {
        view.setSource(sources);
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }
}