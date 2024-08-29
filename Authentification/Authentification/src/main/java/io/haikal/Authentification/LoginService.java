package io.haikal.Authentification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private RegisterRepository registerRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Optional<Register> validateUser(String userName, String password) {
        Optional<Register> user = registerRepository.findByUserName(userName);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return Optional.empty();
    }


}
