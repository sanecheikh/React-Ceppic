
export default function Footer(params){
    const CurrentYear = () =>{
        return new Date().getFullYear();
    }
    return(
        <>
        <p>&copy;- {CurrentYear()}-Ceppic Corperations</p></>
    )

};