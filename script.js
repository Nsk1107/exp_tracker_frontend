const API_URL = "https://gsheet-cloud-function-998351082727.asia-southeast1.run.app/";
const API_KEY = "nandika1234@gsheetaccess";

document.getElementById("txnForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        account: document.getElementById("account").value,
        category: document.getElementById("category").value,
        abs_amount: document.getElementById("amount").value,
        new_date: document.getElementById("date").value,
        type: document.getElementById("type").value,
        note: document.getElementById("note").value
    };

    const msg = document.getElementById("msg");

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY
            },
            body: JSON.stringify(data)
        });

        const json = await res.json();

        msg.style.display = "block";
        msg.style.background = "#4CAF50";
        msg.textContent = json.message;

        setTimeout(() => msg.style.display = "none", 3000);

        // Reset form
        document.getElementById("txnForm").reset();

    } catch (err) {
        msg.style.display = "block";
        msg.style.background = "red";
        msg.textContent = "Error sending data!";
        console.error(err);
    }
});
