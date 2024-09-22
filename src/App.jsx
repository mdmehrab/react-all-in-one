import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import FetchData from "./components/FetchData";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FetchData />} />
        <Route path="/details/:userDetails" element={<Details />} />
      </Routes>
    </>
  );
}
