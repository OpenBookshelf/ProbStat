import React from "react";
import { useHistory, useParams } from "react-router-dom";
import LectureList from "./LectureList";

const LecturePage = () => {
  const [html, setHtml] = React.useState("");
  const { id } = useParams();
  const history = useHistory();
  const data = window.config.lectures[+id - 1];

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
  }, [data, history, setHtml]);

  if (!data) {
    <svg class="animate-spin h-10 w-10 mr-3 ..." viewBox="0 0 24 24"></svg>;
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
              <div class="text-justify" dangerouslySetInnerHTML={{ __html: html }} />
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
