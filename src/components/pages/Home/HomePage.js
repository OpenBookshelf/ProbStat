import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="mt-20 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 mb-3">
      <div className="text-center space-y-4 mb-3">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          تدریس آنلاین
          <span className="text-indigo-600 m-3">
            {" آمار و احتمال مهندسی  "}
          </span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-justify">
          {window.config.homeText}{" "}
        </p>
      </div>
      <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        <Link
          to="/lectures"
          className=" md:m-2 py-3 px-6 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
        >
          دیدن مباحث{" "}
        </Link>
        <a
          href="/lectures/1"
          className="md:m-2 py-3 px-6 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
        >
          جلسه اول{" "}
        </a>
      </div>
    </section>
  );
};

export default HomePage;
