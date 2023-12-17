import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Login } from "./component/Login";
import { NavBar } from "./component/NavBar";
import { SignUp } from "./component/SignUp";
import { Home } from "./pages/Home";
// import MultiStepForm from "./pages/Stipper";

function App() {
  return (
    <>
      <NavBar />
      <AllRoutes />
    </>
  );
}

export default App;
