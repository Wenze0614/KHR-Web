import { useQuery, DocumentNode } from "@apollo/client";
import { useState } from "react";
import { Horse } from "../../pages/Adoption";
// import Card from "../ui/Card";
import styles from './Blog.module.css'
import ReactPaginate from "react-paginate";
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import HorseDetail from "../backdrop/HorseDetail";
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
    const [horseId, setHorseId] = useState('0')
    const [open, setOpen] = useState(false)

    const handleClose = () =>{
        setOpen(false)
    }
    if (loading) return <p>loading <CircularProgress color="inherit" /></p>
    if (error) return <p>error :(</p>
    const requiredData = data[props.queryFor].data;
    const visitedPages = props.blogsPerPage * currPageNumber;
    const pageCounts = Math.ceil(requiredData.length / props.blogsPerPage)
    console.log(requiredData)
    const displayBlogs = requiredData.slice(visitedPages, visitedPages + props.blogsPerPage).map((item: Horse) => {
        if (props.queryFor === 'horses') {
            return (
                <li key={item.id}>
                    {/* <Card className="horse-card" backgroundImg = {item.attributes.image.data.length > 0? `${item.attributes.image.data[0].attributes.url}`:undefined}>
                         <label>{item.id}</label> 
                        <h2>{item.attributes.name}</h2>
                        <p>{`${item.attributes.description.substring(0, 100)}...`}</p>
                    </Card> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.attributes.image.data.length > 0 ? `${item.attributes.image.data[0].attributes.url}` : undefined}
                            alt={item.attributes.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.attributes.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {`${item.attributes.description.substring(0, 100)}...`}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button> */}
                            <Button size="small" onClick={() => {setHorseId(item.id);setOpen(true) }}>Learn More</Button>
                        </CardActions>
                    </Card>
                </li>)
        }
    })

    const handlePageChange = (seletedItem: { selected: number }) => {
        setCurrPageNumber(seletedItem.selected)
    }
    return (
        <div className={styles[props.className]}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <HorseDetail id={horseId}></HorseDetail>
            </Backdrop>
            <ul className={styles.blogs}>
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