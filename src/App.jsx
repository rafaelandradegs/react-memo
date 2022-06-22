import React, { useState, useEffect, useMemo } from 'react'

export function App() {
  //States
  const [valor, setValor] = useState(() => {
    return 0
  })

  const [numero, setNumero] = useState(() => {
    return 1000
  })

  //useMemo
  const valorCalculado = useMemo(() => {
    return funcaoDemorada(valor)
  }, [valor])

  //Constantes
  // const valorCalculado = funcaoDemorada(valor)

  //Funcoes
  function incrementar() {
    setValor(valor => {
      return valor + 1
    })
  }

  function incrementar2() {
    setNumero(() => {
      return numero + 100
    })
  }

  function funcaoDemorada(num) {
    for (let i = 0; i < 1000000000; i++) {}

    return num * 2
  }

  useEffect(() => {
    console.log('Render')
  })

  return (
    <>
      <h1>React Hooks - useMemo</h1>
      <hr />
      <p>Valor: {valor}</p>
      <p>Valor Calculado: {valorCalculado}</p>
      <p>Valor numero: {numero}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={incrementar2}>Incrementar 2</button>
    </>
  )
}
