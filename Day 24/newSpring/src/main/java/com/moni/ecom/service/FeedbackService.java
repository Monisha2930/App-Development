package com.moni.ecom.service;

import java.util.List;

import com.moni.ecom.dto.request.FeedbackRequest;
import com.moni.ecom.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}