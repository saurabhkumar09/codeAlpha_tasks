const port = 4000;
import express from 'express';
const app = express();
import mongoose, { mongo } from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import cors from 'cors';

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// API Creation
app.get('/', (req, res) => {
    res.send("Express app is running");
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serving uploaded images statically
app.use('/images', express.static('upload/images'));

// Creating Upload Endpoint
app.post("/upload", upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ success: 0, message: 'No file uploaded' });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for Creating Products
const Product = mongoose.model('Product', {
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    },
});
// Get all the products
app.get('/allproducts', async (req, res) => {
  try {
    // Fetch all products with all their fields
    const products = await Product.find({});

    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    res.json({
      success: true,
      products,  // Return full details of each product
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching products",
    });
  }
});

  
// Add Product Endpoint
app.post('/addProduct', async (req, res) => {
    const { name, image, category, new_price, old_price } = req.body;

    try {
        // Check if the product already exists in the database by name and category
        const existingProduct = await Product.findOne({ name: name, category: category });

        if (existingProduct) {
            // If the product exists, respond with an error message
            return res.status(409).json({
                success: false,
                message: "Product already exists in the database",
            });
        }

        // Fetch the last product's ID and set a new ID
        let lastProduct = await Product.findOne({}).sort({ id: -1 }).exec();
        let id = lastProduct ? lastProduct.id + 1 : 1;

        console.log("New Product ID:", id);

        // Create a new product
        const newProduct = new Product({
            id: id,
            name: name,
            image: image,
            category: category,
            new_price: new_price,
            old_price: old_price,
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();
        console.log("Product saved:", savedProduct);
        
        // Respond with success
        res.json({
            success: true,
            message: "Product added successfully",
            product: savedProduct,
        });

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({
            success: false,
            message: "Server error while adding product",
        });
    }
});

// Creating API for deleting 

app.post('/remove', async (req, res) => {
    const { id, name } = req.body;
  
    // Check if 'id' is provided in the request
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }
  
    try {
      // Find and delete product by `id`
    const result = await Product.findOneAndDelete({ id: id });

    if (result) {
      console.log(`Removed product: ${name || 'Unknown Name'}`);
      res.json({
        success: true,
        message: `Product ${name || 'with specified ID'} removed successfully`,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    } catch (error) {
      console.error("Error removing product:", error);
      res.status(500).json({
        success: false,
        message: "Server error while removing product",
      });
    }
  });
  
//User Schema

const Users = mongoose.model('Users',{
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

// Creating endpoint for registering the user

app.post('/signup', async(req, res)=>{
  let check = await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false, errros:'User already exists'})
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i]=0;
  }
  const user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
  })

  await user.save();

  const data = {
    user:{
      id:user.id
    }
  }

  const token = jwt.sign(data,'secret_ecom');
  res.json({success:true, token})
})
//creating endpoint for user login

app.post('/login', async(req,res)=>{
  let user = await Users.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password === user.password;
    if(passCompare){
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data, 'secret_ecom')
      res.json({
        success:true, token
      });
    }
    else{
      res.json({
        success:false,
        error:'Wrong Password'
      });
    }
  }
  else{
    res.json({success:false, error:'Wrong Email Id'});
  }
})

// Update Users Schema with structured cartData
const User = mongoose.model('User', {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: [ 
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 },
    },
  ],
  date: { type: Date, default: Date.now },
});

// Route to add a product to the cart
app.post('/cart/add', async (req, res) => {
  const { userId, productId, quantity = 1 } = req.body;

  try {
    const user = await User.findById(userId);
    const productExists = user.cartData.find(item => item.productId.toString() === productId);

    if (productExists) {
      productExists.quantity += quantity;
    } else {
      user.cartData.push({ productId, quantity });
    }

    await user.save();
    res.json({ success: true, cart: user.cartData });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding product to cart', error });
  }
});

// Route to retrieve the cart and calculate total price
app.get('/cart', async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await User.findById(userId).populate('cartData.productId');
    const cartItems = user.cartData.map(item => {
      const product = item.productId;
      return {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.new_price,
        quantity: item.quantity,
        total: product.new_price * item.quantity,
      };
    });
    const totalPrice = cartItems.reduce((total, item) => total + item.total, 0);

    res.json({ success: true, cartItems, totalPrice });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching cart', error });
  }
});

// Route to update the quantity of a product in the cart
app.post('/cart/update', async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const user = await User.findById(userId);
    const item = user.cartData.find(item => item.productId.toString() === productId);
    if (item) {
      item.quantity = quantity;
      await user.save();
      res.json({ success: true, cart: user.cartData });
    } else {
      res.status(404).json({ success: false, message: 'Product not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating cart', error });
  }
});

// Start Server
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server Running on port ${port}`);
    } else {
        console.log("Error: " + error);
    }
});
