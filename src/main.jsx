import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookDetails from "./components/BookDetails";
import SelectedBooks from "./components/SelectedBooks";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import LIstedBook from "./pages/LIstedBook";
import PagesToRead from "./pages/PagesToRead";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed-book",
        element: <LIstedBook></LIstedBook>,
        children: [
          {
            index: true,
            element: <SelectedBooks></SelectedBooks>,
          },
          {
            path: "/listed-book/wish",
            element: <SelectedBooks></SelectedBooks>,
          },
        ],
      },
      {
        path: "/Pages-to-Read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../DummyData.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </React.StrictMode>
);
