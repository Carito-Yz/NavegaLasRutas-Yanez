import { BarLoader } from "react-spinners"
import ("./loading.css")

const Loading = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center loading-container">
        <div className="row">
          <BarLoader height={5} width={300} color="#264653"/>
        </div>
    </div>
  )
}

export default Loading