function handleSubmit(event) {
  event.preventDefault();

  const serialNumber = document.getElementById('serialNumber').value.trim();
  const borrowerName = document.getElementById('borrowerName').value.trim();
  const userId = document.getElementById('userId').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const ccaEmail = document.getElementById('ccaEmail').value.trim();
  const borrowDate = document.getElementById('borrowDate').value;
  const returnDate = document.getElementById('returnDate').value;

  if (!ccaEmail.endsWith('@cca.edu.ph')) {
    alert('Email must be a CCA email (e.g., user@cca.edu.ph)');
    return;
  }

  const laptopData = {
    serialNumber,
    borrowerName,
    userId,
    phoneNumber,
    ccaEmail,
    borrowDate,
    returnDate
  };

  // Save data to localStorage
  const existingData = JSON.parse(localStorage.getItem('laptopBorrowedList')) || [];
  existingData.push(laptopData);
  localStorage.setItem('laptopBorrowedList', JSON.stringify(existingData));

  // Show summary to the user
  const summary = `
    <strong>Laptop Serial Number:</strong> ${serialNumber} <br>
    <strong>Borrower's Name:</strong> ${borrowerName} <br>
    <strong>User ID:</strong> ${userId} <br>
    <strong>Phone Number:</strong> ${phoneNumber} <br>
    <strong>CCA Email:</strong> ${ccaEmail} <br>
    <strong>Borrow Date:</strong> ${borrowDate} <br>
    <strong>Return Date:</strong> ${returnDate}
  `;

  document.getElementById('summaryDetails').innerHTML = summary;
  document.getElementById('summary').style.display = 'block';

  // After 3 seconds, redirect to BORROWED_ITEM.html
  setTimeout(function() {
    window.location.href = 'BORROWED ITEM.html';
  }, 3000);  // 3-second delay for the user to see the summary
}
