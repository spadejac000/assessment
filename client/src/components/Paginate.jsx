import React from 'react'
import {Pagination} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Paginate = ({pages, page, keyword = ''}) => {
  return pages > 1 && (
    <Pagination>
      {[...Array(pages).keys()].map(x => (
        <a href="/jacob">hello</a>
        // <Link
        //   key={x + 1} 
        //   to={keyword ? `/search/${keyword}/page/${x+1}` : `/page/${x+1}`}
        // >
        //   <Pagination.Item active={x+1 === page}>{x+1}</Pagination.Item>
        // </Link>
      ))}
    </Pagination>
  )
}

export default Paginate
