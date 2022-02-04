import React from 'react';

import day from '../icons/weathericon/01d.svg';
import cloud1 from '../icons/weathericon/02d.svg';
import cloud3 from '../icons/weathericon/03d.svg';
import cloud from '../icons/weathericon/04d.svg';
import rainy6 from '../icons/weathericon/09d.svg';
import rainy1 from '../icons/weathericon/10d.svg';
import thunder from '../icons/weathericon/11d.svg';
import snowy from '../icons/weathericon/13d.svg';

const iconDictionary = {"01":day,"02":cloud1,"03":cloud3,"04":cloud,"09":rainy6,"10":rainy1,"11":thunder,"13":snowy};

export default function WeatherIcon(i) {
    return (
        <img src={iconDictionary[(i.icon).substring(0,2)]} className="h-full" alt={i.main}/>
    );
}