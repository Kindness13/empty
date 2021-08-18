const myName = () => {
    return "Avwata Yoma Kindness";
}
const span = document.createElement("span");
span.style.color = 'Red';
span.style.fontWeight = 'bold'
span.style.fontSize = '50px'
span. style. textShadow = '2px 2px 3px red';


span. innerText = myName()
document.body.append(span);
