var items = document.querySelectorAll('.product-menu li')
var filter_product = document.querySelector('.product-grid')
var cart_home_click = document.getElementsByClassName('cart-menu')



var Hpro_img = document.querySelectorAll('.product-grid-item img')
var Hpro_name = document.querySelectorAll('.product-grid-item p')
var Hpro_price = document.querySelectorAll('.product-grid-item span')


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
// var ids = 'vegistable';

function product_choose(index){


    for(var i = 0 ; i < items.length ; i++){
        items[i].className = '';
    }

    items[index].className = 'active'

    if(index == 0) {
        console.log("test " + index)
        Filter_item("all")
    }else if(index == 1){
        console.log("test " + index)
        Filter_item("oranges")
    }else if(index == 2){
        console.log("test " + index)
        Filter_item("meat")
    }else if(index == 3){
        console.log("test " + index)
        Filter_item("vegistable")
    }else if(index == 4){
        console.log("test " + index)
        Filter_item("fast_food")
    }
}


const Filter_item =(title)=>{
    filter_product.innerHTML = '';
  
    
    console.log("ฟังชั่นทำงานนนนนนนน " + title)
    for(var i = 0; i< total_feature.length ; i++){
        // console.log(total_feature[i].product_type)
        if(title == 'all'){
            filter_product.innerHTML += `
                <div class="product-grid-item">
                    <img src="${total_feature[i].product_img}" alt="">
                    <p>${total_feature[i].product_name}</p>
                    <span>${total_feature[i].product_price}</span>

                    
                    <div class="product-grid-menu">

                        <div class="see-menu" onclick="Hsee_product(${i})">
                            <i class="fa fa-eye"></i>

                        </div>

                        <div class="cart-menu">
                            <i class="fa fa-shopping-cart"></i>

                        </div>
                    </div>

                </div>

            `;
        }else{
            if(total_feature[i].product_type == title){
               
                filter_product.innerHTML += `
                    <div class="product-grid-item">
                        <img src="${total_feature[i].product_img}" alt="">
                        <p>${total_feature[i].product_name}</p>
                        <span>${total_feature[i].product_price}</span>

                        <div class="product-grid-menu">

                            <div class="see-menu" onclick="Hsee_product(${i})">
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
       
    }

    // ดึง class มาเก็บใหม่
    cart_home_click = document.getElementsByClassName('cart-menu')
    
    Hpro_img = document.querySelectorAll('.product-grid-item img')
    Hpro_name = document.querySelectorAll('.product-grid-item p')
    Hpro_price = document.querySelectorAll('.product-grid-item span')
                    
    console.log(Hpro_img)
    // คลิกตะกล้า
    check_home_click()
}

// คลิกตะกล้า

const check_home_click =()=> {
    for(let i = 0; i < cart_home_click.length; i++){
          
        cart_home_click[i].addEventListener('click',function(){
            keep_cart_home(i)
          
         });

    }
}


   
const keep_cart_home =(index)=> {
    var Hnew_items = {
        "pro_img" : Hpro_img[index].src ,
        "pro_name" : Hpro_name[index].innerText ,
        "pro_value" : 1 ,
        "pro_price" : Hpro_price[index].innerText 
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



// See Product Details

const Hsee_product =(index)=> {
   
    var Hnew_items = {
        "pro_img" : Hpro_img[index].src ,
        "pro_name" : Hpro_name[index].innerText ,
        "pro_price" : Hpro_price[index].innerText 
    }
    
    localStorage.setItem(
        "items-detail",
        JSON.stringify(Hnew_items)
    )

    window.location = '../product-detail.html'
}


// Notification


const chose_item =()=> {
    
    Swal.fire({
        title: 'Add item success',
        text: 'New Item was add in cart',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
    
}
