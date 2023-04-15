import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Header from './Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "service",
      element: <Service />,
    }
  ]);
  return (
    <div className="App">
    
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
