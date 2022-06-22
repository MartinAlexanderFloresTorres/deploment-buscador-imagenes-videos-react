import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Videos from "./pages/Videos";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/videos" element={<Videos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
