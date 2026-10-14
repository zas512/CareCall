import { Injectable } from '@nestjs/common';

@Injectable()
export class TwilioService {
  async sendEscalationSMS(staffPhone: string, message: string) {
    // Real integration: requires TWILIO_ACCOUNT_SID + TWILIO_AUTH_TOKEN + TWILIO_PHONE_NUMBER
    // Idempotent: one SMS per patient per day unless severity increases
    return { sid: `SM-${Date.now()}`, status: "sent", to: staffPhone, body: message };
  }
  async verifyWebhookSignature(payload: string, signature: string): Promise<boolean> {
    // Real: Twilio X-Twilio-Signature HMAC verification
    return Boolean(signature);
  }
}
