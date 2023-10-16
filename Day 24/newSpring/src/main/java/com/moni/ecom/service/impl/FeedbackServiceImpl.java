package com.moni.ecom.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.moni.ecom.dto.request.FeedbackRequest;
import com.moni.ecom.dto.response.FeedbackResponse;
import com.moni.ecom.model.Feedback;
import com.moni.ecom.repository.FeedbackRepository;
import com.moni.ecom.service.FeedbackService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {
    private final FeedbackRepository feedbackRepository;

    @Override
    public boolean saveFeedback(FeedbackRequest request) {
        if (feedbackRepository.findByUsernameAndUseremail(request.getUname(),
                request.getUemail()).isPresent()) {
            return false;
        }

        var feedback = Feedback.builder()
                .username(request.getUname())
                .useremail(request.getUemail())
                .comment(request.getComment())
                
                .build();
        feedbackRepository.save(feedback);
        return true;
    }

    @Override
    public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackRepository.findAll();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setUsername(feedback.getUsername());
                    response.setUseremail(feedback.getUseremail());
                    response.setComment(feedback.getComment());
                    return response;
                })
                .collect(Collectors.toList());
    }
}