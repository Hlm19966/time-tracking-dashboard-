let globalData = [];

fetch('./data.json').then(response => {
    if (!response.ok) {
    throw new Error ('Erorr fetching JSON');
    }
    return response.json();
})
.then(data => {
    console.log(data);
    globalData = data;
})
.catch(error => {
    console.error('Erorr:', error);
});


function displayData(data, timeframes) {
    const hours = document.querySelectorAll(".hours");
    const previousHours = document.querySelectorAll(".previous-hours");
    data.forEach((item, index) => {
    console.log(item.timeframes.daily.current);
    console.log(item.timeframes.weekly.current);

    hours[index].innerHTML = `${item.timeframes[timeframes].current}hrs`;
    previousHours[index].innerHTML = item.timeframes[timeframes].previous;
});
  
}


document.getElementById("daily").addEventListener("click", () => displayData(globalData, 'daily'));
document.getElementById("weekly").addEventListener("click", () => displayData(globalData, 'weekly'));
document.getElementById("monthly").addEventListener("click", () => displayData(globalData, 'monthly'));


