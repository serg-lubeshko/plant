const time = document.querySelector('.time');
const date_selector = document.querySelector('.date')
const name_selector = document.querySelector('.name')
const date = new Date();

function getTimeOfDay() {

    const currentHour = Number(date.getHours())
    console.log(typeof currentHour)
    if (6 <= currentHour && currentHour < 12) {
        name_selector.value = 'Доброе утро '
    } else if (12 <= currentHour && currentHour < 18) {
        name_selector.value = `Добрый день `
    } else if (18 <= currentHour && currentHour < 24) {
        console.log('hre')
        name_selector.value = `Добрый вечер `
    } else {
        name_selector.value = `Спокойной ночи `
        name_selector.placeholder = 'Нужный текст';

    }

    // console.log('huo')
}


function showDate() {
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'Europe/Minsk'};
    const currentDate = date.toLocaleDateString('br-Br', options);
    date_selector.textContent = currentDate
}


function showTime() {
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    setTimeout(showDate, 1000);
    setTimeout(getTimeOfDay, 1000);
}

showTime();
