let selectedProjector = null;
let selectedStart = null;
let selectedEnd = null;
let selectedRoom = null;

function selectProjector(btn) {
  if (selectedProjector) return;
  selectedProjector = btn.innerText;
  btn.classList.add("off");
  btn.disabled = true;
}

function selectTimeStart(btn) {
  if (selectedStart) return;
  selectedStart = btn.innerText;
  btn.classList.add("off");
  btn.disabled = true;
}

function selectTimeEnd(btn) {
  if (selectedEnd) return;
  selectedEnd = btn.innerText;
  btn.classList.add("off");
  btn.disabled = true;
}

function selectRoom(btn) {
  if (selectedRoom) return;
  selectedRoom = btn.innerText;
  btn.classList.add("off");
  btn.disabled = true;
}

function submitReservation() {
  if (!selectedProjector || !selectedStart || !selectedEnd || !selectedRoom) {
    alert('Please make sure all selections are made.');
    return;
  }

  // Confirm Reservation Summary
  const confirmation = confirm(`Confirm Reservation Details:
    Projector: ${selectedProjector}
    Start Time: ${selectedStart}
    End Time: ${selectedEnd}
    Room: ${selectedRoom}
  `);

  if (confirmation) {
    // Save reservation data to localStorage
    const reservationData = {
      projector: selectedProjector,
      time: `${selectedStart} to ${selectedEnd}`,
      room: selectedRoom
    };
    localStorage.setItem("reservationData", JSON.stringify(reservationData));

    // Redirect to borrower selection page (barrowers.html)
    window.location.href = "barrowers.html";
  }
}
