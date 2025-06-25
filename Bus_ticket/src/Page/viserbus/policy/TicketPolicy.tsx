import backgrondImage from '../../../assets/background.jpg'

function TicketPolicy() {
  return (
    <>
      <div
        className='w-full h-50 flex items-center justify-center'
        style={{ backgroundImage: `url(${backgrondImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]'>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]'>Ticket Policies</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-5 px-[10%] py-[5%] bg-[#f9f9f9] text-[16px] text-[#535455]'>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>1. Ticket Booking</strong>
          <span className='text-[#6c757d]'>
            All bookings are subject to seat availability and confirmation by the bus operator. Please provide accurate
            information during booking. Incorrect details may result in booking failure or boarding issues.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>2. Payment</strong>
          <span className='text-[#6c757d]'>
            Full payment is required at the time of booking. Accepted payment methods are listed on the website.
            Bookings are confirmed only after successful payment.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>3. Ticket Delivery</strong>
          <span className='text-[#6c757d]'>
            After payment, tickets will be sent to your email or available for download. Keep your ticket code safe and
            present it when boarding.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>4. Cancellations & Refunds</strong>
          <span className='text-[#6c757d]'>
            Cancellation and refund policies depend on each bus operator. Please review the specific terms during
            booking. We are not responsible for operator-initiated changes or cancellations.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>5. Booking Changes</strong>
          <span className='text-[#6c757d]'>
            Changes to bookings (date, time, passenger info) are subject to operator policies. Contact customer support
            or the operator for assistance.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>6. Boarding Requirements</strong>
          <span className='text-[#6c757d]'>
            Arrive at the departure point at least 30 minutes before departure. Present a valid ticket (printed or
            electronic) and identification if required.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>7. Lost or Stolen Tickets</strong>
          <span className='text-[#6c757d]'>
            If your ticket is lost or stolen, contact customer support promptly. Ticket re-issuance is subject to
            verification and operator policy.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>8. Operator Responsibilities</strong>
          <span className='text-[#6c757d]'>
            Bus operators are responsible for providing transportation as described in your booking. We are not liable
            for delays, cancellations, or service changes by operators.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>9. Passenger Conduct</strong>
          <span className='text-[#6c757d]'>
            Passengers must behave respectfully and follow bus staff instructions. Disruptive or unlawful behavior may
            result in denial of service without refund.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>10. Policy Updates</strong>
          <span className='text-[#6c757d]'>
            We may update these ticket policies at any time. Changes are effective upon posting on the website.
          </span>
        </div>
      </div>
    </>
  )
}

export default TicketPolicy
