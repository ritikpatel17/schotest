import React from "react";

const PrincipalMessage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-200 py-8">
      <div className="md:w-1/2 lg:w-1/3 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="h-64 w-full object-cover object-center"
            src="https://source.unsplash.com/random"
            alt="Principal's Message"
          />
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-2xl mb-2">
              Principal's Message
            </h2>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-2/3 px-4 mt-8 md:mt-0">
        <div className="flex flex-row justify-center items-center">
          <img
            className="h-8 w-8 mx-4"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/linkedin-512.png"
            alt="LinkedIn"
          />
          <img
            className="h-8 w-8 mx-4"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/facebook-512.png"
            alt="Facebook"
          />
          <img
            className="h-8 w-8 mx-4"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/twitter-512.png"
            alt="Twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
