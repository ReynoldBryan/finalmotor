
function generator()
{
    var x = Math.floor(Math.random() *256) +1;
    var y = Math.floor(Math.random() *256) +1;
    var z = Math.floor(Math.random() *256) +1;
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var motor = document.querySelector("#motor");
    motor.style.backgroundColor = bgColor;
}

function paint()
{
    var motor = document.querySelector("#motor");
    var colorSelect = document.getElementById("colorSelect").value;

    if (colorSelect === "Red")
    {
        motor.style.backgroundColor = "Red";
    }
    else if (colorSelect === "Blue")
    {
        motor.style.backgroundColor = "Blue";
    }
    else if (colorSelect === "Green")
    {
        motor.style.backgroundColor = "Green";
    }
    else if (colorSelect === "Yellow")
    {
        motor.style.backgroundColor = "Yellow";
    }
    else if (colorSelect === "Black")
    {
        motor.style.backgroundColor = "Black";
    }
    else if (colorSelect === "Pink")
    {
        motor.style.backgroundColor = "Pink";
    }
    else if (colorSelect === "Grey")
    {
        motor.style.backgroundColor = "Grey";
    }
}

function reset()
{
    motor = document.querySelector("#motor");
    motor.style.backgroundColor = "white"
}

