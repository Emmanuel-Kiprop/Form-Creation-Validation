// STEP 1: Define the async function
async function fetchUserData() {
    // STEP 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // STEP 3: Get the container where the data will go
    const dataContainer = document.getElementById('api-data');

    try {
        // STEP 4: Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // STEP 5: Clear the loading message
        dataContainer.innerHTML = '';

        // STEP 6: Create the list container
        const userList = document.createElement('ul');

        // STEP 7: Loop and add each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // STEP 8: Append list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // STEP 9: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// STEP 10: Call the function after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
