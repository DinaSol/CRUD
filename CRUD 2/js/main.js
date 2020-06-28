


var proName = document.getElementById('name');
var proPrice = document.getElementById("price");
var proDesc = document.getElementById("desc");
var tabB = document.getElementById(" tabB ");
var proSearch = document.getElementById(" search ");
var products;
if (localStorage.getItem("myProducts") == null) {
    products = [];
}
else {
    products = JSON.parse(localStorage.getItem('myProducts'));

    displayPro();

}

function addProduct() {
    product = {
        name: proName.value,
        price: proPrice.value,
        desc: proDesc.value
    }

    products.push(product);
    localStorage.setItem("myProducts", JSON.stringify(products));
    displayPro();
}


function displayPro() {

    var collection = ``;

    for (var i = 0; i < products.length; i++) {
        collection += ` <tr class = " w-100 ">
             <td class=" my-4"  > ` + products[i].name + `</td> 
        <td class=" my-4" > ` + products[i].price + ` </td>
        <td class=" my-4"> ` + products[i].desc + `</td>
        <td class = " my-4 " ><button onclick="deleteProduct (`+i +`) " type="submit" id="btnSub" class="btn  btn-outline-danger my-2 ">Delete</button> </td>
        </tr>` ;
    }


    tabB.innerHTML = collection;

}


function searchPro(e) {
    // var searchResult = ;

    var searchPro2 = ` `;
    var replacedTxt = ` `;
    var searchPlace = ` `;

    for (var i = 0; i < products.length; i++) {
        if (products[i].name.includes(e.trim()) == true) {
            searchPro2 += ` <tr class = " w-100 ">
             <td class=" my-4"  > ` + products[i].name + `</td> 
        <td class=" my-4" > ` + products[i].price + ` </td>
        <td class=" my-4"> ` + products[i].desc + `</td>
        <td class = " my-4 " ><button onclick="deleteProduct (` + i + `) " type="submit" id="btnDel" class="btn  btn-outline-danger my-2 "> Delete </button> </td>
        </tr>`;


            replacedTxt = products[i].name.replace( e ,`<span class = "text-success">`+e+`</span>`);
            searchPlace += ` <a  href = " https://www.`+products[i].name+`.com "  class = " d-block m-3 text-white "> `+replacedTxt+` </a>  `;

        }

    }
    tabB.innerHTML = searchPro2;
    document.getElementById("results").innerHTML = searchPlace;
}

function deleteProduct (index) 
{
    products.splice (index , 1)
    localStorage.setItem("myProducts", JSON.stringify(products));
    displayPro();

}

/*function update ()
{
    var newName=
    products[i].name.replace()
}*/

//element.classList.add("mystyle");
