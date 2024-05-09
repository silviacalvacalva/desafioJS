const POST_BASE_URL = "https://devto-1ecfa-default-rtdb.firebaseio.com/post";

const createPost = async (postObject) => {
    let response = await fetch(`${POST_BASE_URL}/.json`, {
      method: "POST",
      body: JSON.stringify(postObject),
    });
    let data = await response.json();
    return data;
  };

  const fetchAllPost = async () => {
    let response = await fetch(`${POST_BASE_URL}/.json`);
    let data = await response.json();
    let keys = Object.keys(data);
    let postArray = keys.map((key) => ({ ...data[key], key }));
    return postArray;
  };
/*
  const fetchPostByKey = async (productoKey) => {
    let response = await fetch(`${POST_BASE_URL}/${productoKey}/.json`);
    let data = await response.json();
    return data;
  };*/
  export { createPost, fetchAllPost };