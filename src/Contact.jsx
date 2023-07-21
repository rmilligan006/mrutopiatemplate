import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center px-4 my-12 bg-[#FAC213]"
    >
      <form
        method="POST"
        action="https://getform.io/f/45a03aee-398d-4319-bd12-edcbef236059"
        className="flex flex-col max-w-[600px] w-full
        "
      >
        <div className="">
          <p className="text-4xl  font-bold inline border-b-4 border-yellow-500 text-black">
            Contact
          </p>
          <p className="text-black text-2xl py-4">
            // Submit the Form to get in touch
          </p>
        </div>
        <input
          className="m-2 p-2"
          type="text"
          placeholder="Name..."
          name="name"
          aria-required
        />
        <input
          className="m-2 p-2"
          type="tel"
          placeholder="Phone Number"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <input
          className="m-2 p-2 "
          type="text"
          placeholder="email..."
          name="email"
          required
        />
        <textarea
          name="message"
          rows="10"
          className=" m-2 p-2"
          placeholder="message..."
          required
        ></textarea>
        <button className="text-white border-2 hover:border-yellow-500 ease-in-out duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Our trained professionals would love to hear from you!
        </button>
      </form>
    </div>
  );
};

export default Contact;
