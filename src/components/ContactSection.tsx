"use client";

import { LocationEditIcon, MailIcon, PinIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/sendEmail";
import LeafletMapWrapper from "./LeafletMapWrapper";

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
      className="w-full py-12 md:py-24 lg:py-32 relative bg-neutral-800 text-light-secondary selection:bg-white selection:text-neutral-600"
    >
      <div className="container relative">
        <div className="max-w-3xl space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl uppercas sm:text-6xl text-light">
              {t("title")}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 mt-10">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg text-light mb-3">Lustenau</h3>
              <div>
                <Link
                  className="hover:text-light hover:underline duration-300 flex flex-col"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://maps.app.goo.gl/ufFE52FR4iVxQhmU7"}
                >
                  <span>Sonnenstraße 11a</span>
                  <span>6890, Lustenau</span>
                  <span>Austria</span>
                </Link>
              </div>
            </div>
            <div className="aspect-3/2">
              <LeafletMapWrapper
                center={[47.42339831023843, 9.656724735140145]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg text-light mb-3">Wien</h3>
              <div>
                <Link
                  className="hover:text-light hover:underline duration-300 flex flex-col"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://maps.app.goo.gl/ZGsChgLi4jGyq8ra6"}
                >
                  <span>Wallensteinstraße 64/15</span>
                  <span>1200 Wien</span>
                  <span>Austria</span>
                </Link>
              </div>
            </div>
            <div className="aspect-3/2">
              <LeafletMapWrapper
                center={[48.231090761843014, 16.37625516840938]}
              />
            </div>
          </div>
        </div>
        <div className="max-w-3xl mt-36 mx-auto">
          <h3 className="text-light text-3xl mb-2">{t("title")}</h3>
          <div className="relative">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white"
                >
                  {t("name_label")}
                </label>
                <input
                  id="name"
                  className="input w-1/2"
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
                  className="input w-1/2"
                  placeholder={t("email_placeholder")}
                  {...register("email", { required: true })}
                />
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
                  className="input w-full"
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
                  className="flex min-h-[120px] input w-full"
                  placeholder={t("message_placeholder")}
                  {...register("message", { required: true })}
                />
              </div>

              <div className="flex flex-col space-y-4 mt-6">
                <button
                  type="button"
                  className="w-full h-10 rounded-md font-semibold bg-neutral-600 text-white"
                >
                  {t("send_message")}
                </button>

                <div className="text-center text-sm text-light-secondary">
                  {t("mail_directly")}{" "}
                  <Link
                    href="mailto:hey@ghostbyte.dev"
                    className="font-bold hover:text-light duration-300 transition-colors"
                  >
                    hey@ghostbyte.dev
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
