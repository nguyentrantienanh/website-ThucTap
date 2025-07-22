// dữ liệu chat mẫu

export const chatData = [
  {
    id: 1,
    name: 'Chat with Admin',
    description: 'Hỗ trợ đặt vé xe',
    lastMessage: 'Cảm ơn bạn đã sử dụng dịch vụ.',
    timestamp: '2023-10-01T12:00:00Z',
    participants: ['admin', 'customer'],
    messages: [
      { id: 2, sender: 'customer', text: 'Chào admin, tôi muốn đặt vé xe.' },
      { id: 1, sender: 'admin', text: 'Chào bạn, bạn muốn đi tuyến nào ạ?' },
      { id: 2, sender: 'customer', text: 'Tôi muốn đi từ Hà Nội đến Đà Nẵng.' },
      { id: 1, sender: 'admin', text: 'Bạn muốn đi ngày nào và mấy giờ?' },
      { id: 2, sender: 'customer', text: 'Tôi muốn đi vào ngày mai lúc 8h sáng.' },
      { id: 1, sender: 'admin', text: 'Cảm ơn bạn, tôi sẽ kiểm tra vé còn trống.' },
      { id: 2, sender: 'customer', text: 'Cảm ơn admin.' }
    ]
  },
  {
    id: 2,
    name: 'Chat with Admin',
    description: 'Hỗ trợ thông tin chuyến đi',
    lastMessage: 'Cảm ơn admin rất nhiều.',
    timestamp: '2023-10-02T14:30:00Z',
    participants: ['admin', 'customer'],
    messages: [
      { id: 2, sender: 'customer', text: 'Xe có wifi không admin?' },
      { id: 1, sender: 'admin', text: 'Dạ, xe có wifi miễn phí bạn nhé.' },
      { id: 2, sender: 'customer', text: 'Có hỗ trợ nước uống không?' },
      { id: 1, sender: 'admin', text: 'Có, mỗi khách sẽ được tặng 1 chai nước.' },
      { id: 2, sender: 'customer', text: 'Cảm ơn admin.' }
    ]
  },
  {
    id: 3,
    name: 'Chat with Admin',
    description: 'Hỗ trợ đổi vé',
    lastMessage: 'Đúng rồi bạn, tôi sẽ tiến hành đổi vé.',
    timestamp: '2023-10-03T09:15:00Z',
    participants: ['admin', 'customer'],
    messages: [
      { id: 2, sender: 'customer', text: 'Tôi muốn đổi vé sang ngày khác được không?' },
      { id: 1, sender: 'admin', text: 'Bạn muốn đổi sang ngày nào ạ?' },
      { id: 2, sender: 'customer', text: 'Tôi muốn đổi sang ngày 20/06.' },
      { id: 1, sender: 'admin', text: 'Được bạn nhé, tôi sẽ hỗ trợ đổi vé cho bạn.' },
      { id: 2, sender: 'customer', text: 'Có mất phí không admin?' },
      { id: 1, sender: 'admin', text: 'Nếu đổi trước 24h sẽ không mất phí.' },
      { id: 2, sender: 'customer', text: 'Tôi đổi ngay bây giờ thì được đúng không?' },
      { id: 1, sender: 'admin', text: 'Đúng rồi bạn, tôi sẽ tiến hành đổi vé.' },
      { id: 2, sender: 'customer', text: 'Cảm ơn admin rất nhiều.' },
      { id: 1, sender: 'admin', text: 'Không có gì ạ, cảm ơn bạn đã sử dụng dịch vụ.' }
    ]
  }
]
