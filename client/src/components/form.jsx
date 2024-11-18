import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    type: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    setForm({ name: '', type: '' });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  return (
    <div>
      <h2>What kind of wine do you drink</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          placeholder="Name "
          onChange={handleChange}
          value={form.name}
        />
        <label></label>
        <label>Wine Type</label>

        <input
          name="type"
          placeholder="type"
          onChange={handleChange}
          value={form.type}
        />
        {/* <label>Country</label>

        <input placeholder="Country" /> */}

        <button>Submit</button>
      </form>
    </div>
  );
}
