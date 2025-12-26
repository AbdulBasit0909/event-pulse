// centralized email templates for consistent branding
    export const welcomeTemplate = (name) => {
      return `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2563eb; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome to EventPulse!</h1>
          </div>
          <div style="padding: 30px; color: #333333; line-height: 1.6;">
            <p style="font-size: 16px;">Hello <strong>${name}</strong>,</p>
            <p>We are thrilled to have you join our community. EventPulse is your gateway to discovering and hosting amazing events.</p>
            <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
              <p style="margin: 0;"><strong>Next Step:</strong> Log in to your dashboard and explore events near you.</p>
            </div>
            <a href="${process.env.CLIENT_URL}/login" style="display: block; width: 200px; margin: 30px auto; background-color: #2563eb; color: #ffffff; text-align: center; padding: 12px; text-decoration: none; border-radius: 5px; font-weight: bold;">Login Now</a>
          </div>
          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
            &copy; ${new Date().getFullYear()} EventPulse Inc. All rights reserved.
          </div>
        </div>
      `;
    };

    export const ticketTemplate = (name, eventTitle, ticketId) => {
      return `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px dashed #4f46e5; background-color: #fdfcff; padding: 20px;">
           <h2 style="color: #4f46e5; text-align: center;">Ticket Confirmed ✅</h2>
           <p>Hi ${name}, your spot for <strong>${eventTitle}</strong> is secured.</p>
           <div style="border: 2px solid #333; padding: 15px; margin: 20px 0; text-align: center;">
              <h3 style="margin: 0; font-size: 28px; letter-spacing: 2px;">${ticketId}</h3>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Present this ID at the venue</p>
           </div>
        </div>
      `;
    };