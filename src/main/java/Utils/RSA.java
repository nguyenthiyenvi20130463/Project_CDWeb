package Utils;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

public class RSA {
    private PublicKey publicKey;
    private PrivateKey privateKey;
    private KeyPairGenerator keyPairGenerator;
    private Cipher cipher;
    private KeyPair keyPair;

    public RSA(){
        generator();
    }
    public void generator(){
        try {
            keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            keyPairGenerator.initialize(1024);
            keyPair = keyPairGenerator.generateKeyPair();
            cipher = Cipher.getInstance("RSA");
        } catch (NoSuchAlgorithmException | NoSuchPaddingException e) {
            throw new RuntimeException(e);
        }
    }

    public String getPrivateKey(){
        this.privateKey = keyPair.getPrivate();
        return Base64.getEncoder().encodeToString(privateKey.getEncoded());
    }

    public String getPublicKey(){
        this.publicKey = keyPair.getPublic();
        return Base64.getEncoder().encodeToString(publicKey.getEncoded());
    }

    public String decrypt(String cipherText, byte[] publicKey) {
        try{
            byte[] cipherBytes = Base64.getDecoder().decode(cipherText);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            X509EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(publicKey);
            cipher.init(Cipher.DECRYPT_MODE, keyFactory.generatePublic(publicKeySpec));
            byte[] decryptedBytes = cipher.doFinal(cipherBytes);
            return new String(decryptedBytes, StandardCharsets.UTF_8);
        } catch (IllegalBlockSizeException | BadPaddingException | InvalidKeyException |
                 NoSuchAlgorithmException | InvalidKeySpecException e) {
            System.out.println(e.getMessage());
            return null;
        }

    }

    public String encrypt(String plainText, byte[] privateKey){
        try{
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(privateKey);
            cipher.init(Cipher.ENCRYPT_MODE, keyFactory.generatePrivate(privateKeySpec));
            byte[] encryptedBytes = cipher.doFinal(plainText.getBytes());
            return Base64.getEncoder().encodeToString(encryptedBytes);
        } catch (IllegalBlockSizeException | BadPaddingException | InvalidKeyException |
                 NoSuchAlgorithmException | InvalidKeySpecException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    public static void main(String[] args) {
        String Vi = "Vi cu te";
        RSA rsa = new RSA();
        SHA224 sha224 = new SHA224();
        byte[] objectHash = sha224.convertToByteArray(Vi);
        String hashingObject = sha224.hashing(objectHash);


        String encrypt = rsa.encrypt(hashingObject, Base64.getDecoder().decode("MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAIjRGa/y4MoQmPcMhaxrvnwHcgVbUk0MNx6zuKceMbcQ2t4nWkPk91F0rrxcn45Ra8B+vGyIBJf0kbdkqBaTQwJQ7w/gHO+2WlCY9T2czFva+w2mcYmW/DarvxJhLOFEE5Ltx+b+upUby0ACHxQrN/MvdKV/NIkqCswQ9RJirhALAgMBAAECgYAGvNngqR899DsSc/f41htLCXpiVyYwxPGQoZzuAmensmeTIPDGfvYD6z90kiZCvPjc7EuH3vfS8a+cuT24GnJ0m/EwAOMA6xc/l8MldXYnlfD/MIBnGQD96VdtYaFozhmGKlZ9WI1xkRb54FdcKAH1Eucdl4uKIVG4kgCFwG6HCQJBAOsJ2zeDFVWrUEsrbOk4J376t3t8/Ie+K+kpguUD/4DLTjddRIxneZeVgDehIscnV4ebIzltIfAOfGwySvyD7C8CQQCVBMC493vAJRbbM2qT3TOMvJrT9M2aNBJ0QEvP10n+HIZLY4MV48k4Nr9uUAD4VvVKCx+v/IUz85O7D1nM7FblAkBRLjpVViVMTbuR+xHHC+o4ZYhyUp02lWy9P+VCDLt3VMFTRhejFypcPProO/OzLdeBswfbkeIi9B3tkQFtbnNpAkAvjC+uFRFAUtVDJdm4yli7bCZ+wNqlfD3zJ9zIuWnbkeBrx5m471ByBk34dcCJfL2RXZFDxu/9jpexlQlTMIndAkBmhTqbBb2gRXHLEf6RbqjjXn2uhFpzWD711aNrBQR6/NhRCJnm9Bv+sfMXgr0axAD+DUuggZFnXFJ+MiyvM0l0"));
        System.out.println(encrypt);
    }
}

