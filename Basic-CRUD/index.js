document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    // Helper function to get data from local storage
    function getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    // Helper function to save data to local storage
    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    // CREATE operation
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const users = getUsers();
        const newUser = {
            id: Date.now(), // Use timestamp as unique ID
            name,
            email
        };
        users.push(newUser);
        saveUsers(users);
        renderUsers();
        userForm.reset();
    });

    // READ operation (render to DOM)
    function renderUsers() {
        userList.innerHTML = '';
        const users = getUsers();
        users.forEach(user => {
            const userRecord = document.createElement('div');
            userRecord.classList.add('user-record');
            userRecord.innerHTML = `
                <span>${user.name} (${user.email})</span>
                <div>
                    <button onclick="editUser(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </div>
            `;
            userList.appendChild(userRecord);
        });
    }

    // UPDATE operation
    window.editUser = function(id) {
        const users = getUsers();
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const newName = prompt('Enter new name:', users[userIndex].name);
            const newEmail = prompt('Enter new email:', users[userIndex].email);
            if (newName && newEmail) {
                users[userIndex].name = newName;
                users[userIndex].email = newEmail;
                saveUsers(users);
                renderUsers();
            }
        }
    };

    // DELETE operation
    window.deleteUser = function(id) {
        if (confirm('Are you sure you want to delete this user?')) {
            const users = getUsers();
            const updatedUsers = users.filter(user => user.id !== id);
            saveUsers(updatedUsers);
            renderUsers();
        }
    };

    // Initial render
    renderUsers();
});
