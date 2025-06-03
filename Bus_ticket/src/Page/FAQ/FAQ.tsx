import { useState } from 'react'
import Icon from '../../icons/Icon' // Assuming you have an Icon component for icons

function FAQ() {
  const faqsrgith = [
    {
      id: 1,
      question: 'What is Autobus?',
      answer:
        'Autobus is a bus ticket booking platform that allows users to book bus tickets online for various routes and destinations.'
    },
    {
      id: 2,
      question: 'How do I book a bus ticket?',
      answer:
        'To book a bus ticket, simply visit our website, select your desired route, choose a bus, and complete the payment process.'
    },
    {
      id: 3,
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods including credit/debit cards, mobile wallets, and bank transfers.'
    }
  ]
  const faqsleft = [
    {
      id: 4,
      question: 'Can I cancel or change my booking?',
      answer:
        'Yes, you can cancel or change your booking within the allowed time frame. Please refer to our cancellation policy for details.'
    },
    {
      id: 5,
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support via email, phone, or through the contact form on our website.'
    },
    {
      id: 6,
      question: 'Is there a mobile app available?',
      answer:
        'Yes, we have a mobile app available for both Android and iOS devices for easy booking and management of your tickets.'
    }
  ]

  const [openIdrigth, setOpenIdright] = useState<number | null>(null)
  const [openIdleft, setOpenIdleft] = useState<number | null>(null)

  const [isclickedright, setIsClickedrigth] = useState(false)
  const [isclickedleft, setIsClickedleft] = useState(false)

  const handleToggleright = (id: number) => {
    setOpenIdright(openIdrigth === id ? null : id)
    setIsClickedrigth(!isclickedright)
  }
  const handleToggleleft = (id: number) => {
    setOpenIdleft(openIdleft === id ? null : id)
    setIsClickedleft(!isclickedleft)
  }

  return (
    <>
    <div className='pt-10'>

      <div className='  flex flex-col items-center justify-center text-center xl:px-30 '>
        <h1 className='text-4xl font-bold mb-6'>Frequently Asked Questions</h1>
        <p>
          Nobis minus earum perferendis nemo cupiditate optio, rem neque incidunt quia laborum ut praesentium corporis
          quam exercitationem, atque illo aut excepturi cum.
        </p>
      </div>

      <section className='grid grid-cols-2 gap-5 px-10 py-5 bg-[#f9f9f9]  '>
        <div className=' '>
          <div className='flex flex-col gap-5  h-80  '>
            {faqsleft.map((faq) => (
              <div key={faq.id} className=' '>
                <h2 className='text-lg font-semibold cursor-pointer p-4  border-2 border-[#1db000]' onClick={() => handleToggleleft(faq.id)}>
                  <i className=' text-[#1db000] '>
                    {isclickedleft ? (
                      <i className='pr-2 '>
                        <Icon name='dow' />
                      </i>
                    ) : (
                      <i className='pr-2'>
                        <Icon name='up' />
                      </i>
                    )}
                  </i>
                  {faq.question}
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIdleft === faq.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className='text-gray-700'>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=' '>
          <div className='flex flex-col gap-5 h-80'>
            {faqsrgith.map((faq) => (
              <div key={faq.id} className=' '>
                <h2 className='text-lg font-semibold cursor-pointer p-4 border-2 border-[#1db000]' onClick={() => handleToggleright(faq.id)}>
                  <i className=' text-[#1db000] '>
                    {isclickedright ? (
                      <i className='pr-2'>
                        <Icon name='dow' />
                      </i>
                    ) : (
                      <i className='pr-2'>
                        <Icon name='up' />
                      </i>
                    )}
                  </i>
                  {faq.question}
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIdrigth === faq.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className='text-gray-700'>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          </div>
    </>
  )
}
export default FAQ
