
    const input = document.querySelector('form');
    const results = document.querySelector('#results');
    const historyLog = document.querySelector('#history-log');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    let isDarkMode = false;

    input.addEventListener('submit', function(event) {
        event.preventDefault();
        let height = parseFloat(document.querySelector('#height').value);
        let weight = parseFloat(document.querySelector('#weight').value);
        const heightUnit = document.querySelector('#height-unit').value;
        const weightUnit = document.querySelector('#weight-unit').value;

        if (heightUnit === 'in') height = height * 2.54;
        if (weightUnit === 'lb') weight = weight * 0.453592;

        if (height === '' || height <= 0 || isNaN(height)) {
            results.innerHTML = 'Please enter a valid height';
            results.style.opacity = 1;
            results.className = '';
        } else if (weight === '' || weight <= 0 || isNaN(weight)) {
            results.innerHTML = 'Please enter a valid weight';
            results.style.opacity = 1;
            results.className = '';
        } else {
            const bmi = (weight / (height * height) * 10000).toFixed(2);
            let resultClass = '';
            let resultText = '';

            if (bmi < 18.6) {
                resultClass = 'result-low';
                resultText = `Your BMI is ${bmi} (Underweight)`;
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                resultClass = 'result-normal';
                resultText = `Your BMI is ${bmi} (Normal)`;
            } else {
                resultClass = 'result-high';
                resultText = `Your BMI is ${bmi} (Overweight)`;
            }

            results.innerHTML = resultText;
            results.className = resultClass;
            results.style.opacity = 1;

            // Log calculation to history
            const logEntry = document.createElement('p');
            logEntry.textContent = resultText;
            historyLog.insertBefore(logEntry, historyLog.firstChild);

            // Clear form inputs
            document.getElementById('bmi-form').reset();

            // Scroll to results
            results.scrollIntoView({ behavior: 'smooth' });
            }
            });

            darkModeToggle.addEventListener('click', function() {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode', isDarkMode);
            });

            clearHistoryBtn.addEventListener('click', function() {
            historyLog.innerHTML = '';
    });