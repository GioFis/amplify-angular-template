import json
import boto3
from decimal import Decimal
from datetime import datetime

class DecimalEncoder(json.JSONEncoder):
    """Custom encoder for json.dumps() to handle Decimal types."""
    def default(self, obj):
        if isinstance(obj, Decimal):
            return str(obj)
        return super(DecimalEncoder, self).default(obj)

def lambda_handler(event, context):

    dynamodb = boto3.resource('dynamodb')
    # Specify the table name
    table_name = 'CustomerDevice'
    # Get the table
    table = dynamodb.Table(table_name)
    # Define the LicenseId and DeviceId you want to query
    # At the beginning of your lambda_handler function, extract DeviceId and LicenseId from the event:

    LicenseId = event['LicenseId']
    DeviceId = event['DeviceId']
    #LicenseId = 'LH123'
    #DeviceId = '1'

    # Construct the key for the get_item call
    key = {'LicenseId': LicenseId, 'DeviceId': DeviceId}
    
    print(type(key))
    
    # Attempt to get the item from the table
    try:
        response = table.get_item(Key=key)
    except Exception as e:
        print(f"Error getting item: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps({"error": f"Failed to retrieve item: {str(e)}"})
        }
    
    # Check if the item was found
    if 'Item' not in response:
        return {
            'statusCode': 404,
            'body': json.dumps({"error": "Item not found"})
        }
    
    
    # Extract the item from the response
    item = response['Item']

    # Parse Location and Sensor strings into dictionaries
    createdAt_iso = datetime.strptime(item['createdAt'], "%Y-%m-%dT%H:%M:%SZ").isoformat()
    
# Prepare the response body
    response_body = {
        'DeviceId': item['DeviceId'],
        'LicenseId': item['LicenseId'],
        'active': item['Active'],
        'createdAt': createdAt_iso,
        'UUID': item['UUID'],
        'location': {
            'latitude': float(item['Location']['latitude']),
            'longitude': float(item['Location']['longitude'])
        },
        'roleType': item['RoleType'],
        'sensor': {
            'acValue': float(item['Sensor']['AcValue']),
            'dcValue': float(item['Sensor']['DcValue']),
            'Humidity': float(item['Sensor']['Humidity']),
            'lightValue': bool(item['Sensor']['LightValue']),
            'sensorId': int(item['Sensor']['SensorId']),
            'sensorType': item['Sensor']['SensorType'],
            'Temperature': float(item['Sensor']['Temperature'])
        }
    }
    
    # Modify the last part of your Lambda function
    return {
        'statusCode': 200,
        'body': json.dumps({"getCustomerDevice": response_body  }, cls=DecimalEncoder)
    }


    
