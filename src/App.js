import {useEffect,  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
import { useDispatch } from "react-redux";
import { checkAuth, getUser } from "./store/mutation/userSlice";

const HomeOne = lazy(() => import("./pages/HomeOne"));

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
                  
                </Routes>
            </Suspense>
        </NavScrollTop>
      </Router>
  );
}

export default App;
