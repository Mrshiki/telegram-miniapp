document.addEventListener("DOMContentLoaded", function () {
    const tg = window.Telegram.WebApp;
    console.log('start')
    tg.ready();

    const user = tg.initDataUnsafe.user;
    document.getElementById("user-info").innerText = `Hello, ${user.first_name}!`;

    document.getElementById('notify-btn').addEventListener("click", function () {
        tg.sendData(JSON.stringify({ message: 'User wants notifications!' }))
    })
})
