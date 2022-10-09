import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { newFilter } from 'redux/filter/filterSlice';
import { selectFilterText } from 'redux/contacts/selectors';
import { FilterPlateStyled, Input } from './FilterStyled';

const Filter = function () {
  const filter = useSelector(selectFilterText);
  const dispatch = useDispatch();
  const handleFilter = searchQuery => dispatch(newFilter(searchQuery));

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
              onChange={e => {
                handleFilter(e.target.value);
              }}
            ></Input>
          </label>
        </Form>
      </Formik>
    </FilterPlateStyled>
  );
};

export default Filter;
