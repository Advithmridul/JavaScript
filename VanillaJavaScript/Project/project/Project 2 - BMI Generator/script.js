const form = document.querySelector('form');
/* const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 This useCase will give you empty value.
*/

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const weightGuide = document.querySelector('#weight-guide');

    // Validate height and weight
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height: ${height}`;
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight: ${weight}`;
        return;
    }
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Determine BMI category
    let message = '';
    if (bmi > 24.9) {
        message = `${bmi} <br>  Overweight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message = `${bmi} <br> Normal Range`;
    } else {
        message = `${bmi} <br>  Underweight`;
    }

    results.innerHTML = `<span>${message}</span>`;

    // Hide the weight guide after displaying the result
    weightGuide.style.display = 'none';

})