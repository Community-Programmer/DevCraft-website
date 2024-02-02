import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Event from "./Pages/Event/Event";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./Components/Preloader/Preloader";
import Scholarship from "./Pages/Academics/Scholarship/Scholarship";
import Timetable from "./Pages/Academics/Timetables/Timetable";
import Facilities from "./Pages/Facilities/Facilities";
import Contact from "./Pages/Contact/Contact";
import AdmissionOverview from "./Pages/Admission/Overview/AdmissionOverview";
import Fee from "./Pages/Admission/Fees Structure/Fee";
import AcademicOverview from "./Pages/Academics/Overview/AcademicOverview";
import Committee from "./Pages/About/College Development committee/Committee";
import Member from "./Pages/About/Board of Members/Member";
import Chairperson from "./Pages/About/Chairperson/Chairperson";
import Principal from "./Pages/About/Principal/Principal";
import GalleryImage from "./Pages/Gallery/Images/GalleryImage";
import GalleryVideo from "./Pages/Gallery/Videos/GalleryVideo";
import Pucollege from "./Pages/Department/PU College/Pucollege";
import Arts from "./Pages/Department/PU College/Arts/Arts";
import HighSchool from "./Pages/Department/High School/HighSchool";
import Primaryschool from "./Pages/Department/Primary School/Primaryschool";
import Science from "./Pages/Department/PU College/Science/Science";
import Commerce from "./Pages/Department/PU College/Commerce/Commerce";
import ScrollToTop from "react-scroll-to-top";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Layout from "./Layout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Layout/> }>
                <Route index element={<Home />} />

                <Route
                  path="/academic-overview"
                  element={<AcademicOverview />}
                />
                <Route path="/timetable" element={<Timetable />} />
                <Route path="/scholarship" element={<Scholarship />} />

                <Route
                  path="/admission-overview"
                  element={<AdmissionOverview />}
                />
                <Route path="/fee" element={<Fee />} />

                <Route path="/events" element={<Event />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/gallery-images" element={<GalleryImage />} />
                <Route path="/gallery-videos" element={<GalleryVideo />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/development-committe" element={<Committee />} />
                <Route path="/board-members" element={<Member />} />
                <Route path="/chairperson" element={<Chairperson />} />
                <Route path="/principal" element={<Principal />} />

                <Route path="/pu-college" element={<Pucollege />} />
                <Route path="/arts" element={<Arts />} />
                <Route path="/science" element={<Science />} />
                <Route path="/commerce" element={<Commerce />} />
                <Route path="/high-school" element={<HighSchool />} />
                <Route path="/primary-school" element={<Primaryschool />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            <ScrollToTop smooth color="#fff" />
          </>
        )}
      </>
    </>
  );
}

export default App;
