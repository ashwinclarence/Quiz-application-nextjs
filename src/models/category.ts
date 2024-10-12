

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

const category = mongoose.models.category || mongoose.model('category', categorySchema);

export default category;