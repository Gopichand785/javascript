let ram=[{"id":1,"first_name":"Town","last_name":"Leaming","email":"tleaming0@google.es","gender":"Male"},
{"id":2,"first_name":"Anna","last_name":"Shewen","email":"ashewen1@gravatar.com","gender":"Female"},
{"id":3,"first_name":"Prinz","last_name":"Easdon","email":"peasdon2@yellowbook.com","gender":"Male"},
{"id":4,"first_name":"Dayle","last_name":"Wildblood","email":"dwildblood3@newyorker.com","gender":"Female"},
{"id":5,"first_name":"Mychal","last_name":"Binton","email":"mbinton4@google.fr","gender":"Male"},
{"id":6,"first_name":"Derrek","last_name":"Wallwood","email":"dwallwood5@t-online.de","gender":"Male"},
{"id":7,"first_name":"Jacqui","last_name":"Calley","email":"jcalley6@taobao.com","gender":"Female"},
{"id":8,"first_name":"Paule","last_name":"Edelheit","email":"pedelheit7@theatlantic.com","gender":"Female"},
{"id":9,"first_name":"Konrad","last_name":"Adacot","email":"kadacot8@yale.edu","gender":"Non-binary"},
{"id":10,"first_name":"Marylin","last_name":"Dzeniskevich","email":"mdzeniskevich9@nasa.gov","gender":"Female"},
{"id":11,"first_name":"Torrin","last_name":"Patmore","email":"tpatmorea@tripadvisor.com","gender":"Male"},
{"id":12,"first_name":"Clerkclaude","last_name":"Hawksworth","email":"chawksworthb@rakuten.co.jp","gender":"Male"},
{"id":13,"first_name":"Karlotta","last_name":"McPeake","email":"kmcpeakec@mayoclinic.com","gender":"Female"},
{"id":14,"first_name":"Cindelyn","last_name":"Landall","email":"clandalld@gnu.org","gender":"Female"},
{"id":15,"first_name":"Lemmie","last_name":"Garioch","email":"lgarioche@gizmodo.com","gender":"Male"},
{"id":16,"first_name":"Stanislaw","last_name":"Puttnam","email":"sputtnamf@goodreads.com","gender":"Male"},
{"id":17,"first_name":"Raffaello","last_name":"Skechley","email":"rskechleyg@imageshack.us","gender":"Male"},
{"id":18,"first_name":"Porter","last_name":"Denerley","email":"pdenerleyh@hubpages.com","gender":"Genderqueer"},
{"id":19,"first_name":"Sisely","last_name":"Glasscoo","email":"sglasscooi@spiegel.de","gender":"Female"},
{"id":20,"first_name":"Zia","last_name":"Menci","email":"zmencij@joomla.org","gender":"Female"},
{"id":21,"first_name":"Barnabe","last_name":"Gudgeon","email":"bgudgeonk@sourceforge.net","gender":"Male"},
{"id":22,"first_name":"Curt","last_name":"Blackden","email":"cblackdenl@reuters.com","gender":"Male"},
{"id":23,"first_name":"Jimmie","last_name":"Cantero","email":"jcanterom@weebly.com","gender":"Male"},
{"id":24,"first_name":"Elladine","last_name":"Greenside","email":"egreensiden@smugmug.com","gender":"Female"},
{"id":25,"first_name":"Cirillo","last_name":"Lancley","email":"clancleyo@yelp.com","gender":"Male"},
{"id":26,"first_name":"Mirna","last_name":"Jerram","email":"mjerramp@newyorker.com","gender":"Female"},
{"id":27,"first_name":"Paton","last_name":"Klauber","email":"pklauberq@ca.gov","gender":"Male"},
{"id":28,"first_name":"Barrie","last_name":"Reicherz","email":"breicherzr@amazon.co.jp","gender":"Male"},
{"id":29,"first_name":"Theodoric","last_name":"Cray","email":"tcrays@about.com","gender":"Male"},
{"id":30,"first_name":"Borg","last_name":"Showl","email":"bshowlt@usa.gov","gender":"Genderfluid"},
{"id":31,"first_name":"Kip","last_name":"Ensten","email":"kenstenu@nasa.gov","gender":"Female"},
{"id":32,"first_name":"Vanessa","last_name":"Beams","email":"vbeamsv@nih.gov","gender":"Bigender"},
{"id":33,"first_name":"Anabelle","last_name":"Kidston","email":"akidstonw@sfgate.com","gender":"Female"},
{"id":34,"first_name":"Kareem","last_name":"Probin","email":"kprobinx@nba.com","gender":"Male"},
{"id":35,"first_name":"Chaim","last_name":"Scoggin","email":"cscogginy@g.co","gender":"Male"},
{"id":36,"first_name":"Sean","last_name":"Tynewell","email":"stynewellz@shareasale.com","gender":"Female"},
{"id":37,"first_name":"Reynard","last_name":"Scarasbrick","email":"rscarasbrick10@about.me","gender":"Male"},
{"id":38,"first_name":"Madella","last_name":"Ickeringill","email":"mickeringill11@dion.ne.jp","gender":"Female"},
{"id":39,"first_name":"Linoel","last_name":"Whybrow","email":"lwhybrow12@discuz.net","gender":"Male"},
{"id":40,"first_name":"Trenna","last_name":"Loughhead","email":"tloughhead13@indiatimes.com","gender":"Female"}]

let user_details=()=>{
 let rows=""
     ram.forEach((name)=>{
        rows=rows+`<tr>
        <td>${name.id}</td>
        <td>${name.first_name}</td>
        <td>${name.last_name}</td>
        <td>${name.email}</td>
        <td>${name.gender}</td>

        </tr>`
     })
   document.getElementById('tbody_data').innerHTML=rows
    
}