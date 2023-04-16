import schoolImage from '../assets/school-building-1.png';
import { useState, useEffect } from "react";

function School() {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotate(true);
      setTimeout(() => {
        setRotate(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <img
        src={schoolImage}
        alt="landscape"
        className={rotate ? "slide-180 transition duration-1000" : "transition duration-1000"}
      />
      <div className="absolute inset-0 "></div>
      <div className="absolute inset-0 flex items-center ">
        <div className="px-6 py-4  rounded-md shadow-lg">
        <div class="bg-gray-500 bg-opacity-30 rounded-md shadow-lg">
          <p class="font-bold  text-white opacity-100 px-6 py-4 text-5xl">Schotest Public School</p>
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default School;

