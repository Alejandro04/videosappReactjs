import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const SearchTrack = (props) => {
  return (
    <Form>
      <FormGroup>
        <Input type="text" name="search" id="search" placeholder="Search Track" className="searchInput" />
      </FormGroup>
    </Form>
  );
}

export default SearchTrack;