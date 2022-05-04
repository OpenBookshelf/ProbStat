const Test = ({ item, idx, SetUserAnswer, result }) => {
  return (
    <div className="justify-right mx-2">
      <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
      <form>
        {item.options.map((q, id) => (
          <div key={"text-"+id} className="form-check flex items-center">
            <span className="text-green-500">
              {result && +id + 1 === item.correct && <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVQ4je3Sz0vTcRzH8edn38220oKQQEETUiiSRPBi/sCRFiKtFQw6SSgadOtQRn9B6FGoQ4cReNHIg23MSaAEViPoEEjrkJHVQZh50HDf7dPn3SF/fJ0zzN2k1+nzeX3enwefL3zhfwqNKuRy/+fLQQN+n9Z3h2tidkFg35cr7YiJAkXAtOewN/DwxNNV136wmwuBBsSMr2MAbdl0+gzAP4O9XwPVxkgEKNnoFOrO48rnb/+s1xOSkFU8vzKEIR6umYznw3qSHeXitmaBqq1WDYarYwMbu80XepOpIZ21b+tfdrT7o/9WLhb61H4sg45qbVdpbaO1TVZnRsKnYveccwrgerKpXLLmO9tPHoyefX0fhYReNfqsEjUlSLNjIrKYOnR1xj+jd4AAwXf1vUp4BHgch88sb+aGThc9Aa5t9ZJYdZsLU3Xvf+Z+ybbfpitx+hLCGHDUUaeAUsd+ThurNX5+7kcutgMEuDhdUSuWKwKczDP/TVxW04vm+YV8WF4QoGWytMzlVhNAg6NeEjEtLzuWPuyG7QoCnItzxKeLRxQSBJbBdL7pWkv8DdtT6sc9dY1jHC8YOrj5DfC2k/QySZIkAAAAAElFTkSuQmCC" alt=""/>}
            </span>
            <input
              disabled={result}
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 m-2 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id={"flexRadioDefault" + id}
              onClick={() => SetUserAnswer(idx, id + 1)}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor={"flexRadioDefault" + id}
            >
              {q}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};
export default Test;
