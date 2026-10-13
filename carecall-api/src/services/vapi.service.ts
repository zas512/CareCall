import { Injectable } from '@nestjs/common';
@Injectable()
export class VapiService {}

// 5-minute hard cap (300s) enforced server-side; never rely on Vapi/model alone
// VAD silence timeout >= 5000ms
Initiate -> stream -> transcript + recording -> summarize
