const express = require('express');
const router = express.Router();
const axios = require('axios');
const CryptoJS = require('crypto-js');
require('dotenv').config();

const config = {
  app_id: process.env.APP_ID || 'your_zalopay_app_id',
  key1: process.env.KEY1 || 'your_zalopay_key1',
  endpoint: process.env.ENDPOINT || 'https://sb-openapi.zalopay.vn/v2/create'
};

// Route tạo đơn hàng ZaloPay
router.post('/zalo/create-order', async (req, res) => {
  try {
    const { amount, description, app_user } = req.body;

    if (!amount || isNaN(amount) || amount < 1000) {
      return res.status(400).json({ 
        return_code: 0,
        return_message: 'Số tiền không hợp lệ (tối thiểu 1000 VND)' 
      });
    }

    const embed_data = {
      redirecturl: 'http://localhost:3000/payment-success'
    };
    const items = [{}];
    const transID = Math.floor(Math.random() * 1000000);
    
    const order = {
      app_id: config.app_id, // ID ứng dụng ZaloPay
      app_trans_id: `${new Date().toISOString().slice(2, 10).replace(/-/g, '')}_${transID}`, // mã giao dịch duy nhất
      app_user: app_user || 'demo', // người dùng ứng dụng, có thể là email hoặc ID người dùng
      app_time: Date.now(), // thời gian tạo đơn hàng
      item: JSON.stringify(items), // thông tin mặt hàng, có thể để trống nếu không cần
      embed_data: JSON.stringify(embed_data), // dữ liệu nhúng, có thể chứa URL chuyển hướng sau khi thanh toán
      amount: parseInt(amount), // số tiền thanh toán, phải là số nguyên
      description: description || `Thanh toán vé xe #${transID}`, // mô tả đơn hàng
      bank_code: '', // mã ngân hàng, để trống nếu không cần chọn ngân hàng
      callback_url: 'http://localhost:3001/api/zalo/callback' // URL callback để nhận thông báo từ ZaloPay sau khi thanh toán thành công
    };

    // Tạo chữ ký
    const data = `${order.app_id}|${order.app_trans_id}|${order.app_user}|${order.amount}|${order.app_time}|${order.embed_data}|${order.item}`;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    console.log('Creating ZaloPay order:', order);

    const zalopayRes = await axios.post(config.endpoint, null, { params: order });
    console.log('ZaloPay response:', zalopayRes.data);
    
    res.json(zalopayRes.data);
  } catch (err) {
    console.error('Error creating ZaloPay order:', err);
    if (axios.isAxiosError(err)) {
      res.status(500).json({ 
        return_code: 0,
        return_message: 'Lỗi từ ZaloPay API',
        error: err.response?.data 
      });
    } else {
      res.status(500).json({ 
        return_code: 0,
        return_message: 'Tạo đơn hàng thất bại' 
      });
    }
  }
});

// Route callback từ ZaloPay
router.post('/zalo/callback', (req, res) => {
  console.log('ZaloPay callback received:', req.body);
  res.json({ return_code: 1, return_message: 'success' });
});

module.exports = router;