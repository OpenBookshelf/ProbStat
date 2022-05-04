import React from "react";

const Aboutus = () => {
  const [text, setText] = React.useState("");
  return (
    <section className="max-w-xl mt-12 mx-auto px-4 mb-10">
      <div className="space-y-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 mx-auto text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
          />
        </svg>
        <h1 className="text-3xl text-gray-800 font-semibold"> ارتباط با ما</h1>
        <p className="text-gray-400 leading-relaxed">
          {window.config?.main.aboutText}
        </p>
      </div>
      <div className="mt-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="items-center justify-around sm:flex"
        >
          <input
            type="textarea"
            placeholder="نظر خود را وارد کنید"
            className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={() => {
              window.open(
                "mailto:" +
                  window.config?.main.contactEmail +
                  "?subject=PropStat:Contact&body=" +
                  text
              );
            }}
            className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
          >
            ارسال 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Aboutus;
