const appID = document.getElementById("app");
// The fetch() function returns a Promise object
// that resolves to a Response object
const fetchPromise = fetch("https://picsum.photos/200/200");

fetchPromise
  .then(response => {
    // Convert the response object to an ArrayBuffer().
    // This also returns a Promise so it must be handled by a then() method below
    return response.arrayBuffer();
  })
  .then(arrBuff => {
    // If the picture is 6KB or larger, reject the image.
    if (arrBuff.byteLength >= 6 * 1024) {
      throw new Error(
        `Sorry. The image is too large: ${parseInt(
          arrBuff.byteLength / 1024,
          10
        )} KB`
      );
    }
    // We now have the array buffer so we can convert it to a Base64 blob and insert it into the page.
    appID.insertAdjacentHTML(
      "beforeend",
      `<p><img src="data:;base64,${Buffer.from(arrBuff).toString(
        "base64"
      )}" /></p>`
    );
    return arrBuff.byteLength;
  })
  .then(function(bufferLength) {
    // We received the picture's size. Let's display it!
    appID.insertAdjacentHTML(
      "beforeend",
      `<p><strong>Image size:</strong> ${parseInt(
        bufferLength / 1024,
        10
      )} KB</p>`
    );
  })
  .catch(reason => {
    appID.insertAdjacentHTML(
      "beforeend",
      `<p><strong>An error occurred:</strong> ${reason}</p>`
    );
  });
