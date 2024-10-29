document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        console.log('Telegram Web App API найден и инициализирован');

        tg.ready();

        const user = tg.initDataUnsafe ? tg.initDataUnsafe.user : null;
        if (user) {
            document.getElementById("user-info").innerText = `Hello, ${user.first_name}!`;
            console.log("User info:", user);
        } else {
            document.getElementById("user-info").innerText = "User data not available.";
            console.warn("Пользовательские данные отсутствуют.");
        }

        document.getElementById('notify-btn').addEventListener("click", function () {
            console.log("Notify button clicked");
            tg.sendData(JSON.stringify({ message: 'User wants notifications!' }));
        });
    } else {
        console.warn("Telegram Web App API не найден. Убедитесь, что вы тестируете внутри Telegram..");
        document.getElementById("user-info").innerText = `Hello, test user! (Not in Telegram)`;
    }
});
