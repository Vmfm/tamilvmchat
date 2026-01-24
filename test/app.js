let myId = localStorage.getItem("uid");

if (!myId) {
  myId = Date.now().toString();
  localStorage.setItem("uid", myId);
}

function login() {
  const name = nameInput.value;
  const age = ageInput.value;
  const gender = gender.value;

  db.ref("users/" + myId).set({
    name, age, gender,
    online: true
  });

  location.href = "app.html";
}

// Load users
if (location.pathname.includes("app.html")) {
  db.ref("users").on("value", snap => {
    users.innerHTML = "";
    snap.forEach(u => {
      if (u.key !== myId) {
        users.innerHTML += `
          <div class="card" onclick="openChat('${u.key}','${u.val().name}')">
            ${u.val().name}
            <span class="${u.val().online?'on':'off'}"></span>
          </div>`;
      }
    });
  });
}

let chatUser = "";

function openChat(id, name) {
  chatUser = id;
  chatName.innerText = name;
}

function sendMsg() {
  db.ref("chats/" + myId + "/" + chatUser).push({
    from: myId,
    msg: msg.value
  });
  msg.value = "";
}
