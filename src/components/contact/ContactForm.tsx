"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { FormField } from "./FormField";
import { FormTextarea } from "./FormTextarea";

type ContactFormValues = { name: string; email: string; message: string };
type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>> & { form?: string };
type SubmitState = "idle" | "submitting" | "success" | "error";

const initialValues: ContactFormValues = { name: "", email: "", message: "" };
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues]       = useState<ContactFormValues>(initialValues);
  const [errors, setErrors]       = useState<ContactFormErrors>({});
  const [submitState, setSubmit]  = useState<SubmitState>("idle");
  const formRef   = useRef<HTMLDivElement>(null);
  const titleRef  = useRef<HTMLHeadingElement>(null);
  const fieldsRef = useRef<HTMLFormElement>(null);
  const btnRef    = useRef<HTMLButtonElement>(null);

  /* ─── GSAP entrance animation ─── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(titleRef.current,  { y: 32,  autoAlpha: 0 });
      gsap.set(fieldsRef.current, { y: 40,  autoAlpha: 0 });
      gsap.set(btnRef.current,    { y: 20,  autoAlpha: 0, scale: 0.96 });

      tl.to(titleRef.current,  { y: 0, autoAlpha: 1, duration: 0.7 }, 0.1)
        .to(fieldsRef.current, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.28)
        .to(btnRef.current,    { y: 0, autoAlpha: 1, scale: 1, duration: 0.6 }, 0.44);
    }, formRef);
    return () => ctx.revert();
  }, []);

  /* ─── 3D tilt on the card ─── */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = formRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = ((e.clientX - rect.left) / rect.width  - 0.5) * 6;
    const dy = ((e.clientY - rect.top)  / rect.height - 0.5) * 4;
    gsap.to(formRef.current, {
      rotateY: dx, rotateX: -dy, duration: 0.5,
      ease: "power2.out", transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(formRef.current, {
      rotateX: 0, rotateY: 0, duration: 0.7, ease: "power3.out",
    });
  };

  const isSubmitting = submitState === "submitting";

  const validate = useMemo(() => (v: ContactFormValues) => {
    const e: ContactFormErrors = {};
    if (!v.name.trim())        e.name    = "Please enter your name.";
    if (!v.email.trim())       e.email   = "Please enter your email.";
    else if (!emailRegex.test(v.email)) e.email = "Please enter a valid email.";
    if (!v.message.trim())     e.message = "Please tell us about your project.";
    else if (v.message.length < 20)    e.message = "Please share a bit more detail (at least 20 chars).";
    return e;
  }, []);

  const handleChange = <K extends keyof ContactFormValues>(field: K, value: string) => {
    setValues((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined, form: undefined }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) { setErrors(errs); setSubmit("error"); return; }

    try {
      setSubmit("submitting");
      const res    = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) { setSubmit("error"); setErrors({ form: result.error ?? "Unable to send. Please try WhatsApp." }); return; }
      setSubmit("success");
      setValues(initialValues);
      setErrors({});
    } catch { setSubmit("error"); setErrors({ form: "Something went wrong. Try WhatsApp instead." }); }
  };

  return (
    <div
      ref={formRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_32px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:p-10"
    >
      {/* Top glow accent */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative z-10" style={{ transform: "translateZ(10px)" }}>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Project Inquiry</p>
        <h2 ref={titleRef}
          className="mt-3 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold uppercase leading-tight tracking-[-0.03em] text-white">
          Tell us what you&apos;re building.
        </h2>

        <form ref={fieldsRef} className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label="Name" name="name" placeholder="Your name"
              value={values.name} onChange={(e) => handleChange("name", e.target.value)}
              error={errors.name} required autoComplete="name"
            />
            <FormField
              label="Email" name="email" type="email" placeholder="you@company.com"
              value={values.email} onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email} required autoComplete="email"
            />
          </div>

          <FormTextarea
            label="Message" name="message"
            placeholder="Share your goals, timeline, and what success looks like."
            value={values.message} onChange={(e) => handleChange("message", e.target.value)}
            error={errors.message} required rows={5}
          />

          {submitState === "success" && (
            <p className="rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-sm text-primary">
              ✓ Message sent! We&apos;ll get back to you within 24 hours.
            </p>
          )}
          {errors.form && (
            <p className="rounded-xl border border-white/20 bg-white/[0.03] px-5 py-3 text-sm text-white/75">
              {errors.form}
            </p>
          )}

          <button
            ref={btnRef}
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full overflow-hidden rounded-xl border border-primary bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(51,221,102,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="relative z-10">
              {isSubmitting ? "Sending…" : "Send Message →"}
            </span>
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
        </form>
      </div>
    </div>
  );
}
