import { useState } from "react";

const Quantity = ({item, addToPlate, removeFromPlate}) => {
    return ( 
        <div className="ct-sr-macros basis-1/2 flex flex-wrap">
                        <div className="mx-2 text-xs">
                            Quantity
                        </div>
                        <div className="flex">
                            <button onClick={() => addToPlate(item.food, 1)} 
                            className="px-2 mr-1 border border-slate-600"
                            >+</button>

                            <input 
                            className="w-8 rounded px-1 bg-slate-700 hover:bg-slate-600"
                            value={item.quantity}
                            readOnly                            
                            type="number" />

                            <button 
                            onClick={() => removeFromPlate(item.food, 1)}
                            className="px-2 ml-1 border border-slate-600"
                            >-</button>
                        </div>
                    </div>
     );
}
 
export default Quantity;