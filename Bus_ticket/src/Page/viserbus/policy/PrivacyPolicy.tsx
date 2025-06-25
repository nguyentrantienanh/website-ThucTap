import backgrondImage from '../../../assets/background.jpg'

function PrivacyPolicy() {
  return (
    <>
      <div
        className='  w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${backgrondImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '>Privacy Policy</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-5 px-[10%] py-[5%] bg-[#f9f9f9] text-[16px] text-[#535455]  '>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Introduction</strong>
          <span className='text-[#6c757d]'>
            This Privacy Policy describes how we collects, uses, and discloses information, including personal
            information, in connection with your use of our website.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Information We Collect</strong>
          <p className='text-[#6c757d]'>We collect two main types of information on the Website:</p>
          <p>
            <strong className='text-[22px]'>Personal Information:</strong>
            <span>
              {' '}
              This includes data that can identify you as an individual, such as your name, email address, phone number,
              or mailing address. We only collect this information when you voluntarily provide it to us, like signing
              up for a newsletter, contacting us through a form, or making a purchase.
            </span>
          </p>
          <p>
            <strong className='text-[22px]'>Non-Personal Information:</strong>
            <span>
              This data cannot be used to identify you directly. It includes details like your browser type, device
              type, operating system, IP address, browsing activity, and usage statistics. We collect this information
              automatically through cookies and other tracking technologies.
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>How We Use Information</strong>
          <p className='text-[#6c757d]'>The information we collect allows us to:</p>
          <p>Operate and maintain the Website effectively.</p>
          <p>Send you newsletters or marketing communications, but only with your consent.</p>
          <p>Respond to your inquiries and fulfill your requests.</p>
          <p>Analyze usage patterns to improve our services and user experience.</p>
          <p>Improve the Website and your user experience.</p>
          <p>Personalize your experience on the Website based on your browsing habits.</p>
          <p>Analyze how the Website is used to improve our services.</p>
          <p>Comply with legal and regulatory requirements.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Sharing of Information</strong>
          <span className='text-[#6c757d]'>
            We may share your information with trusted third-party service providers who assist us in operating the
            Website and delivering our services. These providers are obligated by contract to keep your information
            confidential and use it only for the specific purposes we disclose it for. We will never share your personal
            information with any third parties for marketing purposes without your explicit consent.
          </span>{' '}
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Data Retention</strong>
          <span className='text-[#6c757d]'>
            We retain your personal information only for as long as necessary to fulfill the purposes it was collected
            for. We may retain it for longer periods only if required or permitted by law.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Security Measures</strong>
          <span className='text-[#6c757d]'>
            We take reasonable precautions to protect your information from unauthorized access, disclosure, alteration,
            or destruction. However, complete security cannot be guaranteed for any website or internet transmission.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Changes to this Privacy Policy</strong>
          <p className='text-[#6c757d]'>
            We may update this Privacy Policy periodically. We will notify you of any changes by posting the revised
            policy on the Website. We recommend reviewing this policy regularly to stay informed of any updates.
          </p>
          <p className='text-[#6c757d]'>
            <strong className='text-[22px]'>Remember: </strong>{' '}
            <span>
              This is a sample policy and may need adjustments to comply with specific laws and reflect your website's
              unique data practices. Consider consulting with a legal professional to ensure your policy is fully
              compliant.
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
export default PrivacyPolicy
