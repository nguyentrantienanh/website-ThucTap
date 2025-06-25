import backgrondImage from '../../../assets/background.jpg'

function RefundPolicy() {
  return (
    <>
      <div
        className='w-full h-50 flex items-center justify-center'
        style={{ backgroundImage: `url(${backgrondImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]'>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]'>Refund Policy</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-5 px-[10%] py-[5%] bg-[#f9f9f9] text-[16px] text-[#535455]'>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Overview</strong>
          <span className='text-[#6c757d]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda officia vel omnis, odit quidem, expedita
            nam deserunt molestiae accusamus voluptas aut. Sapiente voluptatem nulla unde quia harum illum ipsum dolore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem illum molestiae corrupti, maxime sint
            velit quibusdam officiis ipsam a minima quos voluptates possimus eaque, vitae, veniam consequuntur! Dolorem,
            architecto.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Data Collection & Use</strong>
          <span className='text-[#6c757d]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda officia vel omnis, odit quidem, expedita
            nam deserunt molestiae accusamus voluptas aut. Sapiente voluptatem nulla unde quia harum illum ipsum dolore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem illum molestiae corrupti, maxime sint
            velit quibusdam officiis ipsam a minima quos voluptates possimus eaque, vitae, veniam consequuntur! Dolorem,
            architecto.
          </span>
          <span className='text-[#6c757d]'>
            There are many variations of passages of Lorem available, but the majority Finibus onorum et alorum" by
            icero classical lite rature, discovered There are many variations of passages of Lorem available, but the
            majority There are many variations of passages of Lorem available, but the majority
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Cookies Data</strong>
          <span className='text-[#6c757d]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda officia vel omnis, odit quidem, expedita
            nam deserunt molestiae accusamus voluptas aut. Sapiente voluptatem nulla unde quia harum illum ipsum dolore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem illum molestiae corrupti, maxime sint
            velit quibusdam officiis ipsam a minima quos voluptates possimus eaque, vitae, veniam consequuntur! Dolorem,
            architecto.
          </span>
          <span className='text-[#6c757d]'>
            Data Cookies deserunt molestiae accusamus voluptas aut. Sapiente voluptatem nulla unde quia harum illum
            ipsum dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem illum molestiae corrupti,
            maxime sint velit quibusdam officiis ipsam a minima quos voluptates possimus eaque, vitae, veniam
            consequuntur! Dolorem, architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            officia vel omnis, odit quidem, expedita nam deserunt molestiae accusamus voluptas aut. Sapiente voluptatem
            nulla unde quia harum illum ipsum dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dolorem illum molestiae corrupti, maxime sint velit quibusdam officiis ipsam a minima quos voluptates
            possimus eaque, vitae, veniam consequuntur! Dolorem, architecto.
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <strong className='text-[22px]'>Data Storage</strong>
          <span className='text-[#6c757d]'>
            Pconsectetur adipisicing elit. Assumenda officia vel omnis, odit quidem, expedita nam deserunt molestiae
            accusamus voluptas aut. Sapiente voluptatem nulla unde quia harum illum ipsum dolore! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. In dolorem illum molestiae corrupti, maxime sint velit quibusdam officiis
            ipsam a minima quos voluptates possimus eaque, vitae, veniam consequuntur! Dolorem, architecto.
          </span>
        </div>
      </div>
    </>
  )
}

export default RefundPolicy
