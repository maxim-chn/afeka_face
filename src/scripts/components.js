function userHome(user_id) {
  let payload = credentials_container.get();
  let xhr = new XMLHttpRequest();
  xhr.open("POST", `/users/${user_id}`, true);
  xhr.setRequestHeader("Content-Type", "application/text");
  xhr.onload = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          let response = JSON.parse(xhr.responseText);
          console.error(response["reason"]);
          alert(response["message"]);
        } catch(err) {
          console.log("TUPAYA PIZDA");
          document.getElementById("application").innerHTML = xhr.responseText;
          handleFilterUsersInput();
          return;
        }
      } else {
        console.error(xhr.statusText);
      }
      window.location.href = "http://localhost:8000/";
    }
  };
  xhr.onerror = function(e) {
    console.error(xhr.statusText);
    window.location.href = "http://localhost:8000/";
  };
  xhr.send(payload);
}

function userFriend(user_id, friend_id) {
  let payload = credentials_container.get();
  let xhr = new XMLHttpRequest();
  xhr.open("POST", `/users/${user_id}/friends/${friend_id}`, true);
  xhr.setRequestHeader("Content-Type", "application/text");
  xhr.onload = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          let response = JSON.parse(xhr.responseText);
          console.error(response["reason"]);
          alert(response["message"]);
        } catch(err) {
          document.getElementById("application").innerHTML = xhr.responseText;
          return;
        }
      } else {
        console.error(xhr.statusText);
      }
      window.location.href = "http://localhost:8000/";
    }
  };
  xhr.onerror = function(e) {
    console.error(xhr.statusText);
    window.location.href = "http://localhost:8000/";
  };
  xhr.send(payload);
}