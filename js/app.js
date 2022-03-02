const apiKey = `7d7a2c949d7c25f04b8d60f7b30cf4e1`
const searceTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparacer(data))
}

const setInnerText = (id, text) => {
    console.log(id, text)
    document.getElementById(id).innerText = text;

}

const displayTemparacer = temparacer => {
    setInnerText('city', temparacer.name);
    setInnerText('temperature', temparacer.main.temp);
    setInnerText('condetion', temparacer.weather[0].main);

    const url = `http://openweathermap.org/img/wn/${temparacer.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('wether-icon');
    imgIcon.setAttribute('src', url)

    console.log(temparacer)
}