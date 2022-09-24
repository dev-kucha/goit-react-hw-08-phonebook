import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import { FilterPlateStyled, Input } from './FilterStyled';

const Filter = function () {
  const filter = useSelector(state => state.filter.text);

  return (
    <FilterPlateStyled>
      <Formik initialValues={{ filter: filter }}>
        <Form>
          <label>
            Find contacts by name
            <br />
            <Input
              type="text"
              name="filter"
              value={filter}
              //   onChange={e => {
              //     handleFilter(e.target.value);
              //   }}
            ></Input>
          </label>
        </Form>
      </Formik>
    </FilterPlateStyled>
  );
};

export default Filter;
