const express = require('express');
const router = express.Router();

// API test đơn giản
router.get('/infouser', (req, res) => { // định nghĩa route cho API test
  res.json({ // trả về JSON response
    id: 1, // ID của API
     
     
    name: 'api đã tạo', // tên của API
     

    
  });
});

module.exports = router;
