import reducer from './projects'

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type:'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('adds a todo', () => {
    const startState = {
      projects: [
        {id: 1, thumbnailTitle:'title1', title: 'title1', message:"m1", headerImage:'react.ico'},
        {id: 2, thumbnailTitle:'title1', title: 'title1', message:"m1", headerImage:'react.ico'},
        {id: 3, thumbnailTitle:'title1', title: 'title1', message:"m1", headerImage:'react.ico'},
      ]
    }
    const expectedState = {
      projects: [
        {id: 1, thumbnailTitle:'title1', title: 'title1', message:"m1", headerImage:'react.ico'},
        {id: 2, thumbnailTitle:'title1', title: 'title1', message:"m1", headerImage:'react.ico'},
        {id: 3, thumbnailTitle:'title1', title: 'title1', message:"m1", headerImage:'react.ico'},
        {id: 4, thumbnailTitle:'title1', title: 'title1', message:'m1', headerImage:'react.ico'},
      ]
    }
    const action = {type:'UPDATE_PROJECTS', payload: {id: 4, thumbnailTitle:'title1', title: 'title1', message:'m1', headerImage:'react.ico'}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})
