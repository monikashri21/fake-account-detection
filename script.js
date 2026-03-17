let reportCount = 5;

function checkAccount() {

    let followers = document.getElementById("followers").value;
    let age = document.getElementById("age").value;
    let bio = document.getElementById("bio").value;

    let risk = 0;

    if (followers < 50) risk += 40;
    if (age < 3) risk += 30;
    if (bio.length < 10) risk += 30;

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
        🟢 REAL ACCOUNT <br>
        ✅ Safe to interact <br>
        📢 Report Count: ${reportCount}
        `;
        result.style.color = "#00ff6a";
    }
}