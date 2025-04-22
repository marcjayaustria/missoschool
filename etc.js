function handleEtcSubmit(event) {
    event.preventDefault();
  
    const itemName = document.getElementById('itemName').value.trim();
    const borrowerName = document.getElementById('borrowerName').value.trim();
    const userId = document.getElementById('userId').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const ccaEmail = document.getElementById('ccaEmail').value.trim();
    const borrowDate = document.getElementById('borrowDate').value;
    const returnDate = document.getElementById('returnDate').value;
  
    if (!ccaEmail.endsWith('@cca.edu.ph')) {
      alert('Email must end with @cca.edu.ph');
      return;
    }
  
    const etcData = {
      itemName,
      borrowerName,
      userId,
      phoneNumber,
      ccaEmail,
      borrowDate,
      returnDate
    };
  
    // Save to localStorage
    const existingEtcData = JSON.parse(localStorage.getItem('etcBorrowedList')) || [];
    existingEtcData.push(etcData);
    localStorage.setItem('etcBorrowedList', JSON.stringify(existingEtcData));
  
    // Display Summary
    document.getElementById('summaryItemName').textContent = itemName;
    document.getElementById('summaryBorrowerName').textContent = borrowerName;
    document.getElementById('summaryUserId').textContent = userId;
    document.getElementById('summaryPhoneNumber').textContent = phoneNumber;
    document.getElementById('summaryEmail').textContent = ccaEmail;
    document.getElementById('summaryBorrowDate').textContent = borrowDate;
    document.getElementById('summaryReturnDate').textContent = returnDate;
  
    document.getElementById('summarySection').style.display = 'block';
  
    // Redirect to BORROWED ITEM.html after 2.5 seconds
    setTimeout(() => {
      window.location.href = 'BORROWED ITEM.html';
    }, 2500);
  }
  