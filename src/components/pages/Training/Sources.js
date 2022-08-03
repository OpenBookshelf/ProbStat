import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import XMLReq from "../../utility/XMLReq";

const Card = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [data, setData] = useState(false);
  console.log("🚀 ~ file: Sources.js ~ line 9 ~ Card ~ data", data);
  const [answerH, setAnswerH] = useState("0px");
  const { idx, item } = props;

  React.useEffect(() => {
    XMLReq(item, setData);
  }, [item]);

  const handleOpenAnswer = () => {
    setState(!state);
    setAnswerH(`min-content`);
  };
  if (!data) return;
  return (
    <div
      className="space-y-3 overflow-hidden mt-5 mb-5 border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-1 flex items-center justify-between text-md text-gray-700 font-medium">
        <div className="flex flex-row justify-between w-full">
          <div className="text-right w-1/2 font-bold">
            <p> {data.title}</p>
          </div>
          <div className="inline-flex items-center justify-center w-1/2">
            <img
              width={"20px"}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAr0lEQVRYhe2XwQ2DMAxFH4hzJ4ApeikTdAKWZAMmYBHOSO0C9NBSFRdEMJC0wk/yxUryn2QpUeDoRMp9OZCKXgPU63TcKYFOVKk5KN5QSoUJmIAJmEBwgcRhzRU4iV42si4DCtG7A5XCa8AZaPm+++fqBlzWhmslNg1fKrFLuKvEruFzEl7CpyS8hkuJIOE9+auM/+XzX5Dib541z3/EgILl97223o9W8Of4p0ZwTB6lL2LbsJeeoQAAAABJRU5ErkJggg=="
              alt=""
            />
            {data.download.length} فایل
          </div>
        </div>
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300 "
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="mt-3">
          {data.download.map((item, id) => (
            <a href={item.src} className="text-gray-500" download>
              <p className="inline-flex items-center justify-start w-full m-2 text-color-blue">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABbklEQVRIibXUTygEUQDH8e/MDi1WbZQoHDZ/tkSxrfynxIE9yMUmJ83FwcEBZ1H+XBwUN26y5cBJ7YEtLtuWf4dVm9aiOMmBcpodB1H7b3bM7vyOM+/9Pu/15g2YHCH5gep1LOqfHvcJB7HY/4AJh6qnWq1rRXgKP6MoA8J+JJppnKinLC1Q34Yir9VgkQLqZIMj7wCA6mxHkVc1kZwAPUjOQAIiSqfJ7wwfcqYIvmhCZ152oBX9QHM37F5D/7hJQKML4gq09JkEPN6BzQ5vLyYBl2fw8Q6vDyYBRTawloBHhkKrCUCXB0J+iFzB7CbUOsE9BE0dIKR87X+R9C3DAiPTcHsOZZXgGgT3MHx9gijC3hIEDg0CpXbwzkNFNZRXwcUx7CxASw/0joFUAPc3Gadr3+TOUZBXoNgGy1MQDmZdT/JN1t7BzMbPgR5t6ypPF21gaw4sEgRPDJVnB0J+w8W/Mf1nl7oDlXWz0bzmG0ZVX0NFOd9TAAAAAElFTkSuQmCC"
                  alt=""
                />
                {item.name}
              </p>
              <hr />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sources = () => {
  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto bg-white p-5 shadow rounded ">
      <div className="space-y-3 text-right rounded">
        <p className="text-2xl text-gray-800">
          {" "}
          تمرین ها و نمونه سوالات آمار و احتمال مهندسی
        </p>
      </div>
      <div className="mt-4 mx-auto">
        {[
          "https://openbookshelf.github.io/ProbStat/sources/CA.json",
          "https://openbookshelf.github.io/ProbStat/sources/exams.json",
          "https://openbookshelf.github.io/ProbStat/sources/homeworks.json",
        ].map((item, idx) => (
          <Card idx={idx} item={item} />
        ))}
        <div className="text-right w-1/2 font-bold">
          <p>
            {" "}
            {"منبع درس:"} {window.config?.main.source}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Sources;
