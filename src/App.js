import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';
import Quizes from './components/Quizes/Quizes';
import AuthorInfo from './components/AuthorInfo/AuthorInfo';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/quizTopic/:quizTopicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizTopicId}`)
          },
          element: <Quizes></Quizes>
        },
        { path: '/statics', element: <Statistics></Statistics> },
        { path: '/about', element: <AuthorInfo></AuthorInfo> },
        { path: '/blog', element: <Blog></Blog> }
      ]
    },
    {
      path: '*',
      element: <div>
        <h1 className='text-2xl font-bold'>Oops! Sorry, This page not found 404</h1>
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
