import { useQuery, DocumentNode } from "@apollo/client";
import { gql } from '@apollo/client';
import { useState, useEffect} from "react";
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

import HorseDetail from "../backdrop/HorseDetail";
import MyBackDrop from "../ui/MyBackDrop";
import usePageCount from "../hooks/usePageCount";
interface BlogProps {
    className: string,
    queryFor: string,
    query: DocumentNode,
    children?: string,
    blogsPerPage: number
}


const getPage = (page: number) => {
    return gql`
    query getHorses{
        horses(pagination:{pageSize:8, page:${page}}){
          data{
            id,
            attributes{
              name,
              description,
              publishedAt,
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
}
const Blog = (props: BlogProps) => {
    console.log('calling blog')

    // useEffect(() => {
    //     const { loading, error, data } = useQuery(getPageInfo)
    //     // if (loading) return <p>loading <CircularProgress color="inherit" /></p>
    //     // if (error) return <p>error :(</p>
    //     setPageCounts(data[props.queryFor].meta.pagination.pageCount)
    // }, [])
    // const {  data } = useQuery(getPageInfo)

    const pageCounts = usePageCount({queryFor:props.queryFor})
    const [currPageNumber, setCurrPageNumber] = useState(0)
    const [selectedHorse, setSelectedHorse] = useState<Horse>()
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }


    // const pageCounts = data[props.queryFor].meta.pagination.pageCount;
    // const requiredData = data[props.queryFor].data;
    // const visitedPages = props.blogsPerPage * currPageNumber;
    // const pageCounts = Math.ceil(requiredData.length / props.blogsPerPage)
    // console.log(requiredData)
    const { loading, error, data } = useQuery(getPage(currPageNumber+1))
    if (loading) return <p>loading <CircularProgress color="inherit" /></p>
    if (error) return <p>error :(</p>
    const requiredData = data[props.queryFor].data;
    const displayBlogs = requiredData.map((item:Horse) => {
        if (props.queryFor === 'horses') {
            return (
                <li key={item.id}>
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
                                {`${item.attributes.description.substring(0, 50)}...`}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button> */}
                            <Button size="small" onClick={() => { setSelectedHorse(item); setOpen(true) }}>Learn More</Button>
                        </CardActions>
                    </Card>
                </li>)
        }else{
            return <></>
        }
    })

    const handlePageChange = (seletedItem: { selected: number }) => {
        console.log("selected:", seletedItem.selected)
        setCurrPageNumber(seletedItem.selected)
    }
    return (
        <div className={styles[props.className]}>
            <MyBackDrop open={open} onClose={handleClose} className='horse-detail-container'>
                <HorseDetail selectedHorse={selectedHorse}></HorseDetail>
            </MyBackDrop>
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCounts}
                // initialPage={currPageNumber}
                forcePage={currPageNumber}
                onPageChange={handlePageChange}
                containerClassName={styles.pagination}
                previousLinkClassName={styles.previousButton}
                nextLinkClassName={styles.nextButton}
                disabledClassName={styles.paginationDisable}
                activeClassName={styles.paginationActive}></ReactPaginate>
            <ul className={styles.blogs}>
                {displayBlogs}
            </ul>

        </div>
    )
}

export default Blog;