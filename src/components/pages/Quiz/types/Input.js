import Latex from "../../../hooks/LATEX";

const Input = ({ item, idx, SetUserAnswer, result }) => {
  return (
    <div className="justify-right mx-2">
      <Latex>
        <div
          className="text-justify mb-3  "
          dangerouslySetInnerHTML={{ __html: item.question }}
        />
      </Latex>{" "}
      <form>
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
      {result && (
        <Latex>
          <h3 className="flex flex-row">جواب صحیح</h3>
          <div
            className="text-justify text-green-600 my-3"
            dangerouslySetInnerHTML={{ __html: item.explain }}
          />
        </Latex>
      )}
    </div>
  );
};

export default Input;
