const express = require('express');
const app = express();
 
const ticketRoutes = require('./routes/ticket');
const zalopayRoutes = require('./routes/zalopay');  
const bodyParser = require('body-parser');
const anhRoutes = require('./routes/anh');  

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();    
});

// Routes 
 
app.use('/api', ticketRoutes);
app.use('/api', zalopayRoutes); 
app.use('/api', anhRoutes); 

const port = 4001;

app.listen(port, '0.0.0.0', () => {
   console.log(`Server is running at:`);
   console.log(`  ➜  Local:   http://localhost:${port}/`);
   console.log(`  ➜  Network: http://192.168.1.132:${port}/`); // địa chỉ ip mạng lấy từ cmd window
});

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});