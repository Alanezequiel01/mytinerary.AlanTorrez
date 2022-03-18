const joi = require ('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        fullName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The name must contain more than 3 characters',
            'string.max': 'The name must contain less than 20 characters'
        }),

        email: joi.string().email({minDomainSegments: 2}).required().messages({
            'string.email': 'Incorrect email format'
        }),

        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min': 'The password must contain at least 8 characters, uppercase, lowercase and numbers',
            'string.pattern': 'The password must be alphanumeric and contain a number'
        }),

        confirmPassword: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min': 'The password must contain at least 8 characters, uppercase, lowercase and numbers',
            'string.pattern': 'The password must be alphanumeric and contain a number'
        }),

        urlImage: joi.string(),
        country: joi.string(),
        from: joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly: false})
    console.log(req.body.userData)
    if(validation.error){
        return res.json({
            success: false,
            message: validation.error.details
        })
    }

    next()
}

module.exports = validator