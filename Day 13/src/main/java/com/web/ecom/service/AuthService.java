package com.web.ecom.service;

import com.web.ecom.dto.request.AuthenticationRequest;
import com.web.ecom.dto.request.RegisterRequest;
import com.web.ecom.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
