
const subjects = ["Math", "Science", "English", "Social Studies", "Punjabi"];
function loadProgress() {
  const tableBody = document.querySelector("#progressTable tbody");
  tableBody.innerHTML = "";

  subjects.forEach(sub => {
    const key = `progress_${sub.toLowerCase()}`;
    const data = JSON.parse(localStorage.getItem(key)) || {
      level: 1,
      score: 0
    };
    let status = data.score >= 70 ? "✅ Passed" : "⏳ Keep Trying";

    const row = `
      <tr>
        <td>${sub}</td>
        <td>Level ${data.level}</td>
        <td>${data.score}%</td>
        <td>${status}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}
window.onload = loadProgress;
