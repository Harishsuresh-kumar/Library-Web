document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Predefined admin and user credentials
    const adminCredentials = { username: 'Admin', password: '1234' };
    const userCredentials = { username: 'jerry', password: '1234' };

    // Check credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
        window.location.href = 'admin.html';
    } else if (username === userCredentials.username && password === userCredentials.password) {
        window.location.href = 'user.html';
    } else {
        const storedUser = JSON.parse(localStorage.getItem('username_' + username));
        if (storedUser && storedUser.password === password) {
            window.location.href = 'user.html';
        } else {
            alert('Invalid username or password');
        }
    }
});

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'home.html';
    }
}
