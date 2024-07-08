export const schema = {
    "models": {},
    "enums": {},
    "nonModels": {
        "CustomerDevice": {
            "name": "CustomerDevice",
            "fields": {
                "DeviceId": {
                    "name": "DeviceId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "LicenseId": {
                    "name": "LicenseId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "UUID": {
                    "name": "UUID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": {
                        "nonModel": "Location"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "roleType": {
                    "name": "roleType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sensor": {
                    "name": "sensor",
                    "isArray": false,
                    "type": {
                        "nonModel": "Sensor"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CustomerDeviceAndTimeseriesData": {
            "name": "CustomerDeviceAndTimeseriesData",
            "fields": {
                "customerDevice": {
                    "name": "customerDevice",
                    "isArray": false,
                    "type": {
                        "nonModel": "CustomerDevice"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "timeseriesData": {
                    "name": "timeseriesData",
                    "isArray": true,
                    "type": {
                        "nonModel": "TimeseriesData"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CustomerDeviceConnection": {
            "name": "CustomerDeviceConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "CustomerDevice"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Location": {
            "name": "Location",
            "fields": {
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Sensor": {
            "name": "Sensor",
            "fields": {
                "Humidity": {
                    "name": "Humidity",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Temperature": {
                    "name": "Temperature",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "acValue": {
                    "name": "acValue",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "dcValue": {
                    "name": "dcValue",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "lightValue": {
                    "name": "lightValue",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "sensorId": {
                    "name": "sensorId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sensorType": {
                    "name": "sensorType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TimeseriesData": {
            "name": "TimeseriesData",
            "fields": {
                "Humidity": {
                    "name": "Humidity",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "SCUStatusActive": {
                    "name": "SCUStatusActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SensorId": {
                    "name": "SensorId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Temperature": {
                    "name": "Temperature",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "UUID": {
                    "name": "UUID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currentAc": {
                    "name": "currentAc",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currentDc": {
                    "name": "currentDc",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "measure_name": {
                    "name": "measure_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "time": {
                    "name": "time",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "46162770b833c393f8566e7c8d7e339a"
};