import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Share from "./pages/Share";
import View from "./pages/View";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create/:template_id" element={<Create />} />
      <Route path="/share" element={<Share />} />
      <Route path="/view/:card_id" element={<View />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
