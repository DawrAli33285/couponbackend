const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  // Title (Already exists)
  title: {
    type: String,
    required: true
  },
  
  // Description (Already exists)
  description: {
    type: String
  },
  
  // Code (Already exists)
  code: {
    type: String,
    required: true,
    unique: true
  },
  
  // Deep Link (MISSING - ADDED)
  deepLink: {
    type: String,
    trim: true
  },
  
  // Meta Keywords (MISSING - ADDED)
  metaKeywords: [{
    type: String,
    trim: true
  }],
  
  // Meta Descriptions (MISSING - ADDED)
  metaDescription: {
    type: String,
    trim: true
  },
  
  // Discount Type (Already exists)
  discountType: {
    type: String,
    required: true
  },
  
  // Discount Value (Already exists)
  discountValue: {
    type: Number,
    required: true
  },
  
  // Start Date || End Date (Already exists)
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  
  // Featured || Exclusive || Verified (UPDATED)
  isFeatured: {
    type: Boolean,
    default: false
  },
  isExclusive: {
    type: Boolean,
    default: false
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  
  // Expiry Soon (MISSING - ADDED)
  isExpirySoon: {
    type: Boolean,
    default: false
  },
  
  // Store Name (need to show on FrontEnd) - Reference (Already exists)
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
    required: true
  },
  store: {
    type: mongoose.Schema.ObjectId,
    ref: 'Store',
  },
  
  // Terms & Condition (MISSING - ADDED)
  termsConditions: {
    type: String,
    trim: true
  },
  
  // Banner Image for Featured Coupons (MISSING - ADDED)
  bannerImage: {
    type: String,
    trim: true,
    // Required when isFeatured is true
    validate: {
      validator: function(v) {
        // If featured, banner image is required
        if (this.isFeatured && !v) {
          return false;
        }
        return true;
      },
      message: 'Banner image is required for featured coupons'
    }
  },
  
  // Coupon Type for Display Titles (MISSING - ADDED)
  couponType: {
    type: String,
    enum: ['regular', 'exclusive', 'verified', 'featured'],
    default: 'regular'
  },
  
  // Display Title based on type (MISSING - ADDED)
  displayTitle: {
    type: String,
    trim: true
  },
  
  slug: {
    type: String,
    required: true,
    unique: true
  },
  
  imageUrl: {
    type: String
  },
  
  tags: [{
    type: String
  }],
  
  clickCount: {
    type: Number,
    default: 0
  },
  
  
  // Additional useful fields
  isActive: {
    type: Boolean,
    default: true
  },
  
  // Priority for featured coupons
  priority: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});


const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;