import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import FriendsDetails from './pages/friendDetails/FriendsDetails.jsx';
import Timeline from './pages/timeline/Timeline.jsx';
import States from './pages/stats/States.jsx';
import FriendsContextProvider from './context/FriendsContextProvider.jsx';
import TimelineContextProvider from './context/TimelineContextProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: '/friendsDetails/:paramId',
        Component: FriendsDetails
      },
      {
        path: '/timeline',
        Component: Timeline
      },
      {
        path: '/stats',
        Component: States
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsContextProvider>
      <TimelineContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </TimelineContextProvider>
    </FriendsContextProvider>
  </StrictMode>,
)
