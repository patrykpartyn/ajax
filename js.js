/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById('get-json').addEventListener('click',getJson)
function getJson()
{
    const xhr=new XMLHttpRequest();
    console.log(xhr);
    xhr.onload=function(){
       if(this.status===200){
           const res=JSON.parse(this.responseText);
//          console.log(res);
        
        let response='';
        res.forEach(user=>response+=`Username: ${user.username}, E-mail ${user.email}<br>`);
        document.getElementById('response').innerHTML=response;
            // document.getElementById('response').textContent=res;
       }
    };
    
    xhr.open('GET','users.json',true);
    xhr.send();
    
}