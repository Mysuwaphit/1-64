var age = prompt("What is your age??") 

if(age > 13)
    document.getElementById("content").innerHTML = "ยินดีด้วยคุณอายุเกิน 13 ปี เย้ๆๆๆ" + "<br>" +
    "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UYPZN7iU7Rw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
else
    document.getElementById("content").innerHTML = "ว้ายๆๆ เสียใจด้วยคุณอายุน้อยกว่า13ปี เข้าดูไม่ได้นะจ๊ะ"
 

    