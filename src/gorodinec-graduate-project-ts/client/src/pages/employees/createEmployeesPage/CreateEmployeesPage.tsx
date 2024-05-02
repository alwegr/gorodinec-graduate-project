import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './CreateEmployees_style.css'

function CreateEmployees() {

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [gender, setGender] = useState("");
    const [personnelNumber, setPersonnelNumber] = useState("");
    const [position, setPosition] = useState("");
    const [dataPosition, setDataPosition] = useState<any[]>([]);
    const [divisions, setDivisions] = useState("");
    const [dataDivisions, setDataDivisions] = useState<any[]>([]);
    // const [isActive, setIsActive] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3001/get/position")
            .then((res) => {
                setDataPosition(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3001/get/divisions")
            .then((res) => {
                setDataDivisions(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmitPosition = async (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:3001/create/employees', {
            lastName,
            firstName,
            middleName,
            gender,
            personnelNumber,
            position,
            divisions

        })
            .then(res => {
                console.log(res);
                navigate('/employees');
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className={'pade'}>
                <div className={'wrapper'}>
                    <form onSubmit={handleSubmitPosition}>
                        <h2>Добавление пользователя</h2>
                        <div className={'employee_input'}>
                            <label htmlFor="lastName">Фамилия</label>
                            <div>
                                <input
                                    type="text"
                                    id='lastName'
                                    placeholder="Иванов"
                                    className={'form_control'}
                                    onChange={(e: any) => setLastName(e.target.value)}
                                    value={lastName}
                                    required
                                />
                            </div>
                        </div>
                        <div className={'employee_input'}>
                            <label htmlFor="firstName">Имя</label>
                            <div>
                                <input
                                    type="text"
                                    id='firstName'
                                    placeholder="Иван"
                                    className={'form_control'}
                                    onChange={(e: any) => setFirstName(e.target.value)}
                                    value={firstName}
                                    required
                                />
                            </div>
                        </div>

                        <div className={'employee_input'}>
                            <label htmlFor="middleName">Отчество</label>
                            <div>
                                <input
                                    type="text"
                                    id='middleName'
                                    placeholder="Иванович"
                                    className={'form_control'}
                                    onChange={(e: any) => setMiddleName(e.target.value)}
                                    value={middleName}
                                    required
                                />
                            </div>
                        </div>
                        <div className={"input_div"}>
                            <label htmlFor="gender">Пол</label>
                            <div>
                                <select
                                    className={"form_control"}
                                    value={gender}
                                    onChange={(e: any) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="">Выберите пол</option>
                                    <option value="Мужской">Мужской</option>
                                    <option value="Женский">Женский</option>
                                </select>
                            </div>
                        </div>
                        <div className={"input_div"}>
                            <label htmlFor="serviceNumber">Табельный номер</label>
                            <div>
                                <input
                                    type="number"
                                    placeholder="Введите табельны номер"
                                    className={"form_control"}
                                    onChange={(e: any) => setPersonnelNumber(e.target.value)}
                                    value={personnelNumber}
                                    required
                                />
                            </div>
                        </div>
                        <div className={"input_div"}>
                            <label htmlFor="position">Должность</label>
                            <div>
                                <select
                                    className={"form_control"}
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    required
                                >
                                    <option value="">Выберете должность:</option>
                                    {dataPosition.map((position) => {
                                        return (
                                            <option key={position._id} value={position._id}>
                                                {position.title}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className={"input_div"}>
                            <label htmlFor="position">Подразделение</label>
                            <div>
                                <select
                                    className={"form_control"}
                                    value={divisions}
                                    onChange={(e) => setDivisions(e.target.value)}
                                    required
                                >
                                    <option value="">Выберете подразделение:</option>
                                    {dataDivisions.map((divisions) => {
                                        return (
                                            <option key={divisions._id} value={divisions._id}>
                                                {divisions.title}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        {/* <div className={'employee_input'}>
                            <label htmlFor="status">Статус</label>

                            <div>
                                <input
                                    type="radio"
                                    name="status"
                                    onChange={(e) => setIsActive(e.target.value === 'false')}
                                    value={isActive.toString()}
                                    required
                                />
                                <label htmlFor="isActive">Активный</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="status"
                                    required
                                    onChange={(e) => setIsActive(e.target.value === 'true')}
                                    value={isActive.toString()}
                                />
                                <label htmlFor="isActive">Неактивный</label>
                            </div>
                        </div> */}

                        <div className={'form_buttons'}>
                            <Link to={"/employees"}><button className={'form_btn cancel'}>Отменить</button></Link>
                            <button className={'form_btn add'}>Добавить</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CreateEmployees