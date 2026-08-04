// migrate.js
// One-off script: reads backend/data/products.json and inserts every
// product into the Supabase "products" table.
//
// Usage:
//   1. npm install @supabase/supabase-js dotenv
//   2. create a .env file (see .env.example)
//   3. node migrate.js

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Adjust this path if you copy the script somewhere other than backend/
const dataFile = path.join(__dirname, 'data', 'products.json');

async function migrate() {
    const raw = fs.readFileSync(dataFile);
    const products = JSON.parse(raw);

    console.log(`Found ${products.length} products in products.json`);

    // Normalize each product to match the Supabase table columns.
    // Missing optional fields (materials, size, shipping, colors, images)
    // are defaulted so the insert never fails on a missing key.
    const rows = products.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category || 'rakhi',
        price: p.price,
        rating: p.rating ?? 5,
        reviewsCount: p.reviewsCount ?? 1,
        image: p.image || '',
        badge: p.badge || '',
        description: p.description || '',
        materials: p.materials || [],
        size: p.size || '',
        shipping: p.shipping || '',
        images: p.images || {},
        colors: p.colors || [],
        variantType: p.variantType || 'gallery',
        priceUnit: p.priceUnit || ''
    }));

    // Upsert (insert or update if id already exists) so this script
    // is safe to re-run without creating duplicates.
    const { data, error } = await supabase
        .from('products')
        .upsert(rows, { onConflict: 'id' })
        .select();

    if (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }

    console.log(`Successfully migrated ${data.length} products.`);

    // Reset the id sequence so future inserts (new products via admin)
    // don't collide with migrated ids.
    const maxId = Math.max(...rows.map(r => r.id));
    console.log(`Highest migrated id: ${maxId}`);
    console.log(`Run this SQL once in Supabase SQL editor to fix the auto-increment counter:`);
    console.log(`  select setval('products_id_seq', ${maxId});`);
}

migrate();