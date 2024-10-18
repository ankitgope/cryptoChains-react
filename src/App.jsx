import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MainLayout";
import CoinPage from "./Pages/CoinPage";
import CoinsDescription from "./Pages/CoinsDescription";
import Favourites from "./Pages/Favourites";
import Compare from "./Pages/Compare";
import DashBoard from "./Pages/DashBoard";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route to="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/coins" element={<CoinPage />} />
        <Route path="/coins/:id" element={<CoinsDescription/>} />
        <Route path="/favourites" element ={<Favourites/>}/>
        <Route  path="/compare" element={<Compare/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
