let search_btn = document.getElementById('search-btn');
let slide = document.querySelector('.search-btn-left ul')




search_btn.addEventListener("click",()=> SildeDown());


const SildeDown =()=>{
    if(slide.className === 'active'){
        slide.className = 'not-active'
        // setTimeout(() => {
        //     slide.style.padding = '0'
        // }, 1000);
     
    }else {
        slide.className = 'active'
    }
    
}
