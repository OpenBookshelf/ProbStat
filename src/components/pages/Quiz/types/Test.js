import Latex from "../../../hooks/LATEX";

const Test = ({ item, idx, SetUserAnswer, result, answers }) => {
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
          <div key={"text-" + id} className="form-check flex items-center">
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
export default Test;
