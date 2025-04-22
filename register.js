// Function to gather all form data
function getElementInfo() {
    // Collecting input values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation for empty fields and password match
    if (!name || !email || !userID || !password || !confirmPassword || !position) {
        alert("Please fill out all fields.");
        return null; // Prevent submission if any field is missing
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return null; // Prevent submission if passwords don't match
    }

    // Prepare the basic user info object
    let info = {
        name: name,
        email: email,
        position: position,
        userID: userID,
    };

    // If the user is a teacher, collect the schedule data
    if (position === 'Teacher') {
        const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
        info.schedule = {};

        // Collect start and end time for each day
        days.forEach(day => {
            const start = document.getElementById(`${day}-start`).value;
            const end = document.getElementById(`${day}-end`).value;
            if (start && end) { // Make sure both start and end times are provided
                info.schedule[day] = { start, end };
            }
        });
    }

    console.log("Collected Info:", info); // Log the collected data (optional for debugging)
    return info;
}

// Form submit listener
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow JS validation and handling
    
    const userInfo = getElementInfo();
    
    if (userInfo) {
        // At this point, userInfo is ready to be sent to the backend.
        // For demonstration, logging the object to console:
        console.log("User Info ready for backend:", userInfo);

        // Here you can send the data to the backend using AJAX or other methods
        // Example using Fetch API (assuming backend is ready to accept a POST request)
        fetch('register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Sending JSON format
            },
            body: JSON.stringify(userInfo), // Convert object to JSON
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // You can redirect to another page on success, or show a message
            alert("Registration successful!");
            window.location.href = 'login.html'; // Example redirect
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("An error occurred during registration. Please try again.");
        });
    }
});
