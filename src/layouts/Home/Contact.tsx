import React from 'react';


const Contact: React.FC = () => {
    return (
      <div className="relative h-auto xl:h-1/2">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid justify-center grid-cols-1">
            <section className="w-full max-w-2xl px-6 py-4 mx-auto rounded-md shadow-md bg-gradient-to-r from-red-800 via-red-400 to-red-600 dark:bg-gray-800">
              <h2 className="text-3xl font-semibold text-center text-white">
                Get in Touch
              </h2>
              <p className="mt-3 text-center text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>

              <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-2">
                <a
                  href="#"
                  className="flex flex-col items-center px-4 py-3 text-white transition-colors duration-200 transform rounded-md hover:bg-blue-200 dark:hover:bg-blue-500"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>

                  <span className="mt-2 text-white">+2499999666600</span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center px-4 py-3 text-white transition-colors duration-200 transform rounded-md hover:bg-blue-200 dark:hover:bg-blue-500"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>

                  <span className="mt-2 text-white">example@example.com</span>
                </a>
              </div>

              <div className="mt-6 ">
                <div className="items-center -mx-2 md:flex">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-white">
                      Name
                    </label>

                    <input
                      className="block w-full px-4 py-2 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="text"
                    />
                  </div>

                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-white">
                      E-mail
                    </label>

                    <input
                      className="block w-full px-4 py-2 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="email"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Message
                  </label>

                  <textarea className="block w-full h-40 px-4 py-2 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                </div>

                <div className="flex justify-center mt-6">
                  <button className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};

export default Contact;