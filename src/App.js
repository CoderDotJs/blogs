import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoute from './AdminRoute/AdminRoute';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddBlogs from './Pages/AddBlogs/AddBlogs';
import Blogs from './Pages/Blogs/Blogs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Css from './Pages/Css/Css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Javascript from './Pages/Javascript/Javascript';
import Login from './Pages/Login/Login';
import NotFound404 from './Pages/NotFound404/NotFound404';
import Profile from './Pages/Profile/Profile';
import ReactPage from './Pages/ReactPage/ReactPage';
import WebDesign from './Pages/WebDesign/WebDesign';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <div className="App ">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
          <Route path="/blogs" element={<PrivateRoute><Blogs /></PrivateRoute>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
          <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="write-a-blog" element={<PrivateRoute><AddBlogs /></PrivateRoute>} />
          <Route path="/make-admin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
          <Route path="/web-design" element={<WebDesign />}/>
          <Route path="/css" element={<Css />}/>
          <Route path="/javascript" element={<Javascript />}/>
          <Route path="/react" element={<ReactPage />}/>
          <Route path="*" element={<NotFound404 />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
