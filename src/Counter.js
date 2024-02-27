import React from "react";
import "./Counter.css"; 
import { useState } from "react";

function Counter(){

    const [moves, setmoves] = useState({blue:0, yellow:0, green:0, red:0});


    const handel= (color) =>{
        setmoves(preMoves =>({
            ...preMoves,
            [color] : preMoves[color] +1
        }));
    
    };
   


    return(
        <div className="Bord">
            <div><h3>Blue Moves:{moves.blue}</h3>
            <button className="btn1" onClick={()=>handel('blue')}>+1</button>
            </div>

            <div><h3>Yellow Moves:{moves.yellow}</h3>
            <button className="btn2" onClick={()=>handel('yellow')}>+1</button>
            </div>

            <div><h3>Green Moves :{moves.green}</h3>
            <button className="btn3" onClick={()=>handel('green')}>+1</button>
            </div>

            <div><h3>Red Moves: {moves.red}</h3>
            <button className="btn4" onClick={()=>handel('red')}>+1</button>
            </div>

        </div>
    )
}

export default Counter;