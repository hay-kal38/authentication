package io.haikal.Authentification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<Register> loginUser(@RequestBody Register login) {
        Optional<Register> validUser = loginService.validateUser(login.getUserName(), login.getPassword());

        if (validUser.isPresent()) {
            return new ResponseEntity<>(validUser.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
