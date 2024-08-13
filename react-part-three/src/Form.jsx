
export default function Form(){
    function handlingForm(event){
        console.log("Form Was Submitted !");
        event.preventDefault();
    }
    return(
        <form onSubmit={handlingForm}>
            <input placeholder="Write something"/>
            <button>Submit</button>
        </form>
    )
}