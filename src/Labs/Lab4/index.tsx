import { useState } from "react";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import HandlingClickEvent from "./HandlingClickEvent";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
    function sayHello() {
    alert("Hello");
  }
    const [counter, setCounter] = useState(123);
    return (
        <div id="wd-lab4" className="container">
            <h3>Lab 4</h3>
            <p>Welcome to Lab 4!</p>

            <HandlingClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ChildStateComponent counter={counter} setCounter={setCounter}/>
            <ReduxExamples />
            


        </div>
    );
}