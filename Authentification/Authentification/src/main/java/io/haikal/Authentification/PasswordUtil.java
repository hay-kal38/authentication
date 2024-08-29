package io.haikal.Authentification;


import org.springframework.security.crypto.bcrypt.BCrypt;

public class PasswordUtil {

    // Encode a password
    public static String encodePassword(String password) {
        BCrypt BCrypt = new BCrypt();
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    // Verify a password
    public static boolean verifyPassword(String rawPassword, String encodedPassword) {
        return BCrypt.checkpw(rawPassword, encodedPassword);
    }

    public static void main(String[] args) {
        String rawPassword = "mypassword";
        String encodedPassword = encodePassword(rawPassword);

        System.out.println("Encoded Password: " + encodedPassword);

        boolean isPasswordMatch = verifyPassword(rawPassword, encodedPassword);
        System.out.println("Password match: " + isPasswordMatch);
    }
}
