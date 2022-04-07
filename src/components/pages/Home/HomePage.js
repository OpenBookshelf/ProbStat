import { Link } from "react-router-dom";

const HomePage = () => {
  console.log(window.config[1])
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          توضیحات
          <span className="text-indigo-600 m-3">
            {" آمار و احتمال مهندسی  "}
          </span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          متن توضیح و معرفی
        </p>
      </div>
      <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        <Link
          to="/"
          className="m-2 px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
        >
          دیدن مباحث{" "}
        </Link>
        <Link
          to="/"
          className="m-2 px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
        >
          جلسه اول{" "}
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
