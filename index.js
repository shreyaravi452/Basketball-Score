let counthome = 0
let countguest = 0

function add1Home() {
    counthome+=1
    document.getElementById("hs").textContent = counthome
    comparescore()
}
function add2Home() {
    counthome+=2
    document.getElementById("hs").textContent = counthome
    comparescore()
}
function add3Home() {
    counthome+=3
    document.getElementById("hs").textContent = counthome
    comparescore()
}

function add1Guest() {
    countguest+=1
    document.getElementById("gs").textContent = countguest
    comparescore()
}
function add2Guest() {
    countguest+=2
    document.getElementById("gs").textContent = countguest
    comparescore()
}
function add3Guest() {
    countguest+=3
    document.getElementById("gs").textContent = countguest
    comparescore()
}

function newGame() {
    location.reload()
}

function comparescore() {
    if(counthome>countguest)
    {
        document.getElementById("hs").style.color = 'orange'
        document.getElementById("gs").style.color = 'black'
    }
    else if(countguest>counthome)
    {
        document.getElementById("hs").style.color = 'black'
        document.getElementById("gs").style.color = 'orange'
    }
    else
    {
        document.getElementById("hs").style.color = 'black'
        document.getElementById("gs").style.color = 'black'
    }
}