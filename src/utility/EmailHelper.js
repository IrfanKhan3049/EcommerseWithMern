const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

  let transport= nodemailer.createTransport({
    host:"mail.wp-codestudio.com",
    port:465,
    secure:true,
    auth:{user:"email@wp-codestudio.com",pass: '$yM.ANKa;6fz'},
    tls:{rejectUnauthorized:false}
  })

  let mailOption={
    from:'MERN Ecommece Solutions <info@teamrabbil.com>',
    to:EmailTo,
    subject:EmailSubject,
    text:EmailText
  }

  return await transport.sendMail(mailOption)
}

module.exports=EmailSend;