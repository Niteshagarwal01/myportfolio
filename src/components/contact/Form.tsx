"use client";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ message: "" });
  const [currentURL, setCurrentURL] = useState("");
  
  // Set the current URL for the redirect
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  // Simple form validation
  const validateForm = () => {
    if (!name || !email || !message) {
      setErrors({ message: "Please fill all the fields" });
      return false;
    }

    if (message.length < 10) {
      setErrors({ message: "Message should be more than 10 characters" });
      return false;
    }

    if (message.length > 500) {
      setErrors({ message: "Message should be less than 500 characters" });
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    if (!validateForm()) {
      e.preventDefault();
    } else {
      // Show success toast
      toast.success("Message sent successfully! Thank you for reaching out.");
    }
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        action="https://formsubmit.co/musicniteshagarwal@gmail.com"
        method="POST"
        onSubmit={handleFormSubmit}
        className="max-w-lg w-full flex flex-col items-center justify-center space-y-4"
      >
        {/* Hidden fields for FormSubmit configuration */}
        <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you soon." />
        <input type="hidden" name="_honey" value="" style={{ display: 'none' }} />
        {currentURL && <input type="hidden" name="_next" value={currentURL} />}

        <motion.input
          variants={item}
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          required
        />
        <motion.input
          variants={item}
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          required
        />
        <motion.textarea
          variants={item}
          name="message"
          placeholder="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          required
        />
        
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message}
          </span>
        )}

        <motion.button
          variants={item}
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
          hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        >
          Cast Your Message!
        </motion.button>
      </motion.form>
    </>
  );
}
