let Employee=[{"id":1,"name":"Bree","email":"bfoakes0@gmpg.org","gender":"Female"},
{"id":2,"name":"Celine","email":"ctourner1@icq.com","gender":"Female"},
{"id":3,"name":"Alli","email":"aclacey2@spiegel.de","gender":"Female"},
{"id":4,"name":"Fonsie","email":"fdrummond3@toplist.cz","gender":"Male"},
{"id":5,"name":"Hilarius","email":"hproger4@cdbaby.com","gender":"Male"},
{"id":6,"name":"Alejandra","email":"amorbey5@state.tx.us","gender":"Female"},
{"id":7,"name":"Tressa","email":"tmartynov6@bing.com","gender":"Female"},
{"id":8,"name":"Beverley","email":"bjickles7@squarespace.com","gender":"Female"},
{"id":9,"name":"Pernell","email":"pbrunini8@squarespace.com","gender":"Male"},
{"id":10,"name":"Martie","email":"mkinavan9@ed.gov","gender":"Female"},
{"id":11,"name":"Candide","email":"ckittlesa@google.com.hk","gender":"Female"},
{"id":12,"name":"Jonah","email":"jduryb@pen.io","gender":"Male"},
{"id":13,"name":"Francyne","email":"fsharplingc@wix.com","gender":"Agender"},
{"id":14,"name":"Jorge","email":"jtollertond@weather.com","gender":"Genderqueer"},
{"id":15,"name":"Bernhard","email":"bhallore@economist.com","gender":"Male"},
{"id":16,"name":"Jasen","email":"jmaylerf@slideshare.net","gender":"Male"},
{"id":17,"name":"Brigham","email":"bchatang@amazon.co.uk","gender":"Male"},
{"id":18,"name":"Sidney","email":"sswitsurh@tinyurl.com","gender":"Male"},
{"id":19,"name":"Bertine","email":"bfroodi@sfgate.com","gender":"Female"},
{"id":20,"name":"Coralyn","email":"cbluschkej@vistaprint.com","gender":"Female"}]

function display(){
    let rows=""
    for(emp of Employee){
        rows=rows+`<tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.email}</td>
                    <td>${emp.gender}</td>
                    </tr>`
    }
    document.getElementById("data").innerHTML=rows
}