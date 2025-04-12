import React from "react";
import { HiStar } from "react-icons/hi";

const ContactUs = () => {
  return (
    <>
      <section className="mb-12">
        <form>
          <h1 className="uppercase tracking-tight text-3xl font-extrabold my-6 mb-10">
            contact us
          </h1>
          <div className="mb-3">
            <label className="flex justify-start items-center gap-1 mb-2">
              <HiStar className="w-3 fill-red-800" />
              <span>Title</span>
            </label>
            <input className="w-full border-2 p-2 border-[#999]/40 rounded-md h-8 py-3" />
          </div>
          <div className="mb-3">
            <label className="flex justify-start items-center gap-1 mb-2">
              <HiStar className="w-3 fill-red-800" />
              <span> First Name</span>
            </label>
            <input className="w-full border-2 p-2 border-[#999]/40 rounded-md h-8 py-3" />
          </div>

          <div className="mb-3">
            <label className="flex justify-start items-center gap-1 mb-2">
              <HiStar className="w-3 fill-red-800" />
              <span>Last Name</span>
            </label>
            <input className="w-full border-2 p-2 border-[#999]/40 rounded-md h-8 py-3" />
          </div>

          <div className="mb-3">
            <label className="flex justify-start items-center gap-1 mb-2">
              <HiStar className="w-3 fill-red-800" />
              <span>Email</span>
            </label>
            <input className="w-full border-2 p-2 border-[#999]/40 rounded-md h-8 py-3" />
          </div>

          <div className="mb-3">
            <label className="flex justify-start items-center gap-1 mb-2">
              <HiStar className="w-3 fill-red-800" />
              <span>Message</span>
            </label>
            <input
              type="text"
              className="w-full overflow-y-auto h-16 p-2 border-2 border-[#999]/40 rounded-md"
            />
          </div>

          <div className="flex items-center justify-start gap-2 mb-8">
            <span className="">I accept the Privacy Policy</span>
            <input type="checkbox" className="rounded-full w-4 h-4" />
          </div>

          <button
            type="submit"
            className="p-2 py-3 rounded-md uppercase font-bold block mx-auto bg-red-800 text-sm text-white/90 w-full"
          >
            submit
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
