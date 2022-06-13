let item = document.querySelector(".item")

let placeholders = document.querySelectorAll(".placeholder")



item.addEventListener("dragstart", dragStart )

item.addEventListener("dragend", dragEnd )

placeholders.forEach(

    function (y) {

        y.addEventListener("dragover", dragOver)
        y.addEventListener("dragenter", dragEnter)
        y.addEventListener("dragleave", dragLeave)
        y.addEventListener("drop", dragDrop)

    }


)



function dragStart(event) {


    event.target.classList.add("hold")

    setTimeout(function () {

        event.target.classList.add("hide")

    },0.1)





}



function dragEnd(event) {




    event.target.classList.remove("hold")

    event.target.classList.remove("hide")

}



function dragOver(event) {

    event.preventDefault()

    console.log("dragOver")

}

function dragEnter(event) {

    event.target.classList.add("hoverer")

    console.log("dragEnter")

}

function dragLeave(event) {

    event.target.classList.remove("hoverer")

    console.log("dragLeave")

}

function dragDrop(event) {

    console.log("dragDrop")

    event.target.insertAdjacentElement("afterbegin", item)



}

