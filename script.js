let reportCount = 5;

function checkAccount() {

    let username = document.getElementById("username").value.toLowerCase();
    let risk = 0;

    // 📢 Report count logic
    if (reportCount >= 5) risk += 40;

    // 🔤 Username pattern checks
    if (username.includes("fake")) risk += 40;
    if (/\d{4,}/.test(username)) risk += 20; // many numbers
    if (/^[a-z0-9]{8,}$/.test(username)) risk += 20; // random pattern

    // ⚠️ bot-like pattern
    if (username.includes("_") && username.length > 10) {
        risk += 20;
    }

    let result = document.getElementById("result");

    if (risk >= 60) {
        reportCount++;

        result.innerHTML = `
        🔴 FAKE ACCOUNT DETECTED <br>
        ⚠️ Warning sent to followers <br>
        📢 Report Count: ${reportCount}
        `;
        result.style.color = "red";
    } else {
        result.innerHTML = `
        💗 REAL ACCOUNT <br>
        ✅ Safe to interact <br>
        📢 Report Count: ${reportCount}
        `;
        result.style.color = "hotpink";
    }
}