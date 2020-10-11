chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "getTrack") {
    var currentTrack = document.querySelector(".current-track h3 > a")
      .innerHTML;
    var artist = document.querySelector(".current-track h2 > a").innerHTML;

    window.open(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(
        currentTrack
      )}-${encodeURIComponent(artist)}`,
      "_blank"
    );

    chrome.runtime.sendMessage({ message: "track found" });
  }
});
