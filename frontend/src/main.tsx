import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokedexView from './views/PokedexView'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './hooks/usetheme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokedexView/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.Fragment>,
)