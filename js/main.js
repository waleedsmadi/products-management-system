// select elements
const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const count = document.getElementById("count");
const category = document.getElementById("category");
const submit = document.getElementById("submit");


// get total
function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = "#009688";
    }else{
        total.innerHTML = '';
        total.style.background = "#680e0e";
    }
}





// check local storage
let dataPro;
if(localStorage.getItem("the_product") != null){
    dataPro = JSON.parse(localStorage.getItem("the_product"));
}else{
    dataPro = [];
}

// create product
submit.onclick = function(){
    let newProduct = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    
    if(newProduct.count > 1){
        for(let i=0; i<newProduct.count; i++){
            dataPro.push(newProduct);
        }
    }else{
        dataPro.push(newProduct);
    }
    localStorage.setItem("the_product", JSON.stringify(dataPro));
}

