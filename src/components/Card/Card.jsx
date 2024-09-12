import React from 'react';
import './Card.style.css';

function Card({ weatherCardData, tableData, visibleNoDataImage, defaultDay }) {

    const setTime = (value) => {
        const date = new Date(value);
        const dateTimeFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: 'long' });
        const formatDate = dateTimeFormatter.format(date);
        const stringDate = formatDate.substring(0, formatDate.indexOf(","));
        return stringDate;
    }

    const setDay = (value) => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(value);
        let day = weekday[date.getDay()];
        return day;
    }

    return (
        <div className='card-container'>
            {defaultDay ?
                <div className=''>
                    <h1 className='value'>{`${defaultDay.day.avgtemp_c} °C`}</h1>
                    <h2 className='city'>{tableData?.location?.name}</h2>
                    <p>{`${setTime(defaultDay.date)}, ${setDay(defaultDay.date)}`}</p>
                    <div className='icon-container'>
                        <img src={defaultDay.day.condition.icon} alt="icon" className='icon'/>
                        <p className='text'> {defaultDay.day.condition.text} </p>
                    </div>
                </div> :
                weatherCardData ?
                    <div>
                        <h1 className='value'>{`${weatherCardData.day.avgtemp_c} °C`}</h1>
                        <h2 className='city'>{tableData.location.name}</h2>
                        <p>{`${setTime(weatherCardData.date)}, ${setDay(weatherCardData.date)}`}</p>
                        <div className='icon-container'>
                            <img src={weatherCardData.day.condition.icon} alt="icon" className='icon'/>
                            <p className='text'> {weatherCardData.day.condition.text} </p>
                        </div>
                    </div> :
                    (visibleNoDataImage ?
                        <div>
                            <h1>Does not Exist</h1>
                            <p>Type a valid city name to get weekly forecast data.</p>
                        </div>
                        :
                        <div>
                            <h1>Select a City</h1>
                            <p>Search and select a city to see results. Try typing the first letters of the city you want.</p>
                        </div>
                    )
            }
        </div>
    )
}

export default Card;