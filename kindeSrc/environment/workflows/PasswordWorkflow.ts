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
  const isMinCharacters = context.auth.firstPassword.length >= 50;
  console.log("PasswordWorkflow: isMinCharacters", isMinCharacters);

  try {
    kinde.widget.invalidateFormField(
      "p_password_1",
      "Provide a password at least 50 characters long"
    );
  } catch (error) {
    console.error("PasswordWorkflow: error", error);
  }

  try {
    invalidateFormField(
      "p_password_1",
      "Provide a password at least 50 characters long"
    );
  } catch (error) {
    console.error("PasswordWorkflow: error", error);
  }
}
