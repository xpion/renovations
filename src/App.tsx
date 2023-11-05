import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6kDmxb9ahNZCrtxbk707AkLXKkdX1Qag",
  authDomain: "renovation-3d3b1.firebaseapp.com",
  projectId: "renovation-3d3b1",
  storageBucket: "renovation-3d3b1.appspot.com",
  messagingSenderId: "880450324888",
  appId: "1:880450324888:web:ce0a7d786f4b350359c3ed",
  measurementId: "G-TZBECVRETX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example in asdasd TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
