export default function Hello({ Content }) {
  return (
    <div   >
      <p className="text-5xl  text-white ">{Content.home.title}</p>
      <br />
      <p className="text-start text-xl max-w-prose text-blue-gray-100 ">{Content.home.why}</p>
      <br />
    </div>
  );
}