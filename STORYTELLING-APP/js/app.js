function saveStory() {
    alert("Story Saved Successfully! ✅");
}
function loadStory() {
    alert("Story Loaded Successfully! 📂");
}
function deleteStory() {
    alert("Story Deleted Successfully! 🗑️");
}
function shareStory() {
    alert("Story Shared Successfully! 📤");
}
function editStory() {
    alert("Story Edited Successfully! ✏️");
}
function publishStory() {
    alert("Story Published Successfully! 🚀");
}
function archiveStory() {
    alert("Story Archived Successfully! 📦");
}
function favoriteStory() {
    alert("Story Added to Favorites! ⭐");
}
function commentOnStory() {
    alert("Comment Added Successfully! 💬");
}   
function rateStory() {
    alert("Story Rated Successfully! 🌟");
}
function downloadStory() {
    alert("Story Downloaded Successfully! ⬇️");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("saveBtn").addEventListener("click", saveStory);
    document.getElementById("loadBtn").addEventListener("click", loadStory);
    document.getElementById("deleteBtn").addEventListener("click", deleteStory);
    document.getElementById("shareBtn").addEventListener("click", shareStory);
    document.getElementById("editBtn").addEventListener("click", editStory);
    document.getElementById("publishBtn").addEventListener("click", publishStory);
    document.getElementById("archiveBtn").addEventListener("click", archiveStory);
    document.getElementById("favoriteBtn").addEventListener("click", favoriteStory);
    document.getElementById("commentBtn").addEventListener("click", commentOnStory);
    document.getElementById("rateBtn").addEventListener("click", rateStory);
    document.getElementById("downloadBtn").addEventListener("click", downloadStory);
});