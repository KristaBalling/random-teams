let userTarget = document.querySelector(".team_results");

function getUserData() {
  fetch("https://randomuser.me/api/")
    .then(convertFromJson)
    .then(buildUser)
}

function convertFromJson(results) {
  return results.json()
}

function buildUser(userInfo) {
  for (var i = 0; i < TEXTBOX VALUE; i++) {


    userTarget.innerHTML += `
      <img src=${userInfo.results.picture.large}>
      <div class="infoBlock">
<img src=${userInfo.results[0].picture.large}>
<h3 class="name">${userInfo.results[0].name.title} ${userInfo.results[0].name.first} ${userInfo.results[i].name.last}</h3>
<div class="contactInfo"
<p class="email">${userInfo.results[0].email}</p>
<p class="phone">${userInfo.results[0].phone}</p>
<p class="cellPhone">${userInfo.results[0].cell}</p>
<p class="userName">${userInfo.results[0].name.login.username}</p>
</div>
</div>`
  }
}
