
const BtnSearch=document.getElementById("btnBuscar");
const Container=document.getElementById("contenedor")

BtnSearch.addEventListener("click",()=>{
    const InputSearch=document.getElementById("inputBuscar").value;
    const API_URL=`https://images-api.nasa.gov/search?q=${InputSearch}`;
    fetch(API_URL)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error =>{
        console.log("Hubo un error:",error);
    })
})
function showData(data){
    let htmlContent="";
    for(let i=0;i<10;i++){
    console.log(data.collection.items[i].data[0].title);
    htmlContent+=`<div class='card overflow-hidden' style='width:24%;max-height:500px;'>
    <img class='card-img-top img-thumbnail' style='height:50%;' src='${data.collection.items[i].links[0].href}'>
    <div class='card-body w-100' style='max-height:50%;overflow-x:hidden; '>
    <h5 class='card-title'>${data.collection.items[i].data[0].title}</h5>
    <p class='card-text '>${data.collection.items[i].data[0].description}</p>
    <small class='text-muted'>${data.collection.items[i].data[0].date_created}</small>
    </div>
    </div>`;
    }
    Container.innerHTML=htmlContent;
}