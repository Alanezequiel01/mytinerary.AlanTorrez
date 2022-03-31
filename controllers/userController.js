const Users = require('../models/users')
const bcryptjs = require ('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const sendEmail = async (email, uniqueString) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: "mytinerary02@gmail.com",
            pass: "ibanezrg350",
        }
    })

    let sender = "mytinerary02@gmail.com"
    let mailOptions = {
        from: sender,
        to: email, 
        subject: "User email verification for registration in MyTinerary",
        html: ` 
            <div 
            style="
            display: flex;
            flex-direction: column;
            line-height: 2.5rem;">
                <h3>Hello! You have successfully signed up in <span style="font-family: 'Oooh Baby', cursive !important;
                color: #03B5AA;
                margin-bottom: 1rem;
                font-size: 2rem;"> MyTinerary</span></h3>
                <p>Please press the button to confirm your account.</p>
                <a href="http://localhost:4000/api/V1/verify/${uniqueString}" style="text-decoration: none;
                margin-top: .5rem;
                padding: 0 1rem;
                border-radius: 10px;
                color: black;
                border: 1px solid gray;
                border-radius: 5px;
                transition: 500ms;
                font-size: 1.5rem;
                background-color: #03B5AA;"><h5>Confirm Account</h5></a>
            </div>
        `,
    };
    await transporter.sendMail(mailOptions, function (error, response) {
        if(error){
            console.log(error)
        }else {
            console.log("Message sent")
        }

    })
};

const userController = {

    verifyEmail: async (req, res) => {

        const {uniqueString} = req.params; 

        const user = await Users.findOne({uniqueString: uniqueString})
        if (user) {
            user.verifiedEmail = true 
            await user.save()
            res.redirect("http://localhost:3000/") 
        }
        else { res.json({
            success: false,
            response: "Your email has not been verified" 
            }) 
        }
    },

    signUpUser: async (req, res)=>{
        let {fullName, email, password, confirmPassword, urlImage, country, from} = req.body.userData

        try{

            const usuarioExiste = await Users.findOne({email})
            
            if(usuarioExiste){
                if(usuarioExiste.from.indexOf(from) !== -1){
                    res.json({
                        success: false,
                        from:"signUp",
                        message:"There is already an account associated with the email entered"
                    })
                } else{
                    const contraseñaHasheada = bcryptjs.hashSync(password, 10)
                    usuarioExiste.from.push(from)
                    usuarioExiste.password.push(contraseñaHasheada)
                    if(from === "signUp"){
                        usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await usuarioExiste.save()
                        await sendEmail(email, usuarioExiste.uniqueString)

                    res.json({
                        success: true, 
                        from: "singUp",
                        message:"We send you an email to validate your registration. Please check your mailbox to confirm",
                    })    

                    }else {
                        usuarioExiste.save()

                        res.json({
                            success: true,
                            from: "signUp",
                            message: "We add "+from+" to your means to login"
                        })
                    }

                }
            } else{

                const contraseñaHasheada = bcryptjs.hashSync(password, 10)
                const nuevoUsuario = await new Users({
                    fullName,
                    email,
                    password:[contraseñaHasheada],
                    confirmPassword:[contraseñaHasheada],
                    urlImage,
                    country,
                    uniqueString: crypto.randomBytes(15).toString('hex'),
                    verifiedEmail:false,
                    from:[from],
                })
                if(from !== "signUp"){
                    await nuevoUsuario.save()
                    res.json({
                        success:true,
                        from:"singUp",
                        message:"Congratulations, your user has been created with "+from
                    })

                } else {
                    await nuevoUsuario.save()
                    await sendEmail(email, nuevoUsuario.uniqueString)

                    res.json({
                        success:true,
                        from:"signUp",
                        message:"We send you an email to validate your registration. Please check your mailbox to confirm"
                    })
                }
            }
            
            
        } catch(error){
            console.log(error)
        res.json({
            success: false,
            message:"Oops, an error occurred, please try again",
        })
    }
},

    signInUser: async (req, res)=>{
        const {email, password, from} = req.body.userData

        try{
            const usuarioExiste = await Users.findOne({email})

            if(!usuarioExiste){
                res.json({
                    success:false,
                    message:"We have not found an account associated with that email address. Please sign up",
                })
            } else {
                if(from !== "signIn"){
                    let contraseñaCoincide = usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))

                    if(contraseñaCoincide.length > 0){

                        const userData = {
                            id: usuarioExiste._id,
                            fullName: usuarioExiste.fullName,
                            email: usuarioExiste.email,
                            urlImage: usuarioExiste.urlImage,
                            from: usuarioExiste.from,
                        }
                        await usuarioExiste.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60 * 60 *24})

                        res.json({
                            success:true,
                            from: from,
                            response: {token, userData},
                            message:"Welcome again "+userData.fullName, 
                        })

                    }else {
                        res.json({
                            success:false,
                            from:from,
                            message:"You have not registered with "+from+". If you want to enter with that means please signUp with "+from,
                        })
                        
                        } 
                    } else {
                        if(usuarioExiste.verifiedEmail){
                            let contraseñaCoincide = usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
                            if(contraseñaCoincide.length > 0){

                            const userData = {
                                id: usuarioExiste._id,
                                fullName: usuarioExiste.fullName,
                                email: usuarioExiste.email,
                                urlImage: usuarioExiste.urlImage,
                                from: usuarioExiste.from,
                            }
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60 * 60 *24})
                            res.json({
                                success: true,
                                from: from,
                                response: {token, userData},
                                message:"Welcome again "+userData.fullName,
                            })
                        } else{
                            res.json({
                                success: false,
                                from: from,
                                message:"Your email or password is incorrect",
                            })
                        }
                        } else{
                            res.json({
                                success: false,
                                from: from,
                                message:"You have not verified your email. Please check your mailbox to continue",
                            })
                        }
                    }
                }
            }
            catch(error){
                console.log(error)
            res.json({
                success: false,
                message:"Oops, an error occurred, please try again",
            })
        }
        },

        signOutUser: async (req, res) => {
            const email = req.body.userData
            const user = await Users.findOne({email})
            await user.save()
            res.json(
                console.log("Closed session " + email)
            )
        },

        verifyToken:(req, res) => {
            if(!req.err){
            res.json({success:true,
                      response:{id:req.user.id, 
                      fullName:req.user.fullName,
                      email:req.user.email, 
                      urlImage: req.user.urlImage,
                      contry: req.user.country,
                      from:"token"},
                      message:"Welcome again "+req.user.fullName}) 
            }else{
                res.json({success:false,
                message:"Por favor realiza nuevamente signIn"}) 
            }
        },

    }



module.exports = userController