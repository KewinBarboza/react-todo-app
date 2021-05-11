import './style.css';
import pencil from '../../assets/image/pencil.svg';
import add from '../../assets/image/add.svg';

export default function InputCreateTodo({ onSubmit, handleChange }) {
	return (
		<>
			<form className="Form-create-todo" onSubmit={onSubmit}>
				<img className="Form-img-create-todo" src={pencil} alt="" />
				<input onChange={handleChange} name="Form-input-todo" />
				<button className="btn btn-create-todo" type="submit">
					<img src={add} alt="Guardar" />
				</button>
			</form>
		</>
	);
}
