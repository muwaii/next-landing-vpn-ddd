import React from "react";

const ButtonToggle = ({}) => {
    return(
        <label for="check"class="bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full">
            <input type="checkbox"id="check"class="sr-only peer"/>
            <span class="w-2/5h-4/5bg-rose-300 absolute rounded-full
            left-1top-1peer-checked:bg-rose-600 peer-checked:left-11
            transition-all duration-500"></span>
        </label>
    );
};

export default ButtonToggle;