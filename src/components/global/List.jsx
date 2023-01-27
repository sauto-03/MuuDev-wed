export default function List(props) {
  return (
    <div className="container grid grid-cols-5 gap-5 md:flex  justify-center " id="center"   >
      {props.children}
    </div>
  )

}