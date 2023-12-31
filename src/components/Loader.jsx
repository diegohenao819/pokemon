
import 'ldrs/square'



const Loader = () => {
  return (
 

<div className='loader'
  style={{height: "50vh", display: "flex", justifyContent: "center", alignItems: "center"}}
>
  <l-square
    size="150"
    stroke="7"
    stroke-length="0.28"
    bg-opacity="0.1"
    speed="0.9"
    color="yellow" 
  ></l-square>
</div>
  )
}

export default Loader