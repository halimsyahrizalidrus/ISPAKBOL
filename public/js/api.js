const base_url = "https://api.football-data.org/v2/";
// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}
// Blok kode untuk melakukan request data json
function getStandings() {

  if ("caches" in window) {
    caches.match(base_url + "competitions/2015/standings").then(function (response) {
      if (response) {
        response.json().then(function (data) {
          var infostandingHTML = "";
          // data.result.forEach(function(article) {
          infostandingHTML += `
                    

                    <div>
                      <h5>Competition</h5>
                      
                      <tr>
                        <td>Area</td>
                        <td>:</td>
                        <td>${data.competition.area.name}</td>
                      </tr>
                      <h5>Season</h5>
                      <th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </th>
                      <tr>
                        <td>Current Match day</td>
                        <td>:</td>
                        <td>${data.season.currentMatchday}</td>
                      </tr><br>
                      <tr>
                        <td>Start Date</td>
                        <td>:</td>
                        <td>${data.season.startDate}</td>
                      </tr><br>
                      <tr>
                        <td>End Date</td>
                        <td>:</td>
                        <td>${data.season.endDate}</td>
                      </tr>

                      <h5>Standing</h5>
                      

                    <div>
                  `;
          // });

          var standingtotalHTML = "";
          standingtotalHTML += `
                <tr>
                  <td>Stage</td>
                  <td>:</td>
                  <td>${data.standings["0"].stage}</td>
                </tr><br>
                <tr>
                  <td>Type</td>
                  <td>:</td>
                  <td>${data.standings["0"].type}</td>
                </tr>
            
            `;

          var totalatasHTML = "";
          totalatasHTML += `
                <table class="striped centered responsive-table" style="font-size:12px;">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th></th>
                        <th>Draw</th>
                        <th>Goal Difference</th>
                        <th>Goals Against</th>
                        <th>Goals For</th>
                        <th>Lost</th>
                        <th>Played Games</th>
                        <th>Points</th>
                        <th>Position</th>
                        <th>won</th>
                    </tr>
                </thead>
                <tbody>
            `;


          var totalHTML = "";
          data.standings["0"].table.forEach(function (item) {
            totalHTML += `
              
                <tr>
                <td>${item.team.name}</td>
                <td style><img style="width:30px;" src="${item.team.crestUrl}"></td>
                <td>${item.draw}</td>
                <td>${item.goalDifference}</td>
                <td>${item.goalsAgainst}</td>
                <td>${item.goalsFor}</td>
                <td>${item.lost}</td>
                <td>${item.playedGames}</td>
                <td>${item.points}</td>
                <td>${item.position}</td>
                <td>${item.won}</td>
                </tr>
              
              `;

          });

          var totalbawahHTML = "";
          totalbawahHTML += `
                <tbody>
                </table>
            `;


          // Sisipkan komponen card ke dalam elemen dengan id #content
          document.getElementById("infostanding").innerHTML = infostandingHTML;
          document.getElementById("standingtotal").innerHTML = standingtotalHTML;
          document.getElementById("daftartotal").innerHTML = totalatasHTML.concat(totalHTML, totalbawahHTML);

        });
      }
    });
  }

  fetch(base_url + "competitions/2015/standings", {
    method: "GET",
    headers: {
      "X-Auth-Token": "2ca395727d024576bb70f7f8dd3a31da"
    }
  })
    .then(status)
    .then(json)
    .then(function (data) {
      // console.log(data);
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      var infostandingHTML = "";
      // data.result.forEach(function(article) {
      infostandingHTML += `
              

              <div>
                <h5>Competition</h5>
                
                <tr>
                  <td>Area</td>
                  <td>:</td>
                  <td>${data.competition.area.name}</td>
                </tr>
                <h5>Season</h5>
                <th>
                  <td></td>
                  <td></td>
                  <td></td>
                </th>
                <tr>
                  <td>Current Match day</td>
                  <td>:</td>
                  <td>${data.season.currentMatchday}</td>
                </tr><br>
                <tr>
                  <td>Start Date</td>
                  <td>:</td>
                  <td>${data.season.startDate}</td>
                </tr><br>
                <tr>
                  <td>End Date</td>
                  <td>:</td>
                  <td>${data.season.endDate}</td>
                </tr>

                <h5>Standing</h5>
                

              <div>
            `;
      // });

      var standingtotalHTML = "";
      standingtotalHTML += `
          <tr>
            <td>Stage</td>
            <td>:</td>
            <td>${data.standings["0"].stage}</td>
          </tr><br>
          <tr>
            <td>Type</td>
            <td>:</td>
            <td>${data.standings["0"].type}</td>
          </tr>
      
      `;

      var totalatasHTML = "";
      totalatasHTML += `
          <table class="striped centered responsive-table" style="font-size:12px;">
          <thead>
              <tr>
                  <th>Team</th>
                  <th></th>
                  <th>Draw</th>
                  <th>Goal Difference</th>
                  <th>Goals Against</th>
                  <th>Goals For</th>
                  <th>Lost</th>
                  <th>Played Games</th>
                  <th>Points</th>
                  <th>Position</th>
                  <th>won</th>
              </tr>
          </thead>
          <tbody>
      `;


      var totalHTML = "";
      data.standings["0"].table.forEach(function (item) {

        totalHTML += `
          
          <tr>
          <td>${item.team.name}</td>
          <td style><img style="width:30px;" src="${item.team.crestUrl}"></td>
          <td>${item.draw}</td>
          <td>${item.goalDifference}</td>
          <td>${item.goalsAgainst}</td>
          <td>${item.goalsFor}</td>
          <td>${item.lost}</td>
          <td>${item.playedGames}</td>
          <td>${item.points}</td>
          <td>${item.position}</td>
          <td>${item.won}</td>
          </tr>
        
        `;

      });

      var totalbawahHTML = "";
      totalbawahHTML += `
        <tbody>
        </table>
      `;

      var standinghomeHTML = "";
      standinghomeHTML += `
          <tr>
            <td>Stage</td>
            <td>:</td>
            <td>${data.standings["1"].stage}</td>
          </tr><br>
          <tr>
            <td>Type</td>
            <td>:</td>
            <td>${data.standings["1"].type}</td>
          </tr>
      
      `;




      // Sisipkan komponen card ke dalam elemen dengan id #content
      document.getElementById("infostanding").innerHTML = infostandingHTML;
      document.getElementById("standingtotal").innerHTML = standingtotalHTML;
      document.getElementById("daftartotal").innerHTML = totalatasHTML.concat(totalHTML, totalbawahHTML);

    })

    .catch(error);
}

function getTiminfo() {

  if ("caches" in window) {
    caches.match(base_url + "teams/2015").then(function (response) {
      if (response) {
        response.json().then(function (pemain) {
          var timinfoHTML = "";
          timinfoHTML += `
            <h5>Tim Information</h5>
              <tr>
                <td>Area</td>
                <td>:</td>
                <td>${pemain.area.name}</td>
              <tr><br>
              <tr>
                <td>Club Color</td>
                <td>:</td>
                <td>${pemain.clubColors}</td>
              <tr><br>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>${pemain.email}</td>
              <tr><br>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>${pemain.name}</td>
              <tr><br>
              <tr>
                <td>Short Name</td>
                <td>:</td>
                <td>${pemain.shortName}</td>
              <tr><br>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>${pemain.phone}</td>
              <tr><br>
            
          `;

          var timatasHTML = "";
          timatasHTML += `
              <table class="striped centered responsive-table" style="font-size:12px;">
              <thead>
                  <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Country Of Birth</th>
                      <th>Date Of Birth</th>
                      <th>Nationality</th>
                      <th>Position</th>
                      <th>Role</th>
                      <th>Shirt Number</th>
                  </tr>
              </thead>
              <tbody>
          `;


          var daftartimHTML = "";
          pemain.squad.forEach(function (tim) {
            daftartimHTML += `
            
              <tr>
              <td><button id="myBtn" onClick="ambilid(${tim.id});" class="waves-effect waves-light btn-small"</td>Tambah Favorit</button>
              <td>${tim.name}</td>
              <td>${tim.countryOfBirth}</td>
              <td>${tim.dateOfBirth}</td>
              <td>${tim.nationality}</td>
              <td>${tim.position}</td>
              <td>${tim.role}</td>
              <td>${tim.shirtNumber}</td>
              </tr>
            
            `;

          });

          var timbawahHTML = "";
          timbawahHTML += `
            <tbody>
            </table>
          `;

          // Sisipkan komponen card ke dalam elemen dengan id #content
          document.getElementById("timinfo").innerHTML = timinfoHTML;
          document.getElementById("daftartim").innerHTML = timatasHTML.concat(daftartimHTML, timbawahHTML);
        });
      }
    });
  }


  fetch(base_url + "teams/2015", {
    method: "GET",
    headers: {
      "X-Auth-Token": "2ca395727d024576bb70f7f8dd3a31da"
    }
  })
    .then(status)
    .then(json)
    .then(function (pemain) {
      // console.log(pemain);
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      var timinfoHTML = "";
      timinfoHTML += `
      <h5>Tim Information</h5>
        <tr>
          <td>Area</td>
          <td>:</td>
          <td>${pemain.area.name}</td>
        <tr><br>
        <tr>
          <td>Club Color</td>
          <td>:</td>
          <td>${pemain.clubColors}</td>
        <tr><br>
        <tr>
          <td>Email</td>
          <td>:</td>
          <td>${pemain.email}</td>
        <tr><br>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>${pemain.name}</td>
        <tr><br>
        <tr>
          <td>Short Name</td>
          <td>:</td>
          <td>${pemain.shortName}</td>
        <tr><br>
        <tr>
          <td>Phone</td>
          <td>:</td>
          <td>${pemain.phone}</td>
        <tr><br>
      
    `;

      var timatasHTML = "";
      timatasHTML += `
        <table class="striped centered responsive-table" style="font-size:12px;">
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Country Of Birth</th>
                <th>Date Of Birth</th>
                <th>Nationality</th>
                <th>Position</th>
                <th>Role</th>
                <th>Shirt Number</th>
            </tr>
        </thead>
        <tbody>
    `;


      var daftartimHTML = "";
      pemain.squad.forEach(function (tim) {
        daftartimHTML += `
      
        <tr>
        <td><button id="myBtn" onClick="ambilid(${tim.id});" class="waves-effect waves-light btn-small"</td>Tambah Favorit</button>
        <td>${tim.name}</td>
        <td>${tim.countryOfBirth}</td>
        <td>${tim.dateOfBirth}</td>
        <td>${tim.nationality}</td>
        <td>${tim.position}</td>
        <td>${tim.role}</td>
        <td>${tim.shirtNumber}</td>
        </tr>
      
      `;

      });

      var timbawahHTML = "";
      timbawahHTML += `
      <tbody>
      </table>
    `;

      // Sisipkan komponen card ke dalam elemen dengan id #content
      document.getElementById("timinfo").innerHTML = timinfoHTML;
      document.getElementById("daftartim").innerHTML = timatasHTML.concat(daftartimHTML, timbawahHTML);
    })

    .catch(error);
}


function ambilid(id) {

  // console.log(id);
  var idParam = (id);
  // console.log(idParam);
  fetch(base_url + "teams/2015", {
    method: "GET",
    headers: {
      "X-Auth-Token": "2ca395727d024576bb70f7f8dd3a31da"
    }
  })
    .then(status)
    .then(json)
    .then(function (datadetail) {
      // Objek JavaScript dari response.json() masuk lewat variabel data.
      // console.log(datadetail);
      datadetail.squad.forEach(item => {
        if (item.id == idParam) {
          // console.log(item.name);
          // console.log(item.countryOfBirth);
          dbPromise.then(function (db) {
            var tx = db.transaction('tim', 'readwrite');
            var store = tx.objectStore('tim');
            var player = {
              playerid: item.id,
              playername: item.name,
              playercountryofbirth: item.countryOfBirth,
              playerdateofbirth: item.dateOfBirth,
              playernationality: item.nationality,
              playerposition: item.position,
              playerrole: item.role,
              playershirtnumber: item.shirtNumber,
              created: new Date().getTime()
            };
            store.put(player); //menambahkan key "buku"
            return tx.complete;
          }).then(function () {
            alert('Player berhasil disimpan.');
            location.reload("index.html");
          }).catch(function () {
            alert('Player gagal disimpan atau sudah ditambahkan');
            location.reload("index.html");
          })

        }
      })
    });

}


function getPlayerFavorit() {

  dbPromise.then(function (db) {
    var tx = db.transaction('tim', 'readonly');
    var store = tx.objectStore('tim');
    return store.getAll();
  }).then(function (players) {
    // console.log('Data yang diambil: ');
    // console.log(players);

    var favoritatasHTML = "";
    favoritatasHTML += `
          <table class="striped centered responsive-table" style="font-size:12px;">
          <thead>
              <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Country Of Birth</th>
                  <th>Date Of Birth</th>
                  <th>Nationality</th>
                  <th>Position</th>
                  <th>Role</th>
                  <th>Shirt Number</th>
              </tr>
          </thead>
          <tbody>
      `;


    var daftarfavoritHTML = "";
    players.forEach(function (itemnya) {
      daftarfavoritHTML += `
        
          <tr>
          <td><button id="myBtn" onClick="hapusPlayer(${itemnya.playerid});" class="waves-effect waves-light btn-small"</td>Hapus Favorit</button>
          <td>${itemnya.playername}</td>
          <td>${itemnya.playercountryofbirth}</td>
          <td>${itemnya.playerdateofbirth}</td>
          <td>${itemnya.playernationality}</td>
          <td>${itemnya.playerposition}</td>
          <td>${itemnya.playerrole}</td>
          <td>${itemnya.playershirtnumber}</td>
          </tr>
        
        `;

    });

    var favoritbawahHTML = "";
    favoritbawahHTML += `
        <tbody>
        </table>
      `;

    // Sisipkan komponen card ke dalam elemen dengan id #content
    // document.getElementById("timinfo").innerHTML = timinfoHTML;
    document.getElementById("tablefavorit").innerHTML = favoritatasHTML.concat(daftarfavoritHTML, favoritbawahHTML);

  });
}

function hapusPlayer(idplayer) {
  console.log(idplayer);
  var idplayerhapus = idplayer;
  dbPromise.then(function (db) {
    var tx = db.transaction('tim', 'readwrite');
    var store = tx.objectStore('tim');
    store.delete(idplayerhapus);
    return tx.complete;
  }).then(function () {
    alert('Player Favorit deleted');
    location.reload("index.html");
  });
}

