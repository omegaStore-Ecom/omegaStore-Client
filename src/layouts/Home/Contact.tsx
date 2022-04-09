import React from 'react';


const Contact: React.FC = () => {
    return (
      <div className="relative h-auto xl:h-1/2" id="contact">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 justify-center">
            <section className="mx-auto w-full max-w-2xl rounded-md bg-gradient-to-b from-[#ff5043] via-[#f87066] to-[#f8c2c2d6] px-6 py-4 shadow-md">
              <h2 className="text-center text-3xl font-semibold text-white">
                Get in Touch
              </h2>
              <p className="mt-3 text-center text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
                <a
                  href="#"
                  className="flex transform flex-col items-center rounded-md px-4 py-3 text-white transition-colors duration-200 hover:bg-[#6d575f] dark:hover:bg-blue-500"
                >
                  <svg
                    className="h-5 w-5"
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
                  className="flex transform flex-col items-center rounded-md px-4 py-3 text-white transition-colors duration-200 hover:bg-[#6d575f] dark:hover:bg-blue-500"
                >
                  <svg
                    className="h-5 w-5"
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
                <div className="-mx-2 items-center md:flex">
                  <div className="mx-2 w-full">
                    <label className="mb-2 block text-sm font-medium text-white">
                      Name
                    </label>

                    <input
                      className="block w-full rounded-md border bg-white px-4 py-2 focus:border-[#6d575f] focus:outline-none focus:ring focus:ring-[#6d575f] focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-blue-300"
                      type="text"
                    />
                  </div>

                  <div className="mx-2 mt-4 w-full md:mt-0">
                    <label className="mb-2 block text-sm font-medium text-white">
                      E-mail
                    </label>

                    <input
                      className="block w-full rounded-md border bg-white px-4 py-2 focus:border-[#6d575f] focus:outline-none focus:ring focus:ring-[#6d575f] focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-blue-300"
                      type="email"
                    />
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <label className="mb-2 block text-sm font-medium text-white">
                    Message
                  </label>

                  <textarea className="block h-40 w-full rounded-md border bg-white px-4 py-2 focus:border-[#6d575f] focus:outline-none focus:ring focus:ring-[#6d575f] focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-blue-300"></textarea>
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="btn">Send Message</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};

export default Contact;