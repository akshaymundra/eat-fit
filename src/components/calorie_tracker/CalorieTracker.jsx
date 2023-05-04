import SearchFood from "./Search";
import { useEffect, useState } from 'react';
import Quantity from "./Quantity";
import PopularFood from "./PopularFood";
const CalorieTracker = () => {
    const [plate, setPlate] = useState([]);
    const [searchResult, setSearchResult] = useState(null);
    const [total, setTotal] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        // calculate total nutritional values from all food item in plate 
        if (plate) {
            let newTotal = {
                calories: 0,
                protien: 0,
                fibre: 0,
                carbs_avl: 0,
                fat: 0,
                cholesterol: 0
            }
            plate.map(val => {
                newTotal.calories += val.quantity * val.food.energy_kcal;
                newTotal.protien += val.quantity * val.food.protien;
                newTotal.fibre += val.quantity * val.food.fibre;
                newTotal.carbs_avl += val.quantity * val.food.carbs_avl;
                newTotal.fat += val.quantity * val.food.fat;
                newTotal.cholesterol += val.quantity * val.food.cholesterol;
            })
            setTotal(newTotal)
        }
    }, [plate])

    // add a food item to plate for tracking 
    const addToPlate = (addThisFood, quantity) => {
        const newFood = {
            food: addThisFood,
            quantity: quantity
        }

        const isInPlate = plate.findIndex(item => addThisFood.code === item.food.code);

        // if the item already in cart then update its quantity 
        if (isInPlate !== -1) {
            const temp = [...plate];
            temp[isInPlate].quantity += quantity;
            setPlate(temp);
            // console.log("quantity updated");
        }
        else {
            setPlate([...plate, newFood]);
            // console.log("added to plate")
        }
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 700)
        

    }
    // remove a food item from plate 
    const removeFromPlate = (removeThisFood, quantity) => {
        const isInPlate = plate.findIndex(item => removeThisFood.code === item.food.code);
        let temp = [...plate]
        if (temp[isInPlate].quantity === 1) {
            temp.splice(isInPlate, 1);
        }
        else {
            temp[isInPlate].quantity -= quantity;

        }
        setPlate(temp);
        // console.log("food removed")
    }

    return (
        <>
            <div className="head">Calorie Tracker</div>
            <div className="text-sm text-slate-200 m-2">Find out the calorie for your food and add them to your plate to track total calories.</div>

            <div className="md:flex flex-wrap">
                <div className="basis-1/2 md:pr-3">
                    <SearchFood setSearchResult={setSearchResult} />

                    {/* search result here with option to add to plate  */}
                    {searchResult &&
                        <div id="search-result" className="my-5 mx-1 border border-slate-400 p-2 max-w-2xl">
                            <div className="text-xl text-slate-200">{searchResult.name}</div>
                            <div className="ct-sr-macros pt-2 border-t border-slate-600">
                                <div className="basis-3/5">
                                    Calories
                                </div>
                                <div>
                                    {searchResult.energy_kcal} kcal
                                </div>
                            </div>

                            <div className="ct-sr-macros">
                                <div className="basis-3/5">
                                    Protein
                                </div>
                                <div>
                                    {searchResult.protien} gm
                                </div>
                            </div>

                            <div className="ct-sr-macros">
                                <div className="basis-3/5">
                                    Fibre
                                </div>
                                <div>
                                    {searchResult.fibre} gm
                                </div>
                            </div>

                            <div className="ct-sr-macros">
                                <div className="basis-3/5">
                                    Carbs Available
                                </div>
                                <div>
                                    {searchResult.carbs_avl} gm
                                </div>
                            </div>

                            <div className="ct-sr-macros">
                                <div className="basis-3/5">
                                    Fat
                                </div>
                                <div>
                                    {searchResult.fat} gm
                                </div>
                            </div>

                            <div className="ct-sr-macros pb-2 border-b border-slate-600">
                                <div className="basis-3/5">
                                    Cholesterol
                                </div>
                                <div>
                                    {searchResult.cholesterol} gm
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    className="px-3 py-1 m-3 border border-slate-600 hover:border-sky-200 rounded transition duration-500 ease-in-out"
                                    onClick={() => addToPlate(searchResult, 1)}
                                >Add</button>

                                {isAdding &&
                                    <span className="text-emerald-400 m-3">
                                        Added
                                    </span>}

                            </div>

                        </div>}


                    {/* your plate */}
                    {plate.length > 0 &&
                        <div className="my-4 mx-1 max-w-2xl border border-slate-400 p-2">
                            <div className="text-xl mb-4 border-b border-slate-500 p-1 text-center rounded">Your Plate</div>

                            <div className="p-1">
                                {plate.map((item, idx) => (
                                    <div key={item.food.code} className="my-2 border-b pb-1">
                                        <p className="">{idx + 1}.  {item.food.name}</p>
                                        <div className="flex items-center relative">
                                            <Quantity item={item} addToPlate={addToPlate} removeFromPlate={removeFromPlate} />
                                            <div
                                                className="text-xs text-sky-500 cursor-pointer p-2 hover:text-sky-300"
                                                onClick={() => {
                                                    setSearchResult(item.food)
                                                    document.getElementById("search-label").scrollIntoView();
                                                }}
                                            >more...</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* show the total macro nutrition of the food in plate  */}
                            {total &&
                                <div className="p-1">
                                    <div className="text-lg border-b border-slate-300 my-3">Total</div>
                                    <div className="p-1 text-sm">

                                        <div className="flex items-center">
                                            <span className="basis-1/2">Calories</span>
                                            <span>{total.calories.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="basis-1/2">Protein</span>
                                            <span>{total.protien.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="basis-1/2">Fibre</span>
                                            <span>{total.fibre.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="basis-1/2">Carbs</span>
                                            <span>{total.carbs_avl.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="basis-1/2">Fat</span>
                                            <span>{total.fat.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="basis-1/2">Cholesterol</span>
                                            <span>{total.cholesterol.toFixed(2)}</span>
                                        </div>

                                    </div>
                                </div>}
                        </div>}
                </div>

                {/* popular food and sorting section  */}
                <div className="flex flex-col md:w-1/2 p-2 md:pl-4 md:border-l border-slate-200 my-6">
                    <PopularFood setSearchResult={setSearchResult} />
                </div>

            </div>
        </>
    );
}

export default CalorieTracker;