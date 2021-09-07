async function insertionSort(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background='green'
    for(let i=1;i<ele.length;i++){
        await makeDelay(delay);
        let k=i;
        ele[i].style.background='green';
        while(k>0&&parseInt(ele[k-1].style.height)>=parseInt(ele[k].style.height)){
            await makeDelay(delay);
            swap(ele[k-1],ele[k]);
            k--;
        }
        makeDelay(delay);

    }
}
insertBtn.addEventListener('click',async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})