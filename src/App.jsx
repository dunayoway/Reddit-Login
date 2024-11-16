import "./App.css";
import Header from "./components/layout/Header/Header";
import Login from "./components/pages/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("This is a toast notification !");
  return (
    <div>
      <Header />
      <Login />

      <ToastContainer />
    </div>
  );
}

export default App;
