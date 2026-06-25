"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Mail, MessageCircle, Calendar, ArrowRight, Loader2, Github, Linkedin } from "lucide-react";

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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  _gotcha: z.string().optional(), // Honeypot
});

export function Contact() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      _gotcha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values._gotcha) return; // Honeypot triggered
    
    setIsPending(true);
    const result = await sendContact(values);
    
    if (result.success) {
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(result.message);
    }
    
    setIsPending(false);
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254700000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Let's build something <span className="text-primary">extraordinary</span> together.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
              Whether you need a modern web application, a robust backend integration, or technical consulting, I'm here to help turn your ideas into reality.
            </p>

            <div className="space-y-6 mb-12">
              <a 
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email me</h4>
                  <p className="text-muted-foreground text-sm">{SITE.email}</p>
                </div>
              </a>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-[#25D366]/50 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm">Direct message</p>
                </div>
              </a>

              <a 
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Schedule a Call</h4>
                  <p className="text-muted-foreground text-sm">Pick a time on Calendly</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-8 border-t border-border/50">
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-foreground mb-8">Send a message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                {/* Honeypot field (hidden from users) */}
                <div className="hidden">
                  <FormField
                    control={form.control}
                    name="_gotcha"
                    render={({ field }) => <Input {...field} tabIndex={-1} autoComplete="off" />}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-surface" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="bg-surface" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project inquiry" className="bg-surface" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project, timeline, and budget..." 
                          className="min-h-[150px] bg-surface resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4 group"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
