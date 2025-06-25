import backgrondImage from '../../../assets/background.jpg'

function TermsOfService() {
  return (
    <>
      <div
        className='  w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${backgrondImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '>Terms of Service</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-5 px-[10%] py-[5%] bg-[#f9f9f9] text-[16px] text-[#535455]  '>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>1. Acceptance of Terms</strong>
          <span className='text-[#6c757d]'>
            By accessing or using the Bus Ticket website, you agree to comply with and be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our services.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>2. Service Description</strong>
          <span className='text-[#6c757d]'>
            Our website provides an online platform for users to search, book, and purchase bus tickets. We act as an
            intermediary between users and bus operators.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>3. User Responsibilities</strong>
          <span className='text-[#6c757d]'>
            You are responsible for providing accurate information when booking tickets. You must not use the website
            for fraudulent or unlawful activities.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>4. Ticket Booking and Payment</strong>
          <span className='text-[#6c757d]'>
            All bookings are subject to availability and confirmation by the bus operator. Payment must be made in full
            at the time of booking. Please review your booking details carefully before confirming your purchase.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>5. Cancellations and Refunds</strong>
          <span className='text-[#6c757d]'>
            Cancellation and refund policies are determined by the respective bus operators. Please refer to the
            specific policy provided during the booking process. We are not responsible for any changes or cancellations
            made by the bus operators.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>6. Intellectual Property</strong>
          <span className='text-[#6c757d]'>
            All content and materials on this website, including logos, text, images, and software, are the property of
            Bus Ticket or its partners. You may not use or reproduce any content without permission.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>7. Limitation of Liability</strong>
          <span className='text-[#6c757d]'>
            We are not liable for any direct or indirect damages arising from your use of the website, including but not
            limited to ticket availability, schedule changes, or service interruptions by bus operators.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>8. Changes to Terms</strong>
          <span className='text-[#6c757d]'>
            We reserve the right to update or modify these Terms of Service at any time. Changes will be effective upon
            posting on the website. Continued use of the website constitutes acceptance of the new terms.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>9. Contact Information</strong>
          <span className='text-[#6c757d]'>
            If you have any questions or concerns about these Terms of Service, please contact us using the information
            provided on our website.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>10. User Conduct</strong>
          <span className='text-[#6c757d]'>
            You agree not to use the website in any way that may damage, disable, overburden, or impair the website or
            interfere with any other party's use of the website. You must not attempt to gain unauthorized access to any
            part of the website or any systems or networks connected to the website.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>11. Privacy</strong>
          <span className='text-[#6c757d]'>
            Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy to
            understand our practices regarding your personal information.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>12. Third-Party Links</strong>
          <span className='text-[#6c757d]'>
            Our website may contain links to third-party websites or services that are not owned or controlled by us. We
            are not responsible for the content, privacy policies, or practices of any third-party websites or services.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>13. Termination</strong>
          <span className='text-[#6c757d]'>
            We reserve the right to terminate or suspend your access to the website at our sole discretion, without
            notice, for conduct that we believe violates these Terms of Service or is harmful to other users of the
            website or us.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>14. Severability</strong>
          <span className='text-[#6c757d]'>
            If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions
            will remain in full force and effect.
          </span>
        </div>
      </div>
    </>
  )
}

export default TermsOfService
