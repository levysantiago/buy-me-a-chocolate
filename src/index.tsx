import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Home />);
