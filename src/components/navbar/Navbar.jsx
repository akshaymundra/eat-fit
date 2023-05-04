import { Link } from "react-router-dom";
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // toggle the navbar menu 
    const handleClick = () => {
        const check = !isOpen;
        setIsOpen(!isOpen);
        const elem = document.getElementById("nav-link-cont");
        if (check) {
            elem.style.width = "250px";
            elem.style.borderRadius = "0";
        }
        else {
            elem.style.width = "0";
            elem.style.borderTopRightRadius = "50%"
            elem.style.borderBottomRightRadius = "50%"
        }
    }

    // when a link is clicked clise the menu 
    const handleLinkClick = () => {
        setIsOpen(false);
        document.getElementById("nav-link-cont").style.width = "0";
    }


    return (
        <div className="">


            <nav className="z-50 w-full md:block md:w-1/4 fixed top-0 flex items-center justify-between bg-slate-800 p-1">


                <div className="text-4xl md:text-5xl md:text-right md:mr-2"><Link to="/">Eat-Fit</Link></div>

                <div
                    onClick={handleClick}
                    className="md:hidden m-2 cursor-pointer hover:ring ring-slate-100 ring-offset-2 ring-offset-slate-800 rounded">

                    {isOpen
                        ? <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </>
                        : <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </>
                    }


                </div>

                <div className="hidden md:flex flex-col p-2 bg-slate-700 md:bg-transparent md:mt-5">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/bmi">Bmi</Link>
                    <Link className="nav-link" to="/daily-needs">Daily Needs</Link>
                    <Link className="nav-link" to="/calorie-tracker">Calorie Tracker</Link>
                </div>
            </nav>

            {/* show this when screen width is smaller for responsiveness  */}
            <div id="nav-link-cont" className="flex flex-col md:hidden shadow-2xl bg-slate-700 pt-10">
                <Link onClick={handleLinkClick} className="nav-link-ss" to="/">Home</Link>
                <Link onClick={handleLinkClick} className="nav-link-ss" to="/bmi">Bmi</Link>
                <Link onClick={handleLinkClick} className="nav-link-ss" to="/daily-needs">Daily Needs</Link>
                <Link onClick={handleLinkClick} className="nav-link-ss" to="/calorie-tracker">Calorie Tracker</Link>
            </div>

        </div>
    );
}

export default NavBar;