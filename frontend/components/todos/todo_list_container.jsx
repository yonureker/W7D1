import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos : allTodos(state)
});

const mapDispatchToProps = (todo) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);