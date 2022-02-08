// import { useState} from "react";
import { useQuery} from "@apollo/client";
import { gql } from '@apollo/client';
const getPageInfo = gql`
query getPageInfo{
    horses(pagination:{limit:8}){
      meta{
            pagination{
                pageCount
            }
        }
    }
  }
`
const usePageCount=(props:{queryFor:string}) => {
        const { loading, error, data } = useQuery(getPageInfo)
        if (loading) return 0;
        if (error) return 0;
        return data[props.queryFor].meta.pagination.pageCount;
}

export default usePageCount;