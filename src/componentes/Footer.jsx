import { Pilares } from "./Pilares"

export const Footer = () => {
  return (
    <div className="footer">
        <Pilares icono={"Managment"} subtitulo={<i className="fa-solid fa-people-group fa-2x"></i>}/>
        <Pilares icono={"Planner"} subtitulo={<i className="fa-solid fa-chart-column fa-2x"></i>}/>
        <Pilares icono={"Marketing"} subtitulo={<i className="fa-solid fa-gears fa-2x"></i>}/>
        <Pilares icono={"Reports"} subtitulo={<i className="fa-solid fa-file-word fa-2x"></i>}/>
    </div>
  )
}

