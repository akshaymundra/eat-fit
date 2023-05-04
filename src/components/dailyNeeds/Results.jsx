import { useState } from "react";

const Results = ({ calorieNeeded, minProteinNeeded, maxProteinNeeded }) => {
    const [moreCalorieInfo, setMoreCalorieInfo] = useState(false);
    return (
        <>

            <div className="text-3xl text-slate-300 my-2">Result</div>

            {/* Calories container  */}
            <div className="p-1 border border-slate-500  rounded my-1">
                <div className="px-2 py-1 text-xl text-slate-400">Calories</div>
                <div className="mx-3 my-2">Maintain Weight : {calorieNeeded}</div>

                {moreCalorieInfo &&
                    <>
                        {/* more info about weight loss */}
                        <div className="mx-2 my-3 p-2 border border-slate-700">
                            <div className="text-slate-500 text-sm mb-4">Weight Loss</div>

                            <div className="flex items-center border-t">
                                <div className="flex flex-col m-2 mr-6 text-sm basis-2/4">Mild Weight Loss <span className="text-xs text-slate-400">0.5 lb/week</span></div>
                                <div>{Math.round(calorieNeeded * 88 / 100)}</div>
                            </div>

                            <div className="flex items-center border-t">
                                <div className="flex flex-col m-2 mr-6 text-sm basis-2/4">Weight Loss <span className="text-xs text-slate-400">1 lb/week</span></div>
                                <div>{Math.round(calorieNeeded * 77 / 100)}</div>
                            </div>

                            <div className="flex items-center border-t">
                                <div className="flex flex-col m-2 mr-6 text-sm basis-2/4">Extreme Weight Loss <span className="text-xs text-slate-400">2 lb/week</span></div>
                                <div>{Math.round(calorieNeeded * 61 / 100)}</div>
                            </div>
                        </div>

                        {/* more info about weight gain  */}
                        <div className="mx-2 my-3 p-2 border border-slate-700">
                            <div className="text-slate-500 text-sm mb-4">Weight Gain</div>

                            <div className="flex items-center border-t">
                                <div className="flex flex-col m-2 mr-6 text-sm basis-2/4">Mild Weight Gain <span className="text-xs text-slate-400">0.5 lb/week</span></div>
                                <div>{Math.round(calorieNeeded * 110 / 100)}</div>
                            </div>

                            <div className="flex items-center border-t">
                                <div className="flex flex-col m-2 mr-6 text-sm basis-2/4">Weight Gain <span className="text-xs text-slate-400">1 lb/week</span></div>
                                <div>{Math.round(calorieNeeded * 120 / 100)}</div>
                            </div>

                            <div className="flex items-center border-t">
                                <div className="flex flex-col m-2 mr-6 text-sm basis-2/4">Extreme Weight Gain <span className="text-xs text-slate-400">2 lb/week</span></div>
                                <div>{Math.round(calorieNeeded * 139 / 100)}</div>
                            </div>
                        </div>
                        <div className="px-2 my-3 text-xs md:text-sm">Before any Extreme level weight gain/loss please consider your dietition</div>
                    </>
                }
                <button
                    className="text-sm ml-2 text-blue-500 hover:text-blue-300"
                    onClick={() => setMoreCalorieInfo(!moreCalorieInfo)}>{moreCalorieInfo ? "less.." : "More info..."}
                </button>
            </div>

                {/* Protein info  */}
            <div className="p-1 border border-slate-500 rounded">
                <div className="px-2 py-1 text-xl text-slate-400">Protein</div>
                <div className="m-2 my-3 p-2 flex items-center border border-slate-700 rounded">
                    <span className="basis-2/4">Protein Intake Range</span>
                    <span className="ml-2">{minProteinNeeded}gm - {maxProteinNeeded}gm</span>
                </div>
                <div className="px-2 text-xs md:text-sm">
                    The Protein range is based on The Centers for Disease Control and Prevention CDC
                </div>
            </div>
        </>
    );
}

export default Results;