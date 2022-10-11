import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        { path: '/statics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
