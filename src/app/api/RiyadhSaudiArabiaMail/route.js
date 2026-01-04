import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
        const { email, name, data ,iduser, destination} = await request.json();
                const id = iduser

                const dest = (destination || 'Riyadh, Saudi Arabia').trim();
                let desname = dest;
                let country = 'Saudi Arabia';
                let CityTour = '';
                if (dest === 'Riyadh, Saudi Arabia') { desname = 'Riyadh, Saudi Arabia'; country = 'Saudi Arabia'; CityTour = 'Riyadh City Tour'; }
                else if (dest === 'Dubai, UAE') { desname = 'Dubai, UAE'; country = 'UAE'; CityTour = 'Dubai City Tour'; }
                else if (dest === 'Istanbul, Turkey') { desname = 'Istanbul, Turkey'; country = 'Turkey'; CityTour = 'Istanbul City Tour'; }
                else if (dest === 'Kuala Lumpur, Malaysia') { desname = 'Kuala Lumpur, Malaysia'; country = 'Malaysia'; CityTour = 'Batu Caves'; }
                else if (dest === 'London, UK') { desname = 'London, UK'; country = 'UK'; CityTour = 'London City Tour'; }
                else if (dest === 'Baku, Azerbaijan') { desname = 'Baku, Azerbaijan'; country = 'Azerbaijan'; CityTour = 'Baku City Tour'; }

                const zagatiyaLines = ['✓ Everything in Delegate Accommodation Experience'];
                if (CityTour) zagatiyaLines.push('✓ ' + CityTour);
                const extrasMap = {
                    'Istanbul, Turkey': ['Bosphorus Rooftop Lunch Tour', 'Cruise Trip & Dinner at Bosphorus'],
                    'Dubai, UAE': ['Desert Safari'],
                    'Kuala Lumpur, Malaysia': ['Batu Caves', 'Petronas Twin Towers', 'Merdeka Square'],
                    'London, UK': [],
                    'Riyadh, Saudi Arabia': [],
                    'Baku, Azerbaijan': [],
                };
                (extrasMap[dest] || []).forEach(x => zagatiyaLines.push('✓ ' + x));
                const zagatiyaHTML = zagatiyaLines.join('<br><br>');
                const closingMessage = `at World Diplomats MUN and await, in <br /> anticipation, to host you at ${country}.`;
                const subject = `World Diplomats — Registration Received (${desname})`;
    const username = "info@worlddiplomats.org";
    const password = "eqqxvxhdtgfbxuiu";

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: username, pass: password },
    });

    const mailOptions = {
      from: 'World Diplomats <no-reply@worlddiplomats.org>',
      to: email,
      subject,
      html: `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Diplomats</title>
</head>

<body bgcolor="#ffffff" style="margin:0; padding:0; background-color:#ffffff; font-family:Arial, Helvetica, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0"  bgcolor="#ffffff" style="background-color:#ffffff;">
        <tr>
            <td align="center">

                <!-- MAIN CONTAINER -->
                <table width="700" cellpadding="0" cellspacing="0"  bgcolor="#ffffff"  style="max-width:700px; background-color:#ffffff;">

                    <!-- CONTENT WITH RIGHT COLOR STRIP -->
                    <tr>
                        <td style=" margin:0;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <!-- MAIN CONTENT -->
                                    <td style="padding:0 25px ; width:685px;">

                                        <!-- LOGO -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                                            <tr>
                                                <td align="center" style="padding:5px;">
                                                    <table style="margin:0 auto;">
                                                        <tr>
                                                            <td style="padding-right:12px; vertical-align:middle;">
                                                                <img src="https://6a903f8cfa.imgdist.com/public/users/BeeFree/beefree-4862b855-5df1-4b89-a5ec-bb23e0132b7c/Untitled_design-removebg-preview.png"
                                                                    width="80" style="display:block;">
                                                            </td>
                                                            <td
                                                                style="font-size:25px; font-weight:800; color:#0a3b6d; vertical-align:middle; text-align:left;">
                                                                WORLD<br><span
                                                                    style="color:#9aa3ab; font-weight:700;">DIPLOMATS</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- IMAGE -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                                            <tr>
                                                <td align="center">
                                                    <img src="https://6a903f8cfa.imgdist.com/public/users/BeeFree/beefree-4862b855-5df1-4b89-a5ec-bb23e0132b7c/Capture4.PNG"
                                                        alt="World Diplomats Delegates" width="100%" style="
          display:block;
          width:100%;
          height:auto;
          border:0;
        ">
                                                </td>
                                            <tr>
                                                <td height="2" style="line-height:2px;font-size:0;">&nbsp;</td>
                                            </tr>
                                </tr>
                                <!-- COLOR LINE -->
                                <tr>
                                    <td>
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td height="4" bgcolor="#e53935"></td>
                                                <td height="4" bgcolor="#fbc02d"></td>
                                                <td height="4" bgcolor="#43a047"></td>
                                                <td height="4" bgcolor="#1e88e5"></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>




                            <!-- dear -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                                <tr>
                                    <td align="center" style="padding:1px 0px;">

                                        <!-- MESSAGE BOX -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:685px;">
                                            <tr>
                                                <td style="
            background:#f2f2f2;
            padding:18px 10px;
            font-family:Arial, Helvetica, sans-serif;
            font-size:14px;
            line-height:20px;
            color:#333333;
            border-radius:6px;
            text-align:center;
          ">
                                                    Dear <strong>${name || 'Delegation'}</strong>, we are pleased to inform you that
                                                    your registration at
                                                    <strong>World Diplomats</strong> has been received.
                                                    You are advised to proceed to your personal portal by clicking the
                                                    link below to
                                                    review and confirm your position
                                                    For your convenience, an overview of the event is attached to this
                                                    email.
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- SPACE -->
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td height="14" style="font-size:0;line-height:14px;">&nbsp;</td>
                                            </tr>
                                        </table>

                                        <!-- BUTTON -->
                                        <table cellpadding="0" cellspacing="0" align="center">
                                            <tr>
                                                <td align="center" bgcolor="#0b67c2" style="border-radius:22px;">
                                                    <a href="{{PORTAL_LINK}}" target="_blank" style="
                display:inline-block;
                padding:12px 26px;
                font-family:Arial, Helvetica, sans-serif;
                font-size:14px;
                font-weight:bold;
                color:#ffffff;
                text-decoration:none;
                border-radius:22px;
              ">
                                                        CLICK HERE FOR PERSONAL PORTAL
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- SPACE -->
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td height="12" style="font-size:0;line-height:12px;">&nbsp;</td>
                                            </tr>
                                        </table>

                                        <!-- FALLBACK LINK -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
                                            <tr>
                                                <td style="
            font-family:Arial, Helvetica, sans-serif;
            font-size:12px;
            color:#555555;
            text-align:center;
          ">
                                                    If the above button does not work, open this link:<br>

                                                </td>
                                            </tr>
                                        </table>

                                    </td>
                                </tr>
                            </table>


                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                                <tr>
                                    <td align="center">
                                        <img src="https://6a903f8cfa.imgdist.com/public/users/BeeFree/beefree-4862b855-5df1-4b89-a5ec-bb23e0132b7c/Capture2.PNG"
                                            alt="WE offer you" width="100%" style="
          display:block;
          width:100%;
          height:auto;
          border:0;
        ">
                                    </td>
                                <tr>
                                    <td height="2" style="line-height:2px;font-size:0;">&nbsp;</td>
                                </tr>
                    </tr>

                </table>


                <!-- MESSAGE BOX -->
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width:685px;">
                    <tr>
                        <td style="
            padding:0px 10px 10px 10px;
            font-family:Arial, Helvetica, sans-serif;
            font-size:13px;
            line-height:15px;
            color:#333333;
            border-radius:6px;
            text-align:center;
          ">
                           World Diplomats is a United Nations Simulation and the delegates,
                                        other than the distinguished winners, will receive participation certificates.
                                        World Diplomats has integrated seven committees in the conferences
                                        each meticulously monitored by our astute secretariat members.The esteemed members of our
                                         secretariat are extremely talented, trained, and experienced individuals who have been a part of various MUN conferences

                        </td>
                    </tr>
                </table>


                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                                <tr>
                                    <td align="center">
                                        <img src="https://6a903f8cfa.imgdist.com/public/users/BeeFree/beefree-4862b855-5df1-4b89-a5ec-bb23e0132b7c/Capture.PNG"
                                            alt="WE offer you" width="100%" style="
          display:block;
          width:100%;
          height:auto;
          border:0;
        ">
                                    </td>
                                <tr>
                                    <td height="2" style="line-height:2px;font-size:0;">&nbsp;</td>
                                </tr>
                    </tr>

                </table>

                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                                <tr>
                                    <td align="center">
                                        <img src="https://6a903f8cfa.imgdist.com/public/users/BeeFree/beefree-4862b855-5df1-4b89-a5ec-bb23e0132b7c/Capture7.PNG"
                                            alt="3 cards" width="100%" style="
          display:block;
          width:100%;
          height:auto;
          border:0;
        ">
                                    </td>
                                <tr>
                                    <td height="2" style="line-height:2px;font-size:0;">&nbsp;</td>
                                </tr>
                    </tr>

                </table>

                

                <!-- PACKAGES -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                    <tr>
                        <td>

                            <!-- TITLES -->
                            <table width="100%" cellpadding="4">
                                <tr>
                                    <td width="33%">
                                        <div style="background:linear-gradient(90deg,#8c1537,#0b67c2);color:#fff;
            padding:18px;border-radius:16px;text-align:center;font-weight:600;">
                                            Basic
                                        </div>
                                    </td>
                                    <td width="33%">
                                        <div style="background:linear-gradient(90deg,#0b67c2,#8c1537);color:#fff;
            padding:18px;border-radius:16px;text-align:center;font-weight:600;">
                                            Shepandum
                                        </div>
                                    </td>
                                    <td width="33%">
                                        <div style="background:linear-gradient(90deg,#8c1537,#0b67c2);color:#fff;
            padding:18px;border-radius:16px;text-align:center;font-weight:600;">
                                            Zagatiya
                                        </div>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <tr>
                        <td>

                            <!-- CARDS -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>

                                    <!-- BASIC -->
                                    <td width="33%" valign="top" style="padding:4px;">
                                        <table width="100%" height="420" cellpadding="12" cellspacing="0"
                                            style="background:#f1f1f1;border-radius:20px;">
                                            <tr>
                                                <td valign="top" style="font-size:11px;line-height:1.3;color:#333;">
                                                    ✓ UN Simulation committee sessions<br>
                                                    ✓ Background Study Guides<br>
                                                    ✓ Official UNHCR endorsed Certificate<br>
                                                    ✓ 1 committee lunch<br>
                                                    ✓ Opening ceremony<br>
                                                    ✓ Diplomatic dinner<br>
                                                    ✓ Closing ceremony<br>
                                                    ✓ Grand Dinner<br>
                                                    ✓ Cultural Performance<br>
                                                    ✓ Musical Night<br>
                                                    ✓ Scavenger Hunt<br>
                                                    ✓ World Diplomats merch and Kit
                                                </td>
                                            </tr>

                                           <tr>
    <td align="center" valign="bottom">
        <a href="https://www.worlddiplomats.org/Saudipayment/1?userid=${id}" target="_blank" style="text-decoration:none;">
            <div style="background:linear-gradient(90deg,#8c1537,#0b67c2);
                  color:#fff;padding:12px 24px;border-radius:14px;font-weight:600;">
                CHOOSE PLAN
            </div>
        </a>
    </td>
</tr>
                                        </table>
                                    </td>

                                    <!-- SHEPANDUM -->
                                    <td width="33%" valign="top" style="padding:4px;">
                                        <table width="100%" height="420" cellpadding="12" cellspacing="0"
                                            style="background:#f1f1f1;border-radius:20px;">
                                            <tr>
                                                <td valign="top" style="font-size:11px;line-height:1.4;color:#333;">
                                                    ✓ Everything in Basic package<br><br>
                                                    ✓ 5-star premium hotel accommodation (Twin Shared)<br><br>
                                                    ✓ Gourmet Morning Breakfast everyday
                                                </td>
                                            </tr>

                                            <!-- SPACER (extra space for balance) -->
                                            <tr>
                                                <td height="60">&nbsp;</td>
                                            </tr>

                                            <tr>
    <td align="center" valign="bottom">
        <a href="https://example.com" target="_blank" style="text-decoration:none;">
            <div style="background:linear-gradient(90deg,#8c1537,#0b67c2);
                  color:#fff;padding:12px 24px;border-radius:14px;font-weight:600;">
                CHOOSE PLAN
            </div>
        </a>
    </td>
</tr>
                                            <tr>
                                                <td align="center" valign="bottom">
                                                    <a href="https://www.worlddiplomats.org/Saudipayment/2?userid=${id}" target="_blank" style="text-decoration:none;">
                                                        <div style="background:linear-gradient(90deg,#8c1537,#0b67c2);
                                                              color:#fff;padding:12px 24px;border-radius:14px;font-weight:600;">
                                                            CHOOSE PLAN
                                                        </div>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>

                                    <!-- ZAGATIYA -->
                                    <td width="33%" valign="top" style="padding:4px;">
                                        <table width="100%" height="420" cellpadding="12" cellspacing="0"
                                            style="background:#f1f1f1;border-radius:20px;">
                                            <tr>
                                                <td valign="top" style="font-size:11px;line-height:1.4;color:#333;">
                                                    ${zagatiyaHTML}
                                                </td>
                                            </tr>

                                            <!-- SPACER -->
                                            <tr>
                                                <td height="60">&nbsp;</td>
                                            </tr>

                                           <tr>
                                            <td align="center" valign="bottom">
                                                <a href="https://www.worlddiplomats.org/Saudipayment/3?userid=${id}" target="_blank" style="text-decoration:none;">
                                                    <div style="background:linear-gradient(90deg,#8c1537,#0b67c2);
                                                          color:#fff;padding:12px 24px;border-radius:14px;font-weight:600;">
                                                        CHOOSE PLAN
                                                    </div>
                                                </a>
                                            </td>
                                        </tr>
                                        </table>
                                    </td>

                                </tr>
                            </table>

                        </td>
                    </tr>
                </table>

              


               

                <!-- footer//////////////// -->

                <table width="100%" cellpadding="0" cellspacing="0" style="text-align:center; padding: 20px 0;">

                    <!-- HEADING -->
                    <tr>
                        <td style="color:#0a3b6d;font-size:19px;font-weight:700;padding-bottom:8px;">
                            WE THANK YOU FOR REGISTERING
                        </td>
                    </tr>

                    <!-- SUB TEXT -->
                    <tr>
                        <td style="color:#0a3b6d;font-size:14px;font-weight:400;padding-bottom:18px;">
                            ${closingMessage}
                        </td>
                    </tr>

                    <!-- LINKS ROW -->
                    <tr>
                        <td align="center">

                            <table cellpadding="6" cellspacing="0" align="center">

                                <!-- ROW 1 : 3 ITEMS -->
                                <tr>

                                    <!-- INSTAGRAM -->
                                    <td align="center" style="font-size:10px;">
                                        <a href="https://www.instagram.com/worlddiplomatsmun/" target="_blank"
                                            style="color:#0a3b6d;text-decoration:none;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                                width="12" style="vertical-align:middle;">
                                            &nbsp;<span style="text-decoration:underline;">@worlddiplomatsmun</span>
                                        </a>
                                    </td>

                                    <!-- FACEBOOK -->
                                    <td align="center" style="font-size:10px;">
                                        <a href="https://www.facebook.com/worlddiplomats" target="_blank"
                                            style="color:#0a3b6d;text-decoration:none;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111392.png"
                                                width="12" style="vertical-align:middle;">
                                            &nbsp;<span style="text-decoration:underline;">@worlddiplomats</span>
                                        </a>
                                    </td>

                                    <!-- PHONE -->
                                    <td align="center" style="font-size:10px;">
                                        <a href="tel:+447490344639" style="color:#0a3b6d;text-decoration:none;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="12"
                                                style="vertical-align:middle;">
                                            &nbsp;<span style="text-decoration:underline;">+44 7490344639</span>
                                        </a>
                                    </td>

                                </tr>

                                <!-- ROW 2 : 2 ITEMS (CENTERED) -->
                               

                            </table>

                        </td>
                    </tr>


                     <tr>
                        <td align="center">

                            <table cellpadding="6" cellspacing="0" align="center">

                                
 <tr>

                                    <!-- EMAIL -->
                                    <td align="center" colspan="1" style="font-size:10px;">
                                        <a href="mailto:info@worlddiplomats.org"
                                            style="color:#0a3b6d;text-decoration:none;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" width="12"
                                                style="vertical-align:middle;">
                                            &nbsp;<span
                                                style="text-decoration:underline;">info@worlddiplomats.org</span>
                                        </a>
                                    </td>

                                    <!-- WEBSITE -->
                                    <td align="center" colspan="1" style="font-size:10px;">
                                        <a href="https://worlddiplomats.org" target="_blank"
                                            style="color:#0a3b6d;text-decoration:none;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/44/44386.png" width="12"
                                                style="vertical-align:middle;">
                                            &nbsp;<span style="text-decoration:underline;">worlddiplomats.org</span>
                                        </a>
                                    </td>

                                </tr>



                                <!-- ROW 2 : 2 ITEMS (CENTERED) -->
                               

                            </table>

                        </td>
                    </tr>






                </table>



            </td>

            <!-- RIGHT COLOR STRIP -->
            <td width="10" valign="top" style="background: linear-gradient(to bottom,
          #EB1C2E 0 7.6923%,
#D4A02A 7.6923% 15.3846%,
#279B48 15.3846% 23.0769%,
#F44D24 23.0769% 30.7692%,
#00B0DA 30.7692% 38.4615%,
#FDBD18 38.4615% 46.1538%,
#E3155A 46.1538% 53.8461%,
#3A7E36 53.8461% 61.5384%,
#007FC7 61.5384% 69.2307%,
#E3155A 69.2307% 76.923%,
#50AF44 76.923% 84.6153%,
#003C70 84.6153% 92.3076%,
#E3155A 92.3076% 100%);
              background-repeat:no-repeat;background-size:28px 100%;min-height:1200px;">
                &nbsp;
            </td>
        </tr>
    </table>
    </td>
    </tr>

    </table>
    <!-- END MAIN CONTAINER -->

    </td>
    </tr>
    </table>

</body>

</html>`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.error('RiyadhSaudiArabiaMail error', err);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
