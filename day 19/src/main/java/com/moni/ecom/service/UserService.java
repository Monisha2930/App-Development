package com.moni.ecom.service;

import java.util.List;

import com.moni.ecom.dto.request.UserRequest;
import com.moni.ecom.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

//    CountResponse userCount();

}
