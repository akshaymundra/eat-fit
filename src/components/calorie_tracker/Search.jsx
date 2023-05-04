import { useEffect, useState } from "react";
import foodData from '../../data/db.json'

const SearchFood = ({setSearchResult}) => {
    const [searchInput, setSearchInput] = useState(null);
    const [searchSuggest, setSearchSuggest] = useState(null);


    useEffect(()=> {
        if(searchInput && searchInput != (/\s+/)){

            const searchWords = searchInput.trim().toLowerCase().split(/\s+/)

            const newSuggestData = foodData.filter(food => {
                const foodName = food.name.toLowerCase()
                const foodLang = food.lang.toLowerCase()
                
                return searchWords.every(word => foodName.includes(word) || foodLang.includes(word));
                
            }).slice(0, 5);
            setSearchSuggest(newSuggestData);
            // console.log(newSuggestData)

            if(newSuggestData.length === 0){
                document.getElementById("search-input").classList.add("text-red-300");
            }
            else{
                document.getElementById("search-input").classList.remove("text-red-300");
            }
        }
        else{
            setSearchSuggest(null);
        }
    }, [searchInput]);

    return ( 
        <div className="">
            <div id="search-label" className="m-1 mt-8 text-xl text-slate-200">Search</div>
            {/* search input  */}
            <div className="flex relative items-center mx-1 mb-6 border border-slate-900 max-w-xl">
                <input 
                    id="search-input"
                    className="py-2 px-3 w-1/2 max-w-xl flex-1 bg-slate-700 hover:bg-slate-600 rounded"
                    type="text" 
                    autoComplete="off"
                    placeholder="Search your food..."
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                {/* search suggestions  */}
                {searchSuggest?.length > 0 && 
                    <div id="search-sugg-box" className="max-w-xl absolute z-50 p-1 bg-slate-800 w-full rounded top-11 shadow-xl">
                        {searchSuggest.map(food => (
                            // food item 
                            <div key={food.code} 
                                onClick={() => {
                                    const search_input_element = document.getElementById("search-input");  
                                    search_input_element.value = food.name;
                                    setSearchSuggest(null);
                                    setSearchResult(food)
                                }}
                                className="text-slate-300 hover:text-white hover:bg-slate-600 p-1 transition duration-500 cursor-pointer border-b border-slate-500">
                                    <div>{food.name}</div>
                            </div>
                        ))}

                    </div>
                }

            </div>
        </div>
     );
}
 
export default SearchFood;