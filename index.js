plus = document.getElementById('plus');

plus.addEventListener('click', () => {
    const added = parseInt(document.getElementById("value1").value) + parseInt(document.getElementById("value2").value);
    document.getElementById("result").innerHTML = added;
});
