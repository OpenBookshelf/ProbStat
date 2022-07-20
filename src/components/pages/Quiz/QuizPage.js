import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import "../../assets/stylesheet/lecture.css";
import XMLReq from "../../utility/XMLReq";
import Input from "./types/Input";
import MultiSelect from "./types/MultiSelect";
import Test from "./types/Test";

const QuizPage = () => {
  const [res, setRes] = React.useState("");
  const [result, setResult] = React.useState();

  const [answers, setAnswers] = React.useState({});

  const { id } = useParams();
  const history = useHistory();

  const [data, setData] = useState(false);

  useEffect(() => {
    XMLReq(
      `https://openbookshelf.github.io/ProbStat/lectures/${+id + 1}/info.json`,
      setData
    );
  }, [id]);

  React.useEffect(() => {
    if (data) XMLReq(data.quiz.src, setRes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, history]);

  const GetQuestion = (item, idx) => {
    if (item.type === "test") {
      return (
        <Test
          item={item}
          result={result}
          idx={idx}
          answers={answers}
          SetUserAnswer={SetUserAnswer}
        />
      );
    }
    if (item.type === "multiselect") {
      return (
        <MultiSelect
          item={item}
          result={result}
          idx={idx}
          answers={answers}
          SetUserAnswer={SetUserAnswer}
        />
      );
    }
    if (item.type === "input") {
      return (
        <Input
          item={item}
          result={result}
          idx={idx}
          SetUserAnswer={SetUserAnswer}
        />
      );
    }
    return <p className="text-red-500 mx-3">سوال ساپورت نشده است</p>;
  };

  const SetUserAnswer = (idx, answer) => {
    window.onbeforeunload = function () {
      return "ابتدا اتمام آزمون را بزنید";
    };
    setAnswers({ ...answers, [idx]: answer });
  };

  return (
    <section className="max-full mx-5 my-3 sm:px-5 rounded bg-white ">
      {!data ? (
        <div className="mt-9  flex justify-center w-full">
          <div className="flex flex-wrap mt-5">
            <div className="w-full p-2 overflow-auto">
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: res }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded w-full py-2">
          <div className="w-full my-3  text-xl text-gray-600">
            {" "}
            {data.quiz.name}{" "}
          </div>
          <h2>آزمونک</h2>
          {res ? (
            res?.exam.questions?.map((item, idx) => (
              <div key={"q" + idx} className="flex col my-4 mx-1 border-b ">
                <span>{idx + 1 + "-"} </span> {GetQuestion(item, idx)}
              </div>
            ))
          ) : (
            <div className="loading">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {result ? (
            <Link to={`/lectures/${+id + 1}/0`}>
              <button className="w-200 m-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                مبحث بعدی{" "}
              </button>
            </Link>
          ) : (
            <button
              className="w-200 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => {
                setResult(true);
                window.onbeforeunload = null;
              }}
            >
              اتمام آزمون
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default QuizPage;
