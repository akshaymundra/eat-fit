import { useRef } from "react";
import { useEffect, useState } from "react";
import foodData from "../../data/db.json";

const PopularFood = ({ setSearchResult }) => {
    const [sortBy, setSortBy] = useState('all')
    const [sortedData, setSortedData] = useState(null);
    const popFoodRef = useRef(null);

    useEffect(() => {
        if (sortBy === "all") {
            setSortedData(foodData.slice(0, 50));
        }
        else if (sortBy === "veg") {
            setSortedData(foodData.filter(food => food.tags.includes("veg")).slice(0, 50));
        }
        else {
            setSortedData(foodData.filter(food => food.tags.includes("nonveg")).slice(0, 50));
        }
    }, [sortBy])

    // animate on scroll 
    const options = {
        threshold: 1
    }
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                // console.log(entry.isIntersecting)
                // console.log(entry.target);
                entry.target.classList.toggle("slide-in", entry.isIntersecting)
            }, {threshold: 1})
        });
        const popFood = popFoodRef.current.querySelectorAll("div");
        if(popFood.length > 0){
            // observer.observe(popFood[0])
            popFood.forEach(food => {
                observer.observe(food);
            })
        }
    })


    return (
        <>
            <div className="text-xl text-slate-200 mb-2">Popular Foods</div>
            <div className="flex items-center mb-4">
                <span className="">Sort By</span>
                <select
                    className="bg-slate-600 ml-2 rounded tansition"
                    onChange={(e) => setSortBy(e.target.value)}>
                    <option value="all">All</option>
                    <option value="veg">Vegetarian</option>
                    <option value="nonVeg">Non vegetarian</option>
                </select>

            </div>


            <div ref={popFoodRef} className="slide-cont flex flex-col">
                {sortedData && sortedData.map(food => (
                    <div
                        key={food.code}
                        className="pop-food"
                        onClick={() => {
                            setSearchResult(food);
                            document.getElementById("search-label").scrollIntoView()

                        }}
                    >
                        {food.name}
                    </div>
                ))}
            </div>
        </>
    );
}

export default PopularFood;