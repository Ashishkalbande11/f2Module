document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const messages = document.getElementById('messages');
    const employeeList = document.getElementById('employeeList');
    let employees = [];
    let employeeId = 1;

    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const profession = document.getElementById('profession').value.trim();
        const age = document.getElementById('age').value.trim();

        if (name && profession && age) {
            const employee = {
                id: employeeId++,
                name,
                profession,
                age: parseInt(age, 10)
            };
            employees.push(employee);
            displayEmployees();
            showMessage('Success: Employee Added!', 'success');
            employeeForm.reset();
        } else {
            showMessage('Error: Please Make sure All the fields are filled before adding in an employee !', 'error');
        }
    });

    function displayEmployees() {
        employeeList.innerHTML = '';
        employees.forEach(employee => {
            const employeeItem = document.createElement('div');
            employeeItem.className = 'employee-item';
            employeeItem.innerHTML = `
                <span>${employee.id}. Name: ${employee.name} Profession: ${employee.profession} Age: ${employee.age}</span>
                <button onclick="deleteEmployee(${employee.id})">Delete User</button>
            `;
            employeeList.appendChild(employeeItem);
        });
    }

    window.deleteEmployee = function(id) {
        employees = employees.filter(employee => employee.id !== id);
        displayEmployees();
    }

    function showMessage(message, type) {
        messages.innerHTML = `<div class="message ${type}">${message}</div>`;
        setTimeout(() => {
            messages.innerHTML = '';
        }, 3000);
    }
});