let users=[{"id":1,"name":"Raddie","email":"rgrimestone0@bloglines.com","gender":"Genderqueer"},
{"id":2,"name":"Kerk","email":"ksive1@twitter.com","gender":"Bigender"},
{"id":3,"name":"Natal","email":"nfieldhouse2@com.com","gender":"Male"},
{"id":4,"name":"Humphrey","email":"hbleyman3@csmonitor.com","gender":"Male"},
{"id":5,"name":"Chloe","email":"cweeke4@usda.gov","gender":"Female"},
{"id":6,"name":"Susanetta","email":"soldroyd5@scribd.com","gender":"Female"},
{"id":7,"name":"Nixie","email":"ngarlicke6@google.com","gender":"Female"},
{"id":8,"name":"Lonny","email":"lwandrack7@loc.gov","gender":"Genderfluid"},
{"id":9,"name":"Web","email":"wbraunes8@slideshare.net","gender":"Male"},
{"id":10,"name":"Welsh","email":"wrisman9@angelfire.com","gender":"Male"},
{"id":11,"name":"Mic","email":"mtinseya@yandex.ru","gender":"Male"},
{"id":12,"name":"Genni","email":"gjaegarb@people.com.cn","gender":"Female"},
{"id":13,"name":"Daveen","email":"dodneyc@github.io","gender":"Female"},
{"id":14,"name":"Mariel","email":"mchallaced@dropbox.com","gender":"Female"},
{"id":15,"name":"Nessi","email":"nhalifaxe@springer.com","gender":"Female"},
{"id":16,"name":"Skell","email":"skillingbeckf@goodreads.com","gender":"Male"},
{"id":17,"name":"Bern","email":"bberthomeg@facebook.com","gender":"Male"},
{"id":18,"name":"Calla","email":"cwhitesideh@dedecms.com","gender":"Female"},
{"id":19,"name":"Evin","email":"eelliotti@kickstarter.com","gender":"Male"},
{"id":20,"name":"Danny","email":"dstoffelj@un.org","gender":"Female"}]


function display_data(){
    let rows=""
    for(i=0;i<=19;i++){
        rows+= `<tr>
            <td>${users[i].id+10}</td>
            <td>${users[i].name.toUpperCase()}</td>
            <td>${users[i].email}</td>
            <td>${users[i].gender.substr(0,1)}</td>
        </tr>`
    }
    document.getElementById("abc").innerHTML=rows
}
