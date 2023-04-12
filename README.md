Weather in React

Goal

The goal is to create weather application with two input field where we could enter name of the city and name of the country and clicked submit to show weather for that city.

npm start

I created react app with name waether and started my project with npm start.

I created App file where I had import Weather file. Before that I created Weather file where I had form tag- inside that I had two input field one for city name and other for country name, both of them had value and onChange. I created state text for city and country, and I also had stete for weather. I created handlerChange function for changing name of the city and country name. In that file I also had button for submit, for that I created handleClick there we had if statement to check if it is name of this inputs empty, so if it is true we must see alert with text to add city or country. And in that function I had fecth api form openweather, with all params that are required.
I created DisplayWeather file where I had card with name of the city, name of the country, with time, temperature and description. I created a new file WeatherDetails where I had closer information about the weather. I had here higt/low, humidity, pressure, visibility on the left side and on the right side I had wind, wind direction, Ssunrise and sunset. That file I had import to DisplayWeather file.
