<?php
session_start();

// Database connection
$conn = new mysqli("localhost", "root", "", "login"); // Update credentials if needed

// Check for connection error
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle the form submission (POST request)
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get and sanitize email and password inputs
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Basic check to ensure email and password are not empty
    if (empty($email) || empty($password)) {
        echo "<script>alert('Please enter both email and password.'); window.history.back();</script>";
        exit;
    }

    // Sanitize and validate email
    $email = strtolower(trim(filter_var($email, FILTER_SANITIZE_EMAIL)));

    // Prepare and execute SQL query to check if the user exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Check if user exists and password matches
    if ($user && password_verify($password, $user['password'])) {
        // Regenerate session ID to prevent session fixation
        session_regenerate_id(true);

        // Store user information in session variables
        $_SESSION['userID'] = $user['id'];
        $_SESSION['email'] = $email;
        $_SESSION['role'] = $user['position'];

        // Redirect based on the user role
        switch ($user['position']) {
            case 'Admin':
                header("Location: HOME_ADMIN.html"); // Redirect to admin home page
                exit;
            case 'Teacher':
                header("Location: HOME_TEACHERS.HTML"); // Redirect to teacher home page
                exit;
            case 'Student':
                header("Location: HOME_STUDENTS.HTML"); // Redirect to student home page
                exit;
            default:
                header("Location: index.php"); // Default redirect if role is unknown
                exit;
        }
    } else {
        // If login fails, alert and return to the login page
        echo "<script>alert('Invalid email or password.'); window.history.back();</script>";
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
