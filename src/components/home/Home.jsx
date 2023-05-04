import MouseSvg from '../../assets/mouse.svg';

import { useEffect } from "react";
import { Link } from 'react-router-dom';



const Home = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // console.log(entry.isIntersecting)
                entry.target.classList.toggle("slide-in", entry.isIntersecting)
            })
        })

        const slidingElements = document.querySelectorAll(".slide");
        // console.log(slidingElements)
        slidingElements.forEach(box => {
            observer.observe(box);
        })

        return () => observer.disconnect();
    })

    return (
        <div className="mt-16 md:mt-1 overflow-x-hidden">
            {/* landing container  */}
            <div className="hero pt-7 pb-2 px-4 rounded">
                <p className="">Eat-Fit</p>
                <h1 className="text-2xl md:text-4xl mt-4">
                    <span className="hero-attract">Healthy</span> Habits, <br />
                    Happy <span className="hero-attract">Life</span>
                </h1>
                <p className="mt-2 text-sm">Track your calories, transform your health</p>

                <div className="flex items-center mt-5 animate-bounce">
                    <span className="text-sm m-2 text-sky-500">scroll</span>
                    <img src={MouseSvg} alt="" className="h-4 w" />
                </div>
            </div>

            {/* get started section  */}
            <div className="mt-10 p-1 slide">
                <h3 className="text-2xl text-center my-2 text-sky-500">Get Started</h3>
                <div className="bg-sky-900 mb-3 rounded p-2">
                    We're here to help you achieve your health and fitness goals with our easy-to-use personal health dashboard. Our dashboard includes a range of features to help you track your progress, monitor your nutrition, and stay motivated on your journey to better health.
                </div>
            </div>

            {/* Bmi section  */}
            <Link to="/bmi">
                <div className="mt-2 p-1 slide landing-link-cont">
                    <h3 className="text-xl my-2 text-slate-300 landing-link">BMI Calculator {">"}</h3>
                    <div className="bg-slate-800 mb-3 rounded p-2">
                        Track your body mass index (BMI) over time to help you monitor your overall health and make informed decisions about your diet and exercise routine.
                    </div>
                </div>
            </Link>

            {/* Calorie Tracker  */}
            <Link to="/calorie-tracker">
                <div className="mt-2 p-1 slide landing-link-cont">
                    <h3 className="text-xl my-2 text-slate-300 landing-link">Calorie Tracker {">"}</h3>
                    <div className="bg-slate-800 mb-3 rounded p-2">
                        Monitor your daily caloric intake and compare it to your recommended daily allowance, so you can make informed decisions about what you eat and how much.
                    </div>
                </div>
            </Link>

            {/* Daily Needs  */}
            <Link to="/daily-needs">
                <div className="mt-2 p-1 slide landing-link-cont">
                    <h3 className="text-xl my-2 text-slate-300 landing-link">Daily Needs {">"}</h3>
                    <div className="bg-slate-800 mb-3 rounded p-2">
                        Track your daily intake of carbohydrates, protein, and fat, and make adjustments to your diet as needed to ensure that you're meeting your nutritional needs.
                    </div>
                </div>
            </Link>

            {/* recipe finder */}
            {/* <Link to="/daily-needs">
                <div className="mt-2 p-1 slide landing-link-cont">
                    <h3 className="text-xl my-2 text-slate-300 landing-link">Recipes {">"}</h3>
                    <div className="bg-slate-800 mb-3 rounded p-2">
                        Discover nutritious and delicious recipes to help you stay on track with your health goals. You can search by dietary preference, meal type, and more, making it easy to find recipes that fit your lifestyle.
                        COMING SOON...
                    </div>
                </div>
            </Link> */}



        </div>
    );
}

export default Home;