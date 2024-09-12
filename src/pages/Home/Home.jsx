import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.style.css';
//images
import image_1 from '../../assets/image_1.png';
import image_2 from '../../assets/image_2.png';
//components
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';
import WeatherTable from '../../components/WeatherTable';
import SearchResultsList from '../../components/SearchResultsList';

function Home() {
    const [searchTextInput, setSearchTextInput] = useState("");
    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [tableData, setTableData] = useState();
    const [weatherCardData, setWeatherCardData] = useState();
    const [visibleNoDataImage, setVisibleNoDataImage] = useState(false);
    const [defaultDay, setDefaultDay] = useState();

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=59872d443cdf420d81a193646241109&q=${searchTextInput}&days=7&aqi=no&alerts=no`)
            setWeatherData(response.data)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (value) => {
        setSearchTextInput(value);
        fetchData();
        if (value === "")
            setWeatherData([]);
    }

    const onKeyDownHandler = (value) => {
        if (value === "Enter") {
            if (searchTextInput.toLowerCase() == weatherData?.location?.name.toLowerCase()) {
                setTableData(weatherData);
                setDefaultDay(weatherData.forecast.forecastday[0])
                setVisibleNoDataImage(false);
            }
            else {
                setTableData();
                setVisibleNoDataImage(true);
                setDefaultDay();
            }
            setWeatherData([]);
            setWeatherCardData();
        }
    }

    const handleClick = () => {
        setTableData(weatherData);
        setWeatherData([]);
        setWeatherCardData();
        setDefaultDay(weatherData.forecast.forecastday[0])
    }

    return (
        <div className='container'>
            {
                tableData ?
                    <WeatherTable tableData={tableData} setWeatherCardData={setWeatherCardData} setDefaultDay={setDefaultDay} />
                    :
                    (visibleNoDataImage ?
                        <img class="image" src={image_2} height="60%" width="50%" /> :
                        <img class="image" src={image_1} height="60%" width="50%" />
                    )
            }
            <div className='search-container'>
                <SearchBar searchTextInput={searchTextInput} handleChange={handleChange} onKeyDownHandler={onKeyDownHandler} />
                <SearchResultsList weatherData={weatherData} handleClick={handleClick} />
                <Card weatherCardData={weatherCardData} tableData={tableData} visibleNoDataImage={visibleNoDataImage} defaultDay={defaultDay} />
            </div>
        </div>
    )
}

export default Home;