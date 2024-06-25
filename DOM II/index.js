document.querySelector("form").addEventListener("submit",todo_fun)

function todo_fun(event)
{
    event.preventDefault()
    let task = document.getElementById("task").value
    let priority = document.getElementById("priority").value

    let tr = document.createElement("tr")

    let td_1 = document.createElement("td")
    td_1.innerHTML = task

    let td_2 = document.createElement("td")
    td_2.innerHTML = priority
    if(priority === "High")
    {
        td_2.style.backgroundColor = '#3ABEF9'
        // td_2.style.color = 'white'
    }
    else
    {
        td_2.style.backgroundColor = '#050C9C'
        td_2.style.color = 'white'
    }

    let td_3 = document.createElement("td")
    td_3.innerHTML = "Delete"
    td_3.addEventListener("click", function() {
        tr.remove();
    })

    tr.append(td_1, td_2, td_3)

    document.querySelector("tbody").append(tr)

    document.getElementById('todo_Form').reset();
}