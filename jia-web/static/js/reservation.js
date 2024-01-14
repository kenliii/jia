// Assuming you have a datepicker library
const picker = new YourDatepickerLibrary(document.getElementById('reservation-date'));

document.addEventListener('DOMContentLoaded', function () {
    // Increment party size
    document.getElementById('increase-party-size').addEventListener('click', function() {
        let partySizeInput = document.getElementById('party-size');
        let currentValue = parseInt(partySizeInput.value, 10);
        partySizeInput.value = currentValue + 1;
    });

    // Decrement party size
    document.getElementById('decrease-party-size').addEventListener('click', function() {
        let partySizeInput = document.getElementById('party-size');
        let currentValue = parseInt(partySizeInput.value, 10);
        partySizeInput.value = Math.max(currentValue - 1, 1); // Ensure the party size doesn't go below 1
    });

    // Handle the form submission
    document.getElementById('submit-reservation').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get the values from the form
        let name = document.getElementById('name').value;
        let allergies = document.getElementById('allergies').value;
        let partySize = document.getElementById('party-size').value;
        let date = document.getElementById('reservation-date').value;
        
        // Here you would typically send this data to the server
        // For example, using fetch() or another AJAX method
        // ...

        // Redirect to thank you page after submitting the information
        window.location.href = 'thankyou.html';
    });
});
