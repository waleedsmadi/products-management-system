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

    // clear data
    clearData();

    // reset total field
    getTotal();

    // show data
    showData();
}





// clear data
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}





// read data
function showData(){
    let table = '';
    for(let i=0; i<dataPro.length; i++){
        table += `

        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button id="update">UPDATE</button></td>
            <td><button onclick="deleteData(${i});" id="delete">DELETE</button></td>
        </tr>        
     `;
    }

    document.querySelector("#tbody").innerHTML = table;
}
showData();





// delete data
function deleteData(id){
    dataPro.splice(id,1);
    localStorage.setItem("the_product", JSON.stringify(dataPro));
    showData();
}