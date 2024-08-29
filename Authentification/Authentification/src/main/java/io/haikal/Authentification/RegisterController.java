package io.haikal.Authentification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;


    @PostMapping
    public ResponseEntity<Register> registerUser(@RequestBody Register register) {
        // Handle registration logic
        Register registeredUser = registerService.registerUser(register);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    // Endpoint to update the user's password

    @PatchMapping("/update-password")
    public ResponseEntity<String> updatePassword(@RequestBody PasswordUpdateRequest request) {
        Optional<Register> updatedUser = registerService.updatePassword(request.getUserName(), request.getNewPassword());

        if (updatedUser.isPresent()) {
            return new ResponseEntity<>("Password updated successfully.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found or invalid credentials.", HttpStatus.UNAUTHORIZED);
        }
    }
}
