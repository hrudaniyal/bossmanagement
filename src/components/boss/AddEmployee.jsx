import React, { useState } from 'react'
import Axios from '../Axios'
import '../../css/boss_add_employee.css'
function AddEmployee() {
    const jdate = new Date().getDate()
    const jmonth = new Date().getMonth()
    const jyear = new Date().getFullYear()

    Axios.get('/employees').then(res => {
        console.log(res.data.length)
    })
    const [employee, setEmployee] = useState({
        id: '',
        fullname: '',
        about: '',
        username: '',
        password: '',
        image: '',
        jobposition: '',
        salary: '',
        currentproject: '',
        joiningdate: '',
        islogin: '',
        attendance: []
    })
    const JoinEmployee = (e) => {
        e.preventDefault()
        const fullname = e.target.name.value
        const about = e.target.about.value
        const username = e.target.username.value
        const password = e.target.password.value
        const image = e.target.image.value
        const jobposition = e.target.jobposition.value
        const salary = e.target.salary.value
        const currentproject = e.target.currentproject.value
        const joiningdate = e.target.joiningdate
        const islogin = false
        const attendance = []


        const joining = {
            fullname: fullname,
            about: about,
            username: username,
            password: password,
            image: image,
            jobposition: jobposition,
            salary: salary,
            currentproject: currentproject,
            joiningdate: `${jdate}/${jmonth}/${jyear}`,
            islogin: islogin,
            attendance: attendance,
        }
        console.log(joining)
        Axios.post('/employees', joining).then(res => {

            console.log(res.data)
        }
        )
        alert('employee added succesfully !!!')

    }
    return (
        <div>
            <h2>Add Employee</h2>
            <form className='addform' onSubmit={JoinEmployee} >
                <label className='formlabel'>
                    <span>Name </span><span>:</span><input type='text' name='name' autofocus required />
                </label>
                <label className='formlabel'>
                    <span>About </span><span>:</span><textarea rows='6' name='about' required/>
                </label>
                <label className='formlabel'>
                    <span>Username </span><span>:</span><input type='text' name='username' required />
                </label>
                <label className='formlabel'>
                    <span>Password </span><span>:</span><input type='text' name='password'  required/>
                </label>
                <label className='formlabel'>
                    <span>Image </span><span>:</span><input type='file' name='image' required />
                </label>
                <label className='formlabel'>
                    <span>JobPosition </span><span>:</span><input type='text' name='jobposition' required />
                </label>
                <label className='formlabel'>
                    <span>Salary </span><span>:</span><input type='number' name='salary' required />
                </label>
                <label className='formlabel'>
                    <span>CurrentProject </span><span>:</span><input type='text' name='currentproject' required />
                </label>
                <label className='formlabel'>
                    <span> </span><span></span><input type='submit' value="Submit" required style={{ width: '40%',background:'tomato',color:'white', margin: '0 auto' }} />
                </label>
            </form>
        </div>
    )
}

export default AddEmployee
