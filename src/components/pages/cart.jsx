const array=JSON.parse(localStorage.getItem("storage"))||[]
console.log(array)
function Cart(){
    return <div>
        {array.map((el)=>{
            return <img src={el.image_link} alt="" />
        })}
    </div>
}
export default Cart