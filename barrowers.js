const namesData = {
    ICSLIS: ["Anna Cruz", "Bryan Lopez", "Celine Diaz", "David Tan"],
    IEAS: ["Ella Gomez", "Francis Yu", "George Lim"],
    IBM: ["Hazel Ong", "Ian Rivera", "Julia Santos"],
    STAFF: ["Karen Lee", "Leo Martinez", "Mira Ramos"]
  };
  
  let selectedBorrower = null;
  let currentGroup = [];
  
  function showNames(dept) {
    currentGroup = namesData[dept];
    renderNameButtons(currentGroup);
  }
  
  function renderNameButtons(nameArray) {
    const namesList = document.getElementById("namesList");
    namesList.innerHTML = "";
    nameArray.forEach(name => {
      const btn = document.createElement("button");
      btn.className = "name-box";
      btn.innerText = name;
      btn.onclick = () => {
        document.querySelectorAll(".name-box").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedBorrower = name;
      };
      namesList.appendChild(btn);
    });
  }
  
  function filterNames() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = currentGroup.filter(name => name.toLowerCase().includes(query));
    renderNameButtons(filtered);
  }
  
  function submitBorrower() {
    if (!selectedBorrower) {
      alert("Please select a borrower name.");
      return;
    }
  
    // Example of projector data (replace these with actual dynamic data if necessary)
    const projectorInfo = {
      projectorId: 3,   // This is just an example
      timeIn: "9:00 AM", 
      timeOut: "11:00 AM",
      clab: 2           // Example: Classroom number 2
    };
  
    // Show confirmation with selected borrower and projector info
    const confirmationMessage = `
      <h2>Confirmation</h2>
      <p><strong>Borrower:</strong> ${selectedBorrower}</p>
      <p><strong>Projector ID:</strong> ${projectorInfo.projectorId || "NONE"}</p>
      <p><strong>Time In:</strong> ${projectorInfo.timeIn || "NONE"}</p>
      <p><strong>Time Out:</strong> ${projectorInfo.timeOut || "NONE"}</p>
      <p><strong>Classroom:</strong> ${projectorInfo.clab || "NONE"}</p>
    `;
  
    const confirmationContainer = document.createElement('div');
    confirmationContainer.className = 'confirmation-container';
    confirmationContainer.innerHTML = confirmationMessage;
  
    // Add a button to confirm and proceed to the next page
    const confirmButton = document.createElement('button');
    confirmButton.innerText = "Confirm and Proceed";
    confirmButton.onclick = () => {
      window.location.href = "BORROWED ITEM.html";
    };
  
    confirmationContainer.appendChild(confirmButton);
    document.body.appendChild(confirmationContainer);
  }
  