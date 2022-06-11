import Javidi from "../../assets/image/profiles/Javidi.jpg";
import Tahajomi from "../../assets/image/profiles/Tahajomi.JPG";
import Araghi from "../../assets/image/profiles/Araghi.jpg";
import Asadi from "../../assets/image/profiles/Asadi.jpg";
import Teacher from "../../assets/image/profiles/teacher.jfif";
import Rastgar from "../../assets/image/profiles/Rastgar.JPG";
import Shayegh from "../../assets/image/profiles/Shayegh.jfif";
import Saeidi from "../../assets/image/profiles/Saeidi.jpg";
import Sadeghian from "../../assets/image/profiles/Sadeghian.jpg";

const AboutTeam = () => {
  const team = {
    leaders: [
      {
        name: "شهرزاد جاویدی",
        github: "https://ir.linkedin.com/in/shahrzad-javidi-35667b201",
        src: Javidi,
      },
    ],
    team: [
      {
        name: "پرنا اسدی",
        github: "https://github.com/perriex",
        src: Asadi,
      },
      {
        name: "مصطفی تهاجمی",
        github: "https://github.com/Mostafa1676",
        src: Tahajomi,
      },
      {
        name: "روژین رستگارپور",
        github: "https://github.com/RojinRastegarpour",
        src: Rastgar,
      },
      {
        name: "محمد عراقی",
        github: "https://github.com/mamadi80",
        src: Araghi,
      },
    ],
    professors: [
      {
        name: " دکتر بهرک",
        github: "https://ece.ut.ac.ir/~bahrak",
        src: Teacher,
      },
    ],
    specials: [
      {
        name: "  بهزاد شایق",
        github: "https://github.com/BehzadShayegh",
        src: Shayegh,
      },
      {
        name: "   دانیال سعیدی",
        github: "https://github.com/daniel-saeedi",
        src: Saeidi,
      },
      {
        name: "سروش صادقیان",
        github: "https://github.com/sorooshsadeqian",
        src: Sadeghian,
      },
    ],
  };

  const Card = ({ item, id }) => {
    return (
      <div
        className="md:col-span-2 sm:col-span-12 p-2 bg-white rounded-xl shadow-xl"
        key={id}
      >
        <a href={item.github} target={"_blank"} rel="noreferrer">
          <div
            className="rounded-xl"
            style={{
              width: "100%",
              maxWidth: "250px",
              height: "250px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              background: "gray",
            }}
          >
            <img
              alt=""
              src={item.src}
              className="brightness-75"
              style={{ height: "100%", width: "auto" }}
            />
          </div>
        </a>
        <p className="text-xs text-center text-black font-semibold  sm:text-base ">
          {item.name}
        </p>
      </div>
    );
  };
  return (
    <div className="my-5">
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-2 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-700 text-center"> مدیر پروژه </p>
          </div>
          {team.leaders.map((item, id) => (
            <Card item={item} id={id} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-4 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-700 text-center"> همکاران </p>
          </div>
          {team.team.map((item, id) => (
            <Card item={item} id={id} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-2 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-700 text-center"> زیر نظر استاد </p>
          </div>
          {team.professors.map((item, id) => (
            <Card item={item} id={id} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-4 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-700 text-center">
              {" "}
              با تشکر ویژه از
            </p>
          </div>
          {team.specials.map((item, id) => (
            <Card item={item} id={id} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
