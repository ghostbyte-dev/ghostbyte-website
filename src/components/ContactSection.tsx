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
              Kontakt
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-10 h-96 mt-10">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg text-light">Lustenau</h3>
              <div className="flex flex-row items-center gap-2">
                <LocationEditIcon />
                <Link
                  className="hover:text-light hover:underline duration-300"
                  href={"https://maps.app.goo.gl/ufFE52FR4iVxQhmU7"}
                >
                  Lustenau Sonnenstraße 11a
                </Link>
              </div>
            </div>
            <LeafletMapWrapper
              center={[47.42339831023843, 9.656724735140145]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg text-light">Wien</h3>
              <div className="flex flex-row items-center gap-2">
                <LocationEditIcon />
                <Link
                  className="hover:text-light hover:underline duration-300"
                  href={"https://maps.app.goo.gl/ZGsChgLi4jGyq8ra6"}
                >
                  Wien Wallensteinstraße 64
                </Link>
              </div>
            </div>
            <LeafletMapWrapper
              center={[48.231090761843014, 16.37625516840938]}
            />
          </div>
        </div>
        <div className="max-w-3xl mt-10">
          <h3 className="text-light text-xl mb-2">Get in touch</h3>
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
