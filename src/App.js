import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import routes from "./Router/routes";




function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
