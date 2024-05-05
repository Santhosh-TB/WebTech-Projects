
var l_div = document.getElementById("login_div")
var s_div = document.getElementById("signup_div")

var butone = document.getElementById("butone")
var buttwo = document.getElementById("buttwo")

var imgg = document.getElementById("imgg")

var hone = document.getElementById("h1")

function login()
{
    hone.style.display = "none"
    butone.style.display = "none"
    buttwo.style.display = "none"

    imgg.style.width = "8%"
    imgg.style.top = "110px"
    imgg.style.left = "690px"

    if(s_div.style.display == "block")
    {
    s_div.style.display = "none"

    l_div.style.display = "block"
    }
    else
    {
    l_div.style.display = "block"
    }    
}


function signup()
{
    hone.style.display = "none"
    butone.style.display = "none"
    buttwo.style.display = "none"

    imgg.style.width = "8%"
    imgg.style.top = "110px"
    imgg.style.left = "690px"


    if(l_div.style.display == "block")
    {
    l_div.style.display = "none"

    s_div.style.display = "block"
    }

    else
    {
    s_div.style.display = "block"
    }
}



function cancel()
{
    s_div.style.display = "none"

    l_div.style.display = "none"

    hone.style.display = "block"
    hone.style.top = "400px"
    hone.style.left = "550px"
    hone.textContent = "Your Operation is Cancelled..."
    hone.style.color = "red"

    butone.style.display = "block"
    butone.style.marginTop = "400px" 
    butone.style.marginLeft = "90px"
    buttwo.style.display = "block"
    buttwo.style.marginTop = "-40px"
    buttwo.style.marginLeft = "250px"


    imgg.style.width = "10%"
    imgg.style.top = "220px"
    imgg.style.left = "670px"
}


function submit()
{
    s_div.style.display = "none"

    l_div.style.display = "none"

    hone.style.display = "block"
    hone.style.top = "400px"
    hone.style.left = "550px"
    hone.textContent = "Details submitted successfully.."
    hone.style.color = "green"

    butone.style.display = "block"
    butone.style.marginTop = "400px" 
    butone.style.marginLeft = "90px"
    buttwo.style.display = "block"
    buttwo.style.marginTop = "-40px"
    buttwo.style.marginLeft = "250px"


    imgg.style.width = "10%"
    imgg.style.top = "220px"
    imgg.style.left = "670px"
}