export default function getHumidityText(humidity) {
    
        if (humidity< 20) {return "Very dry"}
        else if (humidity<40) {return "Dry"}
        else if (humidity<60) {return "Comfortable"}
        else if (humidity<80) {return "Humid"}
        else if (humidity<100) { return "Very humid"}
}