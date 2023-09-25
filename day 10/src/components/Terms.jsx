import React from 'react'
import Footer from './Footer';
import Header from './Header';
export const Terms = () => {
    return (
        <div className='main'>
            <Header />
            <div className='etc-wrapper'>
                <div className='etc-container shadow'>
                    <h1 className='primary etc-title shadow'> Terms & Conditions</h1>
                    <img src={"data:image/png;base64,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"} alt="login-img" className='auth-svg' />
                    <p className='etc-data'>

                    Acceptance of Terms<br/>

By using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.<br/>
 Use of the Website<br/>
You must be at least [age] years old to use this website.
 You are responsible for ensuring that your use of this website is in compliance with applicable laws and regulations.<br/>
User Registration<br/>
 Some areas of this website may require you to register for an account. You agree to provide accurate and complete information during the registration process.
You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
Content<br/>
 All content on this website, including text, graphics, images, and other materials, is for informational purposes only and should not be considered as professional advice.
You may not reproduce, distribute, modify, or otherwise use any content from this website without our written permission.<br/>
User Conduct<br/>
 You agree not to engage in any of the following prohibited activities:<br/>
Violating any applicable laws or regulations.
Using the website for any unlawful purpose.
Impersonating any person or entity.
Uploading, transmitting, or distributing viruses or malicious code.
Interfering with the website's operation or security.
Your use of this website is also governed by our Privacy Policy, which can be found [link to Privacy Policy].
We reserve the right to terminate or suspend your access to the website at our sole discretion, without notice, for any reason, including a breach of these Terms and Conditions.
Changes to Terms and Conditions
We may update or modify these Terms and Conditions from time to time. The latest version will be posted on the website, and your continued use of the website after any changes constitute your acceptance of those changes.<br/>
To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the website.
These Terms and Conditions shall be governed by and construed in accordance with the laws of Jurisdiction, and any disputes shall be resolved in the courts of Jurisdiction.<br/>
Contact Information<br/>
If you have any questions or concerns regarding these Terms and Conditions, please contact us at +91-9876543210.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}