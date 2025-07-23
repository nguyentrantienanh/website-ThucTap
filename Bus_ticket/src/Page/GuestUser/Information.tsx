import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

 

export default function InformationGuestUser() {
  const { id } = useParams<{ id: string }>()
  const { name } = useParams<{ name: string }>()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cccd: '',
    birthday: ''
  })
  // Hàm xử lý thay đổi thông tin
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }))
}


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const raw = localStorage.getItem('guestUserInfo')
  if (!raw) return alert('Không tìm thấy dữ liệu')

  let guestList: any[] = []

  try {
    const parsed = JSON.parse(raw)
    guestList = Array.isArray(parsed) ? parsed : []
  } catch (err) {
    console.error('Lỗi parse guestUserInfo:', err)
    return alert('Dữ liệu không hợp lệ')
  }

  // Tìm index khách có id khớp
  const index = guestList.findIndex((guest) => String(guest.id) === String(name))
  if (index === -1) return alert('Không tìm thấy khách')

  // Cập nhật thông tin khách
  guestList[index] = {
    ...guestList[index],
    ...formData,
    ticket: guestList[index].ticket, // giữ nguyên vé
    id: guestList[index].id          // giữ nguyên id
  }

  // Lưu lại vào localStorage dạng mảng []
  localStorage.setItem('guestUserInfo', JSON.stringify(guestList))

  // Điều hướng đến trang thanh toán
  navigate(`/user/payment/${id}`)
}




  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-[#fff] p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Thông Tin Khách Vãng Lai</h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Họ và tên</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="Nguyễn Văn A"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="0901234567"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">CCCD</label>
          <input
            type="text"
            name="cccd"
            value={formData.cccd}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="012345678901"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Ngày sinh</label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-[#fff] px-6 py-2 rounded-lg hover:bg-green-600 w-full"
        >
          Tiếp tục thanh toán
        </button>
      </form>
    </div>
  )
}
