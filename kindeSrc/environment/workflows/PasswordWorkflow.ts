import {
  onNewPasswordProvidedEvent,
  WorkflowSettings,
  WorkflowTrigger,
  invalidateFormField,
} from "@kinde/infrastructure";

export const workflowSettings: WorkflowSettings = {
  id: "newPassword",
  name: "New password",
  failurePolicy: {
    action: "stop",
  },
  trigger: WorkflowTrigger.NewPasswordProvided,
  bindings: {
    "kinde.secureFetch": {}, // Required for external API calls
    "kinde.widget": {}, // Required to invalidate the form
    "kinde.localization": {}, // Required for localization
    "kinde.mfa": {}, // Required for multi-factor authentication
    "kinde.fetch": {}, // Required for external API calls
  },
};

export default async function PasswordWorkflow({
  context,
}: onNewPasswordProvidedEvent) {
  const isMinCharacters = context.auth.firstPassword.length >= 12;
  console.log("PasswordWorkflow: isMinCharacters", isMinCharacters);
  if (!isMinCharacters) {
    kinde.widget.invalidateFormField(
      "p_first_password",
      "Provide a password at least 12 characters long"
    );
  }
}
