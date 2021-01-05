import React from 'react'
// import  ./Cat/Cat.css
//It's a template where we put any parameters (=props)

// We don't have name? So, we import only using the file name Cat.js???
export default props => (
    
    <div className="cat-card">
        <h1> This is a cat: {props.name}</h1>
        <br />
        <div>Full name: {props.parentcattery} {props.name}</div>
        <br />
        <div>Breed: {props.breed}</div>
        <br />
        <div>Sex: {props.sex}</div>
        <div>Name: {props.name}</div>
        <br />
        <div>Parent cattery: {props.parentcattery}</div>
        <br />
        {/* State - onChangeTitle - refference to the function we need to execute onclick*/}
        <button onClick={props.onEdit}>Edit</button>
        {/* End State */}

        <form>
            <label htmlFor="fname"> Name: </label> <br />
            <input type="text" id="fname" name="fname" onChange={props.onChangeName} />
        </form>
        {/* State - onChangeTitle - refference to the function we need to execute onclick*/}
        <button onClick={props.closeEdit}>Close edit</button>

    </div>
)
