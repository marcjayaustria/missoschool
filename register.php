<?php
// Include database connection
include('db_connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = strtolower(trim($_POST['email'])); // Ensure email is lowercase
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];
    $userID = uniqid('user_', true);  // Automatically generate a unique user ID
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $position = $_POST['position'];

    // Validate password match
    if ($password !== $confirmPassword) {
        echo "❌ Passwords do not match. Please try again.";
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Validate position (should be Admin, Teacher, or Student)
    if (!in_array($position, ['Admin', 'Teacher', 'Student'])) {
        echo "❌ Invalid position selected. Please choose Admin, Teacher, or Student.";
        exit;
    }

    // Check if the email already exists
    $checkEmailQuery = "SELECT id FROM users WHERE email = ?";
    $stmt = $conn->prepare($checkEmailQuery);
    $stmt->bind_param("s", $email);  // Bind email parameter
    $stmt->execute();
    $stmt->store_result();

    // If email exists, show error message
    if ($stmt->num_rows > 0) {
        echo "❌ Email already exists. Please use a different email.";
        $stmt->close();
    } else {
        // Handle schedule for Teacher (only if position is Teacher)
        $schedule = null;
        if ($position === "Teacher") {
            $days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
            $schedule = [];
            foreach ($days as $day) {
                $start = $_POST[$day . '-start'] ?? '';
                $end = $_POST[$day . '-end'] ?? '';
                if ($start && $end) {
                    $schedule[$day] = ['start' => $start, 'end' => $end];
                }
            }
        }

        // Handle profile picture upload
        if (isset($_FILES['profilePicture']) && $_FILES['profilePicture']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['profilePicture']['tmp_name'];
            $fileName = $_FILES['profilePicture']['name'];
            $fileSize = $_FILES['profilePicture']['size'];
            $fileType = $_FILES['profilePicture']['type'];

            // Define the upload directory
            $uploadDir = 'uploads/';
            $filePath = $uploadDir . $fileName;

            // Move the uploaded file to the server directory
            if (move_uploaded_file($fileTmpPath, $filePath)) {
                $profilePic = $filePath; // Store file path
            } else {
                echo "❌ Error uploading the profile picture.";
                exit;
            }
        } else {
            echo "❌ No profile picture uploaded.";
            exit;
        }

        // Prepare the SQL query to insert user data
        $stmt = $conn->prepare("INSERT INTO users (name, email, password, UserID, address, phone, position, schedule, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

        // Bind parameters for the SQL query (schedule is JSON-encoded if exists)
        $stmt->bind_param("sssssssss", $name, $email, $hashedPassword, $userID, $address, $phone, $position, json_encode($schedule), $profilePic);

        // Execute the statement
        if ($stmt->execute()) {
            echo "✅ Registration successful! Redirecting to login page...";
            // Redirect to login page after successful registration
            header('Location: login.html');
            exit();
        } else {
            echo "❌ Error: " . $stmt->error;  // Improved error message
        }

        // Close the statement and connection
        $stmt->close();
    }

    $conn->close();
}
?>
