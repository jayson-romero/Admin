import Home from "./components/pages/Home/Home"
import Other from './components/pages/other/Other'
import Other2 from "./components/pages/other/Other2"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home/>}>
        <Route path="" index element={<Other/>}/>
        <Route path="other" index element={<Other2/>}/>
      </Route>
    )
  )


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
