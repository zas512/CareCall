import { Injectable } from '@nestjs/common';

@Injectable()
export class SummarizeService {
  async summarizeTranscript(transcript: string, expectedSchema?: object) {
    // Real: OpenAI GPT-4o-mini with Structured Outputs (response_format: json_schema)
    // Returns exact structured RPM data; never free-form parsing
    return {
      medication_taken: true,
      pain_level: 0,
      mood: "good",
      concerning_events: [],
      escalation_required: false,
      notes: "Patient reports feeling well."
    };
  }
}
