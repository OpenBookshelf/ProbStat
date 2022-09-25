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
      `https://openbookshelf.github.io/ProbStat/lectures/${+id}/info.json`,
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
  function areEqual(array1, array2) {
    if (array1.length === array2.length) {
      return array1.every((element) => {
        if (array2.includes(element)) {
          return true;
        }

        return false;
      });
    }

    return false;
  }

  const score = () => {
    if (result) {
      let all = res?.exam.questions.length;
      let correct = Object.values(answers).map((answer, idx) => {
        let job = res.exam.questions[idx].answer;

        if (typeof answer === "object") {
          let check = areEqual(job, answer);

          return check === true ? 1 : 0;
        } else {
          return Number(job[0]) === Number(answer) ? 1 : 0;
        }
      });

      if (correct.length > 0)
        return `نمره محاسبه شده  :  ${correct.reduce(
          (t, a) => t + a
        )}/${all} ،  ${(parseFloat((correct.reduce((t, a) => t + a) / all)).toPrecision(1)) * 10} از 10 `;
      else return "شما پاسخی ثبت نکرده اید.";
    } else {
      return 0;
    }
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
          {result && (
            <div class="flex bg-green-200 w-100 mb-4">
              <div class="w-16 bg-green-400">
                <div class="p-4">
                  <svg
                    class="h-8 w-8 text-white fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z" />
                    <path d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z" />
                  </svg>
                </div>
              </div>
              <div class="w-auto text-grey-darker items-center p-4">
                <span class="text-lg font-bold pb-4">محاسبه نمره شما</span>
                <p class="leading-tight">{score()}</p>
              </div>
            </div>
          )}
          {res ? (
            res?.exam.questions?.map((item, idx) => (
              <div key={"q" + idx} className="flex col my-6 mx-1 py-2 border-b ">
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
            <div>
              <Link to={`/lectures/${+id + 1}/0`}>
                <button className="w-200 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  مبحث بعدی{" "}
                </button>
              </Link>
              <button
                className="w-200 m-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                onClick={() => {
                  window.location.reload();
                }}
              >
                شرکت مجدد{" "}
              </button>
            </div>
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
