import backgroundPayment from '../../assets/background.jpg'
import {useParams} from 'react-router-dom'
import QR from '../../assets/QR.jpg'
import bus from '../../assets/bus.png'
import logo from '../../assets/logo/Bus_Ticket_Header.png'
import { useState } from 'react'


export default function Payment()  {
 const { id } = useParams<{ id: string }>()
  const userinfo = JSON.parse(localStorage.getItem('userInfo') || '{}')

  const UserList = JSON.parse(localStorage.getItem('userList') || '[]')
  const ticketList =  UserList.map((user: any) => user.ticket).flat()
 
  const ticket = ticketList.filter((item: any) => item.id === parseInt(id || '0'))
  console.log('userlisst',ticket)
  
  const GuestUserInfo = JSON.parse(localStorage.getItem('guestUserInfo') || '[]')
  const guestUserticketList = GuestUserInfo.map((user: any) => user.ticket).flat()
 const guestUserTicket = guestUserticketList.filter((item: any) => item.id === parseInt(id || '0'))
 console.log('s',guestUserTicket )

  const seats =  (userinfo.name ? ticketList : guestUserticketList)
    .map((item: any) => item.seats)
    .map((item: any) => {
      return item.map((seat: any) => seat.name)
    })

  const handlePayNow = () => {
      window.location.href = '/buytickets'
  }
  // hàm xử lý nút thoát
  const handleExit = () => {
    // xóa vé id hiện tại
    const newId = parseInt(id || '0')
    const updatedVedadat = ticketList.filter((item: any) => item.id !== newId)
    localStorage.setItem('vedadat', JSON.stringify(updatedVedadat))

    window.location.href = '/buytickets'
  }


 

   

  return (
      <>
       
   
     <div className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#fff]">
    {/* Header */}
    <div className="bg-green-500 py-4 px-6">
      <h2 className="text-3xl font-bold text-[#fff] text-center">Payment Page</h2>
    </div>

    {/* Nội dung chính */}
    <div className="flex flex-col md:flex-row">
      {/* Thông tin vé */}
      <div className="w-full md:w-1/2 p-6 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
          <img src={bus} alt="QR" className="w-20 h-20   object-contain" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800">Ticket Information</h3>
         
        { userinfo.name ?
         ticket.map((item: any, index: number) => (
          <div key={item.id} className="bg-gray-50 p-4 rounded-lg shadow border">
            <p className="text-gray-800 font-medium">🆔 ID vé: {item.id}</p>
            <p className="text-gray-800">📅 Ngày xuất phát: {item.dateStart}</p>
            <p className="text-gray-800">🚌 Loại xe Bus: {item.type}</p>
            <p className="text-gray-800">💺 Ghế: {seats[index].join(', ')}</p>
            <p className="text-gray-800">💰 Giá vé: {item.price} VND</p>
          </div>
        ))  : 
        guestUserTicket.map((item: any, index: number) => (
          <div key={item.id} className="bg-gray-50 p-4 rounded-lg shadow border">
            <p className="text-gray-800 font-medium">🆔 ID vé: {item.id}</p>
            <p className="text-gray-800">📅 Ngày xuất phát: {item.dateStart}</p>
            <p className="text-gray-800">🚌 Loại xe Bus: {item.type}</p>
            <p className="text-gray-800">💺 Ghế: {seats[index].join(', ')}</p>
            <p className="text-gray-800">💰 Giá vé: {item.price} VND</p>
          </div>
        ))}

        <div className="flex justify-center gap-4 pt-4">
          <button
            className="bg-green-500 cursor-pointer text-[#fff] px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
            onClick={handlePayNow}
          >
            Pay Now
          </button>
          <button
            className="bg-red-500 cursor-pointer text-[#fff] px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
            onClick={handleExit}
          >
            Exit
          </button>
        </div>
      </div>

      {/* QR code lớn */}
      <div className="w-full   flex-col md:w-1/2 p-6 flex justify-center items-center">
        <img
          src={QR}
          alt="QR Code"
          className="w-80 max-w-md rounded-xl shadow-lg  "
        />
        <div>
          <p className= "mt-4 text-gray-600 text-center">
            Quét mã QR để thanh toán vé xe buýt của bạn. Vui lòng đảm bảo thông tin vé là chính xác trước khi thanh toán.
             
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        
      </>
  )
}