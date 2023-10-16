package com.moni.ecom.service;

import com.moni.ecom.dto.request.AuthenticationRequest;
import com.moni.ecom.dto.request.RegisterRequest;
import com.moni.ecom.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
