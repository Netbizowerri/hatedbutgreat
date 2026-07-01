import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const MedicalExcellence = lazy(() => import('./pages/MedicalExcellence').then(m => ({ default: m.MedicalExcellence })));
const BusinessAdventures = lazy(() => import('./pages/BusinessAdventures').then(m => ({ default: m.BusinessAdventures })));
const EntertainmentCreativity = lazy(() => import('./pages/EntertainmentCreativity').then(m => ({ default: m.EntertainmentCreativity })));
const TalkShow = lazy(() => import('./pages/TalkShow').then(m => ({ default: m.TalkShow })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const LegalPage = lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'medical-excellence', element: <MedicalExcellence /> },
      { path: 'business-adventures', element: <BusinessAdventures /> },
      { path: 'entertainment-creativity', element: <EntertainmentCreativity /> },
      { path: 'talk-show', element: <TalkShow /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy-policy', element: <LegalPage type="privacy" /> },
      { path: 'terms-of-use', element: <LegalPage type="terms" /> },
      { path: 'disclaimer', element: <LegalPage type="disclaimer" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
