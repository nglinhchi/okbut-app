import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Share from "./pages/Share";
import View from "./pages/View";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import { TEMPLATES } from "./data/templates";
import { AppContext } from "./context/AppContext";
import Test from "./pages/Test";

export default function App() {
  return (
    <AppContext.Provider value={{ templates: TEMPLATES }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/:template_id" element={<Create />} />
        <Route path="/share" element={<Share />} />
        <Route path="/view/:card_id" element={<View />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/invalid" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
}
