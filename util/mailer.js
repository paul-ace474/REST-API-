var nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = (emailTo) =>{
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: `${process.env.email}`,
          pass:`${process.env.pass}`,
        },
      });
      var mailOptions = {
        from: `${process.env.email}`,
        to: `${emailTo}`,
        subject: "Email sent successfullly",
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>EMAIL TASK</title>
          </head>
          <body>
            <div style="display: flex; align-items: center; justify-content: center">
              <h2 style="color: cornflowerblue;">Join Your First Contest!</h2>
            </div>
            <p style="display: flex; align-items: center; justify-content: center; color: rgb(196, 75, 75);">
              Tuesday, October 8
            </p>
            <h3
              style="display: flex;
                align-items: center;
                justify-content: center;
                color: rgb(196, 75, 75);
              "
              ;
            >
              Don't think you're ready for interviews yet? Contests are the best way to
              gauge how well-prepared you are and to simulate the environment of a real
              interview. By participating in contests, you will see weekly improvements
              in your progress and you will know how ready you are for the real deal.
            </h3>
            <img src="https://images.unsplash.com/photo-1719937050445-098888c0625e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D" alt="" style="width: 50vh; height: 20vh; align-items: center; justify-content: center;">
            <h3 style="display: flex;
            align-items: center;
            justify-content: center;
            color: rgb(196, 75, 75);;
          ">
              We are hiring! Apply now for the opportunity to join LeetCode's content
              team as a problem adder or solution author. You can find more details and
              the application by seeing our announcement post and apply now!
            </h3>
            <button style="width: 70px; height: 20px; align-items: center; justify-content:center; margin-left: 100vh; color: white; background-color:cornflowerblue;; border-color:cornflowerblue;; border-radius: 2px;">Apply Now</button>
          </body>
        </html>
        
        `
      };
      
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      
};

module.exports = {mailSender};