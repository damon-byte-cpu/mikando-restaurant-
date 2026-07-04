import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IOrder extends Document {
  userId?: mongoose.Types.ObjectId;
  items: Array<{
    productId: mongoose.Types.ObjectId;
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  deliveryFee: number;
  tax: number;
  status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  paymentStatus: 'Pending' | 'Paid' | 'Failed';
  address: string;
  phone: string;
}

const OrderSchema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  deliveryFee: { type: Number, default: 0 },
  tax: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'], default: 'Pending' },
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },
  address: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

export default models.Order || model<IOrder>('Order', OrderSchema);
                
