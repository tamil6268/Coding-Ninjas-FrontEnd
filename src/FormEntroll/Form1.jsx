import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: 'none',
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function RowAndColumnGap() {
  return (
    <div style={{ width: '100%' ,height:'20px' }}>
      <Box
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <Item><div>Name</div>
            <input type="text" placeholder="Enter Name"/>
        </Item>
        <Item><div>Name</div>
            <input type="text" placeholder="Enter Name"/>
        </Item>
        <Item><div>Name</div>
            <input type="text" placeholder="Enter Name"/>
        </Item>
        <Item><div>Name</div>
            <input type="text" placeholder="Enter Name"/>
        </Item>
      </Box>
    </div>
  );
}
