
function startCountdown() {
    var interval = 10 * 60 * 60 * 1000; // 10 часов в миллисекундах

    function updateCountdown() {
        var currentTime = Date.now(); // Текущее время в миллисекундах
        var startTime = Math.floor(currentTime / interval) * interval; // Время начала текущего интервала

        var elapsedTime = currentTime - startTime; // Прошедшее время с момента начала текущего интервала
        var remainingTime = interval - elapsedTime; // Оставшееся время текущего интервала

        var hours = Math.floor(remainingTime / (60 * 60 * 1000)); // Оставшиеся часы
        var minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000)); // Оставшиеся минуты
        var seconds = Math.floor((remainingTime % (60 * 1000)) / 1000); // Оставшиеся секунды

        var formattedHours = hours < 10 ? "0" + hours : hours;
        var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelectorAll('#timerHour1').forEach(function (el) {
            $(el).text(formattedHours.toString()[0]);
        });
        document.querySelectorAll('#timerMinute1').forEach(function (el) {
            $(el).text(formattedMinutes.toString()[0]);
        });
        document.querySelectorAll('#timerSecond1').forEach(function (el) {
            $(el).text(formattedSeconds.toString()[0]);
        });
        document.querySelectorAll('#timerHour2').forEach(function (el) {
            $(el).text(formattedHours.toString()[1]);
        });
        document.querySelectorAll('#timerMinute2').forEach(function (el) {
            $(el).text(formattedMinutes.toString()[1]);
        });
        document.querySelectorAll('#timerSecond2').forEach(function (el) {
            $(el).text(formattedSeconds.toString()[1]);
        });
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);
}

startCountdown();

if (localStorage.getItem('numberOfOrders')) {

} else {
    localStorage.setItem('numberOfOrders', 36)
}

document.querySelectorAll('#numOfOrders').forEach(el => {
    $(el).text(localStorage.getItem('numberOfOrders'));
});

$('.numOfOrders')
$('.form').on('submit', (e) => {

    let a = localStorage.getItem('numberOfOrders');
    localStorage.setItem('numberOfOrders', a - 1);
    document.querySelectorAll('#numOfOrders').forEach(el => {
        $(el).text(localStorage.getItem('numberOfOrders'));
    });
    window.location = 'redirect.php';

})
$('.colors__gallery').slick();