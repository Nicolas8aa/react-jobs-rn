export const checkImageURL = (url) => {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};
