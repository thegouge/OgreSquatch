import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Search from '../components/Search'
import Profile from '../components/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact component={Search}>
      <Route path="/profile/:platform/:gamertag" component={Profile} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
