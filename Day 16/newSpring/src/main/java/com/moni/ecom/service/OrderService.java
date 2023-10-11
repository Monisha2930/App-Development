package com.moni.ecom.service;

import java.util.List;

import com.moni.ecom.dto.request.OrderRequest;
import com.moni.ecom.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

	List<OrderResponse> getOrders(Long uid);

}
