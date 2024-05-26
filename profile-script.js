function confirmCancel() {
    if (confirm("Are you sure you want to discard changes?")) {
        window.location.href = 'mainpage.html';
    }
}
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    saveProfileDetails();
});

function saveProfileDetails() {
    alert("Profile details saved successfully.");
    window.location.href = 'mainpage.html';
}
  
function uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var profilePicPreview = document.getElementById('profilePicPreview');
            profilePicPreview.src = e.target.result;
            profilePicPreview.style.display = 'block';
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}

/*var formChanged = false;

document.getElementById('profileForm').addEventListener('input', () => {
    formChanged = true;
});

window.onbeforeunload = function() {
    if (formChanged) {
        return 'You have unsaved changes!';
    }
};*/