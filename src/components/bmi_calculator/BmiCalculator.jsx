import { useState, useRef, useEffect } from "react";
import './styles.css';

const BmiCalculator = () => {
    const [yourBmi, setYourBmi] = useState(null);
    const [isStandard, setIsStandard] = useState(false);
    const [category, setCategory] = useState(null);
    const weightRef = useRef();
    const heightRef = useRef();

    const calculateBmiMetric = () => {
        if (weightRef.current.value > 0 && heightRef.current.value > 0) {
            const calc = (weightRef.current.value / (heightRef.current.value * heightRef.current.value)) * 10000;
            setYourBmi(calc)
        }
        else {
            console.log("not valid");
        }
    }
    const calculateBmiStd = () => {
        if (weightRef.current.value > 0 && heightRef.current.value > 0) {
            const calc = 703 * weightRef.current.value / (heightRef.current.value * heightRef.current.value);
            setYourBmi(calc)
        }
        else {
            console.log("not valid");
        }
    }

    useEffect(() => {
        if (yourBmi) {
            if (yourBmi < 18.5) {
                setCategory("Underweight")
            }
            else if (yourBmi >= 18.5 && yourBmi < 25) {
                setCategory("Normal")
            }
            else if (yourBmi >= 25 && yourBmi < 30) {
                setCategory("Overweight")
            }
            else {
                setCategory("Obese")
            }
        }
    }, [yourBmi])

    return (
       
            <div className="">
                <h3 className="head">BMI</h3>

                <div className="md:w-3/4 border border-slate-600 my-3 md:my-6 rounded mx-2 md:max-w-lg">
                    <div className="bg-slate-800 flex">
                        <span className={`ms-btn ${isStandard ? null : "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 underline"}`} onClick={() => setIsStandard(false)}>Metric</span>
                        <span className={`ms-btn ${isStandard ? "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 underline" : null}`} onClick={() => setIsStandard(true)}>Standard</span>
                    </div>

                    <div className="hw-cont">
                        <label htmlFor="w-in">Weight({isStandard ? "lbs" : "kg"}) : </label>
                        <input className="hw-input" id="w-in" placeholder="Weight here..." required type="number" ref={weightRef} />
                    </div>
                    <div className="hw-cont">
                        <label htmlFor="h-in">Height({isStandard ? "inch" : "cm"}) : </label>
                        <input className="hw-input" id="h-in" placeholder="Height here..." required type="number" ref={heightRef} />
                    </div>

                    <button
                        className="px-2 py-1 border border-slate-500 hover:border-sky-500 hover:text-sky-300 transition duration-300 rounded m-4"
                        onClick={isStandard ? calculateBmiStd : calculateBmiMetric}
                    >Calculate</button>


                    {/* results  */}
                    {yourBmi &&
                        <div className="p-2 mx-1 pt-2 border-t my-3">
                            <h3 className="text-3xl text-slate-300">Result</h3>

                            <div className="px-2">

                                <div className="flex justify-between items-center">
                                    <p>BMI</p>
                                    <div className="my-2 p-2">
                                        {yourBmi.toFixed(2)}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p>Category</p>
                                    {category &&

                                        <div className={`p-2  ${category.toLowerCase()}`}>
                                            {category}
                                        </div>
                                    }
                                </div>
                            </div>


                        </div>
                    }
                </div>

                
                {/* what is bmi  */}
                <div className="my-3 mt-10 p-1 mx-1">
                    <h3 className="text-3xl text-slate-300">What is BMI ?</h3>
                    <article className="my-2 p-2 border-y border-slate-500">
                        <p className="my-2">BMI is a measure of body fat based on a person's weight and height. It's calculated by dividing a person's weight (in kilograms) by the square of their height (in meters). The resulting number is compared to standard ranges to determine if a person is underweight, normal weight, overweight, or obese.</p>
                        <p className="my-2 mt-4">BMI is commonly used to assess weight status and identify people who may be at risk of obesity-related health problems. However, it's important to note that BMI does not take into account factors such as muscle mass, bone density, and body composition, so it may not be accurate for everyone. However, A person can be in Overweight category and still be healthy.</p>
                    </article>
                </div>



            </div>
        
    )
}

export default BmiCalculator;