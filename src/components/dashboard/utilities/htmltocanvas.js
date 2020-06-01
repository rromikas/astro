const firebase = require("firebase");
export const initializeFirebase = () => {
  fetch("https://intelligent-fate-abrosaurus.glitch.me/firebase")
    .then((res) => res.json())
    .then((res) => {
      firebase.initializeApp(res);
      firebase
        .auth()
        .signInAnonymously()
        .catch(function (error) {
          console.log(error);
        });
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          user = user.uid;
          console.log("firebase authenticated");
        } else {
          user = "failed";
        }
      });
    });
};
export const getBase64Image = (imgUrl) => {
  return new Promise((resolve, reject) => {
    var img = new Image();

    // onload fires when the image is fully loadded, and has width and height

    img.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };

    img.onerror = function () {
      resolve({ error: "Image url is not accessable" });
    };
    // set attributes and src
    img.setAttribute("crossOrigin", "anonymous"); //
    img.src = imgUrl;
  });
};
export const toDataUrl = (url) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  });
};

export const uploadPng = () => {
  let img = "https://cdn.eso.org/images/thumb300y/eso1322a.jpg";
  toDataUrl(img, (data) => {
    fetch("https://intelligent-fate-abrosaurus.glitch.me/uploadImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: data, type: "jpeg", name: "jpegiuske" }),
    });
  });
};

export const uploadSvg = (element) => {
  return new Promise((resolve, reject) => {
    let s = new XMLSerializer().serializeToString(element);
    let dataUrl = "data:image/svg+xml;base64,";
    dataUrl += window.btoa(s);
    console.log("Data url loaded");
    fetch("https://walnut-carpal-dosa.glitch.me/uploadImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: dataUrl, type: "svg+xml", name: "dabarva" }),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log("response", res);
      });
  });
};

export const readFiles = (folder) => {
  return new Promise((resolve, reject) => {
    let ref = firebase.storage().ref(folder);
    ref
      .listAll()
      .then((list) => {
        list.items[0].getDownloadURL().then((url) => {
          resolve(url);
        });
      })
      .catch((er) => {
        reject(er);
      });
  });
};

// export const getImageUrl = (path) => {
//   return new Promise((resolve, reject) => {
//     let ref = firebase.storage().ref(path);
//     ref.getDownloadURL().then((url) => {
//       resolve(url);
//     });
//   });
// };
