 
 
 
var ul =document.getElementById('list');
var li;
 
 
 // for adding
 var addButton=document.getElementById('add');  
 addButton.addEventListener('click',addItem);


 //for removing
 var removeButton=document.getElementById('remove')
 removeButton.addEventListener('click',removeItem)
 
 
 
 function addItem(){
     console.log('add'); 
     

     var input = document.getElementById('input')
     var item=input.value;
     ul=document.getElementById('list')
     var textnode=document.createTextNode(item)
     
     if(item===''){
         


           
     }else{
         //create li
         li =document.createElement('li');
         
         //create checkbox
         var checkbox = document.createElement('input')
         checkbox.type='checkbox';
         checkbox.setAttribute('id','check')
        
        //create lable

        var label=document.createElement('label')
        label.setAttribute('for','item') // optional


        // add these element on web page

        ul.appendChild(label) //
        li.appendChild(checkbox)// checkbo
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0]); // insertBefore()  ==?  what is the child  we want add ==>>li..... and where u want to add ==>>ul.childNode

        
        setTimeout(()=>{
            li.className='visual';
        },150)
 


         input.value=''; // remove the written input form input box after click AddTodo
     }
 } 
 
 
 
 
 
 function removeItem(){
      console.log('delete button');
      
    
    li=ul.children /// return array of child element of ul
     for (let index = 0; index < li.length; index++) {
         const element = li[index];
           while(li[index] && li[index].children[0].checked)   /// check index itself   means===>>> it should be on the present index and as well as checked insde on that  
           {
            
               ul.removeChild(li[index]) 
           } 
     }
 }