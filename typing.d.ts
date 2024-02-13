interface ICurrentWeather{
    dt: number,
    main: [
        temp:{
            number
        }
    ],
    weather:[
        {
            main: string,
            desc: string,
        }
    ],
    wind:{
        speed: number,
    }
    name: string
}

interface ICurrentForecast{
    list: [
        main:{
            temp: number,
        }
    ],
    weather: [
        {
            main: string,
            desc: string,
        }
    ],
    wind: {
        speed: number
    }
    date: number
}