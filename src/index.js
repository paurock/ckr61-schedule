import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/Root";
import Muzclass from "./routes/Muzclass";
import Costumerka from "./routes/Costumerka";
import ReceptionRoom from "./routes/ReceptionRoom";

import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "muzclass",
        element: <Muzclass />
      },
      {
        path: "costumerka",
        element: <Costumerka />
      },
      {
        path: "receptionRoom",
        element: <ReceptionRoom />
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
