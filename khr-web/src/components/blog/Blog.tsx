import { useQuery, gql, DocumentNode } from "@apollo/client";
import { Horse } from "../../pages/Adoption";
import Card from "../ui/Card";
import styles from './Blog.module.css'
interface BlogProps {
    className: string,
    queryFor: string,
    query: DocumentNode,
    children?: string
}

const Blog = (props: BlogProps) => {
    console.log('calling blog')
    const { loading, error, data } = useQuery(props.query)

    if (loading) return <p>loading</p>
    if (error) return <p>error :(</p>
    console.log(data)
    const requiredData = data[props.queryFor].data
    console.log(props.queryFor)
    return (
        <div className={styles[props.className]}>
            <ul>
                {requiredData && props.queryFor === 'horses' ? requiredData.map((horse: Horse) => {
                    return(
                    <li key={horse.id}>
                        <Card className="horse-card">
                            <label>{horse.id}</label>
                            <h2>{horse.attributes.name}</h2>
                            <p>{horse.attributes.description.substring(0,200)}</p>
                        </Card>
                    </li>)
                }) : null}
            </ul>
        </div>
    )
}

export default Blog;