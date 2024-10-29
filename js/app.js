document.addEventListener("DOMContentLoaded", function () {
    const tg = window.Telegram.WebApp; // Убедитесь, что это правильно
    console.log('App started');

    tg.ready(); // Убедитесь, что API готово к работе

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
});
