import { Component } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { CustomerDeviceSchema } from '../../../amplify/data/resource';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent {
  private client = generateClient<CustomerDeviceSchema>();
  deviceInfo: any = null;
  error: string | null = null;
  licenseId: string = '';
  deviceId: string = '';

  async getDeviceInfo() {
    this.error = null;
    this.deviceInfo = null;

    try {
      const response = await this.client.models['CustomerDevice'].get({
        LicenseId: this.licenseId,
        DeviceId: this.deviceId
      });
      this.deviceInfo = response;
    } catch (error) {
      this.error = 'Error fetching device info: ' + (error as Error).message;
    }
  }
}
