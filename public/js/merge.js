async function merge(ele,l,m,r){
    let n1=m-l+1;
    let n2=r-m;
    let left=new Array(n1);
    let right=new Array(n2);
    for(let i=0;i<n1;i++){
        await makeDelay(delay);
        ele[l+i].style.background='orange';
        left[i]=ele[l+i].style.height;
    }
    for(let i=0;i<n2;i++){
        await makeDelay(delay)
        ele[i+m+1].style.background='yellow';
        right[i]=ele[i+m+1].style.height;
    }
    await makeDelay(delay);
    let i = 0, j = 0, k = l;
    while(i < n1 && j < n2){
        await makeDelay(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await makeDelay(delay);
        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await makeDelay(delay);
        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele,l,r){
    if(l>=r){
        return ;
    }
    const m=l+Math.floor((r-l)/2);
    await mergeSort(ele,l,m);
    await mergeSort(ele,m+1,r)
    await merge(ele,l,m,r);
}

mergeBtn.addEventListener('click',async function(){
    let ele=document.querySelectorAll('.bar');
    let l=0;
    let r=parseInt(ele.length)-1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})