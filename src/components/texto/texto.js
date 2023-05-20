const Texto = (propos) => {
    let testeTest = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam ipsum non assumenda voluptates,    perspiciatis eveniet nesciunt dolor quidem voluptatum aliquid aspernatur nam sunt ut enim obcaecati odio, omnis quos?'
    
    return (
        <div style={{color: 'red'}}>
            <p>{testeTest.toUpperCase()}</p>
        </div>
    )
}

Texto.defaultProps = {
    color: 'orange'    
}
export default Texto;



// Usando JS
// .toUpperCase()
// Usando CSS
// , textTransform: 'uppercase'