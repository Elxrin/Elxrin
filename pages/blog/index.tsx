import { Fragment } from 'react';
import { Posts } from '../../core/hooks/posts';

const Blog = () => {
    const posts = Posts();
    console.log(posts);

    return (
        <Fragment>
            <h1>Blog</h1>
        </Fragment>
    );
}
 
export default Blog;