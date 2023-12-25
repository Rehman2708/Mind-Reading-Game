//Array
var myArray = [];

const result = () => {
    var result = myArray.join("");
    switch (result) {
        case "123":
            resultValue = "  You Choose: Apple";
            resultImage = "./image/appleF.jpg";
            break;
        case "124":
            resultValue = "  You Choose: Banana";
            resultImage = "./image/banana.jpg";

            break;
        case "125":
            resultValue = "  You Choose: Mango";
            resultImage = "./image/mango.jpg";

            break;
        case "134":
            resultValue = "  You Choose: Strawberry";
            resultImage = "./image/berry.jpg";

            break;
        case "135":
            resultValue = "  You Choose: Litchi";
            resultImage = "./image/litchi.jpg";

            break;
        case "145":
            resultValue = "  You Choose: Chickoo";
            resultImage = "./image/chickoo.jpg";

            break;
        case "345":
            resultValue = "  You Choose: Orange";
            resultImage = "./image/orange.jpg";

            break;
        case "245":
            resultValue = "  You Choose: Kiwi";
            resultImage = "./image/kiwi.jpg";

            break;
        case "235":
            resultValue = "  You Choose: Pineapple";
            resultImage = "./image/pineapple.jpg";

            break;
        case "234":
            resultValue = "  You Choose: Watermelon";
            resultImage = "./image/melon.jpg";
            break;
        default:
            resultValue = "Oops! Not quite, but you're getting there. Try another one!";
            resultImage = "./image/error1.jpg";
    }
    document.getElementById("resultAnnounce").innerText = resultValue;
    document.getElementById("resultAnnounceImage").src = resultImage;

}
// Next buttons

document
    .getElementById("button1")
    .addEventListener("click", function () {
        document.getElementById("selectionPage").setAttribute("class", "hidden");
        document.getElementById("page1").setAttribute("class", "show");
    });
document
    .getElementById("button2")
    .addEventListener("click", function () {
        document.getElementById("page1").setAttribute("class", "hidden");
        document.getElementById("page2").setAttribute("class", "show");
        myArray.push(1);

    });

document
    .getElementById("button3")
    .addEventListener("click", function () {
        document.getElementById("page2").setAttribute("class", "hidden");
        document.getElementById("page3").setAttribute("class", "show");
        myArray.push(2);
    });
document
    .getElementById("button4")
    .addEventListener("click", function () {
        document.getElementById("page3").setAttribute("class", "hidden");
        document.getElementById("page4").setAttribute("class", "show");
        myArray.push(3);

    });
document
    .getElementById("button5")
    .addEventListener("click", function () {
        document.getElementById("page4").setAttribute("class", "hidden");
        document.getElementById("page5").setAttribute("class", "show");
        myArray.push(4);

    });
document
    .getElementById("button6")
    .addEventListener("click", function () {
        document.getElementById("page5").setAttribute("class", "hidden");
        document.getElementById("resultPage").setAttribute("class", "show");
        myArray.push(5);
        result();


    });
// Absent buttons

document
    .getElementById("absent1")
    .addEventListener("click", function () {
        document.getElementById("page1").setAttribute("class", "hidden");
        document.getElementById("page2").setAttribute("class", "show");
    });
document
    .getElementById("absent2")
    .addEventListener("click", function () {
        document.getElementById("page2").setAttribute("class", "hidden");
        document.getElementById("page3").setAttribute("class", "show");
    });
document
    .getElementById("absent3")
    .addEventListener("click", function () {
        document.getElementById("page3").setAttribute("class", "hidden");
        document.getElementById("page4").setAttribute("class", "show");
    });
document
    .getElementById("absent4")
    .addEventListener("click", function () {
        document.getElementById("page4").setAttribute("class", "hidden");
        document.getElementById("page5").setAttribute("class", "show");
    });
document
    .getElementById("absent5")
    .addEventListener("click", function () {
        document.getElementById("page5").setAttribute("class", "hidden");
        document.getElementById("resultPage").setAttribute("class", "show");
        result();

    });

//play Again

document
    .getElementById("playAgain")
    .addEventListener("click", function () {
        document.getElementById("resultPage").setAttribute("class", "hidden");
        document.getElementById("selectionPage").setAttribute("class", "show");
        myArray = [];
    });
