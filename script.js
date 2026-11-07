
alert("ZexVerse JavaScript is connected!");

const button = document.getElementById("wishButton");

button.addEventListener("click", function() {

    const name = document.getElementById("visitorName").value.trim();

    const greeting = document.getElementById("greeting");
    const wishCard = document.getElementById("wishCard");
    const cardMessage = document.getElementById("cardMessage");

    if (name === "") {

        greeting.textContent = "Please enter your name first!";
        wishCard.style.display = "none";

    } else {

        const message = "Happy Diwali, " + name +
            "! May your life shine with happiness, success and prosperity.";

        greeting.textContent = message;
        cardMessage.textContent = message;

        wishCard.style.display = "block";

    }

});

const shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", async function() {

    const message =
        document.getElementById("cardMessage").textContent;

    const shareText =
        message + " ✨\n\nFrom Team ZexVerse 🪔";

    try {

        await navigator.clipboard.writeText(shareText);

        shareButton.textContent = "✓ Wish Copied!";

        setTimeout(function() {
            shareButton.textContent = "✨ Copy My Wish ✨";
        }, 2000);

    } catch (error) {

        alert("Unable to copy. Please try again.");

    }

});
shareButton.addEventListener("click", async function() {

    const message =
        document.getElementById("cardMessage").textContent;

    const shareText =
        message + " ✨\n\nFrom Team ZexVerse 🪔";

    if (navigator.share) {

        try {
            await navigator.share({
                title: "ZexVerse Diwali Wish",
                text: shareText,
                url: window.location.href
            });
        } catch (error) {
            console.log("Sharing cancelled.");
        }

    } else if (navigator.clipboard) {

        try {
            await navigator.clipboard.writeText(shareText);

const originalText = shareButton.textContent;

shareButton.textContent = "✓ Wish Copied!";

setTimeout(function() {
    shareButton.textContent = originalText;
}, 2000);
        } catch (error) {
            alert("Please open the website using its published HTTPS link to share.");
        }

    } else {

        alert("Please open the website using its published HTTPS link to share.");

    }

});


const name = document.getElementById("visitorName").value.trim();

const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1);

const charCount = document.getElementById("charCount");

nameInput.addEventListener("input", function() {

    const currentLength = nameInput.value.length;

    charCount.textContent = currentLength + "/30";

  if (currentLength >= 25) {
    charCount.style.color = "#ff6b6b";
} else {
    charCount.style.color = "#ffb703";
  }

});

nameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        button.click();
    }

});