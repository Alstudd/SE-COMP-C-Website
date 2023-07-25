import React from "react"
import ReactDOM from "react-dom/client"
import {
  createRoutesFromChildren,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

import MainLayout from "./components/MainLayout"
import Home from "./pages/Home"
import Students from "./pages/Students"
import Achievements from "./pages/Achievements"
import Contact from "./pages/Contact"

import "./index.css"

const router = createBrowserRouter(createRoutesFromChildren(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />} />
      <Route path="students" element={<Students />} />
      <Route path="achievements" element={<Achievements />} /> 
      <Route path="contact" element={<Contact />} />
    </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
