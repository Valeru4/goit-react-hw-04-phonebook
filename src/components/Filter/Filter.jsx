import PropTypes from 'prop-types';
import { Container, Heading, Input } from './Filter.styled';

export const Filter = ({ changeFilter }) => {
  const onChange = event => {
    const filter = event.target.value;
    changeFilter(filter);
  };

  return (
    <Container>
      <Heading>Find contacts by name</Heading>
      <Input name="filter" type="text" onChange={onChange} />
    </Container>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
