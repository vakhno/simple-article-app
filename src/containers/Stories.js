import React, {useState, useEffect, memo} from 'react'
import {getStoryIds} from '../services/hnApi'
import Story from '../components/Story'
import {GlobalStyle, StoriesContainerWrapper} from './StoriesStyles'
import {useInfiniteScroll} from '../hooks/useInfiniteScroll'

function Stories() {
	const [storyIds, setStoryIds] = useState([])
	const {count} = useInfiniteScroll()


	useEffect(() => {
		getStoryIds()
		.then(ids => ids && setStoryIds(ids))
		.catch(error => console.log(`Помилка при отримані ідентифікаторів: ${error}`))
	}, [])

	return (
		<>
			<GlobalStyle/>
			<StoriesContainerWrapper data-test-id="stories-container">
				<h1>News Stories</h1>
				{
					storyIds.slice(0, count).map( (storyId, index) => {
						return <Story storyId={storyId} key={`${storyId}_${index}`}/>
					})
				}
			</StoriesContainerWrapper>
		</>
	)
}

export default Stories
