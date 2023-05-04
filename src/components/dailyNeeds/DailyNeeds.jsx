import { useRef, useState, useEffect } from "react";
import { dailyNeed } from "./utility";
import Results from "./Results";

// to-do 
// weight, height, gender and age for calorie calculation 
const DailyNeeds = () => {
    const [isMale, setIsMale] = useState(true);
    const [height, setheight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [age, setAge] = useState(null);
    const [calorieNeeded, setCalorieNeeded] = useState(null);
    const [minProteinNeeded, setMinProteinNeeded] = useState(null);
    const [maxProteinNeeded, setMaxProteinNeeded] = useState(null);
    const activityRef = useRef();    

    return (
        <div className="p-1">
            <h2 className="head">Daily Needs</h2>
            <p className="m-2 text-sm text-slate-200">Find out daily nutritional requirements.</p>

            {/* form block  */}
            <form onSubmit={(e) => {
                dailyNeed(e, weight, height, age, activityRef, setCalorieNeeded, setMinProteinNeeded, setMaxProteinNeeded, isMale);
                document.getElementById("dn-results").scrollIntoView();
            }}>
                <div className="border border-slate-600 hover:border-sky-700 my-5 md:mb-10 rounded mx-2 max-w-xl">

                    {/* gender button  */}
                    <div className="m-2">
                        <div className="flex flex-wrap p-1 items-center">
                            <p className="text-sm text-slate-400 px-2">Gender</p>
                            <div className="flex border-l border-slate-500 px-2">
                                <button
                                    type="button"
                                    onClick={() => setIsMale(true)}
                                    className={`gender-btn ${isMale ? "bg-slate-700 text-sky-500 underline decoration-sky-600" : null}`}
                                >Male
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsMale(false)}
                                    className={`gender-btn ${isMale ? null : "bg-slate-700 text-sky-500 underline decoration-sky-600"}`}
                                >Female
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        {/* height input  */}
                        <div className="m-2 mt-4 px-3">
                            <label
                                className="dn-label"
                                htmlFor="dn-ht-inp"
                            >Height (cm)</label>

                            <input
                                id="dn-ht-inp"
                                className="dn-inputs"
                                required
                                type="number"
                                step="0.1"
                                onChange={(e) => setheight(e.target.value)} />
                        </div>

                        {/* weight input  */}
                        <div className="m-2 mt-4 px-3">
                            <label
                                className="dn-label"
                                htmlFor="dn-wt-inp"
                            >Weight (kg)</label>

                            <input
                                id="dn-wt-inp"
                                className="dn-inputs"
                                required
                                type="number"
                                step="0.1"
                                onChange={(e) => setWeight(e.target.value)} />
                        </div>

                        {/* age input  */}
                        <div className="m-2 mt-4 px-3">
                            <label
                                className="dn-label"
                                htmlFor="dn-wt-inp"
                            >Age (yrs)</label>

                            <input
                                id="dn-wt-inp"
                                className="dn-inputs"
                                required
                                type="number"
                                onChange={(e) => setAge(e.target.value)} />
                        </div>
                    </div>

                    {/* if women then show normal, pregnent, lactating inputs too */}
                    {!isMale && 
                        <div className="mt-4 m-2 px-3">
                            <label className="dn-label">Are you?</label>
                            <div>
                                <input defaultChecked value="normal" className="dn-women-info-input" type="radio" name="women-info" id="dn-w-r-1" />
                                <label className="m-2 text-slate-300" htmlFor="dn-w-r-1">Normal</label>
                            </div>
                            <div>
                                <input className="dn-women-info-input" type="radio" value="pregnent" name="women-info" id="dn-w-r-2" />
                                <label className="m-2 text-slate-300" htmlFor="dn-w-r-2">Pregnent</label>
                            </div>
                            <div>
                                <input className="dn-women-info-input" type="radio" value="lactating" name="women-info" id="dn-w-r-3" />
                                <label className="m-2 text-slate-300" htmlFor="dn-w-r-3">Lactating</label>
                            </div>
                        </div>
                    }

                    {/* activity level  */}
                    <div className="mt-4 m-2 px-3">
                        <label className="dn-label">Activity level</label>
                        <select
                            className="dn-select text-xs p-1 bg-slate-700 text-slate-200 border border-slate-800 hover:border-sky-600 rounded"
                            name="activity-lvl"
                            ref={activityRef}
                            id="activity-lvl">
                            <option className="dn-select-options dn-option" value="1.375">Light (excercise or sports 1-3 days a week)</option>
                            <option className="dn-select-options dn-option" value="1.2">Sedentry (little or no excercise)</option>
                            <option className="dn-select-options dn-option" value="1.55">Moderate (excercise or sports 3-5 days a week)</option>
                            <option className="dn-select-options dn-option" value="1.725">Very active (excercise or sports 6-7 days a week)</option>
                            <option className="dn-select-options dn-option" value="1.9">Extra active (intense excercise/sports 2 times a day)</option>

                        </select>
                    </div>

                    <button className="px-3 p-1 my-4 ml-5 border border-blue-700 rounded hover:border-blue-500 hover:text-blue-200">Calculate</button>
                </div>
            </form>

            {/* results section  */}
            <div id="dn-results" className="p-1 mt-2 mb-3">
                {calorieNeeded && 
                    <Results calorieNeeded={calorieNeeded} minProteinNeeded={minProteinNeeded} maxProteinNeeded={maxProteinNeeded} />
                }
            </div>
        </div>
    );
}

export default DailyNeeds;