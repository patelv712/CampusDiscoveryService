import React from 'react';

const Pagination = ({eventsPerPage, allEvents, paginate}) => {
    const pagenos = [];
    for (let i = 1; i <= Math.ceil(allEvents / eventsPerPage); i++) { pagenos.push(i); }
    return (<nav>{pagenos.map(no => (<p key={no}><a onClick={()=> paginate(no)} href="javascript:">{no}</a></p>))}</nav>)
}

export default Pagination;