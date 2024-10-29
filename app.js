document.addEventListener("DOMContentLoaded", function () {
    const tg = window.Telegram ? window.Telegram.WebApp : null;
    console.log('App started');

    if (tg) {
        tg.ready();
        const user = tg.initDataUnsafe.user;
        document.getElementById("user-info").innerText = `Hello, ${user.first_name}!`;

        document.getElementById('notify-btn').addEventListener("click", function () {
            tg.sendData(JSON.stringify({ message: 'User wants notifications!' }));
        });
    } else {
        console.warn("Telegram Web App API not found. Make sure to test inside Telegram.");
        document.getElementById("user-info").innerText = `Hello, test user! (Not in Telegram)`;
    }
});
