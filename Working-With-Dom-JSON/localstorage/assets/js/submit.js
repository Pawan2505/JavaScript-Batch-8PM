document.querySelector('#saveData')
    .addEventListener('submit', (e) => {
        alert("submit")
        e.preventDefault()// dafault property stop
        console.log(e)

        /// output show with array format
        const allInput = document.querySelectorAll('.createData input')

        /// all elements
        console.log(allInput[0])
        console.log(allInput[1])
        console.log(allInput[2])

        /// values of all inputs
        console.log(allInput[0].value)
        console.log(allInput[1].value)
        console.log(allInput[2].value)

        const username = allInput[0].value
        const email = allInput[1].value
        const mobile = allInput[2].value

        // localStorage.setItem('username', username)
        // localStorage.setItem('email', email)
        // localStorage.setItem('mobile', mobile)

        // const student = {
        //     username:username,
        //     email:email,
        //     mobile:mobile,
        // }


        // const arr = JSON.parse(localStorage.getItem('userList')) || [];


        const existData = JSON.parse(localStorage.getItem('userList'))
        const arr = existData == null ? [] : existData;

        const student = {
            username, email, mobile
        }
        console.log(arr)
        arr.push(student)
        console.log(student)
        localStorage.setItem('userList', JSON.stringify(arr))
        // window.location.href = window.location.href 
        window.location.reload()
        show()
    })

function show() {
    const userList = JSON.parse(localStorage.getItem('userList'))
    let result = "";
    userList?.forEach((ele, index) => {
        result += `
        <tr>
        <td>${index + 1}</td>
        <td>${ele.username}</td>
        <td>${ele.email}</td>
        <td>${ele.mobile}</td>
        <td>
        <button class="btn btn-danger" onclick="trash(${index})">delete</button>
          <button class="btn btn-warning" onclick="edit(${index})">edit</button>
        </td>
        </tr>
            `
    })
    document.querySelector('#tableData').innerHTML = result;
}
show()

function trash(userId) {
    if (confirm("do you want to delete this item?")) {
        const user = JSON.parse(localStorage.getItem('userList'))
        user.splice(userId, 1)
        localStorage.setItem('userList', JSON.stringify(user))
        show()
    }
}

function edit(userId) {

    document.querySelector('#save').style.display = "none";
    document.querySelector('#update').style.display = "block";
    var user = JSON.parse(localStorage.getItem('userList'))
    console.log(user[userId])

    /// single user data in object format
    const singleUser = user[userId]

    //// all input element
    const allInput = document.querySelectorAll('.createData input')

    allInput[0].value = singleUser.username
    allInput[1].value = singleUser.email
    allInput[2].value = singleUser.mobile


    document.querySelector('#update')
        .addEventListener('click', () => {
            const allInput = document.querySelectorAll('.createData input')
            const username = allInput[0].value;
            const email = allInput[1].value;
            const mobile = allInput[2].value;

            const newUser = {
                username,email,mobile
            }
            user.splice(userId,1,newUser)
            console.log(user)

            localStorage.setItem('userList',JSON.stringify(user))
            window.location.reload()
            show()
        })
}