import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-[#FAC213] pt-10"
    >
      <form
        method="POST"
        action="https://getform.io/f/45a03aee-398d-4319-bd12-edcbef236059"
        className="flex flex-col max-w-[600px] w-full
        "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-black">
            Contact
          </p>
          <p className="text-black text-2xl py-4">
            // Submit the Form to get in touch
          </p>
        </div>
        <input
          className="p-2"
          type="text"
          placeholder="Name..."
          name="name"
          aria-required
        />
        <input
          className="my-4 p-2 "
          type="text"
          placeholder="email..."
          name="email"
          required
        />
        <textarea
          name="message"
          rows="10"
          className=" p-2"
          placeholder="message..."
          required
        ></textarea>
        <button className="text-white border-2 hover:border-yellow-500 ease-in-out duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's talk!
        </button>
      </form>
    </div>
  );
};

export default Contact;
