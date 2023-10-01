const Icons = (icon)=>{

    switch (icon) {

        case 'Thunderstorm':
            return icon= '../../public/Icons/thunderstorms-rain.svg'
            break;
        case 'Clear':
            return icon= '../../public/Icons/clear-day.svg'
            break;
        case 'Clouds':
            return icon= '../../public/Icons/fog.svg'
            break;
        case 'Fog':
            return icon= '../../public/Icons/fog.svg'
            break;
        case 'Haze':
            return icon= '../../public/Icons/haze.svg'
            break;
        case 'Smoke':
            return icon= '../../public/Icons/smoke.svg'
            break;
    
        default:
            break;
    }

    return icon
}

export default Icons