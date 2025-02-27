import arrayProductos from "../clase4/json/productos.json"

const withPosts = (BaseLayout) => {
    return function() {
        return <BaseLayout posts={arrayProductos} {...props} />
    }
}

const PostsLists = (props) => {
    console.log(props);
    
    return (
        <ul>
            {
                props.posts.map(item => (
                    <li>#{item.id}- {item.nombre} - ${item.precio}</li>
                ))
            }
        </ul>
    )
}

export default withPosts(PostsLists);
