import models from "../modelData/models"

/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 */
function fetchModel(url) {
  return new Promise((resolve, reject) => {
    if (url === "/test/info") {
      resolve(models.schemaInfo());
    } 
    else if (url === "/user/list") {
      resolve(models.userListModel());
    } 
    else if (url.startsWith("/user/")) {
      const id = url.split("/")[2]; // Tách url "/user/1234" thành ["", "user", "1234"] và lấy index 2
      resolve(models.userModel(id));
    }
    else if (url.startsWith("/photosOfUser/")) {
      const id = url.split("/")[2];
      resolve(models.photoOfUserModel(id));
    } 
    else {
      reject(new Error("URL Not Found"));
    }
  });
}

export default fetchModel;
