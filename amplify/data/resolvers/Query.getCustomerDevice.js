import { util } from '@aws-amplify/backend-utils';

export function request(ctx) {
  const { LicenseId, DeviceId } = ctx.args;
  return {
    operation: 'Invoke',
    payload: { LicenseId, DeviceId },
  };
}

export function response(ctx) {
  const { error, result } = ctx;
  if (error) {
    util.appendError(error.message, error.type);
  }
  return result;
}
