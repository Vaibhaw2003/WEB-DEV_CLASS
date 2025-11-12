const fetchUserBtn = document.getElementById('fetchUserBtn');
const userCard = document.getElementById('userCard');

async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        // Extract user info
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const email = user.email;
        const picture = user.picture.large;

        // Display user info
        userCard.innerHTML = `
            <img src="${picture}" alt="Profile Picture">
            <span><strong>Name:</strong> ${fullName}</span>
            <span><strong>Email:</strong> ${email}</span>
        `;
    } catch (error) {
        console.error('Error fetching user:', error);
        userCard.innerHTML = `<span style="color:red;">Failed to fetch user data.</span>`;
    }
}

// Event listener
fetchUserBtn.addEventListener('click', fetchRandomUser);
