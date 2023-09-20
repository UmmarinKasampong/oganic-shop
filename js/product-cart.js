
var cart = document.querySelector('.shop-cart-total-item')

var itemCarts; 
var DelBtn;
var value_item ;
var subtotal = 0;

// summary cart 

var subvalue = document.getElementById('sub-value')
// var tax = document.getElementById('tax-value')
var total_price = document.getElementById('total-value')


const loadCart =()=> {
    var total = 0
    for(let i = 0 ; i < itemArray.length ; i++) {
        cart.innerHTML += `    
        <div class="product-item">
            <ul>
                <div class="item-left">
                    <li>
                        <img src="${itemArray[i].pro_img}" alt="">
                        <p>${itemArray[i].pro_name}</p>
                    </li>
        
                </div>
    
                <div class="item-right">
                    <li class="product-price">${itemArray[i].pro_price}</li>
                    <li>
                        <input type="number" value="${itemArray[i].pro_value}" onchange="IncreatValue(this , ${i})">
                    </li>
                    <li class="total-price">
                        $${(parseFloat(itemArray[i].pro_price.replace('$', '')) * parseInt(itemArray[i].pro_value)).toFixed(2)}
                    </li>
    
                    <li onclick="CancelItem(${i})">
                        <i class="fa fa-times"></i>
                    </li>
                </div>
            </ul>
      
        </div>
        `;
        // total += parseInt(e.value) * parseFloat(itemArray[index].pro_price.replace('$', ''))
    
       
    }
    value_item = document.querySelectorAll('.product-item ul .item-right .total-price')
    itemCarts = document.getElementsByClassName('product-item')
    SummaryCart()
    // subvalue.innerHTML = '$' + total.toFixed(2)
}


const SummaryCart =()=> {
    var total_value = 0
    for(var i = 0 ; i < itemArray.length ; i++) {
        total_value += parseInt(itemArray[i].pro_value) * parseFloat(itemArray[i].pro_price.replace('$', ''))
    }
    subvalue.innerHTML = '$' + total_value.toFixed(2)
    total_price.innerHTML = (total_value + (total_value * 0.07)).toFixed(2)

}




const IncreatValue =(e , index)=> {
  
    // console.log("carttttttttttttttttttt " + e.value + ' index ' + index + " ราคา " + itemArray[index])
    var total_price = parseInt(e.value) * parseFloat(itemArray[index].pro_price.replace('$', ''))
    // alert("ราคา " + parseInt(itemArray[index].pro_price))
    value_item[index].innerHTML = '$'+ parseFloat(total_price).toFixed(2)

    // Change Data
    itemArray[index].pro_value = parseInt(e.value)
    // itemArray[index].pro_price = '$'+ parseFloat(total_price).toFixed(2)

    localStorage.setItem(
        "items-cart",
        JSON.stringify(itemArray)
    )

    NavtotalPriceShow();
    SummaryCart()
    //   console.log(typeof(total_price) + " value " + itemArray[index].pro_price.replace('$', ''))
}


const CheckItemDel =()=> {
    for(let i = 0; i < DelBtn.length; i++){
          
        DelBtn[i].addEventListener('click',function(){
            CancelItem(i)
           
         });

    }
}


const CancelItem =(index)=> {
  
    console.log("ลบ " + index)
    itemArray.splice(index , 1)
    localStorage.setItem(
        "items-cart",
        JSON.stringify(itemArray)
    )
    // console.log(itemArray)
    itemCarts[index].remove()
    cart.innerHTML = ''
    loadCart()
    NavtotalPriceShow()
    cart_score.innerHTML = itemArray.length
    sidebar_cart_score.innerHTML = itemArray.length
}

const CancelAllItem =()=> {
    localStorage.removeItem("items-cart")
    cart.innerHTML = ''
    itemArray = []
    NavtotalPriceShow()
}



// notification

const check_product_cart =()=> {
    if(itemArray.length == 0){
        Swal.fire({
        title: 'No item in carts',
        text: 'Please choose items on shop before check out',
        icon: 'warning',
        confirmButtonText: 'CONTINUE SHOP',
        }).then((result) => {
            if(result.isConfirmed) {
                window.location = '../shop.html'
            }
        })
    }else {
        window.location = '../check-out.html'
    }
   
}
