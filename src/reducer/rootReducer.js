const initState = {
    posts : [
        {id: 1, title: 'Blog Post 1', body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
        {id: 2, title: 'Blog Post 2', body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
        {id: 3, title: 'Blog Post 3', body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer