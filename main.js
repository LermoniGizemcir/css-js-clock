setInterval(function () {
    const currentDate = new Date();

    // zaman değerlerini al
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    // alınan zamanın derece karşılığını hesapla
    const hourAngle  = hour * (360 / 12) + 90;
    const minuteAngle = minute * (360 / 60) + 90;
    const secondAngle = second * (360 / 60) + 90;

    // hesaplanan derece kadar döndür
    document.getElementsByClassName("hour-hand")[0].style.transform = `rotate(${hourAngle}deg)`
    document.getElementsByClassName("min-hand")[0].style.transform = `rotate(${minuteAngle}deg)`
    document.getElementsByClassName("second-hand")[0].style.transform = `rotate(${secondAngle}deg)`

}, 1000) // 1 saniyede 1 çalıştır.