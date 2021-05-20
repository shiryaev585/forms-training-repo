import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    watch,
  } = useForm({mode: "onChange"});

  const onSubmit = (data) => {
    console.log('Send data: ', data);
  };
  const name = watch("name");
  console.log("Name: " + name);

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Form</h1>
      <hr />
      <input
        defaultValue='Alexander'
        {...register('name', { required: true, maxLength: 15 })}
      />
      {errors.name && <i style={{color: "red", marginLeft: "10px"}}>Required field, 15 symbols max</i>}
      <hr />
      <input {...register('age', {required: true, pattern: /\d?\d/, min: 18, max: 65})} />
      {errors.age && <i style={{color: "red", marginLeft: "10px"}}>Required field; min age - 18, max age - 65</i>}
      <hr />
      <select {...register("answer")}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <hr/>
      <input type='submit' />
      <p>Send counter: {submitCount}</p>
    </form>
  );
}

export default App;
