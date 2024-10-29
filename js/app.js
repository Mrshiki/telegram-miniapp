document.addEventListener("DOMContentLoaded", function () {
    const tg = window.Telegram ? window.Telegram.WebApp : null;
    console.log('App started');

    if (tg) {
        console.log("Telegram Web App API loaded.");
        tg.ready();

        const user = tg.initDataUnsafe.user;

        if (user) {
            console.log("User data found:", user);
            document.getElementById("user-info").innerText = `Hello, ${user.first_name}!`;
        } else {
            console.warn("No user data found in initDataUnsafe.");
            document.getElementById("user-info").innerText = "User data not available.";
        }

        document.getElementById('notify-btn').addEventListener("click", function () {
            console.log("Notify button clicked");
            tg.sendData(JSON.stringify({ message: 'User wants notifications!' }));
        });
    } else {
        console.warn("Telegram Web App API not found. Make sure to test inside Telegram.");
        document.getElementById("user-info").innerText = `Hello, test user! (Not in Telegram)`;
    }
});
