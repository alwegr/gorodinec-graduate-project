import { Router } from 'express'
import { register, authorization, profile } from '../controllers/authorization.js'
import  { checkAuthorization } from '../utils/checkAuthorization.js'

const router = new Router()

//Регистрация
router.post('/register', register)

//Авторизация
router.post('/authorization', authorization)

//Профиль
router.get('/profile', checkAuthorization, profile)

export default router