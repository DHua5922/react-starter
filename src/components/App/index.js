import { StoreProvider } from "easy-peasy";
import store from "../../store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Page from "../pages/Page";

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
