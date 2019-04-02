package com.perceivant.beartracks;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import com.microsoft.codepush.react.ReactInstanceHolder;
import com.oblador.vectoricons.VectorIconsPackage;
import com.bugsnag.BugsnagReactNative;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

class MyReactNativeHost extends ReactNativeHost implements ReactInstanceHolder {
  protected MyReactNativeHost(Application application) {
    super(application);
  }

  @Override
  public boolean getUseDeveloperSupport() {
    return false;
  }

  @Override
  protected List<ReactPackage> getPackages() {
    return null;
  }
}

public class MainApplication extends Application implements ReactApplication {

  private final MyReactNativeHost mReactNativeHost = new MyReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
    return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new CodePush(BuildConfig.CODEPUSH_KEY, getApplicationContext(), BuildConfig.DEBUG),
          new VectorIconsPackage(),
          BugsnagReactNative.getPackage(),
          new ReactNativeYouTube(),
          new RNI18nPackage(),
          new ReactNativePushNotificationPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    CodePush.setReactInstanceHolder(mReactNativeHost);
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
