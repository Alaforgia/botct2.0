import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import GameSelectHome from "./screens/GameSelectHome";

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<GameSelectHome />}>
</Route>));

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
