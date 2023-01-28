import { CardEntities } from "./Card";

export function ListCard({ Data = [] }) {
  return (
    <>
      {
        Data.map((i) => {
          return <>
            <CardEntities
              name={i.name}
              photo={i.photo}
            />
            <br />
          </>
        })
      }
    </>
  )
}


/**
 *   const [isLoading, setIsLoading] = useState(true);
    const [technologys, setTechnologys] = useState([]);


    useEffect(function () {
      fetch(Router.url, {
        method: Router.method
      })
        .then((response) => response.json())
        .then((data) => {
          setTechnologys(data[entitie])
          setIsLoading(false)

        })
    }, [])
 */