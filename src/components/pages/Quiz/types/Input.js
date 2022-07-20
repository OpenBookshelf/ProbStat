const Input = ({ item, idx, SetUserAnswer, result }) => {
  return (
    <div className="justify-right mx-2">
      <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
      <form>
        <span className="text-green-500">
          {result && (
            <div className="flex items-center m-1">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVQ4je3Sz0vTcRzH8edn38220oKQQEETUiiSRPBi/sCRFiKtFQw6SSgadOtQRn9B6FGoQ4cReNHIg23MSaAEViPoEEjrkJHVQZh50HDf7dPn3SF/fJ0zzN2k1+nzeX3enwefL3zhfwqNKuRy/+fLQQN+n9Z3h2tidkFg35cr7YiJAkXAtOewN/DwxNNV136wmwuBBsSMr2MAbdl0+gzAP4O9XwPVxkgEKNnoFOrO48rnb/+s1xOSkFU8vzKEIR6umYznw3qSHeXitmaBqq1WDYarYwMbu80XepOpIZ21b+tfdrT7o/9WLhb61H4sg45qbVdpbaO1TVZnRsKnYveccwrgerKpXLLmO9tPHoyefX0fhYReNfqsEjUlSLNjIrKYOnR1xj+jd4AAwXf1vUp4BHgch88sb+aGThc9Aa5t9ZJYdZsLU3Xvf+Z+ybbfpitx+hLCGHDUUaeAUsd+ThurNX5+7kcutgMEuDhdUSuWKwKczDP/TVxW04vm+YV8WF4QoGWytMzlVhNAg6NeEjEtLzuWPuyG7QoCnItzxKeLRxQSBJbBdL7pWkv8DdtT6sc9dY1jHC8YOrj5DfC2k/QySZIkAAAAAElFTkSuQmCC"
                alt=""
              />
              {item.correct}
            </div>
          )}
        </span>
        <input
          type="text"
          disabled={result}
          onChange={(e) => SetUserAnswer(idx, e.target.value)}
          className="
          my-2
           form-control
           block
           w-100
           px-3
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-padding
           border border-solid border-gray-300
           rounded
           transition
           ease-in-out
           m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
         "
          id="exampleFormControlInput1"
          placeholder="پاسخ شما"
        />
      </form>
    </div>
  );
};

export default Input;
