var ul = document.createElement("ul")
document.body.append(ul)

var li1 = document.createElement("li")
li1.textContent = "Home"
ul.append(li1)

var li2 = document.createElement("li")
li2.textContent = "Review"
ul.append(li2)

var li3 = document.createElement("li")
li3.textContent = "Order"
ul.append(li3)

ul.style.display ="flex"

li1.style.marginRight = "50px"

li2.style.marginRight = "50px"

var newH1 = document.createElement("h1")
newH1.textContent = "JS website"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "This is a litte mini paragraph for my webiste, I will be listing different fruit below."
document.body.append(newP)

var ol = document.createElement("ol")
document.body.append(ol)

var li1 = document.createElement("li")
li1.textContent = "Pineapple"
ol.append(li1)

var li2 = document.createElement("li")
li2.textContent = "Kiwis"
ol.append(li2)

var li3 = document.createElement("li")
li3.textContent = "Grapes"
ol.append(li3)

var newFooter = document.createElement("footer")
newFooter.textContent = "This is my Footer"
document.body.append(newFooter)

