import background from '../../../assets/background.jpg'
import Avatar from '../../../assets/avatar.jpg'
import { useState } from 'react'

import { googleLogout } from '@react-oauth/google'
export default function ProfileSetting() {
  const handleGoogleLogout = () => {
    googleLogout()
    localStorage.removeItem('userInfo') // Xóa thông tin người dùng khỏi localStorage
    localStorage.removeItem('userthongtin') // Xóa thông tin người dùng khỏi localStorage
    window.location.href = '/'
  }
  const UserInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  const user = JSON.parse(localStorage.getItem('userthongtin') || '{}')

  // profile setting
  const [nameValue, setnameValue] = useState(user.name || `${UserInfo.firstname} ${UserInfo.lastname}`) // Lấy tên người dùng từ localStorage hoặc mặc định
  const [countryValue, setCountryValue] = useState(user.country || UserInfo.country || 'vietnam')
  const [countryCode, setCountryCode] = useState(user.countryCode || UserInfo.countryCode || '84 +')
  const [phoneValue, setPhoneValue] = useState(user.phone || UserInfo.phone || '')
  const [addressValue, setaddressValue] = useState(user.address || UserInfo.address || '')
  const [emailValue, setemailValue] = useState(user.state || UserInfo.email || `${UserInfo.email}`) //
  const [zipcodeValue, setzipcodeValue] = useState(user.zipcode || UserInfo.zipcode || '')
  const [cityValue, setcityValue] = useState(user.city || UserInfo.city || '')

  const countryOptions = [
    { id: '1', maqg: '84 +', value: 'vietnam', label: 'Vietnam' },
    { id: '2', maqg: '29 +', value: 'usa', label: 'USA' },
    { id: '3', maqg: '81 +', value: 'japan', label: 'Japan' },
    { id: '4', maqg: '82 +', value: 'korea', label: 'Korea' }
  ]
  // Hàm xử lý thay đổi quốc gia
  const handleCountryChange = (e: any) => {
    const selectedCountryValue = e.target.value // Lấy giá trị quốc gia đã chọn
    setCountryValue(selectedCountryValue) // Cập nhật giá trị state cho quốc gia
    const selectedOption = countryOptions.find((option) => option.value === selectedCountryValue)
    if (selectedOption) {
      setCountryCode(selectedOption.maqg) // Cập nhật mã quốc gia tương ứng
    } else {
      setCountryCode('')
    }
  }
  // Hàm xử lý thay đổi tên người dùng
  const handleChange = (e: any) => {
    setnameValue(e.target.value) // Cập nhật giá trị state khi người dùng nhập
  }
  // Hàm xử lý thong tin
  const handlePhoneChange = (e: any) => {
    setPhoneValue(e.target.value)
  }
  const handleAddressChange = (e: any) => {
    setaddressValue(e.target.value)
  }
  const handleEmailChange = (e: any) => {
    setemailValue(e.target.value)
  }
  const handleZipcodeChange = (e: any) => {
    setzipcodeValue(e.target.value)
  }
  const handleCityChange = (e: any) => {
    setcityValue(e.target.value)
  }

  // hàm xử lý nhập thông tin đầy đủ chưa
  const isFormValid = () => {
    return (
      nameValue.trim() !== '' &&
      countryValue.trim() !== '' &&
      phoneValue.trim().length === 10 &&
      (addressValue.trim() !== '' || emailValue.trim() !== '' || zipcodeValue.trim() !== '' || cityValue.trim() !== '')
    )
  }
  const handleSaveUserthonin = () => {
    const updatedUser = {
      id: UserInfo.id,
      email: emailValue,
      firstname: nameValue.split(' ')[0] || '',
      lastname: nameValue.split(' ')[1] || '',
      googleId: UserInfo.googleId,
      imageUrl: UserInfo.imageUrl,
      name: nameValue,
      country: countryValue,
      countryCode,
      phone: phoneValue,
      address: addressValue,
      zipcode: zipcodeValue,
      city: cityValue
    }

    localStorage.setItem('userthongtin', JSON.stringify(updatedUser))

    const userList: (typeof updatedUser)[] = JSON.parse(localStorage.getItem('userList') || '[]')

    const index = userList.findIndex((user) => user.id === updatedUser.id)

    if (index !== -1) {
      userList[index] = updatedUser // Cập nhật nếu đã có
    } else {
      userList.push(updatedUser) // Thêm mới nếu chưa có
    }

    localStorage.setItem('userList', JSON.stringify(userList))

    window.alert('Thông tin đã được cập nhật!')
  }

  return (
    <>
      <div
        className=' w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]  '>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#fff]  '>Profile Setting</h1>
        </div>
      </div>
      <div className='flex flex-col  max-sm:items-center mx-10  bg-[#fff]  '>
        <h1 className='font-black pt-5 text-1xl sm:text-2xl'>Thông tin cá nhân</h1>
        <div className='h-full py-5'>
          <div className='p-4  shadow-[0_5px_25px_rgba(0,0,0,0.25)]'>
            <div className=' flex max-sm:flex-col max-sm:items-center gap-5  '>
              <div className=' justify-center items-center flex flex-col w-1/3  gap-2 p-4 rounded-md'>
                <img
                  src={UserInfo.imageUrls || Avatar}
                  className=' w-10 h-10 sm:w-20 sm:h-20 lg:w-30 lg:h-30 xl:w-40 xl:h-40 object-cover rounded-2xl '
                />
                <p className='text-nowrap'>
                  {UserInfo.firstname} {UserInfo.lastname}
                </p>
                <h2 className='text-[14px] sm:text-[16px] text-nowrap font-semibold '>User Information</h2>
              </div>

              <form className=' grid grid-cols-1 sm:grid-cols-2 w-full gap-4 sm:my-4'>
                <div className='flex flex-col col-span-1 sm:col-span-2 gap-2 text-[15px] sm:text-[18px]'>
                  <label htmlFor=''>
                    Username <sup className='text-red-600'>*</sup>
                  </label>
                  <input
                    type='text'
                    value={nameValue}
                    onChange={handleChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                  />
                </div>

                <div className='flex flex-col text-[15px] sm:text-[18px]  gap-2'>
                  <label htmlFor=''>
                    Country <sup className='text-red-600'>*</sup>
                  </label>
                  <select
                    value={countryValue}
                    onChange={handleCountryChange}
                    className=' text-[15px] sm:text-[18px] p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                  >
                    {countryOptions.map((option) => (
                      <option key={option.id} value={option.value} id={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col gap-2 text-[15px] sm:text-[18px]'>
                  <label htmlFor=''>
                    Mobile<sup className='text-red-600'>*</sup>
                  </label>
                  <div className='flex flex-col '>
                    <div className='flex items-center border-1 border-gray-300 rounded-md shadow-sm '>
                      <span className='p-2 border-1 w-20 bg-[#e2e2e2] border-gray-300 rounded-l-md text-[15px] sm:text-[18px] text-nowrap'>
                        {countryCode}
                      </span>
                      <input
                        type='text'
                        value={phoneValue}
                        onChange={handlePhoneChange}
                        maxLength={10} // giới hạn độ dài
                        className={`p-2 border-1 text-[15px] sm:text-[18px] border-gray-300 rounded-r-md shadow-sm w-full 
                               focus:outline-none focus:ring-green-500 focus:shadow-green-300 focus:border-green-500
                                   ${phoneValue.length > 0 && phoneValue.length !== 10 ? 'border-red-500' : ''}
                                      `}
                        placeholder='Nhập số điện thoại...'
                      />
                    </div>

                    {phoneValue.length > 0 && phoneValue.length !== 10 && (
                      <span className='text-red-500   mt-1 text-[15px] sm:text-[18px]'>
                        Số điện thoại phải có đúng 10 chữ số.
                      </span>
                    )}
                  </div>
                </div>
                <div className='flex flex-col text-[15px] sm:text-[18px] gap-2'>
                  <label htmlFor=''>Address</label>
                  <input
                    type='text'
                    value={addressValue}
                    onChange={handleAddressChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                    placeholder='Nhập  địa chỉ'
                  />
                </div>
                <div className='flex flex-col text-[15px] sm:text-[18px] gap-2'>
                  <label htmlFor=''>Email</label>
                  <input
                    type='text'
                    value={emailValue}
                    onChange={handleEmailChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                    placeholder={` ${UserInfo.email}`}
                  />
                </div>
                <div className='flex flex-col text-[15px] sm:text-[18px] gap-2'>
                  <label htmlFor=''>Zip Code</label>
                  <input
                    type='text'
                    value={zipcodeValue}
                    onChange={handleZipcodeChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                    placeholder='Nhập mã thành phố'
                  />
                </div>
                <div className='flex flex-col text-[15px] sm:text-[18px] gap-2'>
                  <label htmlFor=''>City</label>
                  <input
                    type='text'
                    value={cityValue} // Liên kết giá trị với state
                    onChange={handleCityChange} // Lắng nghe sự kiện thay đổi
                    placeholder='Nhập thành phố'
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                  />
                </div>
              </form>
            </div>
            <div className='sm:px-10 px-2 mt-2 flex gap-4 max-sm:justify-between'>
              <button
                onClick={handleSaveUserthonin}
                className={`bg-[#23ff52] h-10 w-full mt-2  text-black font-semibold rounded ${isFormValid() ? 'hover:bg-[#00ff37] cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!isFormValid()}
              >
                cập nhật
              </button>

              <button
                onClick={handleGoogleLogout}
                className={`bg-[#ff0000] h-10 w-full mt-2  cursor-pointer  text-black font-semibold rounded`}
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
