// function to Calculate the daily calories need for male and female 
export const dailyNeed = (e, weight, height, age, activityRef, setCalorieNeeded, setMinProtienNeeded, setMaxProtienNeeded, isMale) => {
    e.preventDefault();

    let cal;
    let protMin;
    let protMax;

    if (isMale) {
        cal = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * activityRef.current.value;
        protMin = Math.round(cal * 10 / 400);
        protMax = Math.round(cal * 35 / 400);
    }
    else {

        cal = (447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age)) * activityRef.current.value;
        const womenInfo = document.querySelector('input[name="women-info"]:checked').value;
        console.log(womenInfo)
        if(womenInfo == "pregnent"){
            protMin = Math.round((cal*10/400) + 23)
            protMax = Math.round((cal*35/400) + 23)
            cal += 400
        }
        else if(womenInfo == "lactating"){
            protMin = Math.round((cal*10/400) + 19)
            protMax = Math.round((cal*35/400) + 19)
            cal += 600
        }
        else{
            protMin = Math.round(cal * 10 / 400);
            protMax = Math.round(cal * 35 / 400);
        }
        
    }
    setCalorieNeeded(Math.round(cal));
    setMinProtienNeeded(protMin)
    setMaxProtienNeeded(protMax)

}