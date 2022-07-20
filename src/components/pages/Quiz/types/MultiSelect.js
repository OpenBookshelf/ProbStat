import React from "react";

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
      <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
      <form>
        {item.options.map((q, id) => (
          <div key={"check" + id} className="form-check flex items-center">
            <span className="text-green-500">
              {result && item.correct.includes(id + 1) && (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVQ4je3Sz0vTcRzH8edn38220oKQQEETUiiSRPBi/sCRFiKtFQw6SSgadOtQRn9B6FGoQ4cReNHIg23MSaAEViPoEEjrkJHVQZh50HDf7dPn3SF/fJ0zzN2k1+nzeX3enwefL3zhfwqNKuRy/+fLQQN+n9Z3h2tidkFg35cr7YiJAkXAtOewN/DwxNNV136wmwuBBsSMr2MAbdl0+gzAP4O9XwPVxkgEKNnoFOrO48rnb/+s1xOSkFU8vzKEIR6umYznw3qSHeXitmaBqq1WDYarYwMbu80XepOpIZ21b+tfdrT7o/9WLhb61H4sg45qbVdpbaO1TVZnRsKnYveccwrgerKpXLLmO9tPHoyefX0fhYReNfqsEjUlSLNjIrKYOnR1xj+jd4AAwXf1vUp4BHgch88sb+aGThc9Aa5t9ZJYdZsLU3Xvf+Z+ybbfpitx+hLCGHDUUaeAUsd+ThurNX5+7kcutgMEuDhdUSuWKwKczDP/TVxW04vm+YV8WF4QoGWytMzlVhNAg6NeEjEtLzuWPuyG7QoCnItzxKeLRxQSBJbBdL7pWkv8DdtT6sc9dY1jHC8YOrj5DfC2k/QySZIkAAAAAElFTkSuQmCC"
                  alt=""
                />
              )}
            </span>
            <input
              disabled={result}
              className="form-check-input appearance-none h-4 w-4 border border-gray-000 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              id="flexCheckDefault"
              onClick={(e) => changeAnswer(id + 1)}
            />

            <label
              className="form-check-label inline-block text-gray-800 mx-2 mt-2"
              for="flexCheckDefault"
            >
              {q}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default MultiSelect;
