const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;
const dataFile = path.join(__dirname, 'data', 'products.json');

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..')));

// Helper to read data
const readData = () => {
    const raw = fs.readFileSync(dataFile);
    return JSON.parse(raw);
};

// Helper to write data
const writeData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 4));
};

// GET all products
app.get('/api/products', (req, res) => {
    try {
        const products = readData();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to read products" });
    }
});

// POST new product
app.post('/api/products', (req, res) => {
    try {
        const products = readData();
        const newProduct = req.body;
        
        // Generate new ID
        const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
        newProduct.id = maxId + 1;
        
        products.push(newProduct);
        writeData(products);
        
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to save product" });
    }
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
    try {
        const products = readData();
        const id = parseInt(req.params.id);
        const index = products.findIndex(p => p.id === id);
        
        if (index === -1) {
            return res.status(404).json({ error: "Product not found" });
        }
        
        const updatedProduct = { ...products[index], ...req.body, id }; // Ensure ID doesn't change
        products[index] = updatedProduct;
        writeData(products);
        
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to update product" });
    }
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
    try {
        let products = readData();
        const id = parseInt(req.params.id);
        
        const initialLength = products.length;
        products = products.filter(p => p.id !== id);
        
        if (products.length === initialLength) {
            return res.status(404).json({ error: "Product not found" });
        }
        
        writeData(products);
        res.json({ success: true, message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    const networkInterfaces = os.networkInterfaces();
    let localIp = 'localhost';
    for (const interfaceName in networkInterfaces) {
        const interfaces = networkInterfaces[interfaceName];
        for (const iface of interfaces) {
            if (iface.family === 'IPv4' && !iface.internal) {
                localIp = iface.address;
                break;
            }
        }
        if (localIp !== 'localhost') break;
    }
    console.log(`Server running locally at http://localhost:${PORT}`);
    console.log(`Available on your network at http://${localIp}:${PORT}`);
});
