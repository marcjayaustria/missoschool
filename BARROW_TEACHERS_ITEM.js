document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("borrowed-items");

    const teachers = [
        {
            name: "Prof. Juan Dela Cruz",
            id: "TC202312345",
            department: "Computer Science",
            image: "CCA.jpeg",
            item: "Laptop",
            quantity: 1,
            borrowedOn: "April 22, 2025 - 9:00 AM",
            returnBy: "April 25, 2025 - 5:00 PM",
            scheduleIn: "8:00 AM",
            scheduleOut: "5:00 PM",
            status: "Borrowed"
        },
        {
            name: "Prof. Maria Clara",
            id: "TC202312678",
            department: "Mathematics",
            image: "CCA.jpeg",
            item: "Projector",
            quantity: 2,
            borrowedOn: "April 20, 2025 - 11:00 AM",
            returnBy: "April 22, 2025 - 3:00 PM",
            scheduleIn: "9:00 AM",
            scheduleOut: "4:00 PM",
            status: "Returned"
        },
    ];

    teachers.forEach(teacher => {
        const card = document.createElement("div");
        card.classList.add("borrow-card");

        card.innerHTML = `
            <div class="teacher-image">
                <img src="${teacher.image}" alt="Teacher Profile">
            </div>
            <div class="teacher-info">
                <h3>${teacher.name}</h3>
                <p><strong>Teacher ID:</strong> ${teacher.id}</p>
                <p><strong>Department:</strong> ${teacher.department}</p>
                <hr>
                <p><strong>Borrowed Item:</strong> ${teacher.item}</p>
                <p><strong>Quantity:</strong> ${teacher.quantity}</p>
                <p><strong>Borrowed On:</strong> ${teacher.borrowedOn}</p>
                <p><strong>Return By:</strong> ${teacher.returnBy}</p>
                <div class="teacher-schedule">
                    <p><strong>Schedule:</strong> In at ${teacher.scheduleIn}, Out at ${teacher.scheduleOut}</p>
                </div>
                <div class="status-box ${teacher.status === 'Borrowed' ? 'green-box' : 'red-box'}">
                    ${teacher.status}
                </div>
            </div>
        `;

        container.appendChild(card);
    });
});
