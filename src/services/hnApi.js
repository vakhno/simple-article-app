import axios from 'axios'

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const newStoriesUrl = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`

export const getStory = async (storyId) => {
	const result = await axios.get(`${storyUrl + storyId}.json`)
	.then(({data}) => data)
	.catch(error => console.log(`Помилка при отриманні статті: ${error}`))

	return result
}

export const getStoryIds = async () => {
	const result = await axios.get(newStoriesUrl)
	.then(({data}) => data)
	.catch(error => console.log(`Помилка при запиті: ${error}`))

	return result
}