const profilePicture = document.getElementById('profilePicture');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const groupSelect = document.getElementById('group');
        const genderInput = document.getElementById('gender');
        const ageInput = document.getElementById('age');
        const notificationToggle = document.getElementById('notificationToggle');
        const profileImageInput = document.getElementById('profileImage');
        const saveBtn = document.getElementById('saveBtn');
        
        // Load saved user data from local storage (if available)
        const savedUserData = JSON.parse(localStorage.getItem('userData')) || {};
        
        // Set initial values if available
        if (savedUserData.name) {
            nameInput.value = savedUserData.name;
        }
        
        if (savedUserData.email) {
            emailInput.value = savedUserData.email;
        }
        
        if (savedUserData.phone) {
            phoneInput.value = savedUserData.phone;
        }
        
        if (savedUserData.group) {
            groupSelect.value = savedUserData.group;
        }
        
        if (savedUserData.gender) {
            genderInput.value = savedUserData.gender;
        }
        
        if (savedUserData.age) {
            ageInput.value = savedUserData.age;
        }
        
        if (savedUserData.notifications) {
            notificationToggle.checked = savedUserData.notifications;
        }
        
        // Load saved profile picture from local storage (if available)
        const savedProfilePicture = localStorage.getItem('profilePicture');
        
        if (savedProfilePicture) {
            profilePicture.src = savedProfilePicture;
        }
        
        // Save user data and profile picture when the Save button is clicked
        saveBtn.addEventListener('click', () => {
            const userData = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                group: groupSelect.value,
                gender: genderInput.value,
                age: ageInput.value,
                notifications: notificationToggle.checked,
            };
            
            localStorage.setItem('userData', JSON.stringify(userData));
            
            if (profileImageInput.files && profileImageInput.files[0]) {
                const reader = new FileReader();
                
                reader.addEventListener('load', () => {
                    const imageUrl = reader.result;
                    profilePicture.src = imageUrl;
                    localStorage.setItem('profilePicture', imageUrl);
                });
                
                reader.readAsDataURL(profileImageInput.files[0]);
            }
        });