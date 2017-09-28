import React from 'react'


class ListingPage extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://offblackmagazine.com/dev/wp-json/wp/v2/posts')
            .then((data) => data.json())
            .then((posts) => {
                this.setState({posts: posts}, () => console.log(this.state.posts))
            })
    }

    render() {
        return (
            <main className='relative height-100 overflow-hidden'>
                {this.state.posts.map((post, i) => (
                    <div>{post.title.rendered}</div>
                ))}
            </main>
        )
    }
}

export default ListingPage
