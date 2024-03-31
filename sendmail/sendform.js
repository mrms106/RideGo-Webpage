const {transporter}=require("./transporter");


function sendmail(form){
    const mailOptions={
        from:process.env.mail,
        to:process.env.mail2,
        subject:"New Form Submmission From Ridego",
        text:`The Form Details is as Following 
        name:${form.name},
        email: ${form.mail},
        Phone:${form.phone},
        Message:${form.comment}`
    }
   transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }else{
        console.log("email sent :" + info.response );
    }
   })
}
module.exports={sendmail:sendmail}