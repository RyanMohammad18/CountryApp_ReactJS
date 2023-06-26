import React from 'react'
import Country_component from './Country_component'
import {v4 as uuidv4} from "uuid";

import styles from "./CountryComponent.module.css"


const Countries = (props) => {
  return (
    <div>
        <section className={styles.countries}>
            {props.countries.map((country)=>{
                const countrynew= {country,id: uuidv4()}

                return <Country_component {...countrynew} key={countrynew.id} onRemoveCountry={props.onRemoveCountry}/>
            })}

        </section>
    </div>
  )
}

export default Countries