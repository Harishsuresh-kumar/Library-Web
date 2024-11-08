/* Reset default browser styles */
* {
    margin: 0
    padding: 0;
    box-sizing: border-box;
}

body, html {
    font-family: Arial, sans-serif;
    background-color: #f3f4f6;
    color: #333;
}

.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo {
    display: flex;
    align-items: center;
}

header .logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin-left: 20px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
}

.login-section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 2em 0;
}

.container {
    background: #fff;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
    text-align: center;
}

#loginContainer h2 {
    margin-bottom: 1em;
    color: #333;
}

.form-group {
    margin-bottom: 1em;
    text-align: left;
}

.form-group label {
    display: block;
    margin-bottom: 0.5em;
    color: #333;
}

.form-control {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.btn {
    width: 100%;
    padding: 0.7em;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 1em;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1em;
}
