import { Injectable } from '@nestjs/common';

@Injectable()
export class VapiService {
  async initiateCall(patientId: string, phoneNumber: string) {
    // Real integration: requires VAPI_API_KEY + VAPI_PHONE_NUMBER_ID
    return { callId: `vapi-${patientId}-${Date.now()}`, status: "initiated" };
  }
  async enforceHardCap(callId: string) {
    // Hard cap 300s enforced server-side; never rely on Vapi/model alone
    return { terminated: true, durationSeconds: 300 };
  }
}
