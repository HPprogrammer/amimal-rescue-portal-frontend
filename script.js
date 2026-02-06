document.getElementById('regForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Is URL ko Azure Backend deploy hone ke baad update karna
    const BACKEND_URL = "http://<YOUR_AZURE_BACKEND_IP_OR_DNS>:3000";

    try {
        const res = await fetch(`${BACKEND_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        const data = await res.json();
        document.getElementById('msg').innerText = data.message;
    } catch (err) {
        document.getElementById('msg').innerText = "Error connecting to backend";
    }
});
