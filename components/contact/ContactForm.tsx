"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Unable to submit");
      form.reset();
      setStatus("Thank you. Your enquiry has been received.");
    } catch {
      setStatus("The form could not be submitted. Check the database connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-xl shadow-primary/5 sm:p-8 ">
      <div className="grid gap-6 sm:grid-cols-2 py-6">
        <label className="form-control mb-2">
          <span className="label-text mb-2 font-semibold">Name *</span>
          <input required name="name" className="input input-bordered w-full" placeholder="Your name" />
        </label>
        <label className="form-control mb-3">
          <span className="label-text mb-2 font-semibold">Email *</span>
          <input required type="email" name="email" className="input input-bordered w-full" placeholder="you@example.com" />
        </label>
        <label className="form-control mb-2">
          <span className="label-text mb-2 font-semibold">Phone</span>
          <input name="phone" className="input input-bordered w-full" placeholder="Phone number" />
        </label>
        <label className="form-control mb-2">
          <span className="label-text mb-2 font-semibold">Subject</span>
          <input name="subject" className="input input-bordered w-full" placeholder="Product enquiry" />
        </label>
      </div>
      <label className="form-control mt-5">
        <span className="label-text mb-2 font-semibold">Message *</span>
        <textarea required name="message" className="textarea textarea-bordered min-h-36 w-full" placeholder="How can Advance Nanomeds help?" />
      </label>
      <button disabled={loading} className="btn btn-primary mt-8 rounded-full px-7" type="submit">{loading ? "Sending..." : "Send enquiry"} <Send size={16} /></button>
      {status && <div className="mt-4 text-sm text-base-content/65">{status}</div>}
    </form>
  );
}
