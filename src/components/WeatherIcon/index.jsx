import React from 'react';
import { Image } from "semantic-ui-react";
import Overcast from '../../icons/overcast.svg';
import Rain from '../../icons/Rain.svg';
import Sunny from '../../icons/sunny.svg';
import Tornado from '../../icons/Tornado.svg';
import Cloudy from '../../icons/Partially_Cloudy.svg';
import Cloudy2 from '../../icons/cloudy2.svg';
import LightRain from '../../icons/Light_Rain.svg';
import Thunderstorm from '../../icons/Thunderstorm.svg';
import Mist from '../../icons/dust.svg';
import Snow from '../../icons/Snow.svg';

const WeatherIcon = ({icon, style}) => {
    switch (icon) {
        case '01d':
            return <Image style={style} src={Sunny} />;
        case '02d':
            return <Image style={style} src={Cloudy} />;
        case '03d':
            return <Image style={style} src={Overcast} />;
        case '04d':
            return <Image style={style} src={Cloudy2} />;
        case '09d':
            return <Image style={style} src={Rain} />;
        case '10d':
            return <Image style={style} src={LightRain} />;
        case '11d':
            return <Image style={style} src={Thunderstorm} />;
        case '13d':
            return <Image style={style} src={Snow} />;
        case '50d':
            return <Image style={style} src={Mist} />;
        case '01n':
            return <Image style={style} src={Sunny} />;
        case '02n':
            return <Image style={style} src={Cloudy} />;
        case '03n':
            return <Image style={style} src={Overcast} />;
        case '04n':
            return <Image style={style} src={Cloudy2} />;
        case '09n':
            return <Image style={style} src={Rain} />;
        case '10n':
            return <Image style={style} src={LightRain} />;
        case '11n':
            return <Image style={style} src={Thunderstorm} />;
        case '13n':
            return <Image style={style} src={Snow} />;
        case '50n':
            return <Image style={style} src={Mist} />;
        default: return <Image style={style} src={Tornado} />;
    }
};

export default WeatherIcon;
