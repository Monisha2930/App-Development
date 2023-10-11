package com.moni.ecom.service.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.moni.ecom.dto.request.AuthenticationRequest;
import com.moni.ecom.dto.request.RegisterRequest;
import com.moni.ecom.dto.response.AuthenticationResponse;
import com.moni.ecom.model.User;
import com.moni.ecom.model.enumerate.Role;
import com.moni.ecom.repository.UserRepository;
import com.moni.ecom.service.AuthService;
import com.moni.ecom.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
//                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
//                    .address(request.getAddress())
//                    .phone(request.getPhone())
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .uid(user.getUid())
                .email(user.getEmail())
                .name(user.getName())
                .role(user.getRole())
//                .address(user.getAddress())
//                .phone(user.getPhone())
                
                .build();
    }
}
