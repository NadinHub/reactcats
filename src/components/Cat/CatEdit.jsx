import { Component } from "react";

export default class CatEdit extends Component {
    state = {
        isEditCard: false,
        editableCat: {
            name: "",
            parentcattery: "",
        }, // we keep initaial value from props
    }

    toggleEditCard = () => {
        this.setState({
            isEditCard: !this.state.isEditCard
        })
    }
    // Вызывается после того, как компонент рендерется
    componentDidMount() {
        console.log('start')
        const { name, parentcattery } = this.props
        console.log(this.props.name)
        //  Создаем копию данных, которые мы будем изменять
        this.setState({
            editableCat: {
                name: name,
                parentcattery: parentcattery,
            }
        })
    }

    onChange = (event) => {
        const { name, value } = event.target //  делаем деструктуризацию объекта с данными из инпута
        console.log(value)
        this.setState(prevState => {
            console.log(prevState)
            return {
                ...prevState,
                editableCat: {
                    ...prevState.editableCat,
                    [name]: value
                }
            }
        })
    }

    saveCat = () => {
        const { name, parentcattery } = this.state.editableCat
        const data = { name, parentcattery }
        this.props.onSaveCat(data, this.props.index)
    }

    render() {
        console.log('render')
        return (

            <div style={{
                display: "flex",
                flexDirection: "column"
            }
            }
                className="card">
                <h1> This is a cat: {this.props.name}</h1>
                <br />
                <div>Full name: {this.props.parentcattery} {this.props.name}</div>
                <br />
                <div>Breed: {this.props.breed}</div>
                <br />
                <div>Sex: {this.props.sex}</div>
                {/* <div>Name: {this.props.name}</div> */}

                <label htmlFor="fname">
                    Name: {
                        this.state.isEditCard === true
                            ? <input type="text" id="fname" name="name" value={this.state.editableCat.name} onChange={this.onChange} />
                            : this.state.editableCat.name
                    }
                </label>

                <label htmlFor="fparentcattery">
                    Parent cattery: {
                        this.state.isEditCard === true
                            ? <input type="text" id="fparentcattery" name="parentcattery" value={this.state.editableCat.parentcattery} onChange={this.onChange} />
                            : this.state.editableCat.parentcattery
                    }

                </label>
                <br />
                {/* State - onChangeTitle - refference to the function we need to execute onclick*/}
                <button onClick={this.toggleEditCard}>Edit</button>
                <button onClick={this.saveCat}>Save</button>
                {/* End State */}

                {/* State - onChangeTitle - refference to the function we need to execute onclick*/}
                {/* <button onClick={this.props.closeEdit}>Close edit</button> */}

            </div>

        )
    }
}