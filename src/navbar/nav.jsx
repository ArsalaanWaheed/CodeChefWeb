import navimg from "./navImg.jpg";
import logo from "./logo.png";


export const Nav = () => {
  return (
    <div className="h-[30vh] w-[95vw] md:w-[98vw] p-0 m-0 bg-cover" style={{backgroundImage:`url(${navimg})`}}>
       
        <div className="h-[20vh]">  <img src={logo} className="h-[8em] p-4" /></div>
        <h1 className="text-white font-semibold self-baseline text-[40px]">CodeChef,ZHCET</h1>
    </div>
  )
}
