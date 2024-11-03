import  {Facebook,Instagram,Twitter,Linkedin}  from 'lucide-react';


export const Footer = () => {
  return (
    <div className="h-[30vw] ml-2 w-[90vw] flex justify-center items-center rounded-b-lg  bg-gradient-to-t from-green-600 to-black">
        <div className=" border-t-2 flex  gap-10  w-[80%] pt-3 ">
        <Facebook color="white" size="30"/>
        <Instagram color="white" size="30"/>
        <Twitter color="white" size="30"/>
        <Linkedin color="white" size="30"/>
        </div>
    </div>
  )
}
