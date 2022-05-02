import { useHistory } from "react-router-dom";
import LecturList from "../pages/Lectures/LectureList";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const history = useHistory();
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : null}

      <div
        className={`top-0 right-0 bg-white p-10 pl-2 text-white fixed h-full overflow-auto z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
        style={{ width: "100%", maxWidth: "35em" }}
      >
        <LecturList
          closeSide={(idx, id) => {
            setShowSidebar(false);
            history.push(`/lectures/${idx}/${id}`);
          }}
        />
      </div>
    </>
  );
};

export default Sidebar;
