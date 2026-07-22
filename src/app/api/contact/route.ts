import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const name = data.get("name")?.toString() || "Unknown Entity";
    const email = data.get("email")?.toString() || "No Email Provided";
    const subject = data.get("subject")?.toString() || "Incoming Transmission";
    const message = data.get("message")?.toString() || "No message payload.";

    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_EMAIL_USER || !process.env.NEXT_PUBLIC_EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS environment variables are not set.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Terminal-styled HTML template
    const htmlTemplate = `
      <div style="background-color: #0b0f19; color: #a9b1d6; font-family: 'Courier New', Courier, monospace; padding: 30px; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1a1b26; border-radius: 8px; border: 1px solid #292e42; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
          
          <!-- Terminal Header -->
          <div style="background-color: #1f2335; padding: 12px 20px; border-bottom: 1px solid #292e42; display: flex; align-items: center;">
            <span style="display: inline-block; width: 12px; height: 12px; background-color: #ff5f57; border-radius: 50%; margin-right: 8px;"></span>
            <span style="display: inline-block; width: 12px; height: 12px; background-color: #febc2e; border-radius: 50%; margin-right: 8px;"></span>
            <span style="display: inline-block; width: 12px; height: 12px; background-color: #28c840; border-radius: 50%; margin-right: 15px;"></span>
            <span style="color: #7aa2f7; font-size: 14px; letter-spacing: 0.5px;">POST /api/initialize-connection</span>
          </div>
          
          <!-- Terminal Body -->
          <div style="padding: 25px;">
            <p style="color: #9ece6a; font-weight: bold; margin-top: 0; margin-bottom: 25px;">[✓] SYSTEM MESSAGE: SUCCESSFUL ROUTING</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; color: #7aa2f7; width: 130px; font-weight: bold;">IDENTIFIER:</td>
                <td style="padding: 8px 0; color: #c0caf5;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7aa2f7; font-weight: bold;">CHANNEL:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2ac3de; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7aa2f7; font-weight: bold;">OPERATION:</td>
                <td style="padding: 8px 0; color: #e0af68;">${subject}</td>
              </tr>
            </table>
            
            <p style="color: #bb9af7; font-weight: bold; border-top: 1px dashed #292e42; padding-top: 25px; margin-bottom: 10px;">PAYLOAD:</p>
            
            <div style="background-color: #16161e; padding: 20px; border-radius: 6px; border: 1px solid #292e42; color: #c0caf5; white-space: pre-wrap; margin-bottom: 20px; font-size: 14px;">${message}</div>
            
            <div style="margin-top: 35px; padding-top: 15px; border-top: 1px solid #292e42; color: #565f89; font-size: 12px;">
              <p style="margin: 0;">&gt; Connection established securely from portfolio_v2.</p>
              <p style="margin: 5px 0 0 0;">&gt; End of transmission.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Configure the mail options
    const mailOptions = {
      from: `"${name}" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`, // Send through your own authenticated address
      to: process.env.NEXT_PUBLIC_EMAIL_USER, // Send to your own address
      replyTo: email, // If you hit reply, it goes to the person who filled out the form
      subject: `[Portfolio Contact] ${subject}`,
      html: htmlTemplate,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
