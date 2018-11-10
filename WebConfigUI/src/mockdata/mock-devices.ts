import { Device, DeviceTree } from './../classes/device';

export const MOCKDATA_DEVICES: any = {
    "ID":43795,
    "data":{
        "devicelist":[{
            "DeviceParent":"None",
            "PartNumber":"100003",
            "DeviceName":"ControlModule1",
            "DeviceType":"ControlModule",
            "PrimaryIP":"10.0.0.174",
            "Architecture":"armv7l",
            "Capabilities":["ROS"],
            "BoardCount":0,
            "HatCount":2,
            "ShieldCount":0,
            "SensorCount":0
        },{
            "DeviceParent":"ControlModule1",
            "PartNumber":"UNKNOWN",
            "DeviceName":"TerminalHat1",
            "DeviceType":"TerminalHat",
            "PrimaryIP":"",
            "Architecture":"",
            "Capabilities":["GPIO"],
            "BoardCount":0,
            "HatCount":0,
            "ShieldCount":0,
            "SensorCount":0
        },{
            "DeviceParent":"ControlModule1",
            "PartNumber":"625004",
            "DeviceName":"PWMHat1",
            "DeviceType":"ServoHat",
            "PrimaryIP":"",
            "Architecture":"",
            "Capabilities":["GPIO"],
            "BoardCount":0,
            "HatCount":0,
            "ShieldCount":0,
            "SensorCount":0
        },{
            "DeviceParent":"ControlModule1",
            "PartNumber":"160002",
            "DeviceName":"LeftMicrophone",
            "DeviceType":"Microphone",
            "PrimaryIP":"",
            "Architecture":"",
            "Capabilities":["mono"],
            "BoardCount":0,
            "HatCount":0,
            "ShieldCount":0,
            "SensorCount":0
        }]
    }
}