const getIdFromUrl = () => {
  let urlFragments = window.location.href.split("/");
  return urlFragments[urlFragments.length - 1];
};

export {getIdFromUrl};