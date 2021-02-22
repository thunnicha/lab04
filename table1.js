function x1(event){
    
    isvisiter = !isvisiter;
    
    if(isvisiter){
    change1.classList.add('selected');
    change2.classList.add('selected');
    change3.classList.add('selected');
    change4.classList.add('selected');
    }else{
    change1.classList.remove('selected');
    change2.classList.remove('selected');
    change3.classList.remove('selected');
    change4.classList.remove('selected');
    }
   

}

let isvisiter = false;
const change1 = document.querySelector('.change1');
change1.addEventListener('click',x1);
const change2 = document.querySelector('.change2');
change2.addEventListener('click',x1);
const change3 = document.querySelector('.change3');
change2.addEventListener('click',x1);
const change4 = document.querySelector('.change4');
change2.addEventListener('click',x1);
