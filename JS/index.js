let __form = document.querySelector(`#form`);
let __usersInput = document.getElementById(`input`);
let __userName = document.getElementById(`name_input`);
let __userPhone = document.getElementById(`phone_input`);
let __userAddress = document.getElementById(`address_input`);
let __select = document.getElementById(`select`);
let __thin =document.getElementById(`thin`);
let __btn_save = document.getElementById(`btn_save`);
let __modal = document.querySelector (`.modal`);
let __btn_close = document.querySelector (`.btn_close`);
let __result_name = document.querySelector (`.result_name`);
let __result_menu = document.querySelector (`#result_menu`);
let __radio_input = document.querySelector (`#radio_form`);
let __input_radio = document.querySelector (`#input_radio`);
let __input_radio2 = document.querySelector (`#input_radio2`);
let __input_radio3 = document.querySelector (`#input_radio3`);
let __input_checkbox = document.querySelector(`#input_checkbox`);
let __add_input = document.querySelector (`#add_input`);

console.log();

let usersInfor = []

console.log(usersInfor);

function handleSubmit(e) {
    e.preventDefault()
    let user = {
        name: __userName.value,
        phone: __userPhone.value,
        address: __userAddress.value,
    }
    


    __userName.value= ``,
    __userPhone.value = ``,
    __userAddress.value = ``,
    usersInfor.push(user);
    // console.log(usersInfor);

    renderUsers();
}

__form.addEventListener (`submit`, handleSubmit)


function renderUsers (){
    __result_menu.innerHTML= null;
     for (let i=0; i<usersInfor.length; i++) {
 
        let li = document.createElement(`li`);
        li.className = `list_item`;
        // li.style= `width: 400px; height: 400px; border: 1px solid white;`
        __result_menu.append(li);       
 
         let UName =document.createElement (`p`)
         UName.textContent=(usersInfor[i]).name;
         li.append(UName)
 
         
         let UPhone =document.createElement (`p`)
         UPhone.textContent=(usersInfor[i]).phone;
         li.append(UPhone)
 
         let UAddress =document.createElement (`p`)
         UAddress.textContent=(usersInfor[i]).address;
         li.append(UAddress)
 
 
        let doughThickness = document.createElement(`p`) 
        doughThickness.textContent = (usersInfor[i]).doughThickness;
        li.append(doughThickness)

        let size = document.createElement(`p`) 
         size.textContent = (usersInfor[i]). size;
        li.append(size)

        let pizzArr = document.createElement(`p`) 
         pizzArr.textContent = (usersInfor[i]).pizzArr;
        li.append(pizzArr)
     }
 }



__select.addEventListener(`change`, function (e){
    let user = {
        doughThickness: __select.value,
    }

    usersInfor.push(user);
})


__radio_input.addEventListener(`change`, function (e){
    if(e.target.type === `radio`){
        let user = {
            size: e.target.value,
        }
    usersInfor.push(user);
    }
})

let pizzArr= [`On pizza:`]

usersInfor.push(pizzArr);

__input_checkbox.addEventListener(`change`, function (e){
    if(e.target.checked){  
    pizzArr.push(e.target.value);
    }else {
        pizzArr.forEach(function (element, index){
            if (element === e.target.value) {
                pizzArr.splice(index, index + 1);
            }
        })
    }
        
})

let addArr= [`Add:`]

usersInfor.push(addArr);

__add_input.addEventListener(`change`, function (e){
    if(e.target.checked){  
    addArr.push(e.target.value);
    }else {
        addArr.forEach(function (element, index){
            if (element === e.target.value) {
                addArr.splice(index, index + 1);
            }
        })
    }
        
})




__btn_save.addEventListener(`click`, function () {
    __modal.classList.toggle(`-translate-y-[1200px]`);

})

__btn_close.addEventListener(`click`, function () {
    __modal.classList.toggle(`-translate-y-[1200px]`);

})