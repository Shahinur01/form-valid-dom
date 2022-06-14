/*  set Alert function
 */
const setAlert =(msg,type='danger')=>{
  return ` <p class="alert alert-${type} d-flex justify-content-between ">${msg}
  <button data-bs-dismiss="alert" class="btn-close"></button>
  </p>`;
  //msg.innerHTML=setAlert('All fields are required');
}

/*
 Email check validation 
 example- shahinurislam903@gmail.com
*/
let emailCheck=(email)=>{
  let pattern=/^[a-zA-Z0-9_\.]{1,}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,5}$/;
  return pattern.test(email);
}

/*
 cell number check
 */
const cellNumberCheck =(cell)=>{
 let pattern= /^(\+880|01|8801)[0-9]{9}$/;
    return pattern.test(cell);
};
