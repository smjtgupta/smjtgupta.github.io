import Image from "next/image";
import ArrowRight from "@/assets/icons/arrow-up-right.svg";
import memojiImage from "@/assets/images/memoji-computer.webp";

export const metadata = {
  title: "Contact",
  description:
     "Get in touch with Soumyajit Gupta, ML Engineer and NLP Researcher. Available for consulting, collaboration, and full-time opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactSection = () => {
  return (
     <section className="py-20 lg:py-40" id="contact" aria-label="Contact">
       <div className="container">
         <div className="flex flex-col lg:flex-row items-center">
           <div className="p-8 flex items-center justify-center">
             <figure>
                <Image
                  src={memojiImage}
                  alt="Soumyajit Gupta avatar for contact"
                  className="max-w-full h-auto rounded-lg shadow-md"
                  width={400}
                  height={400}
                  sizes="(min-width: 1024px) 400px, 90vw"
                  loading="lazy"
                />
             </figure>
           </div>
           <div className="w-full md:w-3/4 lg:w-1/2">
              <h1 className="font-serif text-3xl md:text-5xl text-center">
                Get in Touch
              </h1>
             <form
               action="mailto:smjtgupta@gmail.com"
               method="GET"
               className="space-y-5 py-8"
               aria-label="Contact form"
             >
               <div>
                 <label htmlFor="name" className="font-semibold text-white/80">
                   Name
                 </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    autoComplete="name"
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
                    required
                    aria-required="true"
                    autoComplete="email"
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
                    required
                    aria-required="true"
                    autoComplete="off"
                    placeholder="Your Message"
                   rows={5}
                   className="w-full px-4 py-2 text-gray-900 font-serif border border-gray-300 rounded-md shadow-md"
                 />
               </div>
               <button
                   type="submit"
                   className="w-full mt-5 inline-flex items-center justify-center gap-2 border border-white bg-gray-100 text-gray-900 h-12 px-6 rounded-xl min-h-[48px]"
                   aria-label="Send email to smjtgupta@gmail.com"
                 >
                     <ArrowRight className="size-4" aria-hidden="true" />
                     <span className="font-semibold">Send</span>
                   </button>
             </form>
             <p className="text-center text-white/70 mt-2">
               Or email directly at{" "}
               <a
                 href="mailto:smjtgupta@gmail.com"
                 className="text-emerald-300 underline"
               >
                 smjtgupta@gmail.com
               </a>
             </p>
           </div>
         </div>
       </div>
     </section>
   );
};

export default function ContactPage() {
  return <ContactSection />;
}
