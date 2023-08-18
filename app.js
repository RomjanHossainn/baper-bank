
   //  document.getElementById('deposit-btn').addEventListener('click',function(){

   //      const dipositInput = document.getElementById('deopsit-input');
   //      const dipositInputValue = parseFloat(dipositInput.value);
   //      const curentDipositBtn = document.getElementById('curentdiposit');
   //      const curentDipositNumber = parseFloat(curentDipositBtn.innerText);
        

   //      const totalDipostAmount = dipositInputValue + curentDipositNumber;
   //      curentDipositBtn.innerText = totalDipostAmount;


   //      const totalBalanceEliment = document.getElementById('toalBalance');
   //      const totalBlanceNumber = parseFloat(totalBalanceEliment.innerText);

   //      const totalAmoutSet = totalBlanceNumber + dipositInputValue;
   //      totalBalanceEliment.innerText = totalAmoutSet;

    
   //  }
   //  )


   //  document.getElementById('withrawBtn').addEventListener('click',function(){
   //      const withdRawInput = document.getElementById('withrawInput');
   //      const withdRawInputValue = parseFloat(withdRawInput.value);
   //      const curentWithdRawAmount = document.getElementById('withraw-span');
   //      const curentWithRawNumber = parseFloat(curentWithdRawAmount.innerText);
   //      const totalWithRawAmount = curentWithRawNumber + withdRawInputValue;
   //      curentWithdRawAmount.innerText = totalWithRawAmount;
   //      const totalBalanceEliment = document.getElementById('toalBalance');
   //      const totalBlanceNumber = parseFloat(totalBalanceEliment.innerText);

   //      if(withdRawInputValue > totalBlanceNumber){
   //          curentWithdRawAmount.innerText = curentWithRawNumber;
   //          return alert();
   //      }
   //      const totalAmoutSet = totalBlanceNumber - withdRawInputValue;
   //      totalBalanceEliment.innerText = totalAmoutSet;



   //  })



//    use function bapper bank

// work 100 %



// document.getElementById('deposit-btn').addEventListener('click',function(){
//    const dipositfieldValue =  getTheInputFieldValue('deopsit-input');
//    const dipositText = getDipositAndWihtrawTxt('curentdiposit')
//    const getMainBalanceAmount = getDipositAndWihtrawTxt('toalBalance');
//    const dipositBalanceTotal = dipositfieldValue + getMainBalanceAmount;
//    if(dipositBalanceTotal >=  10000){
//       return alert('apni 10000 hajar beshi taka rakhte parben na')
//    }else{
//       setDipositAndWithRawValue(dipositBalanceTotal,'toalBalance');
//    }
//    const constDipositTotal = dipositfieldValue + dipositText;
//    setDipositAndWithRawValue(constDipositTotal,'curentdiposit');
   
// })


// document.getElementById('withrawBtn').addEventListener('click',function(){

//    const withRawfieldValue =  getTheInputFieldValue('withrawInput');
//    const withrawText = getDipositAndWihtrawTxt('withraw-span');

//    const getMainBalanceAmount = getDipositAndWihtrawTxt('toalBalance');
//    if(withRawfieldValue > getMainBalanceAmount){
//       return alert('Amount not avalaval');
//    }
//    const withRawTotal = withRawfieldValue + withrawText;

//    setDipositAndWithRawValue(withRawTotal,'withraw-span')

//    const withrawBalanceToltal = getMainBalanceAmount - withRawfieldValue;
//    setDipositAndWithRawValue(withrawBalanceToltal,'toalBalance')
   
   
// })



// only one function trying



document.getElementById('deposit-btn').addEventListener('click',function(){
   baperBankProject('deopsit-input','curentdiposit',true)
})

document.getElementById('withrawBtn').addEventListener('click',function(){
   baperBankProject('withrawInput','withraw-span',false)
})


function baperBankProject(id,textField,type){
   const getinputfieldValue =  getTheInputFieldValue(id);
   const withrawText = getDipositAndWihtrawTxt(textField);
   const getMainBalanceAmount = getDipositAndWihtrawTxt('toalBalance');
  const totalResult =  mainResultCal(type,getMainBalanceAmount,getinputfieldValue);
  if(totalResult > 10000){
      return alert('apni 10000 takar beshi add korte parben na');
  }else{
      if(getinputfieldValue > totalResult){
         return alert('mia apner apner account a ato taka nai')
      }else if(getinputfieldValue < 0){
         return alert('doyah kore vai nagative value dien na');
      }
  }
  setDipositAndWithRawValue(totalResult,'toalBalance')
  const withRawTotal = getinputfieldValue + withrawText;
  setDipositAndWithRawValue(withRawTotal,textField);
  

}





// document.getElementById('deposit-btn').addEventListener('click',function(){
//    const dipositfieldValue =  getTheInputFieldValue('deopsit-input');
//    const dipositText = getDipositAndWihtrawTxt('curentdiposit')
//    const getMainBalanceAmount = getDipositAndWihtrawTxt('toalBalance');
//    const dipositBalanceTotal = dipositfieldValue + getMainBalanceAmount;
//    if(dipositBalanceTotal >=  10000){
//       return alert('apni 10000 hajar beshi taka rakhte parben na')
//    }else{
//       setDipositAndWithRawValue(dipositBalanceTotal,'toalBalance');
//    }
//    const constDipositTotal = dipositfieldValue + dipositText;
//    setDipositAndWithRawValue(constDipositTotal,'curentdiposit');
   
// })







 

// document.getElementById('withrawBtn').addEventListener('click',function(){

   
   
   
// })








 













