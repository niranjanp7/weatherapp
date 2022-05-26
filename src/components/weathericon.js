import React from 'react';

import day from '../icons/weathericon/01.svg';
import cloud1 from '../icons/weathericon/02.svg';
import cloud3 from '../icons/weathericon/03.svg';
import cloud from '../icons/weathericon/04.svg';
import rainy6 from '../icons/weathericon/09.svg';
import rainy1 from '../icons/weathericon/10.svg';
import thunder from '../icons/weathericon/11.svg';
import snowy from '../icons/weathericon/13.svg';
import haze from '../icons/weathericon/50.svg';

const iconDictionary = {"01":day,"02":cloud1,"03":cloud3,"04":cloud,"09":rainy6,"10":rainy1,"11":thunder,"13":snowy,"50":haze};

export default function WeatherIcon(i) {
    return (
        <img src={iconDictionary[(i.icon).substring(0,2)]} className="h-full" alt={i.main}/>
    );
}