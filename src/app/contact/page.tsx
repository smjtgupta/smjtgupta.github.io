import Image from "next/image";
import ArrowRight from "@/assets/icons/arrow-up-right.svg";
import memojiImage from "@/assets/images/memoji-computer.png";

const ContactSection = () => {
  return (
    <div className="py-20 lg:py-40" id="contact">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="p-8 flex items-center justify-center">
            <Image
              src={memojiImage}
              alt="Contact me"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h1 className="font-serif text-3xl md:text-5xl text-center">
              Get in Touch
            </h1>
            <form className="space-y-5 py-8">
              <div>
                <label htmlFor="name" className="font-semibold text-white/80">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 text-gray-900 font-serif border border-gray-300 rounded-md shadow-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 text-gray-900 font-serif border border-gray-300 rounded-md shadow-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-semibold text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-2 text-gray-900 font-serif border border-gray-300 rounded-md shadow-md"
                ></textarea>
              </div>
              <a href="mailto:smjtgupta@gmail.com">
                <button
                  type="submit"
                  className="w-full mt-5 inline-flex items-center justify-center gap-2 border border-white bg-gray-100 text-gray-900 h-12 px-6 rounded-xl min-h-[48px]"
                  aria-label="Send email to Soumyajit Gupta"
                >
                  <ArrowRight className="size-4" />
                  <span className="font-semibold">Send</span>
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ContactPage() {
  return <ContactSection />;
}
