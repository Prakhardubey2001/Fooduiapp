const Contacts = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <input type="text" placeholder="Name..."  className="border border-black p-2 m-2" />
        <input  type="email" placeholder="Email Address..." className="border border-black p-2 m-2" />
        <button className="border border-black p-2 m-2 bg-gray-400 rounded-lg"> Submit</button>
      </form>
    </div>
  );
};
export default Contacts;

