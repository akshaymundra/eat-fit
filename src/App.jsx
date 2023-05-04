import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BmiCalculator from "./components/bmi_calculator/BmiCalculator";
import CalorieTracker from './components/calorie_tracker/CalorieTracker';
import DailyNeeds from './components/dailyNeeds/DailyNeeds';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NavBar from './components/navbar/Navbar';
import ScrollToTop from './utility/ScrollToTop';

const App = () => {
  return (



    <Router>
      <ScrollToTop />
      <div className='md:grid grid-cols-4'>
        <div className='col-span-1 md:min-h-screen bg-slate-800'>
          <NavBar />
        </div>
        <div id='content-box' className='col-span-3 min-h-screen px-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bmi' element={<BmiCalculator />} />
            <Route path='/daily-needs' element={<DailyNeeds />} />
            <Route path='/calorie-tracker' element={<CalorieTracker />} />
          </Routes>

        </div>
      </div>
      <Footer />
    </Router >

  )
}

export default App;