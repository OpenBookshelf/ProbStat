import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Latex from "../../hooks/LATEX";
import LectureList from "./LectureList";

const LecturePage = () => {
  const [html, setHtml] = React.useState("");
  const { id, lecture } = useParams();
  const history = useHistory();
  const data = window.config.sessions[+id].lectures[+lecture];

  React.useEffect(() => {
    if (data && data.file) {
      const req = new XMLHttpRequest();

      req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
          setHtml(this.responseText);
        }
      };
      req.open("GET", data.file, false);
      req.send();
    } else {
      history.goBack();
    }
  }, [data, history]);

  if (!data) {
    return (
      <div className="d-flex items-center	 justify-center	flex-col	 w-100">
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4 className="text-center">خطا در گرفتن محتوای جلسه </h4>
        <p className="text-center">
          لطفا مجددا از مباحث جلسه مد نظر خود را انتخاب کنید.
        </p>
      </div>
    );
  } else
    return (
      <section className="max-w-screen-xl mx-auto py-4 px-4 sm:px-8">
        <div>
          <div className="py-4">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              {data.title}
            </h3>
            <h5 className=" text-gray-800 font-semibold mt-2">
              {data.description}
            </h5>
          </div>
          <div className="w-100 rounded-md">
            <iframe
              style={{ width: "100%", height: "80vh", borderRadius: "16px" }}
              title="lecture one"
              src={data.streamLink}
              allowFullScreen={true}
            ></iframe>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-3/4 xl:w-4/7 p-1 overflow-auto">
              <Latex>
                <div
                  class="text-justify"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </Latex>
            </div>

            <div class="w-full lg:w-1/4 xl:w-1/7">
              <LectureList />
            </div>
          </div>
        </div>
        <style>{`
        .cta-pr-btn:hover svg {
          transform: translateX(5px);
        }
      `}</style>
      </section>
    );
};

export default LecturePage;
