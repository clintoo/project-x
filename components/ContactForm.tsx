"use client";

import { FormEvent, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const fieldClass =
  "w-full rounded-lg border border-white/[0.2] bg-[#10132E] px-4 py-3 text-sm text-white outline-none focus:border-purple/60";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not send.");
      }

      if (data.mailto) {
        window.location.href = data.mailto;
      }

      setStatus("sent");
      setMessage(
        data.mailto
          ? "Opening your email app with the message filled in."
          : "Thanks — I’ll get back to you shortly.",
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Try email instead.",
      );
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-xl mx-auto mt-10 space-y-4 text-left"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm text-white-200">
          Name
          <input
            name="name"
            required
            className={`${fieldClass} mt-2`}
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm text-white-200">
          Email
          <input
            name="email"
            type="email"
            required
            className={`${fieldClass} mt-2`}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block text-sm text-white-200">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className={`${fieldClass} mt-2 resize-y`}
          placeholder="What are you building, and how can I help?"
        />
      </label>
      <div className="flex justify-center">
        <MagicButton
          title={status === "sending" ? "Sending..." : "Send message"}
          icon={<FaLocationArrow />}
          position="right"
          type="submit"
          disabled={status === "sending"}
        />
      </div>
      {message && (
        <p
          className={`text-center text-sm ${
            status === "error" ? "text-red-300" : "text-purple"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
