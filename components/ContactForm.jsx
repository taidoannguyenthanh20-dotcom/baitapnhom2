"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm"
    >
      <div>
        <label
          htmlFor="name"
          className="text-sm font-semibold"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-purple-400"
          placeholder="Your name"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="email"
          className="text-sm font-semibold"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-purple-400"
          placeholder="your@email.com"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-sm font-semibold"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-purple-400"
          placeholder="Write your message..."
        />
      </div>

      <button
        type="submit"
        className="mt-6 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary)]"
      >
        Send Message
      </button>

      {submitted && (
        <p className="mt-5 rounded-xl bg-[var(--primary-light)] p-4 text-sm font-medium text-purple-700">
          Thank you! Your message has been submitted successfully.
        </p>
      )}
    </form>
  );
}