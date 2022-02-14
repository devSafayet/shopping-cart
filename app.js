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
   calculateTotal();

});

document.getElementById('phone-minus').addEventListener('click', function(){
   updatePhoneNumber(false);
   calculateTotal();
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
  calculateTotal();
});
document.getElementById('case-minus').addEventListener('click', function(){
   updateProductCase(false);
   calculateTotal();
});
// calculate total
function calculateTotal(){
   const phonePrice= document.getElementById('phone-total')
   const casePrice= document.getElementById('case-total')
   const subTotal= document.getElementById('sub-total')
   subTotal.innerText= parseFloat(phonePrice.innerText)+ parseFloat(casePrice.innerText); 

   const taxAmount= document.getElementById('tax-amount');
   
   // total price
   const totalPrice= document.getElementById('total-price');
   totalPrice.innerText= parseFloat(subTotal.innerText) + parseFloat(taxAmount.innerText);

}