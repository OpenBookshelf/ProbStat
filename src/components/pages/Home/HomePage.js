import { Link } from "react-router-dom";
import Dice from "../../assets/image/dice.png";
import Aboutus from "../Aboutus/Aboutus";

const HomePage = () => {
  return (
    <>
      <section className="mt-20 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 mb-3 flex flex-col md:flex-row">
        <div className="md:w-7/12 sm:w-screen	">
          <div className="text-center space-y-4 mb-3 md:w-50 sm:w-100">
            <h1 className="text-indigo-600 font-bold text-xl md:text-4xl">
              تدریس برخط آمار و احتمال مهندسی
            </h1>
            <p
              className="text-gray-600 max-w-xl mx-auto leading-relaxed text-justify "
              style={{ whiteSpace: "pre-line" }}
            >
              {window.config?.main.homeText}{" "}
            </p>
          </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <Link
              to="/lectures"
              className=" md:m-2 py-3 px-6 md:w-20  sm:w-screen bg-indigo-600 text-white text-center rounded-md shadow-md block  hover:text-white hover:bg-indigo-800"
            >
              دیدن مباحث{" "}
            </Link>
            <Link
              to="/lectures/0/0"
              className="md:m-2 py-3 px-6 md:w-20 sm:w-screen text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block "
            >
              جلسه اول{" "}
            </Link>
          </div>
        </div>
        <div className="md:w-5/12 sm:w-screen flex justify-center items-center">
          <img src={Dice} alt="" width={"80%"} />
        </div>
      </section>
      <section className="my-16">
        <Aboutus />
      </section>
    </>
  );
};

export default HomePage;
