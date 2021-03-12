

const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_num=document.getElementById("temp_num");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector(".middle_layer")


const getInfo =async(event)=>{
    event.preventDefault();
    //alert('hii');
    let cityVal=cityName.value;
    if(cityVal ==""){
        city_name.innerText="Plz enter the city name before search";
        datahide.classList.add("data_hidden");

    }
    else{
        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3a41da93bd091afab19233d92d639244`;
        const response= await fetch(url);
        const data= await response.json();
        const arrData=[data];
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_num.innerText=arrData[0].main.temp;
        const tempMood=arrData[0].weather[0].main;
        
        if(tempMood=="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
        }
        else if(tempMood=="Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#blue;'></i>"
        }
        else if(tempMood=="Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be';></i>"
        }
        else if(tempMood=="Haze"){
            temp_status.innerHTML="<i class='fas fa-smog' style='color:#f1f2f6';></i>"
        }
        else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"

        }
        datahide.classList.remove("data_hidden");



        }catch{
            city_name.innerText="Plz enter the city name properly";
            datahide.classList.add("data_hidden");
        }
    }
}
submitBtn.addEventListener('click',getInfo);