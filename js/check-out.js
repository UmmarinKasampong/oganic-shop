var itemlist = document.querySelector('.card-product-summary ul')

// display

var subValue = document.getElementById('sub-total')
var Tax = document.getElementById('tax')
var Total = document.getElementById('total')



// Form 
var firstname = document.getElementById('first-name')
var lastname = document.getElementById('last-name')

var country = document.getElementById('country')
var street = document.getElementById('street-address')
var house = document.getElementById('house-type')

var town = document.getElementById('town-city')
var state = document.getElementById('country-state')
var phone = document.getElementById('phone')

var email = document.getElementById('email')
var notes = document.getElementById('notes')


const loadProduct =()=> {
    itemlist.innerHTML += `
    <li class="sub-header">ProductsTotal</li>
    <li class="sub-header">Total</li>`
    var total_price ;

    for(let i = 0 ; i <  itemArray.length ; i++ ) {
        total_price = parseInt(itemArray[i].pro_value) * parseFloat(itemArray[i].pro_price.replace('$', ''))
        itemlist.innerHTML += `<li class="pro-name">${itemArray[i].pro_name}</li>
                                <li class="value-price">$${total_price.toFixed(2)}</li>`
    }

    SummaryCart();
}

// var user_Info = {
//     "first_name" : firstname ,
//     "last_name" : lastname ,
//     "country" : country ,
//     "street" : street ,

//     "house" : house ,
//     "town" : town ,
//     "state" : state ,
//     "phone" : phone ,

//     "email" : email ,
//     "notes" : notes 
// }
// localStorage.setItem(
//     "user-info",
//     JSON.stringify(itemArray)
// )

const check_out =()=> {
    if(firstname.value && lastname.value && country.value && street.value && house.value && town.value && state && phone.value && email.value){
        Swal.fire({
            title: 'Check Out Success',
            html: `Hi Mr.  ${firstname.value ? firstname.value : "Customer"} ${lastname.value ? lastname.value : '' } <b>Thank you for your order.</b>`,
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        }).then(()=> {
            localStorage.removeItem("items-cart")
            // NavtotalPriceShow()
            // cart_score.innerHTML = itemArray.length
            window.location = '../home.html'
        })
    }else {
        Swal.fire({
            title: 'Check Out Warning',
            html: `Hi Mr. ${firstname.value ? firstname.value : "Customer"} ${lastname.value ? lastname.value : '' } <b>Please fill all form input.</b>`,
            icon: 'warning',
            showConfirmButton: false,
            timer: 2000
        })
    }
       
 
    
}

const SummaryCart =()=> {
    var total_value = 0
    for(var i = 0 ; i < itemArray.length ; i++) {
        total_value += parseInt(itemArray[i].pro_value) * parseFloat(itemArray[i].pro_price.replace('$', ''))
    }
    subValue.innerHTML = '$' + total_value.toFixed(2)
    Total.innerHTML = '$' + (total_value + (total_value * 0.07)).toFixed(2)

}