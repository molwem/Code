const myApp = () => {

    const name = "Molly Wemyss"
    const address = {
    line1: 32,
    line2: "Tudor Crescent",
    city: "Swindon",
    postcode: "SN3 4JU"
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{address.line1}</h2>
            <h2>{address.line2}</h2>
            <h3>{address.city}</h3>
            <h3>{address.postcode}</h3>
        </div>
    );
}
export default myApp;
