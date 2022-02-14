// product number one 
function updatePhoneNumber(isIncreasing){
   const phoneNumber= document.getElementById('phone-number');
   let phoneNumberCount= phoneNumber.value;
   if(isIncreasing==true){
      phoneNumberCount= parseInt(phoneNumberCount) + 1;
   }
   else if(phoneNumberCount>0){
      phoneNumberCount = parseInt(phoneNumberCount) - 1;
   }
   phoneNumber.value= phoneNumberCount;
   // update number ammount
   const phoneTotal= document.getElementById('phone-total');
   phoneTotal.innerText= phoneNumberCount*1219; 

};
//

document.getElementById('phone-plus').addEventListener('click', function(){
   updatePhoneNumber(true);

});

document.getElementById('phone-minus').addEventListener('click', function(){
   updatePhoneNumber(false);
});
// second product 

function updateProductCase(isIncreasings){
   const caseNumber= document.getElementById('case-number');
   let caseNumberTotal= caseNumber.value;
   if(isIncreasings==true){
      caseNumberTotal= parseInt(caseNumberTotal) +1;
   }
   else if(caseNumberTotal>0){
      caseNumberTotal= parseInt(caseNumberTotal) -1;
   }
   caseNumber.value= caseNumberTotal;
//update ammout
   const caseTotal= document.getElementById('case-total');
   caseTotal.innerText= caseNumberTotal*59;
};

document.getElementById('case-plus').addEventListener('click', function(){
  updateProductCase(true);
});
document.getElementById('case-minus').addEventListener('click', function(){
   updateProductCase(false);
});