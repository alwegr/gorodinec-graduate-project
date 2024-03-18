import jwt from 'jsonwebtoken'

export const checkAuthorization = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
}