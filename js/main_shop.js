
var filter_product = document.querySelector('.main-shop-products')
var proudct_found = document.querySelector('.product-resuit')
var product_search_value = document.getElementById('shop_product_search')


// Discount Product
var cart_discount = document.getElementsByClassName('cart-discount')
var see_detail_discount = document.querySelectorAll('.product-discount-price-menu .see-detail')


var Dpro_img = document.querySelectorAll('.product-discount-img img')
var Dpro_name = document.querySelectorAll('.product-discount-info a h4')
var Dpro_price = document.querySelectorAll('.product-discount-info .product-price span:nth-child(1)')




// Main Product
var cart_main ;
var see_detail_main ;

var Mpro_img;
var Mpro_name;
var Mpro_price;



console.log(see_detail_discount)


var total_feature = [
    {
        product_img : "./img/featured/feature-1.jpg" ,
        product_type: "meat" ,
        product_name: "Crab Pool Security" ,
        product_price: "$30.00"
    },
    {
        product_img : "./img/featured/feature-2.jpg" ,
        product_type: "vegistable" ,
        product_name: "Crab Pool Security" ,
        product_price: "$30.00"
    },
    {
        product_img : "./img/featured/feature-3.jpg" ,
        product_type: "vegistable" ,
        product_name: "Crab Pool Security" ,
        product_price: "$30.00"
    },
    {
        product_img : "./img/featured/feature-4.jpg" ,
        product_type: "oranges" ,
        product_name: "Crab Pool Security" ,
        product_price: "$30.00"
    },
    {
        product_img : "./img/featured/feature-5.jpg" ,
        product_type: "vegistable" ,
        product_name: "Crab Pool Security" ,
        product_price: "$30.00"
    },
    {
        product_img : "./img/featured/feature-6.jpg" ,
        product_type: "fast_food" ,
        product_name: "Crab Pool Security" ,
        product_price: "$30.00"
    },
    {
        product_img : "./img/featured/feature-7.jpg" ,
        product_type: "vegistable" ,
        product_name: "Crab Pool Security" ,
        product_price: "$30.00"
    },
    {
        product_img : "./img/featured/feature-8.jpg" ,
        product_type: "vegistable" ,
        product_name: "Crab Pool Security" ,
        product_price: "$30.00"
    },

]



const Filter_item =(title)=>{
    filter_product.innerHTML = '';
   
    console.log("ฟังชั่นทำงานนนนนนนน " + title)
    for(var i = 0; i< total_feature.length ; i++){
        // console.log(total_feature[i].product_type)
        if(title == 'all'){
            proudct_found.innerHTML = total_feature.length;
            filter_product.innerHTML += `
                <div class="product-show-item">
                    <img src="${total_feature[i].product_img}" alt="">
                    <p>${total_feature[i].product_name}</p>
                    <span>${total_feature[i].product_price}</span>

                    
                    <div class="product-show-menu">
                    
                        <div class="detail-menu">
                            <i class="fa fa-eye"></i>

                        </div>

                        <div class="cart-menu">
                            <i class="fa fa-shopping-cart"></i>

                        </div>
                    </div>

                </div>

            `;
        }
       
        
    }

    cart_main = document.querySelectorAll('.product-show-menu .cart-menu')
    see_detail_main = document.querySelectorAll('.product-show-menu .detail-menu')
    Mpro_img = document.querySelectorAll('.product-show-item img')
    Mpro_name = document.querySelectorAll('.product-show-item p')
    Mpro_price = document.querySelectorAll('.product-show-item span')


    console.log(cart_main)

    Check_cart_discount_click();
    Check_cart_main_click();

    // See Detail Click
    check_see_detail_discount_click();
    check_see_detail_main_click();
}


const Check_cart_discount_click =()=> {
    for(let i = 0 ; i < cart_discount.length ; i++) {
        // console.log(j)
        cart_discount[i].addEventListener('click',function(){
            keep_cart_shop_discount(i)
         });
    }
}


// check Product detail click

const check_see_detail_discount_click =()=> {
    for(let i = 0 ; i < see_detail_discount.length ; i++) {
        // console.log(j)
        see_detail_discount[i].addEventListener('click',function(){
            Product_detail(i , 'discount')
         });
    }
}



const check_see_detail_main_click =()=> {
    for(let i = 0 ; i < see_detail_main.length ; i++) {
        // console.log(j)
        see_detail_main[i].addEventListener('click',function(){
            Product_detail(i , 'main')
         });
    }
}

const Product_detail =(index , from)=> {
    if(from == 'discount') {
        var Hnew_items = {
            "pro_img" : Dpro_img[index].src ,
            "pro_name" : Dpro_name[index].innerText ,
            "pro_price" : Dpro_price[index].innerText 
        }
    }else {
        console.log("Main Shop")
        var Hnew_items = {
            "pro_img" : Mpro_img[index].src ,
            "pro_name" : Mpro_name[index].innerText ,
            "pro_price" : Mpro_price[index].innerText 
        }
    }

    
    localStorage.setItem(
        "items-detail",
        JSON.stringify(Hnew_items)
    )

    window.location = '../product-detail.html'
}



// Discount Cart
   
const keep_cart_shop_discount =(index)=> {
    var Dnew_items = {
        "pro_img" : Dpro_img[index].src ,
        "pro_name" : Dpro_name[index].innerText ,
        "pro_value" : 1 ,
        "pro_price" : Dpro_price[index].innerText 
    }

    itemArray.push(Dnew_items)

    chose_item()
    localStorage.setItem(
        "items-cart",
        JSON.stringify(itemArray)
    )
    cart_score.innerHTML = itemArray.length
    sidebar_cart_score.innerHTML = itemArray.length
    // อัพเดท จำนวนเงิน
    NavtotalPriceShow();

}





// Main Cart

const Check_cart_main_click =()=> {
    for(let i = 0 ; i < cart_main.length ; i++) {
        // console.log(j)
        cart_main[i].addEventListener('click',function(){
            keep_cart_shop_main(i)
            // alert('Cart ' + i)
         });
    }
}


   
const keep_cart_shop_main =(index)=> {
    var Dnew_items = {
        "pro_img" : Mpro_img[index].src ,
        "pro_name" : Mpro_name[index].innerText ,
        "pro_value" : 1 ,
        "pro_price" : Mpro_price[index].innerText 
    }

    itemArray.push(Dnew_items)

    chose_item()
    localStorage.setItem(
        "items-cart",
        JSON.stringify(itemArray)
    )
    cart_score.innerHTML = itemArray.length
    sidebar_cart_score.innerHTML = itemArray.length
    // อัพเดท จำนวนเงิน
    NavtotalPriceShow();

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
