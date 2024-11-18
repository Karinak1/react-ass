export default function Form() {
  function handleSubmit() {}
  return (
    <div>
      <h2>Write a review</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input placeholder="name" />
        <label>Review</label>
        <input placeholder="review" />

        <button>Submit</button>
      </form>
    </div>
  );
}
