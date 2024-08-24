let todoList = [
   {
   item:"abc",
   dueDate:"24/9/2024"
},
   {
   item:"irggg",
   dueDate:"24/9/2024"
}
];
displayItems();
function addTodo(){
   let inputElement = document.querySelector('#todo_input'); 
   let dateElement = document.querySelector('#todo_date');
   let todoDate =dateElement.value; 
   let todoItem = inputElement.value;
   // Ensure both inputs are filled
   if (todoItem === '' || todoDate === '') {
      alert("Please enter both a todo item and a due date.");
      return;  // Stop the function if validation fails
  }
   todoList.push({item: todoItem, dueDate: todoDate}); 
   inputElement.value='';
   dateElement.value='';
   displayItems();

}
function displayItems(){
   let containerElement = document.querySelector('.todo_container') ;
   let newHtml="";
   for(let i=0;i<todoList.length;i++){
      let item = todoList[i].item;  // Access the `item` key
      let dueDate = todoList[i].dueDate;  // Access the `dueDate` key
      newHtml+=`
      
     
      <span>${item}</span>
      <span>${dueDate}</span>
      <button onclick="todoList.splice(${i},1); displayItems();" class="todo_btn_delete"> Delete</button>
           
      `;
   }  
   containerElement.innerHTML = newHtml;
}
