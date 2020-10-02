var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS Site"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "All of this was created in Javascript"
document.body.append(newP)

var ol = document.createElement("ol")
document.body.append(ol)

var li1 = document.createElement("li")
li1.textContent = "Red"
ol.append(li1)

var li2 = document.createElement("li")
li2.textContent = "White"
ol.append(li2)

var li3 = document.createElement("li")
li3.textContent = "Blue"
ol.append(li3)