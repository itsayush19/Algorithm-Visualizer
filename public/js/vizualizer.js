

//UI elements
const arr=document.getElementById("arr");
const bars = document.querySelector("#bars");
const nArrBtn=document.querySelector("#nArr");
const bubblebtn=document.querySelector("#bubble");
const selectBtn=document.querySelector("#selection");
const insertBtn=document.querySelector("#insertion");
const quickBtn=document.querySelector("#quick");
const mergeBtn=document.querySelector("#merge");
const speed=document.querySelector("#speed");
const size=document.querySelector("#size");


//global fuctions for sorting
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

//disable buttons
function disableSortingBtn(){
    bubblebtn.disabled = true;
    insertBtn.disabled = true;
    mergeBtn.disabled = true;
    quickBtn.disabled = true;
    selectBtn.disabled = true;
}

//enable buttons
function enableSortingBtn(){
    bubblebtn.disabled = false;
    insertBtn.disabled = false;
    mergeBtn.disabled = false;
    quickBtn.disabled = false;
    selectBtn.disabled = false;
}

//disable size slider
function disableSizeSlider(){
    size.disabled = true;
}

// Enables size slider 
function enableSizeSlider(){
    size.disabled = false;
}

// Disables newArray button
function disableNewArrayBtn(){
    nArrBtn.disabled = true;
}

// Enables newArray button
function enableNewArrayBtn(){
    nArrBtn.disabled = false;
}

//delay function
function makeDelay(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

//updating size of the array
let arrSize=size;
arrSize.addEventListener('input',()=>{
    console.log(arrSize.value, typeof(arrSize.value));
    createNewArray(parseInt(arrSize.value));
})

// Default input for waitforme function (260ms)
let delay = 260;

// Event listener to update delay time 
speed.addEventListener('input', function(){
    console.log(speed.value, typeof(speed.value));
    delay = 320 - parseInt(speed.value);
});

//for deleting previous array
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

//for creating a new array
function createNewArray(noBars=60){
    deleteChild();
    data= [];
    for (let i = 0; i < noBars; i++) {
        data.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(data);
    for (let i = 0; i < noBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${data[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        //bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

nArrBtn.addEventListener('click',()=>{
    console.log("From newArray " + arrSize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arrSize.value);
})