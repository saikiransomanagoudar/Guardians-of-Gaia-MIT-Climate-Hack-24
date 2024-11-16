import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Components/Layout';
import Nature from './Pages/HomePages';
import Animal from './Pages/HomePages/Animal';
import Recycling from './Pages/HomePages/Recycling';
import Layout1 from './Components/Layout/Layout1';
import Agriculture from './Pages/HomePages/Agriculture';
import OceanLife from './Pages/HomePages/OceanLife';
import Charity from './Pages/HomePages/Charity';
import ClimateChange from './Pages/HomePages/ClimateChange';
import AboutPage from './Pages/AboutPage/AboutPage';
import Services from './Pages/ServicePages/Services';
import Team from './Pages/TeamPages/Team';
import EventDetails from './Pages/EventPages/EventDetails';
import ProjectDetails from './Pages/ProjectPage/ProjectDetails';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import ScrollUpButton from './Components/ScrollUpButton';
import ServiceDetails from './Pages/ServicePages/ServiceDetails';
import Layout2 from './Components/Layout/Layout2';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Error404 from './Pages/ErrorPage';
import { useEffect } from 'react';
function App() {
  const { pathname } = useLocation();
  Aos.init({
    duration: 900,
    delay: 0.2,
    once: true,
    disable: function () {
      return window.innerWidth < 768;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* home page  */}
          <Route index element={<Nature />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/recycling" element={<Recycling />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/climate-change" element={<ClimateChange />} />
          {/* other page  */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error404 />} />
        </Route>
        <Route path="/" element={<Layout1 />}>
          <Route path="/agriculture" element={<Agriculture />} />
        </Route>
        <Route path="/" element={<Layout2 />}>
          <Route path="/ocean-life" element={<OceanLife />} />;
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <CustomCursor />
      <ScrollUpButton />
    </>
  );
}

export default App;