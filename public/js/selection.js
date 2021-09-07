async function selectionSort(){
    const ele = document.querySelectorAll(".bar");
    let start=0;
    while(start<ele.length){
        ele[start].style.backgound='green';
        await makeDelay(delay);
        let min=start;
        for(let i=start+1;i<ele.length;i++){
            ele[i].style.backgound='red';
            //await makeDelay(delay);
            if(parseInt(ele[i].style.height)<parseInt(ele[min].style.height)){
                min=i;
                ele[min].style.backgound='lightgreen'
            }
            ele[i].style.backgound='rgb(26, 171, 197)';
        }
        //await makeDelay(delay);
        swap(ele[start],ele[min]);
        //ele[min].style.backgound='rgb(26, 171, 197)';
        start++;
    }
}

selectBtn.addEventListener('click',async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})