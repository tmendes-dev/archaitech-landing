// AssessmentRequest.ts
// Model for assessment requests to ensure all key information is collected for a 2-day feedback turnaround.

export interface AssessmentRequest {
  name: string; // Name of the requester
  email: string; // Contact email
  company?: string; // Optional company name
  role?: string; // Optional role/title
  challenge: string; // Main technical/business challenge
  currentStack?: string; // Current tech stack (optional)
  urgency?: string; // Timeline or urgency (optional)
  goals?: string; // Desired outcomes or goals (optional)
  context?: string; // Any additional context (optional)
}

// Example usage:
// const request: AssessmentRequest = {
//   name: "Jane Doe",
//   email: "jane@company.com",
//   company: "Acme Corp",
//   role: "CTO",
//   challenge: "Scaling our ML pipeline for real-time inference.",
//   currentStack: ".NET, Azure, Python",
//   urgency: "Need results in 2 weeks",
//   goals: "Reduce latency, improve observability",
//   context: "We have a small in-house team, but lack MLOps experience."
// };
