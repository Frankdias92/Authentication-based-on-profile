const AppError = require("../utils/AppError")

function verifyAuthorization(roleToVerify) {
    return (req, res, next) = () => {
        const { role } = req.user

        if ( role !== roleToVerify) {
            throw new AppError('Unauthorized', 401)
        }

        return next()
    }
}

module.exports = verifyAuthorization