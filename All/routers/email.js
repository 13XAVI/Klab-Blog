const nodemailer =require("nodemailer");
const dotenv =require("dotenv");
const RealEstate = require("../module/RealEstate");
dotenv.config()

exports.mailer = async  (emailfrom,message) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MYEMAIL,
            pass:process.env.PASSWORD_REALESTATE
        },
        tls: {
            rejectUnauthorized: false
          }
    });

    let sendinfo = {
        from: emailfrom,
        to: "tresorxavier@gmail.com", 
        subject:"This message is sent from contact form",
        html: `<b>${message}</b>`,
      };

      try {
        const sendMail =  transporter.sendMail(sendinfo,(error,info) =>{
            if(error){
                throw new Error(error)
            }
            return sendMail;
        })
      } catch (error) {
        return error;
      }
}