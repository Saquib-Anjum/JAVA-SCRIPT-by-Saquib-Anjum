let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  DisplayItemOnHomePage();
  displayBagIcon();
}

//to add Item on bag
function addToBag(itemId){
bagItems.push(itemId);
localStorage.setItem('bagItems', JSON.stringify(bagItems));
displayBagIcon();
}

//bag
function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag_item_count');
    
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }
    else{
       bagItemCountElement.style.visibility='hidden';
    }
}
//to display item on home page



function DisplayItemOnHomePage(){
    let itemsContainerElement=document.querySelector('.items_container');
    if (!itemsContainerElement) {
        console.log("Items container not found.");
        return;
      }
    let innerHtm="";
    items.forEach(item=>{
        innerHtm+=`
        <div class="item_container">
                       <img class="item_image" src="${item.image}" alt="Image Item">
                       <div class="rating">
                       ${item.rating.stars} ⭐ |${item.rating.count}
                       </div>
                       <div class="company_name">${item.company}</div>
                       <div class="item_name">${item.item_name}</div>
                       <div class="price">
                           <span class="current_price">${item.current_price}</span>
                           <span class="orignal_price">Rs ${item.original_price}</span>
                           <span class="discount">(${item.discount_percentage})</span>
                       </div>
                       <button class="btn_add_bag" onclick="addToBag(${item.id})"> ADD TO BAG</button>       
                   </div>
       `
       });
       itemsContainerElement.innerHTML=innerHtm;
};


