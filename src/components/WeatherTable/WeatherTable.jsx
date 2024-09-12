import React from 'react';
import './WeatherTable.style.css';

function WeatherTable(props) {


    return (
        <div className='table-container'>
            <table>
                <tr>
                    <th colspan="4">{`Weather Forecast for ${props.tableData?.location?.name}`}</th>
                </tr>
                <tr>
                    <th>Days</th>
                    <th>Dates</th>
                    <th>Lowest Temp.</th>
                    <th>Highest Temp.</th>
                </tr>
                {props.tableData?.forecast?.forecastday.map((value) => {

                    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                    const date = new Date(value.date);
                    const dateTimeFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: 'long' });
                    const formatDate = dateTimeFormatter.format(date);
                    const stringDate = formatDate.substring(0, formatDate.indexOf(","));
                    let day = weekday[date.getDay()];

                    return (
                        <tr >
                            <td onClick={() => {
                                props.setWeatherCardData(value);
                                props.setDefaultDay();
                            }}>{day}</td>
                            <td>{formatDate}</td>
                            <td>{`${value.day.mintemp_c} °C`}</td>
                            <td>{`${value.day.maxtemp_c} °C`}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}

export default WeatherTable;