import background from '../../../assets/background.jpg'
import { useState } from 'react'

import { googleLogout } from '@react-oauth/google'
export default function ProfileSetting() {
  const handleGoogleLogout = () => {
    googleLogout()
    localStorage.removeItem('userInfo') // Xóa thông tin người dùng khỏi localStorage
    window.location.href = '/'
  }
  const UserInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  const user = JSON.parse(localStorage.getItem('userthongtin') || '{}')

  // profile setting
  const [nameValue, setnameValue] = useState(user.name || '')
  const [countryValue, setCountryValue] = useState(user.country || 'vietnam')
  const [countryCode, setCountryCode] = useState(user.countryCode || '84 +')
  const [phoneValue, setPhoneValue] = useState(user.phone || '')
  const [addressValue, setaddressValue] = useState(user.address || '')
  const [stateValue, setstateValue] = useState(user.state || '')
  const [zipcodeValue, setzipcodeValue] = useState(user.zipcode || '')
  const [cityValue, setcityValue] = useState(user.city || '')

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
  const handleStateChange = (e: any) => {
    setstateValue(e.target.value)
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
      (nameValue.trim() !== '' && countryValue.trim() !== '') ||
      phoneValue.length >= 10 ||
      addressValue.trim() !== '' ||
      stateValue.trim() !== '' ||
      zipcodeValue.trim() !== '' ||
      cityValue.trim() !== ''
    )
  }
  // hàm lưu thông tin người dùng khi nhấn nút xác nhận thành localStorage mới
  const handleSaveUserthonin = () => {
    const Userthonin = {
      name: nameValue,
      country: countryValue,
      phone: Number(phoneValue),
      countryCode: countryCode,
      address: addressValue,
      state: stateValue,
      zipcode: zipcodeValue,
      city: cityValue
    }
    localStorage.setItem('userthongtin', JSON.stringify(Userthonin))
    window.alert('thành công')
  }
  console.log('hi', zipcodeValue)
  console.log('', nameValue)

  return (
    <>
      <div
        className=' w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '>Profile Setting</h1>
        </div>
      </div>
      <div className='flex flex-col   mx-10  bg-[#fff]  '>
        <div className='h-auto'>
          <div className='p-4 mt-[-20px]   '>
            <div className=' flex   gap-5  '>
              <div className=' justify-center items-center flex flex-col w-1/3  gap-2 p-4 rounded-md'>
                <img src={UserInfo.imageUrl} alt='' className=' w-20 h-20 object-cover rounded-full ' />
                <p>
                  {UserInfo.firstname} {UserInfo.lastname}
                </p>
                <h2 className='text-lg font-semibold'>User Information</h2>
              </div>

              <form className=' grid grid-cols-2 w-full gap-4 my-4'>
                <div className='flex flex-col col-span-2 gap-2'>
                  <label htmlFor=''>
                    Username <sup className='text-red-600'>*</sup>
                  </label>
                  <input
                    type='text'
                    value={nameValue}
                    onChange={handleChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                    placeholder={` ${UserInfo.firstname} ${UserInfo.lastname}`}
                  />
                </div>
                <div className='flex flex-col  gap-2'>
                  <label htmlFor=''>
                    Country <sup className='text-red-600'>*</sup>
                  </label>
                  <select
                    value={countryValue}
                    onChange={handleCountryChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                  >
                    {countryOptions.map((option) => (
                      <option key={option.id} value={option.value} id={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor=''>
                    Mobile<sup className='text-red-600'>*</sup>
                  </label>
                  <div className='flex items-center'>
                    <span className='p-2 border-1 w-20 bg-[#e2e2e2] border-gray-300 rounded-l-md'>{countryCode}</span>
                    <input
                      type='number'
                      value={phoneValue}
                      onChange={handlePhoneChange}
                      className='p-2 border-1 border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300 w-full focus:border-green-500'
                      placeholder='Nhập số điện thoại...'
                    />
                  </div>
                </div>
                <div className='flex flex-col  gap-2'>
                  <label htmlFor=''>Address</label>
                  <input
                    type='text'
                    value={addressValue}
                    onChange={handleAddressChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                    placeholder='Nhập  địa chỉ'
                  />
                </div>
                <div className='flex flex-col  gap-2'>
                  <label htmlFor=''>Email</label>
                  <input
                    type='text'
                    value={stateValue}
                    onChange={handleStateChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                    placeholder={` ${UserInfo.email}`}
                  />
                </div>
                <div className='flex flex-col  gap-2'>
                  <label htmlFor=''>Zip Code</label>
                  <input
                    type='text'
                    value={zipcodeValue}
                    onChange={handleZipcodeChange}
                    className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                    placeholder='Nhập mã thành phố'
                  />
                </div>
                <div className='flex flex-col gap-2'>
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
            <button
              onClick={handleSaveUserthonin}
              className={`bg-[#23ff52] h-10 w-full mt-2   text-black font-semibold rounded ${isFormValid() ? 'hover:bg-[#00ff37] cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormValid()} // Vô hiệu hóa nút nếu form không hợp lệ
            >
              cập nhật
            </button>

            <button
              onClick={handleGoogleLogout}
              className={`bg-[#23ff52] h-10 w-full mt-2   text-black font-semibold rounded`}
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
