"use client";

import {
  arrowAnimation,
  containerVariants,
  dropUpVariants,
} from "@/constants/variants";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";
import z from "zod";
import InputText from "../Input";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Fill this field.",
      invalid_type_error: "Name must be a string.",
    })
    .min(6, { message: "Fill this field." }),
  email: z.string().email({ message: "Invalid e-mail." }),
  message: z
    .string({
      required_error: "Fill this field.",
    })
    .min(10, { message: "Fill this field." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function handleSendMessage(data: FormData) {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    try {
      await emailjs.send(
        serviceID!,
        templateID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        userID!
      );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send the message. Please try again.");
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
    >
      <div className="sm:px-12 sm:pr-6 pb-12">
        <form
          action=""
          method="POST"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <motion.div variants={dropUpVariants}>
            <label className="font-thin text-sm dark:text-gray-300 text-gray-500 mb-2 flex">
              Name
            </label>
            <InputText
              label="John Doe"
              name="name"
              type="text"
              error={errors?.name?.message}
              register={register}
            />
          </motion.div>

          <motion.div variants={dropUpVariants}>
            <label className="font-thin text-sm dark:text-gray-300 text-gray-500 mb-2 flex">
              E-mail
            </label>
            <InputText
              label="your@email.com"
              name="email"
              type="text"
              error={errors?.email?.message}
              register={register}
            />
          </motion.div>

          <motion.div variants={dropUpVariants}>
            <label className="font-thin text-sm dark:text-gray-300 text-gray-500 mb-2 flex">
              Message
            </label>
            <textarea
              {...register("message")}
              name="message"
              id="message"
              className="dark:bg-blue-500 bg-gray-100 p-2 rounded-md dark:text-gray-300 text-gray-500 w-full mb-3 font-thin focus:outline-none focus:ring-1 focus:ring-pink-500 resize-none h-[120px]"
              placeholder="Your awesome message"
            ></textarea>
          </motion.div>

          {isSubmitSuccessful && (
            <p className="mb-8 text-md text-green-500 font-thin">
              Message sent! Thanks!
            </p>
          )}
          <p className="mb-8 text-xs text-red-500 font-thin">
            {errors?.message?.message}
          </p>

          <motion.button
            initial="initial"
            animate="initial"
            whileHover="animate"
            type="submit"
          >
            <div className="flex text-gray-200 items-center gap-2 hover:text-pink-500 hover:scale-[1.15] hover:translate-x-1 transition ease-in-out delay-150">
              <motion.div variants={arrowAnimation}>
                <LuSend size={24} />
              </motion.div>
              <div className="dark:text-gray-200 text-gray-400 font-semibold whitespace-nowrap text-lg hover:text-pink-500">
                {isSubmitting ? <>Sending...</> : <>Send it</>}
              </div>
            </div>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
