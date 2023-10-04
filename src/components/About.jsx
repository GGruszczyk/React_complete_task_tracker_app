import { Outlet } from 'react-router-dom';
import './About.css'
import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch('https://api.weatherbit.io/v2.0/current?city=San%20Francisco&key=b50cc97c07b2477f9a5a3318e833b43c'); //la url de la api dura 15dias ,cambia la llave
        const data = await response.json();
        setTemperature(data.data[0].temp);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching temperature', error);
      }
    };

    fetchTemperature();
  }, []);

  return (
    <div className='about-container'>
      <h2>About Our Services</h2>
      <p>We are here to provide you with a simple task tracker app to help you stay organized and manage your tasks efficiently.</p>
      
      <div className='temperature-section'>
        <h3>Current Temperature</h3>
        {loading ? "Loading..." : <span>{temperature}°C</span>}
      </div>
    
      <Outlet />
    </div>
  );
}

export default AboutPage;