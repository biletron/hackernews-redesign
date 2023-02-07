export default async function getStories(category) {
  const data = await fetch(`https://node-hnapi.herokuapp.com/${category}`, {
    // headers: {
    //   Authorization: process.env.ACCESS_TOKEN,
    // },
  });
  const stories = await data.json();

  return stories;
}
