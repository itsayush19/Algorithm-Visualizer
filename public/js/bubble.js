async function bubbleSort(){
    console.log("Bubble Sort");
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await makeDelay(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'rgb(26, 171, 197)';
            ele[j+1].style.background = 'rgb(26, 171, 197)';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

bubblebtn.addEventListener('click', async function(){
    console.log("pressed")
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubbleSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});