import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import GameSelectHome from "./screens/GameSelectHome";
import GameModeDescription from "./screens/GameModeDescription";
import PlayerSelect from "./screens/PlayerSelect";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GameSelectHome />}>
      <Route path="description" element={<GameModeDescription />} />
      <Route path="playerselect" element={<PlayerSelect />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
