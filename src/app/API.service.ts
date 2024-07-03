/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateCustomerDevice: OnCreateCustomerDeviceSubscription;
  onDeleteCustomerDevice: OnDeleteCustomerDeviceSubscription;
  onUpdateCustomerDevice: OnUpdateCustomerDeviceSubscription;
};

export type CreateCustomerDeviceInput = {
  DeviceId: string;
  LicenseId: string;
};

export type CustomerDevice = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: Location | null;
  roleType?: string | null;
  sensor?: Sensor | null;
};

export type Location = {
  __typename: "Location";
  latitude?: string | null;
  longitude?: string | null;
};

export type Sensor = {
  __typename: "Sensor";
  Humidity?: number | null;
  Temperature?: number | null;
  acValue?: number | null;
  dcValue?: number | null;
  lightValue?: boolean | null;
  sensorId?: number | null;
  sensorType?: string | null;
};

export type DeleteCustomerDeviceInput = {
  DeviceId: string;
  LicenseId: string;
};

export type UpdateCustomerDeviceInput = {
  DeviceId: string;
  LicenseId: string;
};

export type CustomerDeviceAndTimeseriesData = {
  __typename: "CustomerDeviceAndTimeseriesData";
  customerDevice?: CustomerDevice | null;
  timeseriesData?: Array<TimeseriesData | null> | null;
};

export type TimeseriesData = {
  __typename: "TimeseriesData";
  Humidity?: number | null;
  SCUStatusActive?: boolean | null;
  SensorId?: string | null;
  Temperature?: number | null;
  UUID?: string | null;
  currentAc?: number | null;
  currentDc?: number | null;
  measure_name?: string | null;
  time?: string | null;
};

export type TableCustomerDeviceFilterInput = {
  DeviceId?: TableStringFilterInput | null;
  LicenseId?: TableStringFilterInput | null;
};

export type TableStringFilterInput = {
  attributeExists?: boolean | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type CustomerDeviceConnection = {
  __typename: "CustomerDeviceConnection";
  items?: Array<CustomerDevice | null> | null;
  nextToken?: string | null;
};

export type CreateCustomerDeviceMutation = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: {
    __typename: "Location";
    latitude?: string | null;
    longitude?: string | null;
  } | null;
  roleType?: string | null;
  sensor?: {
    __typename: "Sensor";
    Humidity?: number | null;
    Temperature?: number | null;
    acValue?: number | null;
    dcValue?: number | null;
    lightValue?: boolean | null;
    sensorId?: number | null;
    sensorType?: string | null;
  } | null;
};

export type DeleteCustomerDeviceMutation = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: {
    __typename: "Location";
    latitude?: string | null;
    longitude?: string | null;
  } | null;
  roleType?: string | null;
  sensor?: {
    __typename: "Sensor";
    Humidity?: number | null;
    Temperature?: number | null;
    acValue?: number | null;
    dcValue?: number | null;
    lightValue?: boolean | null;
    sensorId?: number | null;
    sensorType?: string | null;
  } | null;
};

export type UpdateCustomerDeviceMutation = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: {
    __typename: "Location";
    latitude?: string | null;
    longitude?: string | null;
  } | null;
  roleType?: string | null;
  sensor?: {
    __typename: "Sensor";
    Humidity?: number | null;
    Temperature?: number | null;
    acValue?: number | null;
    dcValue?: number | null;
    lightValue?: boolean | null;
    sensorId?: number | null;
    sensorType?: string | null;
  } | null;
};

export type GetCustomerDeviceQuery = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: {
    __typename: "Location";
    latitude?: string | null;
    longitude?: string | null;
  } | null;
  roleType?: string | null;
  sensor?: {
    __typename: "Sensor";
    Humidity?: number | null;
    Temperature?: number | null;
    acValue?: number | null;
    dcValue?: number | null;
    lightValue?: boolean | null;
    sensorId?: number | null;
    sensorType?: string | null;
  } | null;
};

export type GetCustomerDeviceAndTimeseriesDataQuery = {
  __typename: "CustomerDeviceAndTimeseriesData";
  customerDevice?: {
    __typename: "CustomerDevice";
    DeviceId?: string | null;
    LicenseId?: string | null;
    UUID?: string | null;
    active?: boolean | null;
    createdAt?: string | null;
    roleType?: string | null;
  } | null;
  timeseriesData?: Array<{
    __typename: "TimeseriesData";
    Humidity?: number | null;
    SCUStatusActive?: boolean | null;
    SensorId?: string | null;
    Temperature?: number | null;
    UUID?: string | null;
    currentAc?: number | null;
    currentDc?: number | null;
    measure_name?: string | null;
    time?: string | null;
  } | null> | null;
};

export type GetCustomerDevicesByLicenseQuery = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: {
    __typename: "Location";
    latitude?: string | null;
    longitude?: string | null;
  } | null;
  roleType?: string | null;
  sensor?: {
    __typename: "Sensor";
    Humidity?: number | null;
    Temperature?: number | null;
    acValue?: number | null;
    dcValue?: number | null;
    lightValue?: boolean | null;
    sensorId?: number | null;
    sensorType?: string | null;
  } | null;
};

export type GetTimeseriesDataQuery = {
  __typename: "TimeseriesData";
  Humidity?: number | null;
  SCUStatusActive?: boolean | null;
  SensorId?: string | null;
  Temperature?: number | null;
  UUID?: string | null;
  currentAc?: number | null;
  currentDc?: number | null;
  measure_name?: string | null;
  time?: string | null;
};

export type ListCustomerDevicesQuery = {
  __typename: "CustomerDeviceConnection";
  items?: Array<{
    __typename: "CustomerDevice";
    DeviceId?: string | null;
    LicenseId?: string | null;
    UUID?: string | null;
    active?: boolean | null;
    createdAt?: string | null;
    roleType?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateCustomerDeviceSubscription = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: {
    __typename: "Location";
    latitude?: string | null;
    longitude?: string | null;
  } | null;
  roleType?: string | null;
  sensor?: {
    __typename: "Sensor";
    Humidity?: number | null;
    Temperature?: number | null;
    acValue?: number | null;
    dcValue?: number | null;
    lightValue?: boolean | null;
    sensorId?: number | null;
    sensorType?: string | null;
  } | null;
};

export type OnDeleteCustomerDeviceSubscription = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: {
    __typename: "Location";
    latitude?: string | null;
    longitude?: string | null;
  } | null;
  roleType?: string | null;
  sensor?: {
    __typename: "Sensor";
    Humidity?: number | null;
    Temperature?: number | null;
    acValue?: number | null;
    dcValue?: number | null;
    lightValue?: boolean | null;
    sensorId?: number | null;
    sensorType?: string | null;
  } | null;
};

export type OnUpdateCustomerDeviceSubscription = {
  __typename: "CustomerDevice";
  DeviceId?: string | null;
  LicenseId?: string | null;
  UUID?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  location?: {
    __typename: "Location";
    latitude?: string | null;
    longitude?: string | null;
  } | null;
  roleType?: string | null;
  sensor?: {
    __typename: "Sensor";
    Humidity?: number | null;
    Temperature?: number | null;
    acValue?: number | null;
    dcValue?: number | null;
    lightValue?: boolean | null;
    sensorId?: number | null;
    sensorType?: string | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCustomerDevice(
    input: CreateCustomerDeviceInput
  ): Promise<CreateCustomerDeviceMutation> {
    const statement = `mutation CreateCustomerDevice($input: CreateCustomerDeviceInput!) {
        createCustomerDevice(input: $input) {
          __typename
          DeviceId
          LicenseId
          UUID
          active
          createdAt
          location {
            __typename
            latitude
            longitude
          }
          roleType
          sensor {
            __typename
            Humidity
            Temperature
            acValue
            dcValue
            lightValue
            sensorId
            sensorType
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCustomerDeviceMutation>response.data.createCustomerDevice;
  }
  async DeleteCustomerDevice(
    input: DeleteCustomerDeviceInput
  ): Promise<DeleteCustomerDeviceMutation> {
    const statement = `mutation DeleteCustomerDevice($input: DeleteCustomerDeviceInput!) {
        deleteCustomerDevice(input: $input) {
          __typename
          DeviceId
          LicenseId
          UUID
          active
          createdAt
          location {
            __typename
            latitude
            longitude
          }
          roleType
          sensor {
            __typename
            Humidity
            Temperature
            acValue
            dcValue
            lightValue
            sensorId
            sensorType
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCustomerDeviceMutation>response.data.deleteCustomerDevice;
  }
  async UpdateCustomerDevice(
    input: UpdateCustomerDeviceInput
  ): Promise<UpdateCustomerDeviceMutation> {
    const statement = `mutation UpdateCustomerDevice($input: UpdateCustomerDeviceInput!) {
        updateCustomerDevice(input: $input) {
          __typename
          DeviceId
          LicenseId
          UUID
          active
          createdAt
          location {
            __typename
            latitude
            longitude
          }
          roleType
          sensor {
            __typename
            Humidity
            Temperature
            acValue
            dcValue
            lightValue
            sensorId
            sensorType
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCustomerDeviceMutation>response.data.updateCustomerDevice;
  }
  async GetCustomerDevice(
    DeviceId?: string,
    LicenseId?: string
  ): Promise<GetCustomerDeviceQuery> {
    const statement = `query GetCustomerDevice($DeviceId: String, $LicenseId: String) {
        getCustomerDevice(DeviceId: $DeviceId, LicenseId: $LicenseId) {
          __typename
          DeviceId
          LicenseId
          UUID
          active
          createdAt
          location {
            __typename
            latitude
            longitude
          }
          roleType
          sensor {
            __typename
            Humidity
            Temperature
            acValue
            dcValue
            lightValue
            sensorId
            sensorType
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (DeviceId) {
      gqlAPIServiceArguments.DeviceId = DeviceId;
    }
    if (LicenseId) {
      gqlAPIServiceArguments.LicenseId = LicenseId;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerDeviceQuery>response.data.getCustomerDevice;
  }
  async GetCustomerDeviceAndTimeseriesData(
    DeviceId?: string,
    LicenseId?: string
  ): Promise<GetCustomerDeviceAndTimeseriesDataQuery> {
    const statement = `query GetCustomerDeviceAndTimeseriesData($DeviceId: String, $LicenseId: String) {
        getCustomerDeviceAndTimeseriesData(DeviceId: $DeviceId, LicenseId: $LicenseId) {
          __typename
          customerDevice {
            __typename
            DeviceId
            LicenseId
            UUID
            active
            createdAt
            roleType
          }
          timeseriesData {
            __typename
            Humidity
            SCUStatusActive
            SensorId
            Temperature
            UUID
            currentAc
            currentDc
            measure_name
            time
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (DeviceId) {
      gqlAPIServiceArguments.DeviceId = DeviceId;
    }
    if (LicenseId) {
      gqlAPIServiceArguments.LicenseId = LicenseId;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerDeviceAndTimeseriesDataQuery>(
      response.data.getCustomerDeviceAndTimeseriesData
    );
  }
  async GetCustomerDevicesByLicense(
    LicenseId: string
  ): Promise<Array<GetCustomerDevicesByLicenseQuery>> {
    const statement = `query GetCustomerDevicesByLicense($LicenseId: String!) {
        getCustomerDevicesByLicense(LicenseId: $LicenseId) {
          __typename
          DeviceId
          LicenseId
          UUID
          active
          createdAt
          location {
            __typename
            latitude
            longitude
          }
          roleType
          sensor {
            __typename
            Humidity
            Temperature
            acValue
            dcValue
            lightValue
            sensorId
            sensorType
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      LicenseId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<GetCustomerDevicesByLicenseQuery>>(
      response.data.getCustomerDevicesByLicense
    );
  }
  async GetTimeseriesData(
    DeviceId?: string,
    LicenseId?: string
  ): Promise<Array<GetTimeseriesDataQuery>> {
    const statement = `query GetTimeseriesData($DeviceId: String, $LicenseId: String) {
        getTimeseriesData(DeviceId: $DeviceId, LicenseId: $LicenseId) {
          __typename
          Humidity
          SCUStatusActive
          SensorId
          Temperature
          UUID
          currentAc
          currentDc
          measure_name
          time
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (DeviceId) {
      gqlAPIServiceArguments.DeviceId = DeviceId;
    }
    if (LicenseId) {
      gqlAPIServiceArguments.LicenseId = LicenseId;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<GetTimeseriesDataQuery>>response.data.getTimeseriesData;
  }
  async ListCustomerDevices(
    filter?: TableCustomerDeviceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCustomerDevicesQuery> {
    const statement = `query ListCustomerDevices($filter: TableCustomerDeviceFilterInput, $limit: Int, $nextToken: String) {
        listCustomerDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            DeviceId
            LicenseId
            UUID
            active
            createdAt
            roleType
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCustomerDevicesQuery>response.data.listCustomerDevices;
  }
  OnCreateCustomerDeviceListener(
    DeviceId?: string,
    LicenseId?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateCustomerDevice">
    >
  > {
    const statement = `subscription OnCreateCustomerDevice($DeviceId: String, $LicenseId: String) {
        onCreateCustomerDevice(DeviceId: $DeviceId, LicenseId: $LicenseId) {
          __typename
          DeviceId
          LicenseId
          UUID
          active
          createdAt
          location {
            __typename
            latitude
            longitude
          }
          roleType
          sensor {
            __typename
            Humidity
            Temperature
            acValue
            dcValue
            lightValue
            sensorId
            sensorType
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (DeviceId) {
      gqlAPIServiceArguments.DeviceId = DeviceId;
    }
    if (LicenseId) {
      gqlAPIServiceArguments.LicenseId = LicenseId;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateCustomerDevice">
      >
    >;
  }

  OnDeleteCustomerDeviceListener(
    DeviceId?: string,
    LicenseId?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteCustomerDevice">
    >
  > {
    const statement = `subscription OnDeleteCustomerDevice($DeviceId: String, $LicenseId: String) {
        onDeleteCustomerDevice(DeviceId: $DeviceId, LicenseId: $LicenseId) {
          __typename
          DeviceId
          LicenseId
          UUID
          active
          createdAt
          location {
            __typename
            latitude
            longitude
          }
          roleType
          sensor {
            __typename
            Humidity
            Temperature
            acValue
            dcValue
            lightValue
            sensorId
            sensorType
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (DeviceId) {
      gqlAPIServiceArguments.DeviceId = DeviceId;
    }
    if (LicenseId) {
      gqlAPIServiceArguments.LicenseId = LicenseId;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteCustomerDevice">
      >
    >;
  }

  OnUpdateCustomerDeviceListener(
    DeviceId?: string,
    LicenseId?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateCustomerDevice">
    >
  > {
    const statement = `subscription OnUpdateCustomerDevice($DeviceId: String, $LicenseId: String) {
        onUpdateCustomerDevice(DeviceId: $DeviceId, LicenseId: $LicenseId) {
          __typename
          DeviceId
          LicenseId
          UUID
          active
          createdAt
          location {
            __typename
            latitude
            longitude
          }
          roleType
          sensor {
            __typename
            Humidity
            Temperature
            acValue
            dcValue
            lightValue
            sensorId
            sensorType
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (DeviceId) {
      gqlAPIServiceArguments.DeviceId = DeviceId;
    }
    if (LicenseId) {
      gqlAPIServiceArguments.LicenseId = LicenseId;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateCustomerDevice">
      >
    >;
  }
}
