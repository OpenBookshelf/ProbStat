import Latex from "../../../hooks/LATEX";

const Test = ({ item, idx, SetUserAnswer, result, answers }) => {
  return (
    <div className="justify-right mx-2">
      <Latex>
        <div
          className="text-justify mb-3"
          dangerouslySetInnerHTML={{ __html: item.question }}
        />
      </Latex>
      <form>
        {item.options.map((q, id) => (
          <div key={"text-" + id} className="form-check flex items-center">
            <span>
              {result && +id + 1 === item.answer[0] ? (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVQ4je3Sz0vTcRzH8edn38220oKQQEETUiiSRPBi/sCRFiKtFQw6SSgadOtQRn9B6FGoQ4cReNHIg23MSaAEViPoEEjrkJHVQZh50HDf7dPn3SF/fJ0zzN2k1+nzeX3enwefL3zhfwqNKuRy/+fLQQN+n9Z3h2tidkFg35cr7YiJAkXAtOewN/DwxNNV136wmwuBBsSMr2MAbdl0+gzAP4O9XwPVxkgEKNnoFOrO48rnb/+s1xOSkFU8vzKEIR6umYznw3qSHeXitmaBqq1WDYarYwMbu80XepOpIZ21b+tfdrT7o/9WLhb61H4sg45qbVdpbaO1TVZnRsKnYveccwrgerKpXLLmO9tPHoyefX0fhYReNfqsEjUlSLNjIrKYOnR1xj+jd4AAwXf1vUp4BHgch88sb+aGThc9Aa5t9ZJYdZsLU3Xvf+Z+ybbfpitx+hLCGHDUUaeAUsd+ThurNX5+7kcutgMEuDhdUSuWKwKczDP/TVxW04vm+YV8WF4QoGWytMzlVhNAg6NeEjEtLzuWPuyG7QoCnItzxKeLRxQSBJbBdL7pWkv8DdtT6sc9dY1jHC8YOrj5DfC2k/QySZIkAAAAAElFTkSuQmCC"
                  alt=""
                />
              ) : result &&
                +id + 1 !== item.answer[0] &&
                answers[idx] === +id + 1 ? (
                <img
                  width={"20"}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEi0lEQVRoge2ZTU8bVxSG33NpU5WCKCUTY4TUWBDCh+hiZmE2LMKCOwKFIqxIbQqb/ICA2k35B+2qVf9D1aZVUkWVgqgrpQsWYVEWVIaqRsIIRIlg4YliyxH4nC74ECB7fMdjFpX8Sl5Yc+fc9xnfc+fcY6Cuuuqq63+j3PRUVB5MNF9VfHkw0ZybnooGuUeZDizMJB4qUtuFw2ub+ZlEPLg9f+VnEvHC4bVNRWq7MH1v1vQ+Mgr+2dQcBN+cfhfIKyLSjd8/eVGN2cvK3Z90CA1JQFrPjAnNv/vD468q3VsRIP/p5JycM39Or0iUbnwUDiJ3f9IBIwmg9fI1EZpvevSLL4QvwOt7E7MgfOszxFOKdOOPT5fN7F5U/pOP48yyCKCl3BgBzTb/9PS7ctfLAuSmdJTV29sAGvxtkMdS1C2PnwWC8BJjcUUNi4CUNX+iIhF3Nv38bK/UxbJJnD9657VwMSvM8P8UW0iw6CXGjBPbS4zFSbAoXGwxiJ/NI/+6XCzfJZSd0jYxJQF8YOILityWJwu+OZGdHHUIquSaryZmxSTO3tU2IMYQBHZbfv295ITZ8VEHqnTCBo11KqNtNHtX28JsDMEsbtvCxYmz46OOHD8II/OlYpSSEQAAZPWIzcp8OQnozEB2/I7DfHGfN723kowBAGBfj9gqwHKCEpeLdKjIfNlAidu28IfxuyUQAAAcjN6JQ9h3775g6FhmY0np6789D7QdBwYAgP2RYRvHT9XklzCRRyz6+vOlwC/EqgCAYwgWTlJoCPIY0O1VmAdCAADA/vCQzWSc2KXkCYtuX3pRlXkgJAAA7A4P2UqME/u8PIBCmQdqAAAAu0OOTUoFgfBIsW5f+jOUeQB4K2wAAIAIMYMAMRpOAIpFqcnDC7+E4rbDYrzPn5cHgtu5vBLqPBEKYMu2HdXASUhg86fyiJXbuVI9RNUAW/agQ0LVPPnL8hTB7VxZrQqiKoCtwUEHyrgwM5HHotzYanCIwACbH/XHScjkJAWATkoJs7FComOra1dXSmwN9jpc5gBeQh5EaRI5FBWgAGRyY+vrtS/mNnp7HUVsfhgh0bG19DIAZPq6bYbxe8IjsBtb36hdOb3R2xUkYT3FpGPp9IWlkO7rthUbF4CeUjCCqAiw0dXloAGmW6XHULrnkvlTpbu7bRCSBDE7FAm5tzb8IXwBNrq6HBHzZSMsuieT8U3CdPeHNth8OYHFvZXJBD/U/337drN6U9gE0GY0Eaii+VP9c/NmHPBvaJ1JcHDYlI8NpPZLtlbK9oW4UGgS5vcr923Yw1HR2DwA9GQyyzgqamH2KsYXbkXuvaZyscoC9G9t/Sssn1cyTyy6Z2cncFXZs7OzTCwGEPLFQCZTsisHGCTxWjQ6R1SquUseq6Ie2HkZqiRe6+iwqWyjgOb7dnerb+6eTRKNXGivA/BEoAdehjN/Fr+jwwYXL0HQl/17e1/XIv7xJJY1m7Kso5Rl7acikZr/wZGKROIpyzo4meNhreMDAP66cSOSsqyyCRVWKctqSllW+1XFr6uuuuqqvf4DtHiJ42XrW+MAAAAASUVORK5CYII="
                  alt=""
                />
              ) : (
                <div style={{ width: "20px" }}></div>
              )}
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
              <Latex>
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: q }}
                />
              </Latex>
            </label>
          </div>
        ))}
      </form>
      {result && (
        <Latex>
          <h3 className="flex flex-row">پاسخ: </h3>
          <div
            className="text-justify text-green-600 my-3"
            dangerouslySetInnerHTML={{ __html: item.explain }}
          />
        </Latex>
      )}
    </div>
  );
};
export default Test;
