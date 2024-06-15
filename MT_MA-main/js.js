let count = 1;
$(document).ready(function(){
    $("#add").click(function(){
        const date = new Date();
        const formattedDate = getDateInFormat(date);
        let item = $("#text_item").val();
        // $("#todoList").append(`<li class="Item Item${count}">${item}</li>`);
        $(".list").append(`<li class="Item Item${count}">${item}</li>`);
        $(".list").append(`<p id="demo"></p>`);
        $(".list").append(`<button><i class="fa-solid fa-pen-to-square"></i></button>`);
        // $("#todoList").append(`<p id="demo"></p>`);
        // $("#todoList").append(`<button><i class="fa-solid fa-pen-to-square"></i></button>`);
        document.getElementById("demo").innerHTML = formattedDate;
        $("#text_item").val("");
        });
        // console.log(item)
});

function edit(){
    
}


$("html").on('click', '.Item', function(){
        $(this).fadeOut(1000);
        setTimeout(()=> $(this).remove(),1000);
    })



function getDateInFormat(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear(); 
    const hour = date.getHours(); 
    const minute = date.getMinutes(); 
    const formattedMinutes = minute < 10 ? `0${minute}` : minute;

    return `${hour}:${formattedMinutes}\n${day}/${month}/${year}`;
}


// var textarea = document.getElementById('text_item');

// textarea.value = 'Новий текст';

// var currentText = textarea.value;

// textarea.addEventListener('input', function(event) {
//     console.log('Змінено текст:', event.target.value);
// });



// const date = new Date();

// function getDate

// let mainTask = [
//     {
//         name: "vd",
//         time: getDate(new Date())
//     }

// ]
    


// new Date() = constructor;
// dateObj.toLocaleString([locales[ options]])



