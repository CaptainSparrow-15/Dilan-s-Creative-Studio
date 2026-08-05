require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const os = require('os');
const { createClient } = require('@supabase/supabase-js');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..')));

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET all images from Supabase storage
app.get('/api/images', async (req, res) => {
    try {
        const { data, error } = await supabase.storage.from('product-images').list();
        if (error) throw error;
        
        // Filter out any potential empty/folder items if needed, and map to include public URL
        const images = data
            .filter(item => item.name !== '.emptyFolderPlaceholder')
            .map(item => ({
                name: item.name,
                publicUrl: `${process.env.SUPABASE_URL}/storage/v1/object/public/product-images/${item.name}`
            }));
            
        res.json(images);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to read images" });
    }
});

// POST new image to Supabase storage
app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file provided" });
        }

        const file = req.file;
        const fileExt = file.originalname.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { data, error } = await supabase.storage
            .from('product-images')
            .upload(fileName, file.buffer, {
                contentType: file.mimetype
            });

        if (error) throw error;

        const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/product-images/${fileName}`;
        res.status(201).json({ name: fileName, publicUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to upload image" });
    }
});

// GET all products
app.get('/api/products', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to read products" });
    }
});

// POST new product
app.post('/api/products', async (req, res) => {
    try {
        const newProduct = req.body;
        delete newProduct.id; // let Postgres auto-generate the id

        const { data, error } = await supabase
            .from('products')
            .insert(newProduct)
            .select()
            .single();

        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save product" });
    }
});

app.post('/api/products/bulk', async (req, res) => {
    const products = req.body; // array of product objects
    const { data, error } = await supabase.from('products').insert(products).select();
    if (error) throw error;
    res.status(201).json(data);
});

// PUT update product
app.put('/api/products/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updates = { ...req.body };
        delete updates.id; // never allow id to change

        const { data, error } = await supabase
            .from('products')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: "Product not found" });

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update product" });
    }
});

// DELETE product
app.delete('/api/products/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const { data, error } = await supabase
            .from('products')
            .delete()
            .eq('id', id)
            .select();

        if (error) throw error;
        if (!data || data.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.error(error);
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