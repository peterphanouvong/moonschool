import {
  onUserPreMFA,
  WorkflowSettings,
  WorkflowTrigger,
  setEnforcementPolicy,
  createKindeAPI,
} from "@kinde/infrastructure";

export const workflowSettings: WorkflowSettings = {
  id: "preMFA",
  name: "Before MFA",
  failurePolicy: {
    action: "stop",
  },
  trigger: WorkflowTrigger.UserPreMFA,
  bindings: {
    "kinde.secureFetch": {}, // Required for external API calls
    "kinde.widget": {}, // Required to invalidate the form
    "kinde.localization": {}, // Required for localization
    "kinde.mfa": {}, // Required for multi-factor authentication
    "kinde.fetch": {}, // Required for external API calls
  },
};

export default async function MFAWorkflow(event: onUserPreMFA) {
  console.log("PreMFAWorkflow: event", event);
  kinde.mfa.setEnforcementPolicy("skip");
}
