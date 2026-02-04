const profiles = [
  {
    name: "Anu",
    age: 23,
    gender: "Female",
    img: "https://i.pravatar.cc/300?img=47"
  },
  {
    name: "Karthik",
    age: 26,
    gender: "Male",
    img: "https://i.pravatar.cc/300?img=12"
  },
  {
    name: "Priya",
    age: 22,
    gender: "Female",
    img: "https://i.pravatar.cc/300?img=32"
  }
];

let index = 0;

function loadProfile() {
  if (index >= profiles.length) {
    document.getElementById("status").innerText = "No more profiles 😅";
    return;
  }

  const p = profiles[index];
  document.getElementById("profileImg").src = p.img;
  document.getElementById("name").innerText = p.name;
  document.getElementById("ageGender").innerText = `${p.age} • ${p.gender}`;
}

function like() {
  document.getElementById("status").innerText = "❤️ It's a Match!";
  index++;
  setTimeout(loadProfile, 800);
}

function dislike() {
  document.getElementById("status").innerText = "❌ Skipped";
  index++;
  setTimeout(loadProfile, 500);
}

loadProfile();
