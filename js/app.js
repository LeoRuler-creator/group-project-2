import { db } from "../firebase/firebase-config.js";
import { ref, push, update, remove, onValue }
  from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";

const volunteersRef = ref(db, "volunteers");
const form = document.getElementById("VolunteerForm");
const rows = document.getElementById("volunteerRows");
const ids = ["name", "email", "phone", "availability", "perferredRole", "status"];

let editingId = null;
let data = {};

// READ 
onValue(volunteersRef, (snapshot) => {
  data = snapshot.val() || {};
  rows.innerHTML = Object.entries(data).map(([key, v]) => `
    <tr>
      ${ids.map((id) => `<td>${v[id] ?? ""}</td>`).join("")}
      <td>
        <button class="btn btn-sm btn-warning" onclick="editVolunteer('${key}')">Edit</button> 
        <button class="btn btn-sm btn-danger" onclick="deleteVolunteer('${key}')">Delete</button>
      </td>
    </tr>`).join("");
});

// CREATE + UPDATE
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const v = {};
  ids.forEach((id) => (v[id] = document.getElementById(id).value));

  if (editingId) await update(ref(db, "volunteers/" + editingId), v);
  else await push(volunteersRef, v);

  editingId = null;
  form.reset();
});

window.editVolunteer = (key) => {
  editingId = key;
  ids.forEach((id) => (document.getElementById(id).value = data[key][id] ?? ""));
};

// DELETE
window.deleteVolunteer = (key) => remove(ref(db, "volunteers/" + key));
