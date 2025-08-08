const express = require('express');
const router = express.Router();

// Dữ liệu ticket
const ticketData = [
  {
    id: 1,
    diemdi: 'Home_location.Ha Noi',
    diemden: 'Home_location.Phu Quoc',
    seatLayout: '2x2',
    type: 'AC',
    starttime: '08:00 AM',
    endtime: '04:30 PM',
    timetogo: '08:30 min',
    offday: 'Friday',
    facilities: ['Water Bottle', 'Pillow', 'Wifi'],
    seat: [
      { id: 1, name: 'A1', price: '100' },
      { id: 2, name: 'A2', price: '100' },
      { id: 3, name: 'A3', price: '100' },
      { id: 4, name: 'A4', price: '100' },
      { id: 5, name: 'B1', price: '90' },
      { id: 6, name: 'B2', price: '90' },
      { id: 7, name: 'B3', price: '90' },
      { id: 8, name: 'B4', price: '90' },
      { id: 9, name: 'C1', price: '80' },
      { id: 10, name: 'C2', price: '80' },
      { id: 11, name: 'C3', price: '80' },
      { id: 12, name: 'C4', price: '80' },
      { id: 13, name: 'D1', price: '70' },
      { id: 14, name: 'D2', price: '70' },
      { id: 15, name: 'D3', price: '70' },
      { id: 16, name: 'D4', price: '70' },
      { id: 17, name: 'E1', price: '60' },
      { id: 18, name: 'E2', price: '60' },
      { id: 19, name: 'E3', price: '60' },
      { id: 20, name: 'E4', price: '60' },
      { id: 21, name: 'F1', price: '50' },
      { id: 22, name: 'F2', price: '50' },
      { id: 23, name: 'F3', price: '50' },
      { id: 24, name: 'F4', price: '50' },
      { id: 25, name: 'G1', price: '40' },
      { id: 26, name: 'G2', price: '40' },
      { id: 27, name: 'G3', price: '40' },
      { id: 28, name: 'G4', price: '40' },
      { id: 29, name: 'H1', price: '40' },
      { id: 30, name: 'H2', price: '40' },
      { id: 31, name: 'H3', price: '40' },
      { id: 32, name: 'H4', price: '40' }
    ]
  },
  {
    id: 2,
    diemdi: 'Home_location.Ho Chi Minh',
    diemden: 'Home_location.Quy Nhon',
    seatLayout: '2x2',
    type: 'AC',
    starttime: '09:00 AM',
    endtime: '05:30 PM',
    timetogo: '08:30 min',
    offday: 'Friday',
    facilities: ['Water Bottle', 'Pillow', 'Wifi'],
    seat: [
      { id: 1, name: 'A1', price: '95' },
      { id: 2, name: 'A2', price: '95' },
      { id: 3, name: 'A3', price: '95' },
      { id: 4, name: 'A4', price: '95' },
      { id: 5, name: 'B1', price: '85' },
      { id: 6, name: 'B2', price: '85' },
      { id: 7, name: 'B3', price: '85' },
      { id: 8, name: 'B4', price: '85' },
      { id: 9, name: 'C1', price: '75' },
      { id: 10, name: 'C2', price: '75' },
      { id: 11, name: 'C3', price: '75' },
      { id: 12, name: 'C4', price: '75' },
      { id: 13, name: 'D1', price: '65' },
      { id: 14, name: 'D2', price: '65' },
      { id: 15, name: 'D3', price: '65' },
      { id: 16, name: 'D4', price: '65' },
      { id: 17, name: 'E1', price: '55' },
      { id: 18, name: 'E2', price: '55' },
      { id: 19, name: 'E3', price: '55' },
      { id: 20, name: 'E4', price: '55' },
      { id: 21, name: 'F1', price: '45' },
      { id: 22, name: 'F2', price: '45' },
      { id: 23, name: 'F3', price: '45' },
      { id: 24, name: 'F4', price: '45' },
      { id: 25, name: 'G1', price: '40' },
      { id: 26, name: 'G2', price: '40' },
      { id: 27, name: 'G3', price: '40' },
      { id: 28, name: 'G4', price: '40' },
      { id: 29, name: 'H1', price: '40' },
      { id: 30, name: 'H2', price: '40' },
      { id: 31, name: 'H3', price: '40' },
      { id: 32, name: 'H4', price: '40' },
      { id: 33, name: 'I1', price: '40' },
      { id: 34, name: 'I2', price: '40' },
      { id: 35, name: 'I3', price: '40' },
      { id: 36, name: 'I4', price: '40' },
      { id: 37, name: 'J1', price: '40' },
      { id: 38, name: 'J2', price: '40' },
      { id: 39, name: 'J3', price: '40' },
      { id: 40, name: 'J4', price: '40' },
      { id: 41, name: 'K1', price: '40' },
      { id: 42, name: 'K2', price: '40' },
      { id: 43, name: 'K3', price: '40' },
      { id: 44, name: 'K4', price: '40' }
    ]
  }
  // ... thêm các ticket khác
];

// API Routes

// GET /api/tickets - Lấy tất cả tickets
router.get('/tickets', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Lấy danh sách vé thành công',
      data: ticketData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
});

// GET /api/tickets/:id - Lấy ticket theo ID
router.get('/tickets/:id', (req, res) => {
  try {
    const ticketId = parseInt(req.params.id);
    const ticket = ticketData.find(t => t.id === ticketId);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy vé'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Lấy thông tin vé thành công',
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
});

// GET /api/tickets/search - Tìm kiếm vé theo điểm đi và điểm đến
router.get('/search', (req, res) => {
  try {
    const { diemdi, diemden } = req.query;
    
    let filteredTickets = ticketData;
    
    if (diemdi) {
      filteredTickets = filteredTickets.filter(ticket => 
        ticket.diemdi.toLowerCase().includes(diemdi.toLowerCase())
      );
    }
    
    if (diemden) {
      filteredTickets = filteredTickets.filter(ticket => 
        ticket.diemden.toLowerCase().includes(diemden.toLowerCase())
      );
    }
    
    res.status(200).json({
      success: true,
      message: 'Tìm kiếm vé thành công',
      data: filteredTickets,
      count: filteredTickets.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
});

// POST /api/tickets - Thêm vé mới
router.post('/tickets', (req, res) => {
  try {
    const newTicket = {
      id: ticketData.length + 1,
      ...req.body
    };
    
    ticketData.push(newTicket);
    
    res.status(201).json({
      success: true,
      message: 'Thêm vé mới thành công',
      data: newTicket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
});

// PUT /api/tickets/:id - Cập nhật vé
router.put('/tickets/:id', (req, res) => {
  try {
    const ticketId = parseInt(req.params.id);
    const ticketIndex = ticketData.findIndex(t => t.id === ticketId);
    
    if (ticketIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy vé'
      });
    }
    
    ticketData[ticketIndex] = {
      ...ticketData[ticketIndex],
      ...req.body,
      id: ticketId // Đảm bảo ID không thay đổi
    };
    
    res.status(200).json({
      success: true,
      message: 'Cập nhật vé thành công',
      data: ticketData[ticketIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
        error: error.message
    });
  }
});
module.exports = router;