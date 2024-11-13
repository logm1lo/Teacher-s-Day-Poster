// Firebase Configuration
// Add your own firebaseConfig here
const firebaseConfig = {
        apiKey: "<your apiKey>",
        authDomain: "<your authDomain>",
        databaseURL: "<your database URL>", 
        projectId: "<your projectID>",
        storageBucket: "<your storageBucket>",
        messagingSenderId: "<your messagingSenderId>",
        appId: "<your appId>",
        measurementId: "your measurementId"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Check Firebase initialization
console.log("Firebase initialized:", firebase.apps.length > 0);

// Get DOM elements
const heartsContainer = document.getElementById("hearts-container");
const poster = document.getElementById("poster");

function displayWish(wishData) {
    const wishContainer = document.getElementById("wishes-container");
    const wishElement = document.createElement("div");
    wishElement.className = "wish";
    wishElement.style.top = `${wishData.y}px`;
    wishElement.style.left = `${wishData.x}px`;
    wishElement.innerText = `${wishData.name}: ${wishData.text}`;
    wishContainer.appendChild(wishElement);
}


// Function to add a heart locally on the screen
function addHeart(x, y) {
    console.log("Adding heart at:", x, y); // Debug log for heart position
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.innerText = "❤️";
    heartsContainer.appendChild(heart);

    // Remove the heart after 3 seconds
    setTimeout(() => heart.remove(), 3000);
}

// Add event listener to the poster
poster.addEventListener("click", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    console.log("Poster clicked. Adding heart and saving to Firebase.");

    // Add heart locally
    addHeart(x, y);

    // Push the heart's coordinates to Firebase
    db.ref("hearts").push({ x, y })
        .then(() => console.log("Heart saved to Firebase"))
        .catch((error) => console.error("Error saving heart to Firebase:", error));
});

// Listen for hearts added in Firebase
db.ref("hearts").on("child_added", (data) => {
    const heart = data.val();
    console.log("Heart retrieved from Firebase:", heart);
    addHeart(heart.x, heart.y);
});
