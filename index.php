<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MISSO - Home</title>
    <link rel="stylesheet" href="HOME PAGE CSS.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <nav>
            <div class="logo">CCA MISSO Inventory</div>
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <li><a href="LOGIN.html" class="login-btn">Login</a></li>
            </ul>
            <div class="menu-toggle">&#9776;</div>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h1>CCA is Committed to Offering Quality Education</h1>
            <p>Students and instructors can borrow equipment freely to support their learning and teaching needs.</p>
            <div class="cta-buttons">
               
                <a href="#about" class="btn-secondary">Learn More About CCA</a>
            </div>
        </div>
    </section>

    <section class="vision-mission" id="vision-mission">
        <h2>Vision</h2>
        <p>An institution of hope, a thought leader in its area of operations, and the preferred provider of talent in the Metro Angeles area.</p>
        <h2>Mission</h2>
        <p>The City College of Angeles is committed to offer quality education for the holistic development of competitive and technically-capable professionals with deep sense of excellence, resiliency, stewardship, and patrimony.</p>
    </section>

    <section class="about" id="about">
        <h2>About CCA Inventory System</h2>
        <p>The CCA Multimedia Inventory System simplifies the borrowing and tracking of multimedia items for students and faculty.</p>
        <div class="features">
            <div class="feature">
                <img src="icons/borrow.png" alt="Seamless Borrowing">
                <p>Seamless Borrowing</p>
            </div>
            <div class="feature">
                <img src="icons/track.png" alt="Fast Tracking">
                <p>Fast Tracking</p>
            </div>
            <div class="feature">
                <img src="icons/reliable.png" alt="Reliable Inventory">
                <p>Reliable Inventory</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 CCA Multimedia Inventory System | All Rights Reserved.</p>
    </footer>

    <script>
        // Toggle Menu for Mobile
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
    </script>
</body>
</html>