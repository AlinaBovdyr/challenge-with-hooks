import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ items, parentId = 0 }) => {
  const parentItems = items.filter(item => item.parent_id === parentId)

  return parentItems.length > 0 && (
    <ul>
      {parentItems.map(el => (
        <Item key={el.id} label={el.label}>
          <List items={items} parentId={el.id} />
        </Item>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      parent_id: PropTypes.number.isRequired,
    }),
  ),
  parentId: PropTypes.number,
};

export default List;