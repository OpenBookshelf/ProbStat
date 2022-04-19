import { Link } from "react-router-dom";

const LectureIntro = () => {
  const lectures = window.config["sessions"];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          مباحث تدریس شده آمار و احتمال مهندسی
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          شما میتوانید با کلیک کردن بر روی مبحث مورد نظر، ویدیو و جزوه آن جلسه
          را مشاهده کنید.
        </p>
      </div>
      <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {lectures.map((item, idx) => (
          <Link
            to={`/probstat/lectures/${item.id}/${idx}`}
            className="space-y-3 mt-5 border-solid  md:hover:border-dotted md:border-2 md:border-sky-800 p-3 rounded md:bg-white sm:border-b"
            key={idx}
          >
            <h4 className="text-xl text-gray-700 font-medium">{item.name}</h4>
            <p className="text-gray-500">{item.describe}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default LectureIntro;
