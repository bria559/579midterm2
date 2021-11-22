import { useState } from "react";

const saved_count = 'saved_count'
export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';





// let count = 0;
// const savedcount = localStorage.getItem(saved_count);
// if (savedcount !== null){
//     const newcount= JSON.parse(savedcount);
//     console.log(newcount);
//     count = newcount.map((t)=> t.text);
// }

export function Problem () {
    let [count, setCount] = useState(0);

    function incrementClick(){
        setCount(count + 1);
        const stringCount = JSON.stringify(count);
        localStorage.setItem(saved_count, stringCount);

    }
    
    function resetCount(){
        setCount(0);
    }


    return <div className="btn-group">
            <button className="btn btn-primary" onClick={incrementClick} >Clicked {count} time{count !==1 && 's'}</button>
            <button className="btn btn-secondary" onClick={resetCount}>Reset</button>
        </div>;
    ;
}