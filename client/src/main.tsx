import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { Search, Profile } from './routes'
import './styles/index.css'
import getProfileData from './lib/getProfileData.ts'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Search /> },
      {
        path: '/profile/:platform/:region/:gamertag',
        element: <Profile />,
        loader: async ({ params }) => {
          return await getProfileData(
            params?.platform ?? '',
            params?.region ?? '',
            params?.gamertag ?? ''
          )
        },
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
