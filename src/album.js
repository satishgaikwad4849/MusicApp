import React from 'react'
import Buton from './redux/button';
import NewsItem from './newsitem'
import Loading from './loading'

export  function WebSeries() {
    return (
        <div>
            <Buton />
            <Loading />
            <NewsItem />
        </div> 
    )
}
