function setActiveLink(linkId) {
    // Remove active class from all links
    document.querySelectorAll('.toChangeActive').forEach(link => {
        link.classList.remove('active');
    });
    // Add active class to the clicked link
    document.getElementById(linkId).classList.add('active');
}

function loadText() {
    setActiveLink('textLink');
    let textFile = "JavaScriptTraining/Text2ndPage.txt";
    fetchAndDisplayContent(textFile);
}

function loadSurvey() {
    setActiveLink('surveyLink');
    let surveyFile = "JavaScriptTraining/Survey2ndPage.txt";
    fetchAndDisplayContent(surveyFile);
}

function loadGallery() {
    setActiveLink('galleryLink');
    let galleryFile = "JavaScriptTraining/Gallery2ndPage.txt";
    fetchAndDisplayContent(galleryFile);
}

function fetchAndDisplayContent(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById("content").innerHTML = "Failed to load content.";
        });
}
