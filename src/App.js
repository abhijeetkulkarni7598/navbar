import {useEffect,  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
import { useDispatch } from "react-redux";
import { checkAuth, getUser } from "./store/mutation/userSlice";
import AuthServices from "./store/AuthServices";
import AuthServicesEducation from "./store/auth/AuthServicesEducation";
import AuthServicesCareer from "./store/auth/AuthServicesCareer";
import AuthMicro from "./store/auth/AuthMicro";
import AuthSpritual from "./store/auth/AuthSpritual";
const HomeOne = lazy(() => import("./pages/HomeOne"));
const HomeTwo = lazy(() => import("./pages/HomeTwo"));
const HomeThree = lazy(() => import("./pages/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Work = lazy(() => import("./pages/Work"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));
const BlogClassic = lazy(() => import("./pages/BlogClassic"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const BlogCategories = lazy(() => import("./pages/BlogCategories"));
const BlogTag = lazy(() => import("./pages/BlogTag"));
const Contact = lazy(() => import("./pages/Contact"));
const EducationService = lazy(() => import("./pages/EducationService"));
const CareerService = lazy(() => import("./pages/CareerService"));
const MicroService = lazy(() => import("./pages/MicroService"));
const SpiritualService = lazy(() => import("./pages/SpiritualService"));
const Signup = lazy(() => import("./pages/Signup"));




function App() {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, [])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
      <Router>
        <NavScrollTop>
          <Suspense fallback={<div />}>
                <Routes>
                  <Route path={`${"/"}`} element={<HomeOne/>}/>
                  <Route path={`${"/home-one"}`} element={<HomeOne/>}/>
                  <Route path={`${"/home-two"}`} element={<HomeTwo/>}/>
                  <Route path={`${"/home-three"}`} element={<HomeThree/>}/>
                  <Route path={`${"/about"}`} element={<About/>} />
                  <Route path={`${"/service"}`} element={<Service/>} />
                  <Route path={`${"/work"}`} element={<Work/>} />
                  <Route path={`${"/work-details/:id"}`} element={<WorkDetails/>} />
                  <Route path={`${"/blog-grid"}`} element={<BlogGrid/>} />
                  <Route path={`${"/blog-classic"}`} element={<BlogClassic/>} />
                  <Route path={`${"/tag/:slug"}`} element={<BlogTag/>} />
                  <Route path={`${"/category/:slug"}`} element={<BlogCategories/>} />
                  <Route path={`${"/blog-details/:id"}`}element={<BlogDetails/>} />
                  <Route path={`${"/contact"}`} element={<Contact/>} />
                  <Route path={`${"/EducationService"}`} element={
                  <AuthServicesEducation>

                  <EducationService/>
                  </AuthServicesEducation>
                  } />
                  <Route path={`${"/CareerService"}`} element={
                  <AuthServicesCareer>

                  <CareerService/>
                  </AuthServicesCareer>
                  } />
                  <Route path={`${"/MicroService"}`} element={
                  <AuthMicro>

                  <MicroService/>
                  </AuthMicro>
                  } />
                  <Route path={`${"/SpiritualService"}`} element={
                  <AuthSpritual>

                    <SpiritualService/>
                  </AuthSpritual>
                  } />
                  <Route path={`${"/Signup"}`} element={<Signup/>} />
                </Routes>
            </Suspense>
        </NavScrollTop>
      </Router>
  );
}

export default App;
