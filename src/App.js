import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:
        [
          { path: "/", element: <Home />, },
          { path: "home", element: <Home />, },
          { path: "about", element: <About />, },
          { path: "service", element: <Service />, }
        ]
    },



  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
