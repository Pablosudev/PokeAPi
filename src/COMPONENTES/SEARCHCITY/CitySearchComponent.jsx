import "./CitySearch.css"

export const CitySearch = (props) => {


    const buttonCityNames = () => {
        let allCityNames = props.dataCity.results.map((PokémonCity,index) => {
    
          return PokémonCity.name
        })
    
        const inputPoke = document.getElementById("inputPoke")
    
        const searchCity = allCityNames.filter(CityName => {
          return CityName === inputPoke.value
        })
       
      }

    return(
        <>
        <section className="sectionsearch">
            <h3 className="citys">Bucar ciudades</h3>
            <input className="inputcity" id="inputPoke" type="text" placeholder="Buscar Pokémon"/>
            <button className="buttonciy" type="submit"  onClick={buttonCityNames}>Buscar</button>
        </section>
        </>
    )
}
