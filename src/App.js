import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto" data-theme="night">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
