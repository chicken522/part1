const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </>
  )
}

const App = () => {

  const name = "Peter"
  const age = 18


  const t = [1,2,3,4,5]

  const m1 = t.map(value => value*2)
  console.log(m1)

  const m2 = t.map(value => '<li>' + value +"</li>")
  console.log(m2)

  const [first,second, ...rest] = t
  console.log(first,second)
  console.log(rest)
  
  const object1 = {
    name: "Artho test",
    age: 35,
    education: "PhD"

  }

  // const sum = function(p1,p2){
  //   console.log(p1)
  //   console.log(p2)
  //   return p1 + p2
  // }


  // const sum = p => { 
  //   return p
  // }

  const sum = p => p*p

  const result = sum(5)
  console.log(result)


  return (
    <>
      <h1>Greatings</h1>
      <Hello name="Maya" age={26+10}/>
      <Hello name={name} age={age}/>
    </>
  )
}


export default App;
