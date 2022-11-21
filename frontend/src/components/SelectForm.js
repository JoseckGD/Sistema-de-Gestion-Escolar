import React, { Component, Fragment } from "react";
import Select from 'react-select'

const options = [
   { value: 'calculoDiferencial', label: 'Calculo Diferencia' },
   { value: 'calculoIntegral', label: 'Calculo Integral' },
   { value: 'matematicas1', label: 'Matematicas para Ingenieria 1' },
   { value: 'matematicas2', label: 'Matematicas para Ingenieria 2' }
];

export default class SelectForm extends Component {
   handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log('option', selectedOption)
      // setForm({
      //    ...form,
      //    [e.target.name]: e.target.value,
      // });
   };
   render() {
      return (
         <Fragment>
            <Select options={options} onChange={this.handleChange} />
         </Fragment>

      );
   }
}
