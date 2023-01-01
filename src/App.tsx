//#Global Imports
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

//#local Imports
import PrivateRoute from "./hoc/PrivateRoute";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
