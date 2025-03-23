"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GithubIcon, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Please enter valid email"),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async () => {};
  return (
    <div id="contact" className=" bg-[#0A0A0A] flex flex-col items-center">
      <h1 className=" text-white text-center md:py-12 md:text-5xl md:font-semibold py-6 text-2xl font-normal">
        Contact me!
      </h1>
      <div className=" flex flex-col pb-8 items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-white">Name</FormLabel>
                  <FormControl>
                    <Input
                      className=" w-[70vw] md:w-[30vw] py-5"
                      placeholder="John Doe"
                      {...field}
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
                <FormItem>
                  <FormLabel className=" text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="  w-[70vw]  md:w-[30vw] py-5"
                      placeholder="john@example.com"
                      {...field}
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
                <FormItem>
                  <FormLabel className=" text-white">Message</FormLabel>
                  <FormControl>
                    <Input
                      className="  w-[70vw]  md:w-[30vw] py-5"
                      placeholder="Hi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" flex justify-center">
              <Button className=" bg-white text-black" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
      </div>
  );
}
