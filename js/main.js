//Write your pseduo code first! 
document.querySelector('#converter').addEventListener('click', convert)

function convert(){
    const temperature = parseInt(document.querySelector('#temperature').value)
    const convertedValue = (temperature-32)*5/9;;

    console.log(convertedValue)
    document.querySelector('#result').innerText = convertedValue
}