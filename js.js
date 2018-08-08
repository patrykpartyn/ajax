/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById('btn').addEventListener('click',getAjax);
function getAjax()
{
    const xhr=new XMLHttpRequest();
    console.log(xhr);
    xhr.onload=()=>{
        if(xhr.status===200){
            document.getElementById('response').textContent=xhr.responseText;
        }
    };
    
    xhr.open('GET','test.txt',true);
    xhr.send();
    
}