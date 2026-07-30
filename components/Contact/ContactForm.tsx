"use client";
import React from "react";
import toast from "react-hot-toast";

type ContactFormProps = {
  heading: string;
  topics: string[];
  defaultTopic: string;
};

const ContactForm = ({ heading, topics, defaultTopic }: ContactFormProps) => {
  const [fullName, setFullName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState(defaultTopic);
  const [email, setEmail] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const initForm = () => {
    setEmail("");
    setFullName("");
    setMessage("");
    setSelectedOption(defaultTopic);
    setChecked(false);
  };

  const submitEmail = async () => {
    if (!fullName || !email) {
      toast("Please add your name and email so we can reply.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          name: fullName,
          email: email,
          message: message,
          type: selectedOption,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast("Successfully submitted the form. Thank you!");
        initForm();
      } else {
        toast("Error while submitting form. Please try again later.");
      }
    } catch (error) {
      toast("Error while submitting form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15">
      <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
        {heading}
      </h2>

      <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
        <label htmlFor="contact-name" className="sr-only">
          Full name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Full name"
          value={fullName}
          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="contact-email" className="sr-only">
          Email address
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
        />
      </div>

      <div className="mb-11.5 flex">
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          placeholder="Message"
          value={message}
          rows={4}
          className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-11.5 flex">
        <label htmlFor="contact-topic" className="sr-only">
          Topic
        </label>
        <select
          id="contact-topic"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
        >
          <option value="" disabled>
            Select an option
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-4 xl:justify-between">
        <div className="mb-4 flex md:mb-0">
          <input
            id="default-checkbox"
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary">
            <svg
              className="opacity-0 peer-checked:group-[]:opacity-100"
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                fill="white"
              />
            </svg>
          </span>
          <label
            htmlFor="default-checkbox"
            className="flex max-w-[425px] cursor-pointer select-none pl-5"
          >
            By clicking Checkbox, you agree to be informed about Kaizen on the
            email provided.
          </label>
        </div>

        <button
          onClick={submitEmail}
          disabled={!checked || isSubmitting}
          aria-label="send message"
          className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho disabled:cursor-not-allowed disabled:opacity-60 dark:bg-btndark"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
