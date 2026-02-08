document.getElementById("donateBtn").addEventListener("click", () => alert("Thank you! 🐶🐱"));

document.getElementById('regForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msgBox = document.getElementById('msg');

    // Is IP ko apni Backend Service ki External IP se replace karein
    const BACKEND_URL = "http://40.81.248.103"; 

    msgBox.innerText = "Connecting...";
    try {
        const res = await fetch(`${BACKEND_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        const data = await res.json();
        msgBox.innerText = data.message;
        msgBox.style.color = "green";
    } catch (err) {
        msgBox.innerText = "Error connecting to backend";
        msgBox.style.color = "red";
    }
});
