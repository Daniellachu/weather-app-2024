export default function WeatherContainer(
    props: {data: ICurrentWeather[] }
) {
    if(!props.data?.length){
        return(
            <div>
                <h1>We couldn't find any weather data for you :(</h1>
            </div>
        );
    }

    return(
        <>
            {
                props.data && props.data.map(({
                    name,
                    dt,
                    main,
                    weather,
                    wind,

                } : ICurrentWeather,index:number) =>{
                    return(
                        <div key={index} style={{margin:'15px'}}>
                            <p>
                                the current weather at {name} is {weather[0].main}
                            </p>
                            {weather[0].desc}
                            {wind.speed}
                            {name}
                            <p>Weather last updated on {dt}</p>
                        </div>
                    )
                })
            }
        </>
    )
}