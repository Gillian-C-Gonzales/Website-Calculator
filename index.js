plus = document.getElementById('plus');
minus = document.getElementById('minus');
multiply = document.getElementById('multiply');
divide = document.getElementById('divide');

plus.addEventListener('click', () => {
    const added = parseInt(document.getElementById("value1").value) + parseInt(document.getElementById("value2").value);
    document.getElementById("result").innerHTML = added;
});

minus.addEventListener('click', () => {
    const subbed = parseInt(document.getElementById("value1").value) - parseInt(document.getElementById("value2").value);
    document.getElementById("result").innerHTML = subbed;
});

multiply.addEventListener('click', () => {
    const timesed = parseInt(document.getElementById("value1").value) * parseInt(document.getElementById("value2").value);
    document.getElementById("result").innerHTML = timesed;
});


divide.addEventListener('click', () => {
    const slashed = parseFloat(document.getElementById("value1").value) / parseFloat(document.getElementById("value2").value);
    document.getElementById("result").innerHTML = slashed;
});


