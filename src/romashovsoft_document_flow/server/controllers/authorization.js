import User from '../models/User.js'
import bcrypt from 'bcryptjs'

//Регистрация
export const register = async (req, res) => {
    try{
        const { username, passsword } = req.body

        const isUsed = await User.findOne({ username })

        if(isUsed) {
            return res.json({
                message: 'Такое имя уже занято',
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(passsword, salt)

        const newUser = new User({
            username,
            password: hash,
        })

        await newUser.save()

        res.json({
            newUser, message: 'Регистрация прошла успешно'
        })

    } catch(error) {
        res.json({message: 'Ошибка при создании пользователя'})
    }
}

//Авторизация
export const authorization = async (req, res) => {
    try{
        
    } catch(error) {}
}

//Профиль
export const profile = async (req, res) => {
    try{
        
    } catch(error) {}
}