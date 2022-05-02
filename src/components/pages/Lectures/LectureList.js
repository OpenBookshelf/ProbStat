import { useRef, useState } from "react";

const Card = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { lecture, idx, closeSide } = props;

  const handleOpenAnswer = () => {
    setState(!state);
    setAnswerH(`min-content`);
  };

  return (
    <div
      className="space-y-3 overflow-hidden mt-5 border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-1 flex items-center justify-between text-md text-gray-700 font-medium">
        <div className="flex flex-row justify-between w-full">
          <div className="text-right w-1/2">
            <p> {lecture.name}</p>
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
              strokeLinecap="round"
              strokeLinejoin="round"
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
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="mt-3">
          {lecture.lectures.map((item, id) => (
            <button
              onClick={() => closeSide(id, idx)}
              className="text-gray-500"
            >
              <p className="inline-flex items-center justify-start w-full m-2 text-color-blue">
                <img
                  alt="icon"
                  className="ml-4"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAA6UlEQVQ4jc3UTUpDMRSG4ef6O3GmW/AHEXcguInSFYg41IkUR66gc+ddQBfQUTchOHUm4kRoUbjXQRIoF+lNLEI/+Ag5J+clJyFh3VW15tvYK2R84vu3xAPmaAo9x6ANO0ONMV6jx7EgJ1bjFDYi8ERof4Tn6FHM5cSqBEzq/aHVtnuLO1ymJ7xkrJMDfMe1cMZ3+FgVWMfxC0McYroKsFhdwJTfwa1wlhfLCrY6gPvCpVwK7XaqCwhXOaCk1FITxz4m0f3CWAObcVLhBrs4x0H0cWbsCI94W9ztADPlL2SG+wT51+9rPfUDtSBgFNR5jNcAAAAASUVORK5CYII="
                />{" "}
                {item.title}
              </p>
              <hr />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const LecturList = ({ closeSide }) => {
  const sessions = window.config["sessions"];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto bg-white p-5 rounded ">
      <div className="space-y-3 text-right rounded">
        <p className="text-xl text-gray-800"> لیست مباحث </p>
      </div>
      <div className="mt-4 mx-auto">
        {sessions.map((item, idx) => (
          <Card idx={idx} lecture={item} closeSide={closeSide} />
        ))}
      </div>
    </section>
  );
};
export default LecturList;
