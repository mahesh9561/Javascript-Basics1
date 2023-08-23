const form = document.querySelector('form');


form.addEventListener('submit', function(e) {

    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('.result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please prvide valid Value of height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please prvide valid Value of weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6 ){
            result.innerHTML += `<p>Under Weight = Less Than 18.6</p>`
        }
        else if(bmi >= 18.7 && bmi <= 25){  
            result.innerHTML += `<p>Normal Range (Ideal) = Between 18.7 and Under 25</p>`
        }
        else if(bmi > 25 ){
            result.innerHTML += `<p>Over Weight = Greater than or equal to 25</p>`
        }
    }
});