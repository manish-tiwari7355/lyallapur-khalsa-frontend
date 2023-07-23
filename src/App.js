import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import AboutLKCTC from "./pages/About/AboutLKCTC";
import VisionAndMission from "./pages/About/Vision-Mission";
import CoreValues from "./pages/About/CoreValues";
import OurGoverningBody from "./pages/About/ourGoverningBody";
import IndustryMOUs from "./pages/About/IndustryMOUs";
import CapacityAndCarrierBuilding from "./pages/About/CapacityCarrierBuilding";
import NewsGallery from "./pages/StudentsGallery/NewsGallery";
import AllEvents from "./pages/StudentsGallery/AllEvents";
import ListOfCourses from "./pages/Academics/ListOfCourses";
import EResources from "./pages/Academics/EResources";
import ResearchInvation from "./pages/Academics/ResearchInvation";
import Faculty from "./pages/Academics/Faculty";
import ManagementDepartment from "./pages/Academics/ManagementDepartment";
import DepartmentOfIT from "./pages/Academics/DepartmentOfIT";
import DepartmentOfHotelManagement from "./pages/Academics/DepartmentOfHotelManagement";
import DepartmentOfComputerScience from "./pages/Academics/DepartmentOfComputerScience";
import DepartmentOfCivilEngineering from "./pages/Academics/DepartmentOfCivilEngineering";
import DepartmentOfECE from "./pages/Academics/DepartmentOfECE";
import SchoolOfMechanicalEngineering from "./pages/Academics/SchoolOfMechanicalEngineering";
import PlacementCell from "./pages/Placements/PlacementCell";
import IndustryPartners from "./pages/Placements/industry-partners";
import IndustrialVisit from "./pages/Placements/industrial-visit";
import PlacedListStudents from "./pages/Placements/student-placed-list";
import UpcomingPlacements from "./pages/Placements/Upcoming-Placements";
import CoursesOffered from "./pages/Admission/CoursesOffered";
import BrandAmbassadors from "./pages/Alumni/BrandAmbassadors";
import AlumniTestimonials from "./pages/Alumni/AlumniTestimonials";
import AlumniMeet from "./pages/Alumni/AlumniMeet";
import Prospectus from "./pages/Admission/Prospectus";
import AcademicCalender from "./pages/Academics/AcademicCalendar";
import FAQs from "./pages//Admission/FAQs";
import Contact from "./pages/Contact";
import Header from "../src/components/Header/index";
import Footer from "../src/components/Footer/index";
import NotFoundPage from "./pages/404";
import FromTheDeskOf from "./pages/About/FromTheDeskOf";
import AffiliationOrder from "./pages/MandatoryDisclosure/AffiliationOrder/index.jsx";
import Approval from "./pages/MandatoryDisclosure/Approval/index";
import WomenGrievance from "./pages/MandatoryDisclosure/WomenGrievance/index";
import PhotoGallery from "./pages/PhotoGallery";
import PageUnderConstruction from "./pages/PageUnderContruction";
import DepartmentOfHealthScience from "./pages/Academics/DepartmentOfHealthScience";
import DepartmentOfAppliedScience from "./pages/Academics/DepartmentOfAppliedScience";
import AdmissionForm from "./pages/Admission/AdmissionForm";
import Examination from "./pages/Examination";
import SWA from "./pages/SWA";
import NCCWing from "./pages/NCCWing";
import ScrollToHeading from "./components/ScrollToHeading";
import AllNoticeBoard from "./pages/Academics/AllNoticeBoard";
import Naactest2 from "./pages/NAAC/Naactest2";
import SSR from "./pages/NAAC/SSR";
import IQAC from "./pages/NAAC/IQAC";

function App() {
  return (
    <ScrollToHeading offset={140}>
      <div className="">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* ________About______________ */}
          <Route path="/About/AboutLKCTC" element={<AboutLKCTC />} />
          <Route path="/About/CoreValues" element={<CoreValues />} />
          <Route path="/About/Vision-Mission" element={<VisionAndMission />} />
          <Route
            path="/About/ourGoverningBody"
            element={<OurGoverningBody />}
          />
          <Route path="/About/IndustryMOUs" element={<IndustryMOUs />} />
          <Route
            path="/About/CapacityCarrierBuilding"
            element={<CapacityAndCarrierBuilding />}
          />
          <Route path="/About/FromTheDeskOf" element={<FromTheDeskOf />} />
          {/* _______________________________ */}

          {/* _______________Academics______________ */}
          <Route path="/Academics/ListOfCourses" element={<ListOfCourses />} />
          <Route path="/Academics/EResources" element={<EResources />} />
          <Route path="Academics/examination" element={<Examination />} />
          <Route
            path="/Academics/ResearchInvation"
            element={<ResearchInvation />}
          />
          <Route path="/Academics/Faculty" element={<Faculty />} />
          <Route
            path="/Academics/AllNoticeBoard"
            element={<AllNoticeBoard />}
          />
          <Route
            path="/Academics/AllNoticeBoard/:id"
            element={<AllNoticeBoard />}
          />
          <Route
            path="/Academics/ManagementDepartment"
            element={<ManagementDepartment />}
          />
          <Route
            path="/Academics/DepartmentOfIT"
            element={<DepartmentOfIT />}
          />
          <Route
            path="/Academics/DepartmentOfHotelManagement"
            element={<DepartmentOfHotelManagement />}
          />
          <Route
            path="/Academics/DepartmentOfAppliedScience"
            element={<DepartmentOfAppliedScience />}
          />
          <Route
            path="/Academics/DepartmentOfComputerScience"
            element={<DepartmentOfComputerScience />}
          />
          <Route
            path="/Academics/DepartmentOfCivilEngineering"
            element={<DepartmentOfCivilEngineering />}
          />
          <Route
            path="/Academics/DepartmentOfECE"
            element={<DepartmentOfECE />}
          />
          <Route
            path="/Academics/AcademicCalendar"
            element={<AcademicCalender />}
          />
          <Route
            path="/Academics/SchoolOfMechanicalEngineering"
            element={<SchoolOfMechanicalEngineering />}
          />
          <Route
            path="/Academics/DepartmentOfHealthScience"
            element={<DepartmentOfHealthScience />}
          />
          {/* ___________Admissions______________ */}
          <Route path="/Admission/AdmissionForm" element={<AdmissionForm />} />
          <Route path="/Admission/Prospectus" element={<Prospectus />} />
          <Route
            path="/Admission/CoursesOffered"
            element={<CoursesOffered />}
          />
          <Route path="/Admission/FAQs" element={<FAQs />} />
          {/* ____________________________________ */}

          {/* ___________Placements______________ */}

          <Route path="/Placements/PlacementCell" element={<PlacementCell />} />
          <Route
            path="/Placements/industry-partners"
            element={<IndustryPartners />}
          />
          <Route
            path="/Placements/industrial-visit"
            element={<IndustrialVisit />}
          />
          <Route
            path="/Placements/student-placed-list"
            element={<PlacedListStudents />}
          />
          <Route
            path="/Placements/Upcoming-Placements"
            element={<UpcomingPlacements />}
          />

          {/* ___________Students Gallery______________ */}

          <Route
            path="/StudentsGallery/NewsGallery"
            element={<NewsGallery />}
          />
          <Route path="/StudentsGallery/AllEvents" element={<AllEvents />} />
          <Route path="/StudentsGallery/swa" element={<SWA />} />
          <Route path="/StudentsGallery/nccWing" element={<NCCWing />} />
          <Route path="/StudentsGallery/Nacctest2" element={<Naactest2 />} />
          <Route path="/StudentsGallery/SSR" element={<SSR />} />
          <Route path="/StudentsGallery/IQAC" element={<IQAC />} />

          {/* ___________Alumni______________ */}
          <Route
            path="/Alumni/BrandAmbassadors"
            element={<BrandAmbassadors />}
          />
          <Route
            path="/Alumni/AlumniTestimonials"
            element={<AlumniTestimonials />}
          />
          <Route path="/Alumni/AlumniMeet" element={<AlumniMeet />} />

          {/* ___________Contact______________ */}
          <Route path="/Contact" element={<Contact />} />

          {/* ___________Mandatory Disclosure______________ */}

          <Route
            path="/MandatoryDisclosure/AffiliationOrder"
            element={<AffiliationOrder />}
          />
          <Route path="/MandatoryDisclosure/Approval" element={<Approval />} />
          <Route
            path="/MandatoryDisclosure/WomenGrievance"
            element={<WomenGrievance />}
          />

          {/* ___________gallery______________ */}
          <Route path="/PhotoGallery" element={<PhotoGallery />} />

          {/* _______________ERROR________________ */}
          <Route path="*" element={<NotFoundPage />} />

          {/* _______________Page Under Construction________________ */}
          <Route
            path="/pageUnderConstruction"
            element={<PageUnderConstruction />}
          />
        </Routes>
        <Footer />
      </div>
    </ScrollToHeading>
  );
}

export default App;
