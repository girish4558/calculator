let inputVal = document.querySelector("input")


let addInput = (element)=>{
    inputVal.value += element
    display.scrollLeft = display.scrollWidth;
}

let allClear = () =>{
    inputVal.value = ""
}

let Delete_lastVal = () =>{
    inputVal.value = inputVal.value.slice(0, inputVal.value.length-1)
}

let Evaluate = () =>{
    let evelVal = eval(inputVal.value)
    inputVal.value = Math.round(evelVal * 10000) / 10000;
    display.scrollLeft = display.scrollWidth;
}