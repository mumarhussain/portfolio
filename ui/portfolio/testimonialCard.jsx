import React from "react";
import { Star } from "lucide-react";
import { Quote } from "lucide-react";
const TestimonialCard = ({ text, author }) => {
  return (
    <div className=" rounded-lg p-6">
      <div className="h-72 2xl:h-80 bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8">
        <div className="flex flex-col justify-between items-stretch h-full">
          <div className="flex flex-row items-start justify-between md:h-1/3 lg:h-1/2">
            <Quote className="w-14 h-14 text-[#e6ff00] fill-current" />
            <div className="flex flex-row gap-1">
              {" "}
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="text-limeYellow flex fill-current mt-2"
                />
              ))}{" "}
            </div>
          </div>
          <div className="md:h-2/3 lg:h-1/2 items-start justify-end text-white flex flex-col space-y-4">
            <p className="text-lg 2xl:text-2xl">{text}</p>
            <p className="">~ {author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
// import React from "react";
// import { Star, Quote } from "lucide-react";

// const TestimonialCard = ({ text, author }) => {
//   return (
//     <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto p-">
//       <div className="h-auto max-h-[300px] sm:min-h-[300px] lg:h-72 2xl:h-80 bg-white/5 rounded-2xl border border-white/10 p-4">
//         <div className="flex flex-col justify-between h-full">
//           {/* Top Section */}
//           <div className="flex flex-row items-start justify-between">
//             <Quote className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#e6ff00] fill-current" />
//             <div className="flex flex-row gap-1">
//               {[...Array(5)].map((_, index) => (
//                 <Star
//                   key={index}
//                   className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-limeYellow fill-current mt-1 sm:mt-2"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Text Section */}
//           <div className="flex flex-col justify-end text-white mt-6 space-y-3 sm:space-y-4">
//             <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
//               {text}
//             </p>
//             <p className="text-sm sm:text-base opacity-80">~ {author}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;
