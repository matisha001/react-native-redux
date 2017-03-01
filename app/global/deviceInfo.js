/**
 * Created by dchlove on 2016/12/23.
 * 全局app信息
 */

import {
    Platform
} from 'react-native'
import DeviceInfo from 'react-native-device-info'

module.exports ={
    DeviceUniqueID:DeviceInfo.getUniqueID(),
    DeviceManufacturer:DeviceInfo.getManufacturer(),
    DeviceBrand:DeviceInfo.getBrand(),
    DeviceModel:DeviceInfo.getModel(),
    DeviceID:DeviceInfo.getDeviceId(),
    SystemName:DeviceInfo.getSystemName(),
    SystemVersion:DeviceInfo.getSystemVersion(),
    BundleID: DeviceInfo.getBundleId(),
    BuildNumber:DeviceInfo.getBuildNumber(),
    AppVersion:DeviceInfo.getVersion(),
    AppVersionReadable:DeviceInfo.getReadableVersion(),
    DeviceName:DeviceInfo.getDeviceName(),
    UserAgent:DeviceInfo.getUserAgent(),
    DeviceLocale:DeviceInfo.getDeviceLocale(),
    DeviceCountry:DeviceInfo.getDeviceCountry(),
    Timezone:DeviceInfo.getTimezone(),
    AppInstanceID:DeviceInfo.getInstanceID(),
    Appisrunninginemulator:DeviceInfo.isEmulator(),
    Appisrunningonatablet:DeviceInfo.isTablet(),
    ZipVersion: 1.0,
    OsType:Platform.OS,
    AppName:'merchant',
};
//
//// or import DeviceInfo from 'react-native-device-info';
//
//console.log("Device Unique ID", DeviceInfo.getUniqueID());  // e.g. FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9
//// * note this is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled
//
//console.log("Device Manufacturer", DeviceInfo.getManufacturer());  // e.g. Apple
//
//console.log("Device Brand", DeviceInfo.getBrand());  // e.g. Apple / htc / Xiaomi
//
//console.log("Device Model", DeviceInfo.getModel());  // e.g. iPhone 6
//
//console.log("Device ID", DeviceInfo.getDeviceId());  // e.g. iPhone7,2 / or the board on Android e.g. goldfish
//
//console.log("System Name", DeviceInfo.getSystemName());  // e.g. iPhone OS
//
//console.log("System Version", DeviceInfo.getSystemVersion());  // e.g. 9.0
//
//console.log("Bundle ID", DeviceInfo.getBundleId());  // e.g. com.learnium.mobile
//
//console.log("Build Number", DeviceInfo.getBuildNumber());  // e.g. 89
//
//console.log("App Version", DeviceInfo.getVersion());  // e.g. 1.1.0
//
//console.log("App Version (Readable)", DeviceInfo.getReadableVersion());  // e.g. 1.1.0.89
//
//console.log("Device Name", DeviceInfo.getDeviceName());  // e.g. Becca's iPhone 6
//
//console.log("User Agent", DeviceInfo.getUserAgent()); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
//
//console.log("Device Locale", DeviceInfo.getDeviceLocale()); // e.g en-US
//
//console.log("Device Country", DeviceInfo.getDeviceCountry()); // e.g US
//
//console.log("Timezone", DeviceInfo.getTimezone()); // e.g America/Mexico_City
//
//console.log("App Instance ID", DeviceInfo.getInstanceID()); // ANDROID ONLY - see https://developers.google.com/instance-id/
//
//console.log("App is running in emulator", DeviceInfo.isEmulator()); // if app is running in emulator return true
//
//console.log("App is running on a tablet", DeviceInfo.isTablet()); // if app is running on a tablet return true