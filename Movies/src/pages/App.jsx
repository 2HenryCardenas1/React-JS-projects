import {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./home/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
