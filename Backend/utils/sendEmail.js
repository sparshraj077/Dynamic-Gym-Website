import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD, // ✅ Fixed: "pass" (not PASS)
        },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message} \n\n Email of User Who Sent the Message: ${options.userEmail}`, // ✅ Fixed: Proper string formatting
    };

    await transporter.sendMail(mailOptions);
};
