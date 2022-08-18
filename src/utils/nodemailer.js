const nodemailer = require("nodemailer");

async function sendMail(to, msg) {
    if(!to.length) return
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "muxammadazizramziddinov@gmail.com",
            pass: "svsvkhbjkofrasmq",
        },
    });

    await transporter.sendMail({
        from: `Eaturkish <muxammadaziramziddion@gmail.com>`,
        to, 
        subject: `New News from Eaturkish site`,
        html: `
            <h1>${msg.news_title}</h1>
            <img src="${msg.news_img}" alt="img" style="margin: 30px 0;" />
            <p>${msg.news_desc}</p>
        `,
    });
}

module.exports = sendMail