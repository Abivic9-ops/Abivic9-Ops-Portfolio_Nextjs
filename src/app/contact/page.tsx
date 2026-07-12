"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Loader2,
  Clock,
  MessageCircle,
} from "lucide-react";

import { SITE } from "@/lib/site";
import { sendContact } from "@/lib/sendContact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  details: z.string().min(10, "Please provide at least 10 characters."),
  _gotcha: z.string().optional(),
});

const SERVICE_OPTIONS = [
  "Full stack web app build",
  "Product / MVP development",
  "Frontend & design systems",
  "Technical partnership / consulting",
  "Something else",
];

const CONTACT_CHANNELS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: "+254 7XX XXX XXX", href: "tel:+254700000000" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya · Available worldwide" },
  { icon: Clock, label: "Availability", value: "Open to contract & full-time roles" },
];

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      details: "",
      _gotcha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    if (values._gotcha) return;
    setIsPending(true);

    const result = await sendContact({
      name: values.name,
      email: values.email,
      subject: values.service,
      message: values.details,
    });

    if (result.success) {
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(result.message);
    }

    setIsPending(false);
  }

  return (
    <div className="min-h-screen">
       <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* ─── Left column — Info ─── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">Available 24/7 — Let&apos;s Build?</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Let&apos;s Build Your{" "}
                <span className="text-primary">Digital</span> Future
              </h1>

              {/* Supporting copy */}
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Ready to launch your next project? Whether you&apos;re hiring for a full-stack role,
                need a custom product built end-to-end, or want a technical partner who ships —
                I&apos;d love to hear what you&apos;re building. Tell me about it and I&apos;ll get
                back to you within 24 hours.
              </p>

              {/* Contact channels */}
              <div className="space-y-5">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const isLink = !!channel.href;
                  const Wrapper = isLink ? motion.a : motion.div;

                  return (
                    <Wrapper
                      key={channel.label}
                      {...(isLink ? { href: channel.href } : {})}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {channel.label}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {channel.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </motion.div>

            {/* ─── Right column — Form card ─── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-primary rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(34,211,117,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]">
                <h2 className="text-2xl font-bold text-primary-foreground mb-8">
                  Drop Me a Message
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    {/* Honeypot */}
                    <div className="hidden">
                      <FormField
                        control={form.control}
                        name="_gotcha"
                        render={({ field }) => <Input {...field} tabIndex={-1} autoComplete="off" />}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/80 text-xs uppercase tracking-wide">Full name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Joseph Kamau"
                              className="bg-white/90 text-foreground border-white/20 placeholder:text-muted-foreground/60 rounded-xl focus-visible:ring-foreground/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-200 text-xs" />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground/80 text-xs uppercase tracking-wide">Email address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jerome@example.com"
                                className="bg-white/90 text-foreground border-white/20 placeholder:text-muted-foreground/60 rounded-xl focus-visible:ring-foreground/30"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-200 text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground/80 text-xs uppercase tracking-wide">Phone (optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+254 7XX XXX XXX"
                                className="bg-white/90 text-foreground border-white/20 placeholder:text-muted-foreground/60 rounded-xl focus-visible:ring-foreground/30"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-200 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/80 text-xs uppercase tracking-wide">Select a service</FormLabel>
                          <FormControl>
                            <select
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full h-10 rounded-xl bg-white/90 text-foreground border border-white/20 px-3 text-sm focus-visible:ring-foreground/30 focus-visible:outline-none appearance-none"
                            >
                              <option value="" disabled>Choose a service...</option>
                              {SERVICE_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage className="text-red-200 text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/80 text-xs uppercase tracking-wide">
                            Project details
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project, timeline, and budget range..."
                              className="min-h-[140px] bg-white/90 text-foreground border-white/20 placeholder:text-muted-foreground/60 rounded-xl focus-visible:ring-foreground/30 resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-200 text-xs" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full mt-2 group shadow-lg"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
