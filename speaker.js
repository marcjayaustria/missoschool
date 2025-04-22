document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('speakerForm');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();  // Prevent form submission to handle it via JS
  
      const serialNumber = document.getElementById('serialNumber').value;
      const borrowerName = document.getElementById('borrowerName').value;
      const borrowerId = document.getElementById('borrowerId').value;
      const borrowerPhone = document.getElementById('borrowerPhone').value;
      const borrowerEmail = document.getElementById('borrowerEmail').value;
      const borrowTime = document.getElementById('borrowTime').value;
      const returnTime = document.getElementById('returnTime').value;
      const room = document.getElementById('room').value;
      const location = document.getElementById('location').value;
  
      // Summary of borrowed speaker information
      const summarySection = document.getElementById('summarySection');
      const summaryDetails = document.getElementById('summaryDetails');
      
      summaryDetails.innerHTML = `
        <p><strong>Speaker Serial Number:</strong> ${serialNumber}</p>
        <p><strong>Borrower's Name:</strong> ${borrowerName}</p>
        <p><strong>Borrower ID:</strong> ${borrowerId}</p>
        <p><strong>Borrower Phone Number:</strong> ${borrowerPhone}</p>
        <p><strong>Borrower's Email:</strong> ${borrowerEmail}</p>
        <p><strong>Borrow Time:</strong> ${borrowTime}</p>
        <p><strong>Return Time:</strong> ${returnTime}</p>
        <p><strong>Room/Location:</strong> ${room}</p>
        <p><strong>Outside Location:</strong> ${location}</p>
      `;
  
      // Redirect to the BORROWED ITEM page after a short delay
      setTimeout(function () {
        window.location.href = 'BORROWED ITEM.html';
      }, 2000); // Adjust time as needed
    });
  });
  