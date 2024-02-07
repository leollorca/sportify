const request = async (id, url) => {
  try {
    const response = 
      await fetch(`http://localhost:3000/user/${id}/${url || ""}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

export default request;