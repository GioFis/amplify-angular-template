import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerCustomerDevice = {
  readonly DeviceId?: string | null;
  readonly LicenseId?: string | null;
  readonly UUID?: string | null;
  readonly active?: boolean | null;
  readonly createdAt?: string | null;
  readonly location?: Location | null;
  readonly roleType?: string | null;
  readonly sensor?: Sensor | null;
}

type LazyCustomerDevice = {
  readonly DeviceId?: string | null;
  readonly LicenseId?: string | null;
  readonly UUID?: string | null;
  readonly active?: boolean | null;
  readonly createdAt?: string | null;
  readonly location?: Location | null;
  readonly roleType?: string | null;
  readonly sensor?: Sensor | null;
}

export declare type CustomerDevice = LazyLoading extends LazyLoadingDisabled ? EagerCustomerDevice : LazyCustomerDevice

export declare const CustomerDevice: (new (init: ModelInit<CustomerDevice>) => CustomerDevice)

type EagerCustomerDeviceAndTimeseriesData = {
  readonly customerDevice?: CustomerDevice | null;
  readonly timeseriesData?: (TimeseriesData | null)[] | null;
}

type LazyCustomerDeviceAndTimeseriesData = {
  readonly customerDevice?: CustomerDevice | null;
  readonly timeseriesData?: (TimeseriesData | null)[] | null;
}

export declare type CustomerDeviceAndTimeseriesData = LazyLoading extends LazyLoadingDisabled ? EagerCustomerDeviceAndTimeseriesData : LazyCustomerDeviceAndTimeseriesData

export declare const CustomerDeviceAndTimeseriesData: (new (init: ModelInit<CustomerDeviceAndTimeseriesData>) => CustomerDeviceAndTimeseriesData)

type EagerCustomerDeviceConnection = {
  readonly items?: (CustomerDevice | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyCustomerDeviceConnection = {
  readonly items?: (CustomerDevice | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type CustomerDeviceConnection = LazyLoading extends LazyLoadingDisabled ? EagerCustomerDeviceConnection : LazyCustomerDeviceConnection

export declare const CustomerDeviceConnection: (new (init: ModelInit<CustomerDeviceConnection>) => CustomerDeviceConnection)

type EagerLocation = {
  readonly latitude?: string | null;
  readonly longitude?: string | null;
}

type LazyLocation = {
  readonly latitude?: string | null;
  readonly longitude?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerSensor = {
  readonly Humidity?: number | null;
  readonly Temperature?: number | null;
  readonly acValue?: number | null;
  readonly dcValue?: number | null;
  readonly lightValue?: boolean | null;
  readonly sensorId?: number | null;
  readonly sensorType?: string | null;
}

type LazySensor = {
  readonly Humidity?: number | null;
  readonly Temperature?: number | null;
  readonly acValue?: number | null;
  readonly dcValue?: number | null;
  readonly lightValue?: boolean | null;
  readonly sensorId?: number | null;
  readonly sensorType?: string | null;
}

export declare type Sensor = LazyLoading extends LazyLoadingDisabled ? EagerSensor : LazySensor

export declare const Sensor: (new (init: ModelInit<Sensor>) => Sensor)

type EagerTimeseriesData = {
  readonly Humidity?: number | null;
  readonly SCUStatusActive?: boolean | null;
  readonly SensorId?: string | null;
  readonly Temperature?: number | null;
  readonly UUID?: string | null;
  readonly currentAc?: number | null;
  readonly currentDc?: number | null;
  readonly measure_name?: string | null;
  readonly time?: string | null;
}

type LazyTimeseriesData = {
  readonly Humidity?: number | null;
  readonly SCUStatusActive?: boolean | null;
  readonly SensorId?: string | null;
  readonly Temperature?: number | null;
  readonly UUID?: string | null;
  readonly currentAc?: number | null;
  readonly currentDc?: number | null;
  readonly measure_name?: string | null;
  readonly time?: string | null;
}

export declare type TimeseriesData = LazyLoading extends LazyLoadingDisabled ? EagerTimeseriesData : LazyTimeseriesData

export declare const TimeseriesData: (new (init: ModelInit<TimeseriesData>) => TimeseriesData)

