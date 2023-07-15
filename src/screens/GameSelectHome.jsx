import { Outlet, Link } from "react-router-dom";

function GameSelectHome() {
  const handleGameSelectClick = () => {};
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="p-6 mb-5 text-3xl font-bold underline">BOTCT DEMO</h2>
        <p className="p-1 mb-4 font-serif font-bold text-4xl ">Select Game Type:</p>
        <div className="p-2 font-serif font-bold text-3xl">
          <p
            className="p-3 mb-7 border-spacing-6 border-2 border-black rounded-xl cursor-pointer"
            onClick={handleGameSelectClick()}
          >
            <Link to="/">Trouble Brewing</Link>
          </p>
          <p className="p-1 mb-7">Coming Soon...</p>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default GameSelectHome;
