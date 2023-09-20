var nav_items = document.querySelectorAll('.middle-menu li a')

// จำนวนของใน cart และ heart
var cart_score = document.getElementById('cart-score')
var sidebar_cart_score = document.getElementById('side-cart-score')


var itemArray = localStorage.getItem("items-cart") ? JSON.parse(localStorage.getItem("items-cart")) : [];
var itemDetail = localStorage.getItem("items-detail") ? JSON.parse(localStorage.getItem("items-detail")) : [];

var navtotal = document.getElementById('total-price')
var sidebar_total = document.getElementById('side-total-price')

// overlay && nav-side-bar
var overlayBg = document.getElementById('myOverlay')
var side_bar = document.getElementById('nav-side-bar')
var humbarger = document.getElementById('humbager-bar')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").className = 'navbar-scroll'
    document.getElementById("navbar").style.position = 'fixed'
    document.getElementById("navbar").style.background = '#f1f1f1'
    document.getElementById("navbar").style.height = '65px'
    document.getElementById("navbar").style.top = '0'
    // humbarger.style.display = 'none'
}else {
    // document.getElementById("navbar").className = 'navbar'
    document.getElementById("navbar").style.height = '80px'
    document.getElementById("navbar").style.position = ''
    document.getElementById("navbar").style.top = ''
    document.getElementById("navbar").style.background = '#ffff'

    // humbarger.style.display = 'block'
}
}
        


function NavMenuClick(index){
    console.log("test " + index)

    for(var i = 0 ; i < nav_items.length ; i++){
        nav_items[i].className = '';
    }

    nav_items[index].className = 'active'
}


function NavtotalPriceShow(){
    var total_price = 0;
    if(itemArray.length > 0) {
        for(var i = 0 ; i < itemArray.length ; i++) {
            total_price += parseInt(itemArray[i].pro_value) * parseFloat(itemArray[i].pro_price.replace('$', ''))
        }
        navtotal.innerHTML = '$' + total_price.toFixed(2)
        sidebar_total.innerHTML = '$' + total_price.toFixed(2)
    }else {
   
        cart_score.innerHTML = '0'
        sidebar_cart_score.innerHTML = '0'

        sidebar_total.innerHTML = '$0.00'
        navtotal.innerHTML = '$0.00'
    }
  
    
}


function side_bar_close(){
    humbarger.className = 'fa fa-bars'
    overlayBg.style.display = 'none'
    side_bar.className = 'nav-side-bar-close'
    document.body.style.overflow = ''
    document.body.style.height = '100%'
}



function side_bar_click(){
    humbarger.className = 'fa fa-times'
    side_bar.className = 'nav-side-bar'
    overlayBg.style.display = 'block'
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
}

/* html, body {margin: 0; height: 100%; overflow: hidden} */
/* Responsive */