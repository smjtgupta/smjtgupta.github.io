import ArrowUPRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let’s deliver exceptional solutions for your business!
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to streamline your business or research projects and bring
                them to life? Let's connect and discuss if I can help you
                achieve your goals
              </p>
            </div>
            <a href="mailto:smjtgupta@utexas.edu">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUPRightIcon className="size-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
