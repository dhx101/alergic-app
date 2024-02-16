import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './SeleccionAlergias2.css';

const SeleccionAlergias2 = () => {

    const letras = ["A", "B", "C", "E", "F", "G", "H", "K", "L", "M", "N", "P", "S", "T"]

    const alergenos = ["Acido benzoico", "Aguacate", "Ajo", "Albaricoque", "Alforfón", "Almendras", "Altramuces", "Anacardo", "Apio", "Arroz", "Avellana", "Avena", "Bálsamo del Perú", "Cacahuete", "Carne de ave de corral", "Carne roja", "Cebada", "Centeno", "Espelta", "Fresa", "Garbanzos", "Guisantes", "Huevo", "Kamut", "Kiwi", "Leche", "Lentejas", "Mango", "Maiz", "Marisco", "Melocoton", "Melon", "Mostaza", "Nectarina", "Nuez", "Pescado", "Platano", "Polen", "Sandia", "Sesamo", "Soja", "Sulfitos", "Tartrazina", "Tomate", "Trigo"]

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
      const dataSelect = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => value === true)
      )

      
      console.log('Datos del formulario:', dataSelect);
      console.log('Datos del formulario:', data);
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleClick = (alergeno) => {
      setIsChecked({...isChecked, [alergeno]: !isChecked[alergeno]});
    };


    // const handleLetraClick = (letra) => {
    //   // Si la letra ya está seleccionada, la eliminamos del array
    //   if (letrasSeleccionadas.includes(letra)) {
    //     setLetrasSeleccionadas(letrasSeleccionadas.filter(item => item !== letra));
    //   } else {
    //     // Si la letra no está seleccionada, la agregamos al array
    //     setLetrasSeleccionadas([...letrasSeleccionadas, letra]);
    //   }
    // };

  return (
    <>
      <div className='header'>
        <Link to='/allergy1'><button>Volver</button></Link>
        <h4>3 de 4</h4>
      </div>

      <div className='titulo'>
        <h2>Ahora selecciona tus alergias e intolerancias.</h2>
        <p>Los elementos marcados serán identificados en tus busquedas como peligrosos para ti.</p>
      </div>
        <div className='letras'>
           {letras.map((letra, id) => (
                <button key={id}>{letra}</button>
            ))} 
        </div>
        
        <div className='alergenos'>

            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
               <p>A</p>
              {alergenos.filter(a => a.startsWith('A')).map((A, index) => (
                <div key={index} className={isChecked[A] ? 'boton' : 'noboton'}>
                <input
                    onClick={() =>handleClick(A)}
                    type="checkbox"
                    className='check'
                    id={A}
                    {...register(A)}
                  />
                  <label htmlFor={A}>{A}</label>
                </div>
            ))} 
            </label>

            <label> 
              <p>B</p>
            {alergenos.filter(b => b.startsWith('B')).map((B, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={B}
                    {...register(B)}
                  />
                  <label htmlFor={B}>{B}</label>
                </div>
            ))} 
            </label>

            <label> C
            {alergenos.filter(c => c.startsWith('C')).map((C, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={C}
                    {...register(C)}
                  />
                  <label htmlFor={C}>{C}</label>
                </div>
            ))} 
            </label>

            <label> E
            {alergenos.filter(e => e.startsWith('E')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>

            <label> F
            {alergenos.filter(f => f.startsWith('F')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>

            <label> G
            {alergenos.filter(g => g.startsWith('G')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>
            
            <label> H
            {alergenos.filter(h => h.startsWith('H')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>
            
            <label> K
            {alergenos.filter(k => k.startsWith('K')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>
            
            <label> L
            {alergenos.filter(l => l.startsWith('L')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>

            <label> M
            {alergenos.filter(m => m.startsWith('M')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>

            <label> N
            {alergenos.filter(n => n.startsWith('N')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>

            <label> P
            {alergenos.filter(p => p.startsWith('P')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>

            <label> S
            {alergenos.filter(s => s.startsWith('S')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>

            <label> T
            {alergenos.filter(t => t.startsWith('T')).map((alergeno, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={alergeno}
                    {...register(alergeno)}
                  />
                  <label htmlFor={alergeno}>{alergeno}</label>
                </div>
            ))} 
            </label>

            <button type='submit'>Enviar</button>

            </form>
           
        </div>
      
    </>
  )
}

export default SeleccionAlergias2
