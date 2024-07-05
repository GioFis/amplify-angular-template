// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CustomerDevice, CustomerDeviceAndTimeseriesData, CustomerDeviceConnection, Location, Sensor, TimeseriesData } = initSchema(schema);

export {
  CustomerDevice,
  CustomerDeviceAndTimeseriesData,
  CustomerDeviceConnection,
  Location,
  Sensor,
  TimeseriesData
};