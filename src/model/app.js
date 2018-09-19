import Firebase from 'firebase/app';

const app = Firebase.initializeApp({
    apiKey: process.env.FB_APIKey,
    authDomain: process.env.FB_AuthDomain,
    databaseURL: process.env.FB_DatabaseURL,
    storageBucket: process.env.FB_StorageBucket,
    messagingSenderId: process.env.FB_MessagingSenderID,
});

export default app;
