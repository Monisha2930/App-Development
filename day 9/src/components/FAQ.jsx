import React from 'react'
import Footer from './Footer';
import '../assets/FAQ.css';
import Header from './Header';
export const FAQ = () => {
    return (
        <div className='main'>
            <Header />
            <div className='etc-wrapper'>
                <div className='etc-container shadow'>
                    <h1 className='primary etc-title shadow'> Frequently Asked Questions </h1>
                    <img src={"data:image/png;base64,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"} alt="login-img" className='auth-svg' />
                    <span className='etc-datax'>

                        <div className="faq">
                            <input id="faq-a" type="checkbox" />
                            <label htmlFor="faq-a">
                                <p className="faq-heading">What if my gift arrives damaged or is incorrect??</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">If your gift arrives damaged or is not what you ordered, please contact our customer support team immediately. We will work to resolve the issue and arrange for a replacement or refund.</p>
                            </label>
                            <input id="faq-b" type="checkbox" />
                            <label htmlFor="faq-b">
                                <p className="faq-heading">Can I cancel my order after it has been placed??</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">You may cancel your order within a specific timeframe after placing it. Please refer to our Order Cancellation Policy  for details.</p>
                            </label>
                            <input id="faq-c" type="checkbox" />
                            <label htmlFor="faq-c">
                                <p className="faq-heading"> Can I request gift wrapping for my order?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Yes, we offer gift wrapping options for many of our products. During checkout, you can choose to have your items gift-wrapped for a special touch.</p>
                            </label>
                            <input id="faq-d" type="checkbox" />
                            <label htmlFor="faq-d">
                                <p className="faq-heading">How long will it take for my gift to be delivered?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Delivery times may vary depending on the destination and shipping method selected. You can find estimated delivery times on the product page and during checkout.</p>
                            </label>
                            <input id="faq-e" type="checkbox" />
                            <label htmlFor="faq-e">
                                <p className="faq-heading">How can I track my order?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.</p>
                            </label>
                            <input id="settings" type="checkbox" />
                            <input id="faq-f" type="checkbox" />
                            <label htmlFor="faq-f">
                                <p className="faq-heading">How do I place an order?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">To place an order, simply browse our website, select the gift item you want, add it to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.</p>
                            </label>
                        </div>

                        <br />
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}