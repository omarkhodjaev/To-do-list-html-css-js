'use strict';
const todolistFormEl = document.querySelector("#adder-form");
const todolistAdderInputEl = document.querySelector("#adder-input");
const todolistItemContainerEl = document.querySelector("#todolistitem-container");
const clearIcon = document.querySelector(".input__wrapper > i");
const deleteAllEl = document.querySelector("#delete-all");

todolistFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if(todolistAdderInputEl.value.replace(/ /g, "").length >= 3){
    const time = new Date();
    const createdTime = String(time.getHours()).padStart(2, "0") + ":" + String(time.getMinutes()).padStart(2, "0") + ":" + String(time.getSeconds()).padStart(2, "0");
    const todoItem = document.createElement("div");
    const pEl = document.createElement("p");
    const buttonWrapper = document.createElement("div");
    // BUTTON YARATISH
    const completeBtnEl = document.createElement("button");
    const editBtnEl = document.createElement("button");
    const timeBtnEl = document.createElement("button");
    const deleteBtnEl = document.createElement("button");
    // BUTTON ICHIGA SO'Z VA ICON QO'YISH
    completeBtnEl.innerHTML = '<i class="fas fa-check-circle"> </i> <br> Complete';
    editBtnEl.innerHTML = '<i class="fas fa-edit"></i> <br> Edit'
    timeBtnEl.innerHTML = '<i class="fas fa-clock"></i> <br> ' + createdTime;
    deleteBtnEl.innerHTML = '<i class="fas fa-trash"></i> <br> Delete'
    pEl.innerText = todolistAdderInputEl.value;
    // todoItem.appendChild(document.createTextNode(inp.value))
    // BUTTON NI PARENT ELEMENTNI ICHIGA JOYLASH
    buttonWrapper.appendChild(completeBtnEl)
    buttonWrapper.appendChild(editBtnEl);
    buttonWrapper.appendChild(timeBtnEl);
    buttonWrapper.appendChild(deleteBtnEl);
    todoItem.appendChild(pEl);
    todoItem.appendChild(buttonWrapper);
    todoItem.className = "todo__item";
    // parent el           //joylash    //child el
    todolistItemContainerEl.prepend(todoItem);
    todolistAdderInputEl.value = '';


    // DELETE

    deleteBtnEl.addEventListener("click", () => {
      const isAgreeToDelete = confirm("Are you sure to delete this item?")
      if(isAgreeToDelete){
        todoItem.remove();
      }
    })

    // COMPLETE 
    completeBtnEl.addEventListener('click', () => {
      pEl.classList.toggle("completeActive");
    })

    // EDIT

    editBtnEl.addEventListener('click', () => {
      if(pEl.hasAttribute("contenteditable")){
        pEl.removeAttribute("contenteditable");
        pEl.style.border = "none";
        editBtnEl.innerHTML = '<i class="fas fa-edit"></i> <br> Edit';
        editBtnEl.style.backgroundColor = "#e3c309";
      }
      else{
        pEl.setAttribute("contenteditable", true);
        pEl.style.border = "1px solid gray";
        editBtnEl.style.backgroundColor = "purple";
        editBtnEl.innerHTML = '<i class="fas fa-check-double"></i> <br> Done'
      }
    })
  }
})

clearIcon.addEventListener("click", () => {
  todolistAdderInputEl.value = '';
  todolistAdderInputEl.focus();
})

deleteAllEl.addEventListener('click', () => {
  const isUserAgree = confirm("Are you sure to delete all?");
  console.log(isUserAgree);
  if(isUserAgree){
    // 1-way slow
    todolistItemContainerEl.innerHTML = '';
    // 2-way fast
    // while(todolistItemContainerEl.firstChild){
    //   todolistItemContainerEl.removeChild(todolistItemContainerEl.firstChild);
    // }
  }
})