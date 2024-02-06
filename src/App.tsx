import Button from './components/button/Button';
import Input from './components/input/Input';
import Label from './components/label/Label';





function App() {

	return (
		<>
			<Button appearance='small'>
				Вход
			</Button>
			<Label>
				Ваш email
				<Input name='email' type='email' placeholder='Email' />
			</Label>

			

			
		</>
	);
}

export default App;
