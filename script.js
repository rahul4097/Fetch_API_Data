function element(){
var elements=document.getElementById("temp").content;

var data=document.importNode(elements,true);

document.getElementById('parts').appendChild(data);
}

function getData(){
    document.getElementById("fetchData").addEventListener('click',()=>{
    var link="https://jsonplaceholder.typicode.com/posts";
    fetch(link).then((response)=>{
     return response.json(); // The json() will help us to convert all fetch data into a javaScript
    }).then((data)=>{
        
        var items='';
        data.map((dataItems)=>{   // the map function returns a new arry, means when we invoke the the function (dataItems) it will check every line. 
            items +=`<tr>
            <td> ${dataItems.userId} </td>  
            <td> ${dataItems.id} </td>
            <td> ${dataItems.title}  </td>
            <td> ${dataItems.body } </td>
            </tr>`;//Here we use the same identity form the link means the (.userId) name is must be same comare to your fetch api detals.
           
        });
        document.getElementById("tableBody").innerHTML=items; //Here we printing all data on our webPage in table body
        })
    });
}

getData();
