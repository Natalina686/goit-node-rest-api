import nodemailer from "nodemailer";

const { UKR_NET_USER, UKR_NET_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_USER,
    pass: UKR_NET_PASS,
  },
});

const sendEmail = async (data) => {
const email = { ...data, from: UKR_NET_USER };
await transporter.sendMail(email);
return true;
};



export default sendEmail;