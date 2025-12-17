/* ========= COMMON POPUP ========= */
function showPopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.classList.add("show");
}

function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.classList.remove("show");
}

function goToLogin() {
    window.location.href = "login.html";
}

/* ========= SIGNUP ========= */
function signupUser() {
    // get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;

    // basic validation
    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email");
        return false;
    }

    if (age < 1 || age > 120) {
        alert("Invalid age");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // SHOW POPUP
    document.getElementById("popup").classList.add("show");

    // STOP FORM SUBMISSION
    return false;
}

// redirect to login
function goToLogin() {
    window.location.href = "login.html";
}


/* ========= LOGIN ========= */
function loginUser() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    // Simple validation (demo purpose)
    if (email === "" || password === "") {
        alert("Please enter email and password");
        return false;
    }

    // Show popup after login button click
    document.getElementById("loginPopup").classList.add("show");

    return false; // Prevent page reload
}

function closeLoginPopup() {
    document.getElementById("loginPopup").classList.remove("show");

    // Redirect to home page
    window.location.href = "index.html";
}


/* ========= BOOK APPOINTMENT ========= */
function bookAppointment() {
    const patientName = document.getElementById("patientName").value.trim();
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!patientName || !doctor || !date || !time) {
        alert("Please fill all fields!");
        return false;
    }

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const slotTaken = appointments.find(
        app => app.doctor === doctor && app.date === date && app.time === time
    );

    if (slotTaken) {
        alert("This slot is already booked!");
        return false;
    }

    appointments.push({ patientName, doctor, date, time });
    localStorage.setItem("appointments", JSON.stringify(appointments));

    document.getElementById("bookingPopup").classList.add("show");
    return false;
}

function closeBookingPopup() {
    document.getElementById("bookingPopup").classList.remove("show");
    window.location.href = "index.html";
}


function sendMessage() {
    document.getElementById("contactPopup").classList.add("show");
    return false; // prevent form reload
}

function closeContactPopup() {
    document.getElementById("contactPopup").classList.remove("show");
}

/* ========= LOGOUT ========= */
function logout() {
    localStorage.removeItem("careconnect_user");
    window.location.href = "login.html";
}