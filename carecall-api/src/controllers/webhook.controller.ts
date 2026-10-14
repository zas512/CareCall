import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('api/webhooks/vapi')
export class WebhookController {
  @Post()
  async handleVapiWebhook(@Body() event: any) {
    // Real: verify Vapi HMAC, process call status/transcript updates
    // Must be idempotent — duplicate events must not create duplicates
    return { received: true, idempotent: true };
  }
}
