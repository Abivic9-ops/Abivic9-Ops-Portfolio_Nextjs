"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export function NewsletterForm() {
  const [isPending, setIsPending] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    // Simulate API call for newsletter
    try {
      const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;
      if (!endpoint) {
        // If no endpoint is configured, just simulate success for demo purposes
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Subscribed successfully!");
        form.reset();
        return;
      }
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) throw new Error("Failed to subscribe");
      
      toast.success("Subscribed successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex w-full items-center space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    type="email" 
                    {...field} 
                    className="bg-background border-border"
                  />
                  <Button type="submit" size="icon" disabled={isPending} className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                    {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                    <span className="sr-only">Subscribe</span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
