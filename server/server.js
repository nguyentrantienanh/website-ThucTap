const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const   CryptoJS = require('crypto-js');
require('dotenv').config(); // Thêm dòng này

app.use(cors()); // là 
app.use(express.json());

const config = {
  app_id: process.env.APP_ID || 'your_zalopay_app_id',
  key1: process.env.KEY1 || 'your_zalopay_key1',
  endpoint: process.env.ENDPOINT || 'https://sb-openapi.zalopay.vn/v2/create'
};

app.post('/api/zalo/create-order', async (req, res) => {
  const { amount, description, app_user } = req.body;

  const embed_data = {
    redirecturl: 'http://localhost:3000/payment-success'
  };
  const items = [{}];
  const transID = Math.floor(Math.random() * 1000000);
  const order = {
    app_id: config.app_id,
    app_trans_id: `${new Date().toISOString().slice(2, 10).replace(/-/g, '')}_${transID}`,
    app_user: app_user || 'demo',
    app_time: Date.now(),
    item: JSON.stringify(items),
    embed_data: JSON.stringify(embed_data),
    amount: amount,
    description: description,
    bank_code: '',
    callback_url: 'http://localhost:4000/api/zalo/callback'
  };

  // Tạo chữ ký
  const data = `${order.app_id}|${order.app_trans_id}|${order.app_user}|${order.amount}|${order.app_time}|${order.embed_data}|${order.item}`;
  order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();
  // order.mac = crypto.createHmac('sha256', config.key1).update(data).digest('hex');  

  try {
    const zalopayRes = await axios.post(config.endpoint, null, { params: order });
    console.log('ZaloPay response:', zalopayRes.data);
    
    res.json(zalopayRes.data);
  } catch (err) {
    console.error('Error creating ZaloPay order:', err);
    res.status(500).json({ error: 'Failed to create ZaloPay order' });
  }
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
