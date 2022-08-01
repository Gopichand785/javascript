


let users=[{"id":21,"name":"Oralia","email":"otrematickk@bing.com","gender":"Female"},
{"id":22,"name":"Bing","email":"bblakerl@hp.com","gender":"Male"},
{"id":23,"name":"Miles","email":"mpetersm@qq.com","gender":"Male"},
{"id":24,"name":"Ari","email":"aromeron@linkedin.com","gender":"Male"},
{"id":25,"name":"Colas","email":"cgalleyo@netscape.com","gender":"Male"},
{"id":26,"name":"Casie","email":"crennicksp@people.com.cn","gender":"Bigender"},
{"id":27,"name":"Bidget","email":"bvarnalsq@nasa.gov","gender":"Female"},
{"id":28,"name":"Issy","email":"ibonnysonr@tuttocitta.it","gender":"Non-binary"},
{"id":29,"name":"Kessia","email":"kwoofendens@icq.com","gender":"Female"},
{"id":30,"name":"Shepard","email":"sgriggt@unesco.org","gender":"Male"},
{"id":31,"name":"Sergeant","email":"smcmyleru@moonfruit.com","gender":"Male"},
{"id":32,"name":"Fleming","email":"fmarmyonv@columbia.edu","gender":"Male"},
{"id":33,"name":"Ysabel","email":"ycantow@hhs.gov","gender":"Female"},
{"id":34,"name":"Bel","email":"beastopex@ezinearticles.com","gender":"Female"},
{"id":35,"name":"Walther","email":"wdheniny@timesonline.co.uk","gender":"Male"},
{"id":36,"name":"Tito","email":"tfairhamz@redcross.org","gender":"Male"},
{"id":37,"name":"Monty","email":"mhaggas10@dropbox.com","gender":"Male"},
{"id":38,"name":"Dianemarie","email":"dserris11@netscape.com","gender":"Female"},
{"id":39,"name":"Merridie","email":"mturgoose12@abc.net.au","gender":"Female"},
{"id":40,"name":"Dalia","email":"dbunstone13@eventbrite.com","gender":"Female"},
{"id":41,"name":"Kiley","email":"ktremathick14@cdc.gov","gender":"Female"},
{"id":42,"name":"Elianore","email":"elarkworthy15@sfgate.com","gender":"Female"},
{"id":43,"name":"Bail","email":"bconkey16@sciencedirect.com","gender":"Male"},
{"id":44,"name":"Lucho","email":"lbursnell17@arstechnica.com","gender":"Male"},
{"id":45,"name":"Muffin","email":"mhartfield18@amazon.com","gender":"Female"},
{"id":46,"name":"Lion","email":"lgaiter19@bloglines.com","gender":"Male"},
{"id":47,"name":"Dell","email":"dmcauley1a@hao123.com","gender":"Polygender"},
{"id":48,"name":"Florida","email":"fespada1b@pcworld.com","gender":"Female"},
{"id":49,"name":"Adda","email":"aleifer1c@nationalgeographic.com","gender":"Female"},
{"id":50,"name":"Gert","email":"gedmonston1d@icio.us","gender":"Female"},
{"id":51,"name":"Gusti","email":"gnowick1e@51.la","gender":"Female"},
{"id":52,"name":"Sherman","email":"swaldera1f@123-reg.co.uk","gender":"Male"},
{"id":53,"name":"Marylynne","email":"mwhissell1g@cafepress.com","gender":"Female"},
{"id":54,"name":"Jocko","email":"jkeasley1h@topsy.com","gender":"Agender"},
{"id":55,"name":"Bank","email":"bkonerding1i@linkedin.com","gender":"Male"},
{"id":56,"name":"Agathe","email":"aspores1j@sfgate.com","gender":"Female"},
{"id":57,"name":"Woody","email":"wloader1k@yahoo.com","gender":"Male"},
{"id":58,"name":"Ellissa","email":"elongman1l@list-manage.com","gender":"Female"},
{"id":59,"name":"Dennis","email":"dkilford1m@bloglines.com","gender":"Male"},
{"id":60,"name":"Charla","email":"ccator1n@tinyurl.com","gender":"Female"}]


function display_data(pagination){
    let row=""
    for(i=0;i<=59;i++){
        row+=`<tr>
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].eamil}</td>
            <td>${users[i].gender}</td>
        </tr>`
    }
    document.getElementById("abc").innerHTML=rows
 
}