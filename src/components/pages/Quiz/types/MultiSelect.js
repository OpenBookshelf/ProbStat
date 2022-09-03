import React from "react";
import Latex from "../../../hooks/LATEX";

const MultiSelect = ({ item, idx, answers, SetUserAnswer, result }) => {
  const changeAnswer = (e) => {
    e.preventDefault();
    let pre = answers[idx] ?? [];
    if (pre.includes(e)) {
      pre = pre.filter(function (ele) {
        return ele !== e;
      });
    } else {
      pre.push(e);
    }
    SetUserAnswer(idx, pre);
  };
  return (
    <div className="justify-right mx-2">
      <Latex>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
      </Latex>
      <form>
        {item.options.map((q, id) => (
          <div key={"check" + id} className="form-check flex items-center">
            <input
              disabled={result}
              className="form-check-input appearance-none h-4 w-4 border border-gray-000 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              id="flexCheckDefault"
              onClick={(e) => changeAnswer(id + 1)}
            />

            <Latex>
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: q }}
              />
            </Latex>
          </div>
        ))}
      </form>
      {result && (
        <Latex>
          <h3>جواب صحیح</h3>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: item.correct }}
          />
        </Latex>
      )}
    </div>
  );
};

export default MultiSelect;
