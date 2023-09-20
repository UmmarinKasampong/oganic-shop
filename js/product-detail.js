var sub_menu = document.querySelectorAll('.sub-menu li a')

var show_res = document.querySelector('.sub-menu-response')


var main_prev = document.getElementById('main-img-prev')

// var sub_img = document.querySelectorAll('.product-preview-item')

// other Buttom Product
var Dpro_img = document.querySelectorAll('.related-product-show .product-show-item img')
var Dpro_name = document.querySelectorAll('.related-product-show .product-show-item p')
var Dpro_price = document.querySelectorAll('.related-product-show .product-show-item span')
// Display
var display_img = document.querySelector('.product-main-img img')
var display_name = document.getElementById('product-detail-name')
var display_price = document.getElementById('product-detail-price')
var valueProduct = document.getElementById('product-num')

// display Start

var star_rate = document.querySelector('.star-rate')

const load_Detail =()=> {
    console.log(itemDetail)
    display_img.src = itemDetail.pro_img
    display_name.innerHTML = itemDetail.pro_name
    display_price.innerHTML = itemDetail.pro_price
}

console.log(star_rate)



// image Preview

function previewImg(event) {
    var target = event.src;
    console.log("รูปที่ได้ " + target)
    main_prev.src = target;
  
    genStar()
}

const Add_prodcut =()=> {
    var Hnew_items = {
        "pro_img" : display_img.src ,
        "pro_name" : display_name.innerText ,
        "pro_value" : valueProduct.value ,
        "pro_price" : display_price.innerText 
    }
    itemArray.push(Hnew_items)

    chose_item()
    localStorage.setItem(
        "items-cart",
        JSON.stringify(itemArray)
    )
    cart_score.innerHTML = itemArray.length
    sidebar_cart_score.innerHTML = itemArray.length
    // อัพเดท จำนวนเงิน
    NavtotalPriceShow();
    console.log(itemArray)
}


// Product Bottum

const fast_add_pro_cart =(index)=> {
    var Hnew_items = {
        "pro_img" : Dpro_img[index].src ,
        "pro_name" : Dpro_name[index].innerText ,
        "pro_value" : 1 ,
        "pro_price" : Dpro_price[index].innerText 
    }

    itemArray.push(Hnew_items)

    chose_item()
    localStorage.setItem(
        "items-cart",
        JSON.stringify(itemArray)
    )
    cart_score.innerHTML = itemArray.length
    sidebar_cart_score.innerHTML = itemArray.length
    // อัพเดท จำนวนเงิน
    NavtotalPriceShow();
    console.log(itemArray)
}


const show_detail =(index)=> {
    localStorage.removeItem('items-detail')
    var Hnew_items = {
        "pro_img" : Dpro_img[index].src ,
        "pro_name" : Dpro_name[index].innerText ,
        "pro_price" : Dpro_price[index].innerText 
    }
    
    localStorage.setItem(
        "items-detail",
        JSON.stringify(Hnew_items)
    )

    window.location = '../product-detail.html'
}


function SubMenuClick(index){
  

    for(var i = 0 ; i < sub_menu.length ; i++){
        sub_menu[i].className = '';
    }

    sub_menu[index].className = 'active'

    ResponseData(index)
}


const ResponseData =(index)=> {
    console.log("ทำงาน")
    if(index == 0) {
        show_res.innerHTML = `
        <div class="response-item">
            <h3>Products Description</h3>

            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                <br><br>
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
            </p>
        </div>
    
    `;

    }else if(index == 1) {
        show_res.innerHTML = `
        <div class="response-item">
            <h3>Products Infomation</h3>

            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                <br><br>
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
        </div>
    
    `;
    }else if(index == 2) {
        show_res.innerHTML = `
        <div class="response-item">
            <h3>Products Review</h3>

            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                <br><br>
            Conclusion overall it Very Good product  But sometime it Hard To Eat because it hard to eat OK.
            </p>
        </div>
    
    `;
    }

}




// Random Star Score

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const genStar =()=> {
    star_rate.innerHTML = ''
    var goldStar = getRandomInt(5)
    var nonStar = goldStar < 0 ? (5 - (goldStar * -1)) : (5 - goldStar);
    
    console.log("Gold star " + goldStar + " nonstar " + nonStar)

    for(let i = 0 ; i < goldStar ; i++) {
        console.log("ทำงาน " + goldStar)
        star_rate.innerHTML += '<i class="fa fa-star"></i>'
    }

    for(let j = 0 ; j < nonStar ; j++) {
        console.log("ทำงาน " + nonStar)
        star_rate.innerHTML += '<i class="fa fa-star-o"></i>'
    }
   
}


// notification


const chose_item =()=> {
    
    Swal.fire({
        title: 'Add item success',
        text: 'New Item was add in cart',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
    
}
