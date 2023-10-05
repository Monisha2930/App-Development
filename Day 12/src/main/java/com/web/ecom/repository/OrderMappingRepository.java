package com.web.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.ecom.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}
