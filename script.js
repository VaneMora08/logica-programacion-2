function convertTemperature() {

    let celsius = document.getElementById('celsius').value;
    
   
    if (isNaN(celsius) || celsius === '') {
        alert("Por favor ingrese un número válido.");
        return;
    }
    
 
    celsius = parseFloat(celsius);
    
    // Convertir de Celsius a Fahrenheit y Kelvin
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    
    document.getElementById('result').innerHTML = 
        `Grados Kelvin: ${kelvin.toFixed(2)}<br>` +
        `Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
}
