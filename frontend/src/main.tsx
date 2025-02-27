import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokedexView from './views/PokedexView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokedexView/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
      <RouterProvider router={router}/>
  </React.Fragment>,
)