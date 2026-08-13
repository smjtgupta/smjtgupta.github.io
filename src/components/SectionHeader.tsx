interface Props {
  title: string;
  eyebrow: string;
  description: string;
}

export const SectionHeader = ({ title, eyebrow, description }: Props) => {
   return (
     <div className="flex flex-col items-center text-center">
       {eyebrow && (
         <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent" aria-label={`Section: ${eyebrow}`}>
           {eyebrow}
         </p>
       )}
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent pb-1">
          {title}
        </h2>
       {description && (
         <p className="text-center md:text-base lg:text-lg text-white/70 mt-4 mx-auto max-w-xl">
           {description}
         </p>
       )}
     </div>
   );
};
