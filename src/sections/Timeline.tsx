// src/components/Timeline.jsx
import React from "react";
import { Card } from "@/components/Card";

const timelineData = [
  {
    id: 1,
    heading: "PhD - UT Austin",
    dept: "Computer Science",
    date: "2018-2024",
    icon: "📚",
  },
  {
    id: 2,
    heading: "Intern - Media Team",
    dept: "HomeAway (now Vrbo)",
    date: "Summer 2017",
    icon: "🧑🏻‍💻",
  },
  {
    id: 3,
    heading: "MS - UT Austin",
    dept: "Computer Science",
    date: "2014-2017",
    icon: "📚",
  },
  {
    id: 4,
    heading: "MTech - IIT KGP",
    dept: "Electronics & Electrical Engg.",
    date: "2012-2014",
    icon: "📚",
  },
];

export const Timeline = () => {
  return (
    <div className="relative flex flex-col items-center pt-10">
      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl">
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-4 md:left-1/2 md:transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex sm:justify-start mb-8 md:grid md:grid-cols-2 items-center ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {/* Timeline Icon */}
            <div className="absolute size-10 bg-gray-300 text-white rounded-full flex items-center justify-center left-4 md:left-1/2 md:transform -translate-x-1/2">
              <span>{item.icon}</span>
            </div>

            {/* Card Content */}
            <div
              className={`mt-6 ${
                index % 2 === 0
                  ? "md:col-start-1 md:pr-16 md:text-right" // Left-aligned cards (md/lg)
                  : "md:col-start-2 md:text-left" // Right-aligned cards (md/lg)
              } sm:ml-16`} // Fixed margin for mobile view
            >
              <Card>
                <div className="flex flex-col p-4 md:py-4 md:px-6">
                  <h3 className="font-serif text-xl">{item.heading}</h3>
                  <h3 className="font-serif">{item.dept}</h3>
                  <h3 className="font-serif">{item.date}</h3>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
