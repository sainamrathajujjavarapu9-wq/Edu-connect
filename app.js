
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.error('Service Worker Registration Failed', err));
}


let db;
const request = indexedDB.open("EduAccessDB", 1);

request.onerror = () => {
  console.error("Database failed to open");
};

request.onsuccess = () => {
  db = request.result;
  console.log("Database opened successfully");
  if (document.getElementById('downloadsList')) {
    displayDownloads();
  }
};

request.onupgradeneeded = e => {
  db = e.target.result;
  db.createObjectStore("files", { keyPath: "name" });
  console.log("Database setup complete");
};

function downloadFile(filename, type) {
  fetch(`assets/${type}s/${filename}`)
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onload = () => {
        const data = reader.result;
        const transaction = db.transaction(["files"], "readwrite");
        const store = transaction.objectStore("files");
        store.put({ name: filename, content: data });
        alert(`${filename} downloaded and saved for offline access.`);
      };
      reader.readAsDataURL(blob);
    })
    .catch(err => {
      console.error("Download failed", err);
      alert("Failed to download file.");
    });
}


function displayDownloads() {
  const list = document.getElementById('downloadsList');
  const transaction = db.transaction(["files"], "readonly");
  const store = transaction.objectStore("files");
  store.openCursor().onsuccess = e => {
    const cursor = e.target.result;
    if (cursor) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${cursor.key}</strong> <button onclick="openFile('${cursor.key}')">Open</button>`;
      list.appendChild(li);
      cursor.continue();
    }
  };
}


function openFile(name) {
  const transaction = db.transaction(["files"], "readonly");
  const store = transaction.objectStore("files");
  const request = store.get(name);
  request.onsuccess = () => {
    const file = request.result;
    if(file) {
      const win = window.open();
      if(name.endsWith('.mp4')) {
        win.document.write(`<video controls autoplay width="400"><source src="${file.content}" type="video/mp4"></video>`);
      } else {
        win.document.write(`<iframe src="${file.content}" width="100%" height="600px"></iframe>`);
      }
    } else {
      alert("File not found.");
    }
  };
}
window.addEventListener('load',()=>{
  const studentData =localStorage.getItem('studentData');
  if(!studentData){
    window.location.href='login.html';
  }else{
    const student=JSON.parse(studentData);
    const title=document.getElementById('site Title');
    title.innerText='EduAccess-${student.name}';
  }
});
function logout(){
  localStorage.removeItem('studentData');
  window.location.href='login.html';
} 
   