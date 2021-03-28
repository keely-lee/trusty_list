import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../actions/list_actions';

function List(props) {
  const dispatch = useDispatch();
  const { match } = props;
  const list = useSelector(state => state.entities.lists);
  const listObj = Object.keys(list).length ? list[Object.keys(list)[0]] : null;

  useEffect(() => {
    dispatch(getList(match.params.id))
  }, [])

  return (
    <div className="list-main">
      LIST COMP
      
      { listObj ? ( 
        <div>
          <h3>{listObj.name}</h3>
        </div>
      ) : "List Does Not Exist" }
      {/* Add redirect later if list does not exist */}

    </div>
  )
}

export default List;