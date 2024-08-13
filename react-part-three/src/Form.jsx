function handlingForm(event){
    console.log("Form Was Submitted !");
    event.preventDefault();
}
export default function Form(){
    return(
        <form onSubmit={handlingForm}>
            <input placeholder="Write something"/>
            <button>Submit</button>
        </form>
    )
}