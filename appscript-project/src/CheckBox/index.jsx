import React from "react";



export default function Checkbox(props) {

    const tempAr=[]
    function allStates(event) {
        tempAr.push(event.target.value)
        const tempArr = [...props.states]
        tempArr.push(event.target.value)
        props.setStates(tempArr)
        console.log("data is", tempAr)
    }


    return (
        < >
            <div id="container">
                <div id="elem1">
                    {props.list.map((val, idx) => {
                        return <span className="checkbox"><label for={val.Shortform}>{val.Shortform}</label> <input name="checkbox" onClick={allStates} type="checkbox" id={val.Shortform} value={val.name} /><br /></span>
                    })}
                </div>
                
            </div>
        
        </>
            
    )
}