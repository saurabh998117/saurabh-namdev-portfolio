document.addEventListener("DOMContentLoaded", function() {
  // Show modal after 1 second 
  setTimeout(function() {
    var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();
  }, 1000);
});
