import React from "react";

const NeonCard = () => {
  return (
    <main className="flex justify-center items-center flex-col bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
      <div className="w-[800px] flex flex-col">
        {/* Green Card Left */}
        <div className="neon-card green left mb-4 p-12 px-24 bg-transparent relative text-white">
          <p className="font-bold text-lg tracking-wider transform skew-x-[-2deg]">
            This is a green neon card
          </p>
          <p className="font-light text-lg tracking-wide transform skew-x-[-2deg]">
            The style is inspired from a custom skin for chatGPT's chat website
            interface available via "Stylish" browser extension.
          </p>
          <p className="font-light text-lg tracking-wide transform skew-x-[-2deg]">
            The original skin was created by Stellan Stafford.
          </p>
        </div>

        {/* Purple Card Right */}
        <div className="neon-card purple right mb-4 p-12 px-24 bg-transparent relative text-white">
          <p className="font-bold text-lg tracking-wider transform skew-x-[-2deg]">
            This is a purple neon card
          </p>
          <p className="font-light text-lg tracking-wide transform skew-x-[-2deg]">
            The same style is altered with opposite directions to create variety
            and versatility of design use.
          </p>
          <p className="font-light text-lg tracking-wide transform skew-x-[-2deg]">
            This alternative colour comes from Telegram web's purple theme.
          </p>
        </div>

        {/* Orange Card Left */}
        <div className="neon-card orange left mb-4 p-12 px-24 bg-transparent relative text-white">
          <p className="font-bold text-lg tracking-wider transform skew-x-[-2deg]">
            This is an orange neon card
          </p>
          <p className="font-light text-lg tracking-wide transform skew-x-[-2deg]">
            Following the saturation parameter of Telegram's purple colour, this
            hue of orange is completely original.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NeonCard;
