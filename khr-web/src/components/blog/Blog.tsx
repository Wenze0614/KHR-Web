import { useQuery,  DocumentNode } from "@apollo/client";
import { useState } from "react";
import { Horse } from "../../pages/Adoption";
import Card from "../ui/Card";
import styles from './Blog.module.css'
import ReactPaginate from "react-paginate";

interface BlogProps {
    className: string,
    queryFor: string,
    query: DocumentNode,
    children?: string,
    blogsPerPage: number
}

const Blog = (props: BlogProps) => {
    console.log('calling blog')
    const { loading, error, data } = useQuery(props.query)
    const [currPageNumber, setCurrPageNumber] = useState(0)

    if (loading) return <p>loading</p>
    if (error) return <p>error :(</p>
    const requiredData = data[props.queryFor].data;
    const visitedPages = props.blogsPerPage * currPageNumber;
    const pageCounts = Math.ceil(requiredData.length / props.blogsPerPage)
    console.log(pageCounts)
    const displayBlogs = requiredData.slice(visitedPages, visitedPages + props.blogsPerPage).map((item: Horse) => {
        if (props.queryFor === 'horses') {
            return (
                <li key={item.id}>
                    <Card className="horse-card">
                        <label>{item.id}</label>
                        <h2>{item.attributes.name}</h2>
                        <p>{item.attributes.description.substring(0, 200)}</p>
                    </Card>
                </li>)
        }
    })

    const handlePageChange = (seletedItem:{selected:number}) => {
        setCurrPageNumber(seletedItem.selected)
    }
    return (
        <div className={styles[props.className]}>
            <ul>
                {/* {requiredData && props.queryFor === 'horses' ? requiredData.map((horse: Horse) => {
                    return (
                        <li key={horse.id}>
                            <Card className="horse-card">
                                <label>{horse.id}</label>
                                <h2>{horse.attributes.name}</h2>
                                <p>{horse.attributes.description.substring(0, 200)}</p>
                            </Card>
                        </li>)
                }) : null} */}
                {displayBlogs}
            </ul>
            <ReactPaginate 
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCounts}
                onPageChange={handlePageChange} 
                containerClassName={styles.pagination}
                previousLinkClassName={styles.previousButton}
                nextLinkClassName={styles.nextButton}
                disabledClassName={styles.paginationDisable}
                activeClassName={styles.paginationActive}></ReactPaginate>
        </div>
    )
}

export default Blog;