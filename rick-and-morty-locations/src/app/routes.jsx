import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from './layout';
import Home from '../pages/home';
import Detail from '../pages/detail';
import Locations from '../pages/locations';
import LocationDetail from '../pages/location-detail';
import About from '../pages/about';
import NotFound from '../pages/not-found';
import { characterService } from '../api/character-service';
import { locationService } from '../api/location-service';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async ({ request }) => {
          const url = new URL(request.url);

          return await characterService.getAll({
            name: url.searchParams.get('name') || undefined,
            gender: url.searchParams.get('gender') || undefined,
          });
        },
      },
      {
        path: 'characters/:characterId',
        element: <Detail />,
        loader: async ({ params }) => {
          return await characterService.getDetail(params.characterId);
        },
      },
      {
        path: 'locations',
        element: <Locations />,
        loader: async ({ request }) => {
          const url = new URL(request.url);

          return await locationService.getAll({
            name: url.searchParams.get('name') || undefined,
          });
        },
      },
      {
        path: 'locations/:locationId',
        element: <LocationDetail />,
        loader: async ({ params }) => {
          return await locationService.getDetail(params.locationId);
        },
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'random',
        loader: () => {
          const randomId = Math.floor(Math.random() * 826) + 1;
          return redirect(`/characters/${randomId}`);
        },
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);