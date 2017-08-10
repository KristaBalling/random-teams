let userTarget = document.querySelector(".team_results");
let numbOfTeamMember = document.querySelector('input');
let sumBut = document.querySelector('button');
sumBut.addEventListener("click", getUserData);
function getUserData() {
  fetch(`https://randomuser.me/api/?results=${numbOfTeamMember.value}`)
    .then(convertFromJson)
    .then(buildUser)
}

function convertFromJson(results) {
  return results.json()
}
function buildUser(userInfo) {
  userTarget.innerHTML = "";
  for (var i = 0; i < userInfo.results.length; i++) {
    userTarget.innerHTML += `
    <div class="infoBlock">
      <img src=${userInfo.results[i].picture.large}>
      <h3 class="name">${userInfo.results[i].name.title} ${userInfo.results[0].name.first} ${userInfo.results[i].name.last}</h3>
      <div class="contactInfo">
        <h4>Contact Info</h4>
        <p class="email">Email: ${userInfo.results[i].email}</p>
        <p class="phone">Phone: ${userInfo.results[i].phone}</p>
        <p class="cellPhone">Cell: ${userInfo.results[i].cell}</p>
        <p class="userName">Username: ${userInfo.results[i].login.username}</p>
      </div>
    </div>`
  }
}
