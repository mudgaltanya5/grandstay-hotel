export const getgalleryApi = async () => {
  try {
    const response = await fetch(
      "https://api.myjson.online/v1/records/2419abba-30b3-4a9f-a55a-f84b5df6ee4c"
    );

    const data = await response.json();

    console.log("API DATA:", data);

    return data.data.Galleries;

  } catch (error) {
    console.log("API ERROR:", error);
    return [];
  }
};