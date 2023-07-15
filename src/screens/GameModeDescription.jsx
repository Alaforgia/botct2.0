import { Outlet, Link } from "react-router-dom";

function GameModeDescription() {
  // Trouble Brewing description static data will go here
  return (
    <>
      <div>
        GameModeDescription
        <button>Continue To Set-Up</button>
        <Link to={"/"}>
          <p>Back</p>
        </Link>
        <Outlet />
      </div>
    </>
  );
}

export default GameModeDescription;
