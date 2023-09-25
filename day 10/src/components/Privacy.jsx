import React from 'react'
import Footer from './Footer';
import Header from './Header';
export const Privacy = () => {
  return (
    <div className='main'>
      <Header />
      <div className='etc-wrapper'>
        <div className='etc-container shadow'>
          <h1 className='primary etc-title shadow'> Privacy Policy</h1>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEHZ5YqYdpbPvACp1VCcL8hMx01umlYcabw&usqp=CAU"} alt="login-img" className='auth-svg' />
          <p className='etc-data'>
          Welcome to our E-commerce Website . We are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.<br/>

We may collect the following types of information:<br/>

Personal Information: When you create an account or make a purchase, we may collect personal information such as your name, email address, phone number, shipping address, and payment information.

Usage Information: We collect information about your interactions with our website, such as your browsing history, pages viewed, search queries, and other actions you take while using our services.

Device and Location Information: We may collect information about the device you use to access our website, including device type, operating system, and IP address. We may also collect information about your location with your consent.<br/>


We use the information we collect for the following purposes:<br/>

Providing and Improving Our Services: We use your information to provide, maintain, and improve our website and services, including order processing and fulfillment.

Personalization: We use your information to personalize your shopping experience, recommend products, and provide tailored content.

Communication: We use your information to communicate with you, send order updates, respond to your inquiries, and send promotional messages with your consent.

Security and Fraud Detection: We use your information to detect and prevent fraud, unauthorized access, and other security issues.

Legal Compliance: We use your information to comply with legal obligations, such as tax and regulatory requirements.<br/>


We may share your information with the following parties:<br/>

Service Providers: We may share your information with third-party service providers who assist us in performing functions such as payment processing, order fulfillment, and customer support.

Affiliated Companies: We may share your information with other companies within our corporate family to provide and improve our services.

Legal and Safety: We may disclose your information in response to legal requests, to protect our rights, privacy, safety, or property, and to enforce our terms and policies.
Marketing and Advertising: With your consent, we may share your information with third parties for marketing and advertising purposes.<br/>
You have the following rights regarding your information:<br/>
Access, Correction, and Deletion: You may access, correct, or delete your personal information by logging into your account or contacting us.
Marketing Communications: You can opt out of receiving marketing communications by following the instructions in our messages or contacting us.
Cookie Preferences: You can manage your cookie preferences through your browser settings.
Thank you for trusting us with your personal information. We are committed to maintaining the privacy and security of your data.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}