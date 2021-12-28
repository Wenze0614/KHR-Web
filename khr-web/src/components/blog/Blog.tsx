import { useQuery, gql, DocumentNode } from "@apollo/client";

interface BlogProps{
    query:DocumentNode,
    children?:string
}

const Blog = (props:BlogProps) =>{
    console.log('calling blog')
    const {loading, error, data} = useQuery(props.query)

    if(loading) return <p>loading</p>
    if(error) return <p>error :(</p>
    console.log(data)
    return (
        <p>success</p>
    )
}

export default Blog;