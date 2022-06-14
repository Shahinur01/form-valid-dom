const studentForm =document.getElementById('student-form');
const msg=document.querySelector('.msg');
const loading = document.querySelector('.loading');
const emailField=document.querySelector('input[name="email"]');
const cellField=document.querySelector('input[name="cell"]');
const emailCheckOutput=document.querySelector('#emailCheck');
const cellNumber=document.querySelector('#cellNumber');

studentForm.onsubmit = (e)=>{
 e.preventDefault();
 loading.style.display="block";

 let setTimer = setTimeout(()=>{
   loading.style.display="none";
   const formData =new FormData(e.target);
   const {name,email,cell,username,gender,course} = Object.fromEntries(formData.entries());
   
   if (!name || !email || !username || !cell || !gender || !course) {
      msg.innerHTML=setAlert('All fields are required');
   }
  
   else{
      msg.innerHTML=setAlert('All fields okay',"success");
      emailCheckOutput.textContent=``;
      emailCheckOutput.className="";
      cellNumber.textContent="";
      cellNumber.className="";
      e.target.reset();
   }
  clearTimeout(setTimer);

 },1000)
}

// validate email fields
emailField.onkeyup=(event) =>{
  let email=event.target.value;
  if (emailCheck(email)) {
   emailCheckOutput.textContent=`email is okay!`;
   emailCheckOutput.className="text-success"
  }
  else{
   emailCheckOutput.textContent=`email is not okay!`;
   emailCheckOutput.className="text-warning";
  }
}
// validate cell fields
cellField.onkeyup=(event)=>{
 let cell=event.target.value;
   if (cellNumberCheck(cell)) {
      cellNumber.textContent="phone number is okay";
      cellNumber.className="text-success";
   }
   else{
      cellNumber.textContent="phone number is not okay";
      cellNumber.className="text-warning";
   }
}