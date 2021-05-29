const city = document.getElementById("city");
// const submit = document.getElementById("search");
const des = document.getElementById("des");
const tempr = document.getElementById("temp");
const name = document.getElementById("name");
// submit.addEventListener("click", () => { run() })
city.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        run();
     
    }
  });

function run()
{
    if (city.value == " ")
        {alert("incorrect city");}

  else  {fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=3fc1d8765ab378e4cd5b935e8f87f1ca')
        .then(response => response.json())
        .then(data =>  {
            
            var temp = data['main']['temp'];
            var namecity = data['name']+","+data['sys']["country"];
            var desc = data['weather'][0]['description'];
            temp = Math.round(temp - 273.15);
            
            
            tempr.innerHTML = temp+"°C";
            name.innerHTML = namecity;
            des.innerHTML = desc;
            city.value = "";
            console.log(data)
            
        
        })}
        

}



