// This matches the form schema we will use
export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  _gotcha?: string; // Honeypot
};

export async function sendContact(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    
    // Fallback logic for EmailJS could go here if needed, 
    // but the brief allows sticking to one if configured via env vars.
    // For simplicity, we prioritize Formspree if the ID exists.

    if (formspreeId) {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return { success: true, message: "Thanks for your message! I'll get back to you soon." };
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message via Formspree.");
      }
    }

    // If EmailJS was configured:
    /*
    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    if (emailJsServiceId) { ... emailjs.send(...) ... }
    */

    // If no integration is configured, simulate success for demo
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, message: "Demo mode: Message 'sent' successfully! (Configure Formspree ID to send real emails)" };
    
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    const message = error instanceof Error ? error.message : "Failed to send message. Please try again.";
    return { success: false, message };
  }
}
