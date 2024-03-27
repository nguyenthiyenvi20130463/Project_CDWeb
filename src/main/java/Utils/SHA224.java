package Utils;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class SHA224 {
    MessageDigest messageDigest;
    public SHA224(){
        generator();
    }

    public void generator(){
        try {
            messageDigest = MessageDigest.getInstance("SHA-224");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    public String hashing(byte[] bytes){
        this.messageDigest.reset();
        byte[] hashBytes = this.messageDigest.digest(bytes);
        // Convert the byte array to a hexadecimal string
        StringBuilder hexString = new StringBuilder();
        for (byte b : hashBytes) {
            hexString.append(String.format("%02X", b));
        }
        return hexString.toString();
    }

    // Method to convert object to byte array using serialization
    public byte[] convertToByteArray(Object object){
        try {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
            // Serialize the object into a byte array
            objectOutputStream.writeObject(object);
            objectOutputStream.flush();

            return byteArrayOutputStream.toByteArray();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}

