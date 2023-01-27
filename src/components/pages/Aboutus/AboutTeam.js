import Javidi from "../../assets/image/profiles/Javidi.jpg";
import Tahajomi from "../../assets/image/profiles/Tahajomi.JPG";
import Araghi from "../../assets/image/profiles/Araghi.jpg";
import Asadi from "../../assets/image/profiles/Asadi.jpg";
import Teacher from "../../assets/image/profiles/teacher.jfif";
import Rastgar from "../../assets/image/profiles/Rastgar.JPG";
import Shayegh from "../../assets/image/profiles/Shayegh.jfif";
import Saeidi from "../../assets/image/profiles/Saeidi.jpg";
import Sadeghian from "../../assets/image/profiles/Sadeghian.jpg";
import Asad from "../../assets/image/profiles/Asadollahzadeh.jpg";

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
        name: "روژین رستگارپور",
        github: "https://github.com/RojinRastegarpour",
        src: Rastgar,
      },
      {
        name: "مصطفی تهاجمی",
        github: "https://github.com/Mostafa1676",
        src: Tahajomi,
      },
      {
        name: "محمد عراقی",
        github: "https://github.com/mamadi80",
        src: Araghi,
      },
      {
        name: "حسام اسدالله زاده",
        github: "https://github.com/HesamAsad",
        src: Asad,
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
      <div class="mb-12 text-center" key={id}>
        <a href={item.github} target={"_blank"} rel="noreferrer">
          <img
            src={item.src}
            alt=""
            class="rounded w-48 h-48 bg-blue-100"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </a>

        <p class="font-bold mb-2"> {item.name}</p>
      </div>
    );
  };
  return (
    <div className="my-5">
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-1 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-700 text-center text-bold">
              {" "}
              مدیر پروژه{" "}
            </p>
          </div>
          {team.leaders.map((item, id) => (
            <Card item={item} id={id} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-3 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-700 text-center"> همکاران </p>
          </div>
          {team.team.map((item, id) => (
            <Card item={item} id={id} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-1 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-700 text-center"> زیر نظر استاد </p>
          </div>
          {team.professors.map((item, id) => (
            <Card item={item} id={id} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-3 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
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
