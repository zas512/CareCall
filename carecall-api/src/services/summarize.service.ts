import { Injectable } from '@nestjs/common';
@Injectable()
export class SummarizeService {}

// GPT-4o-mini Structured Outputs for RPM data
// Never rely on LLM alone for escalation — combine with keyword fallback
response_format: json_schema -> DailySummary JSON -> never parse free-form
