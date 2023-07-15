import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import GameSelectHome from "./screens/GameSelectHome";
import GameModeDescription from "./screens/GameModeDescription";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GameSelectHome />}>
      <Route path="description" index element={<GameModeDescription />} />
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
