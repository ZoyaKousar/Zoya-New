// ContactSection.jsx
"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address.")
    .required("Email is required"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [uploading, setUploading] = useState(false);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema, // Apply the validation schema
    onSubmit: async (values, { resetForm }) => {
      setUploading(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          }),
        });

        if (response.ok) {
          resetForm(); // Reset form after successful submission
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setUploading(false);
      }
    },
  });

  return (
    <div id="contact" className="flex overflow-hidden mx-auto max-w-[1400px] gap-10 items-center px-10 lg:px-32 py-10 lg:py-40 max-md:px-5 max-md:py-24">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
        {/* Left Column - Image and Info */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 bg-cover bg-center p-8 lg:p-12">
          {/* Image */}
          <img src="/zoya-contact.png" alt="Contact" className="h-[350px] rounded-full object-cover mb-6" />
          {/* Heading */}
          <h2 className="text-2xl font-bold text-white mb-4">let’s chat over the coffee</h2>
          {/* Description */}
          <p className="text-sm text-gray-300 text-center mb-6 md:px-4">
            I’m very approachable and would love to speak to you. Feel free to call, send me an email.
          </p>
          {/* Email with Icon */}
          <div className="flex items-center space-x-2">
            <img src="/zoya-email.png" alt="Email Icon" className="h-7" />
            <span className="text-sm text-white">zoyakou2@gmail.com</span>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex flex-col w-full lg:w-1/2 p-8 lg:p-12">
          <div className="flex flex-col w-full text-white">
            <div className="mt-2 text-2xl leading-tight">
              Send me a message
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full text-sm text-orange-200">
            <div className="px-4 py-2 w-full bg-white bg-opacity-20 border border-solid border-white border-opacity-10 rounded-xl">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 bg-transparent text-white outline-none"
              />
            </div>
            {errors.name && touched.name && (
              <div className="text-red-500 text-xs">{errors.name}</div>
            )}

            <div className="px-4 py-2 mt-5 w-full bg-white bg-opacity-20 border border-solid border-white border-opacity-10 rounded-xl">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 bg-transparent text-white outline-none"
              />
            </div>
            {errors.email && touched.email && (
              <div className="text-red-500 text-xs">{errors.email}</div>
            )}

            <div className="px-4 py-2 mt-5 w-full bg-white bg-opacity-20 border border-solid border-white border-opacity-10 rounded-xl">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 bg-transparent text-white outline-none"
              />
            </div>
          

            <div className="px-4 py-2 mb-2 mt-5 w-full bg-white bg-opacity-20 border border-solid border-white border-opacity-10 rounded-xl">
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 bg-transparent text-white outline-none"
                rows={5}
              />
            </div>
          
            <button
              type="submit"
              disabled={uploading}
              className="mt-6 text-white w-[200px] px-6 py-3 rounded-[50px] bg-gradient-primary bg-gradient-primary-hover transition-all"
            >
              {uploading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
