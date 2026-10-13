import { Controller, Post, Body, Headers, HttpCode } from '@nestjs/common';
@Controller('api/webhooks')
export class WebhookController {
  @Post('vapi')
  @HttpCode(200)
  async vapiWebhook(@Body() body: any, @Headers('x-vapi-signature') sig?: string) {
    // HMAC verification required; idempotent; enforce 5-min cap
  }
  @Post('twilio')
  @HttpCode(200)
  async twilioWebhook(@Body() body: any, @Headers('x-twilio-signature') sig?: string) {
  }
}
