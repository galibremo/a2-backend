"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

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
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Form submitted successfully!");
  }

  return (
    <section className="max-w-3xl mx-auto py-16 md:py-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="bg-transparent border-[#CDCDCD99] focus-visible:ring-0 focus-visible:ring-offset-0 !py-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                  <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      className="bg-transparent border-[#CDCDCD99] focus-visible:ring-0 focus-visible:ring-offset-0 !py-6"
                    />
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
              <FormItem className="text-left">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write subject"
                    {...field}
                    className="bg-transparent border-[#CDCDCD99] focus-visible:ring-0 focus-visible:ring-offset-0 !py-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write here"
                    {...field}
                    className="min-h-[120px] bg-transparent border-[#CDCDCD99] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-secondary-foreground text-black hover:bg-[#a5d7ca] font-bold !px-10 !py-8"
          >
            Send Message
            <ArrowRight className="ml-1 !h-6 !w-6" />
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
