"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/sendEmail";
import { useTranslations } from "next-intl";
import Link from "next/link";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const t = useTranslations("Contact");
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">
            {t("title")}
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            {t("description")}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-8 relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white"
                  >
                    {t("name_label")}
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
                    placeholder={t("name_placeholder")}
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white"
                  >
                    {t("email_label")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
                    placeholder={t("email_placeholder")}
                    {...register("email", { required: true })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-white"
                >
                  {t("subject_label")}
                </label>
                <input
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
                  placeholder={t("subject_placeholder")}
                  {...register("subject", { required: true })}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-white"
                >
                  {t("message_label")}
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
                  placeholder={t("message_placeholder")}
                  {...register("message", { required: true })}
                />
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  type="button"
                  className="w-full h-10 rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-400 hover:from-fuchsia-500 hover:to-cyan-300 text-white border-0"
                >
                  {t("send_message")}
                </button>

                <div className="text-center text-sm text-gray-400">
                  {t("mail_directly")}{" "}
                  <Link
                    href="mailto:hey@ghostbyte.com"
                    className="text-fuchsia-400 hover:text-cyan-400 transition-colors"
                  >
                    hey@ghostbyte.com
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
