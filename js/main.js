let taskinput= document.getElementById('taskinput') ;
let addbtn= document.getElementById('addbtn');
let alltasks =document.getElementById('alltasks');
let notasks=document.getElementById('notasks');
let invaliddata=document.querySelectorAll('#invaliddata');
let closeinvaledmessage=document.querySelector('#invaliddata .close');
let btnmodel=document.getElementById('btnmodel');
let model=document.getElementById('model');

let showmodel=()=>{
    model.classList.toggle('block');
}
btnmodel.addEventListener('click',showmodel )

let notasksfunction =()=>{
    if(notasks.childElementCount == 0){
        notasks.classList.remove('none');
    }
}



let closefunction=()=>{
    invaliddata[0].classList.add('none');
    invaliddata[1].classList.add('none');
}


let addtask =()=>{
    let taskdata = taskinput.value;
if( taskinput.value ==""){
    invaliddata[0].classList.remove('none');

} 
else if(taskinput.value.length > 20){
    invaliddata[1].classList.remove('none');
  
   
}

else{
    notasks.classList.add('none'); 
   
    alltasks.innerHTML += `<div class=" task alert alert-info">
${taskdata} 

<i class="delete float-right far fa-trash-alt" style="font-size: 20px;"></i>
</div>`;
taskinput.value="";



alltasks.addEventListener('click', function(e){
    if(e.target.classList.contains('task')){
        e.target.classList.toggle('checked');
    }
})
showmodel() 

}


}
addbtn.addEventListener('click', addtask);
closeinvaledmessage.addEventListener('click', closefunction);

document.addEventListener('click', function(e){
if(e.target.classList.contains('delete')){

    e.target.parentElement.remove();
    notasksfunction();
}

})