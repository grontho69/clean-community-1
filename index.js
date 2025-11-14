// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import issuesRouter from './routes/issues.js';
import contribRouter from './routes/contribution.js';
import { express } from 'express';

dotenv.config();
const express = require(`express`);
const cors = require(`cors`);
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
app.use(express.json());
const uri = "mongodb+srv://clean-community:mk8GMYm19Rqmfz8C@cluster0.pxios99.mongodb.net/?appName=Cluster0";

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  credentials: true
}));

// Routers
app.use('/api/issues', issuesRouter);
app.use('/api/contributions', contribRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server started on ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
