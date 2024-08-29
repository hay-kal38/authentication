package io.haikal.Authentification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;

    private static final Logger logger = LoggerFactory.getLogger(RegisterService.class);

    public Register registerUser(Register register) {
        // Encrypt the password before saving
        String encodedPassword = PasswordUtil.encodePassword(register.getPassword());
        register.setPassword(encodedPassword);

        // Save the user with the encoded password
        return registerRepository.save(register);
    }

    // Method to update the user's password
    public Optional<Register> updatePassword(String userName, String newPassword) {
        Optional<Register> user = registerRepository.findByUserName(userName);

        if (user.isPresent()) {
            Register existingUser = user.get();

            // Encrypt the new password before updating
            String encodedPassword = PasswordUtil.encodePassword(newPassword);
            existingUser.setPassword(encodedPassword);

            registerRepository.save(existingUser);
            return Optional.of(existingUser);
        }
        return Optional.empty();  // User not found
    }
}
