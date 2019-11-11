import {shortenText} from '../utile/function'
import {wordCount, attachUserName} from '../../server/utils'
import {shortenText, longText, posts, users} from './__data__/testData'
import { isTSAnyKeyword, jsxFragment } from '@babel/types'

isTSAnyKeyword('shortenText doesnt shortern the string that has less than 100 letters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

isTSAnyKeyword('shortenText should cut extra letters after 100 and add three periods', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

isTSAnyKeyword('wordCount should count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})

it('attachUserName should attach a users full name to a post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
  })
  
  it('attachUserName should remove posts with no matching user', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
  })