"use client";

import { FormEvent } from "react";
import { Arrow } from "@/components/Icons";

const contactEmail = "alizataha.wiseparenting@gmail.com";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      "",
      "Message:",
      message || "I would like to learn more about Wise Parenting.",
    ].filter(Boolean).join("\n");

    const params = new URLSearchParams({
      subject: "Wise Parenting enquiry",
      body,
    });

    window.location.href = `mailto:${contactEmail}?${params.toString()}`;
  }

  return (
    <form className="contact-form reveal" aria-label="Contact form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label><span>Your name</span><input type="text" name="name" placeholder="How should I address you?" /></label>
        <label><span>Email address</span><input type="email" name="email" placeholder="you@example.com" /></label>
      </div>
      <label><span>What would you like support with?</span><textarea name="message" rows={4} placeholder="Share only what feels comfortable..." /></label>
      <button className="button button-light" type="submit">Send a note <Arrow /></button>
      <small>This opens a prefilled email so you can send your note directly.</small>
    </form>
  );
}
