package com.web.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.ecom.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    void deleteByUserUid(Long uid);

}
