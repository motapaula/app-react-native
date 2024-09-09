import React, {useState} from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { StyleSheet } from "react-native-web";

function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
        
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>
                Você clicou {count} vezes.
            </p>
            <button onClick={increaseCount}><AiOutlinePlusCircle /></button>
            <button onClick={decreaseCount}><AiOutlineMinusCircle /></button>
        </div>
    );
}

export default Counter;