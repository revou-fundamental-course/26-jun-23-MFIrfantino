const namelabel = document.getElementById("name");
const emaillabel = document.getElementById("email");
const opsilabel = document.getElementById("opsi");
const submitButton = document.getElementById("buttonsubmit");

submitButton.addEventListener("click",function(event) {
    event.preventDefault()
    const namevalue = namelabel.value
    const emailvalue = emaillabel.value
    const opsivalue = opsilabel.value
    nameValidation(namevalue, emailvalue, opsivalue)
}
)

function nameValidation(vname, vemail, vopsi) {
    if (vname == "" || vemail  == "" || vopsi  == "") {
        alert("Isi data dengan lengkap!")
    } else {
        alert("Succes!")
    }

}

var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 3000)
function plusDiv(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    console.log(index)
    const imgList = document.getElementsByClassName("slider")
    if (index > imgList.length) { slideIndex = 1}
    if (index < 1) { slideIndex = imgList.length }
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none" 
    }
    imgList[slideIndex - 1].style.display = "block"
}
