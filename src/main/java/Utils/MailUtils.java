package Utils;

import Entity.MailConfig;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

public class MailUtils {
    static String attachFileName = "private-key_";
    public static boolean sendEmail(String to, String data, String datetime) {
        attachFileName += datetime + ".txt";
        Properties prop = new Properties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "465");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.socketFactory.port", "465");
        prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");

        Session session = Session.getInstance(prop, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(MailConfig.APP_EMAIL, MailConfig.APP_PASSWORD);
            }
        });
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(MailConfig.APP_EMAIL));
            message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(to));
            message.setSubject("Day la private key cua ban: ");

            PrintWriter writer = new PrintWriter(new FileWriter(attachFileName));
            writer.println(data);
            writer.flush();
            writer.close();
            MimeBodyPart attachmentPart = new MimeBodyPart();
            attachmentPart.attachFile(attachFileName);
            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(attachmentPart);
            message.setContent(multipart);
            Transport.send(message);
            return true;
        } catch (MessagingException e) {
            return false;
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            File file = new File(attachFileName);
            if (file.exists()) {
                file.delete();
            }
        }
    }

    public static void main(String[] args) {
        Date now = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd_HH-mm-ss");
        sendEmail("20130463@st.hcmuaf.edu.vn", "Nguyen Yen Vi", dateFormat.format(now));
    }
}

