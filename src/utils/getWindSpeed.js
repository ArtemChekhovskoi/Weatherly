export default function getWindSpeed(windSpeed, units) {
    const multiply = units === "metric" ? 1 : 2.23 
    
    if (windSpeed < (0.5*multiply)) {
        return "Calm"
    } else if(windSpeed < (1.5*multiply)) {
        return "Light air"
    } else if(windSpeed < (3.3*multiply)) {
        return "Light breeze"
    } else if(windSpeed < (5.5*multiply)) {
        return "Gentle breeze"
    } else if(windSpeed < (7.9*multiply)) {
        return "Moderate breeze"
    } else if(windSpeed <(10.7*multiply)) {
        return "Fresh breeze"
    } else if(windSpeed <(13.8*multiply)) {
        return "Strong breeze"
    } else if(windSpeed <(17.1*multiply)) {
        return "High wind"
    } else if(windSpeed <(20.7*multiply)) {
        return "Gale"
    } else if(windSpeed <(24.4*multiply)) {
        return "Severe gale"
    } else if(windSpeed <(28.4*multiply)) {
        return "Storm"
    } else if(windSpeed <(32.6*multiply)) {
        return "Violent storm"
    } else {
        return "Hurricane force"
    }
}