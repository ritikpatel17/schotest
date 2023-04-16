import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-gray-500">123 Main St<br />Anytown, USA 12345<br />Phone: (555) 555-5555<br />Email: info@example.com</p>
        </div>
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non magna sit amet mi luctus malesuada ut non nulla. Sed feugiat neque non pretium feugiat.</p>
        </div>
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Connect with Us</h3>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-500">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-500">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-500">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white h-16 w-full absolute bottom-0 left-0 z-10"></div>
      <div className="bg-gray-900 h-16 w-full absolute bottom-0 left-0 z-20"></div>
      <div className="container mx-auto relative z-30">
        <p className="text-center text-gray-500">&copy; 2023 Example Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
