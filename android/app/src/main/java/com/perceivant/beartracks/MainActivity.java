package com.perceivant.beartracks;

import com.facebook.react.ReactActivity;
import com.bugsnag.BugsnagReactNative;
import com.facebook.react.ReactActivityDelegate;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.Nullable;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Set;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "beartracks";
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        BugsnagReactNative.start(this);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Intent mainIntent = getIntent();
                String dataValue = "";
                Bundle initialProps = new Bundle();
                if (mainIntent != null) {
                    Bundle bundle = mainIntent.getExtras();

                    if (bundle != null) {
                        // String dataString = bundle.getString("notification");
                        Bundle notificationBundle = bundle.getBundle("notification");
                        // Set keys = bundle.keySet();
                        try {
                            JSONObject data = convertJSONObject(notificationBundle); //getPushData(dataString);
                            if (data != null) {
                                try {
                                    dataValue = data.getString("data");
                                } catch (Exception e) {
                                    // no-op
                                }
                            } else {
                            }
                        } catch (Exception e) {
                            // no-op
                        }
                    }
                }
                initialProps.putString("pushData", dataValue); // Read this inside your Root component in React native
                return initialProps;
            }
        };
    }

    private JSONObject getPushData(String dataString) {
        try {
            return new JSONObject(dataString);
        } catch (Exception e) {
            return null;
        }
    }

    JSONObject convertJSONObject(Bundle bundle) throws JSONException {
        JSONObject json = new JSONObject();
        Set<String> keys = bundle.keySet();
        for (String key : keys) {
            Object value = bundle.get(key);
            if (value instanceof Bundle) {
                json.put(key, convertJSONObject((Bundle)value));
            } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                json.put(key, JSONObject.wrap(value));
            } else {
                json.put(key, value);
            }
        }
        return json;
    }
}
