import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdErrorOutline } from "react-icons/md";
import Lottie from "lottie-react";
import animationLoading from "./../../assets/images/loading.json";
import Title from "../Title/Title";
import { MdOutlineEmail } from "react-icons/md";

import Notification from "../Base/Notification";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};
const Contact = () => {
  const [notification, setNotification] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [formData, setFormData] = useState({
  //   user_name: "",
  //   user_email: "",
  //   message: "",
  // });
  // const handleChange = (
  //   e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   console.log("form", e);
  //   const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const schema: ZodType<FormData> = z.object({
    user_name: z.string().min(2).max(50),
    user_email: z.string().email(),
    message: z.string().min(5).max(500),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const form = useRef<HTMLFormElement>(null);
  const submitData = (data: FormData) => {
    console.log("form data", data);
    console.log("form ref data", form.current);
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_wyuory6",
        "template_9gstadv",
        form.current!,
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(
        result => {
          reset();
          console.log(result.text);
          setIsError(false);
          setNotification("Thank you for reaching out to me.");
        },
        error => {
          console.log(error.text);
          setIsError(true);
          setNotification(
            "An error occurred white sending the message, please try again later."
          );
        }
      )
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => {
          setNotification("");
        }, 3000);
      });
  };
  return (
    <section id="contact" className="w-full md:max-w-[1120px] md:m-auto">
      <Notification
        message={notification}
        type={isError ? "error" : "success"}
      />
      <motion.div
        initial={{ opacity: 0, x: 160 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Title title="Contact" />
      </motion.div>
      <div className="contact-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="work-wrapper__info"
        >
          <p className="contact-wrapper__text">
            I'm open to any new opportunities.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="contact-wrapper__email flex items-center justify-center gap-2 max-w-[600px] m-auto mb-[16px]"
            href="mailto: 9ohn.5hih@gmail.com"
          >
            <MdOutlineEmail />
            9ohn.5hih@gmail.com
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="work-wrapper__info"
        >
          <form
            ref={form}
            onSubmit={handleSubmit(submitData)}
            className="contact-wrapper__form flex flex-col gap-4 m-auto w-full max-w-[600px]"
          >
            <div
              className={`contact-wrapper__form-item ${
                errors.user_name ? "is-error" : ""
              }`}
            >
              <label htmlFor="user_name">Name</label>
              <input type="text" {...register("user_name")} />
              {errors.user_name && (
                <span>
                  <MdErrorOutline />
                  {errors.user_name.message}
                </span>
              )}
            </div>
            <div
              className={`contact-wrapper__form-item ${
                errors.user_email ? "is-error" : ""
              }`}
            >
              <label htmlFor="user_email">Email</label>
              <input type="email" {...register("user_email")} />
              {errors.user_email && (
                <span>
                  <MdErrorOutline />
                  {errors.user_email.message}
                </span>
              )}
            </div>
            <div
              className={`contact-wrapper__form-item ${
                errors.message ? "is-error" : ""
              }`}
            >
              <label htmlFor="message">Message</label>
              <textarea {...register("message")} rows={5} />
              {errors.message && (
                <span>
                  <MdErrorOutline />
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="cta-btn cta-btn--contact flex items-center gap-5 justify-center"
            >
              {isLoading && (
                <Lottie
                  animationData={animationLoading}
                  className="h-[40px] w=[40px] m-[-20px]"
                />
              )}
              Get in touch
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
