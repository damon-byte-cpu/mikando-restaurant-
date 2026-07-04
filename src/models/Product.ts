import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: 'Combos' | 'Fries' | 'Thirst Quenchers' | 'Sides' | 'Plain';
  image: string;
  isAvailable: boolean;
  isBestSeller: boolean;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    type: String, 
    enum: ['Combos', 'Fries', 'Thirst Quenchers', 'Sides', 'Plain'], 
    required: true 
  },
  image: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  isBestSeller: { type: Boolean, default: false }
}, { timestamps: true });

export default models.Product || model<IProduct>('Product', ProductSchema);
