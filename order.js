const logout = document.querySelector(".logout")
logout.addEventListener("click", (e) => {
    //console.log(e.target)

    window.location.assign("../index.html")


})


//fetching data from api 



const table = document.querySelector(".OrderTable")
const request = fetch(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders`)
const promisedata = request.then(response => response.json()).then((data) => {









    //render
    for (let i = 0; i <= 10; i++) { render(data[i]) }

    var tabledata = document.querySelectorAll(".tabledata")


}
)
const render = function (data) {
    const html = `<tr class="tabledata">
   <td class="tabledatafont id">${data.id}</td>
   <td class="tabledatafontdark name">${data.customerName}</td>
   <td class="tabledatafontdark date ">${data.orderDate}<p class="time">${data.orderTime}</p></td>
   <td  class="tabledatafont amount">$${data.amount}</td>
   <td class="tabledatafontdark status">${data.orderStatus}</td>
   </tr>`

    table.insertAdjacentHTML("beforeend", html)

}
//fetched data from api 
//fetched data from api 
//fetched data from api 
//fetched data from api 


/// order page functionality

const loginAnchor = document.querySelectorAll(".loginAnchor")
const item = document.querySelectorAll(".item")
const items = document.querySelector(".items")
const count = document.querySelector(".count")
const label = document.querySelectorAll(".orderlabel")
const checkbox = document.querySelectorAll(".inputchecked")


//header navigation to other page 
items.addEventListener("click", (e) => {

    const target = e.target;

    for (let i = 0; i < item.length; i++) {
        loginAnchor[i].classList.remove("active")
    }
    if (target.closest(".item")) {

        target.classList.toggle("active")


    }
})


items.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("products")) {
        window.location.assign("../product/index.html")
    } else if (target.classList.contains("orders")) {
        window.location.assign("../order/index.html")
    } else {
        window.location.assign("../user/index.html")
    }
})


/*checkbox event listener*/





