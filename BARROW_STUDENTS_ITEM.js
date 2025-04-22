// Sample borrowed items data (you can later fetch from a backend)
const borrowedItems = [
    {
        image: 'uploads/student1.jpg',
        name: 'Juan Dela Cruz',
        id: '2023012345',
        email: 'juan@example.com',
        phone: '09123456789',
        address: 'San Fernando, Pampanga',
        item: 'Laptop - Dell Inspiron',
        borrowedAt: '2025-04-20 09:00 AM',
        returnAt: '2025-04-22 05:00 PM'
    },
    {
        image: 'uploads/student2.jpg',
        name: 'Maria Santos',
        id: '2023015678',
        email: 'maria@example.com',
        phone: '09987654321',
        address: 'Angeles City, Pampanga',
        item: 'Projector - Epson X200',
        borrowedAt: '2025-04-19 01:30 PM',
        returnAt: '2025-04-21 10:00 AM'
    }
];

// Render the borrowed items to the container
function loadBorrowedItems() {
    const container = document.getElementById('borrow-container');

    borrowedItems.forEach(student => {
        const card = document.createElement('div');
        card.className = 'borrow-card';

        card.innerHTML = `
            <div class="student-image">
                <img src="${student.image}" alt="${student.name}'s Picture">
            </div>
            <div class="student-info">
                <h3>${student.name}</h3>
                <p><strong>Student ID:</strong> ${student.id}</p>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Phone:</strong> ${student.phone}</p>
                <p><strong>Address:</strong> ${student.address}</p>
                <hr>
                <p><strong>Borrowed Item:</strong> ${student.item}</p>
                <p><strong>Borrowed At:</strong> ${student.borrowedAt}</p>
                <p><strong>Return At:</strong> ${student.returnAt}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Wait for the DOM to load before executing
document.addEventListener('DOMContentLoaded', loadBorrowedItems);
