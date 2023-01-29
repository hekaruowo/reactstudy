 function Accordion(props: any) {
    return (
      <div>
        <AccordionTitle title={props.titleValue}/>
  
        <AccordionBody />
          
        
      </div>
    )
  }
  function AccordionTitle (props: any) {
    return (
        <h3>{props.title}</h3>
    )
  }
  
  function AccordionBody () {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }
  export default Accordion;