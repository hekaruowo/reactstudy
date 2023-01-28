function Rating() {
    return (
      <div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
      </div>
    )
  }

  function Star(props: any) {
    return (
        <span><b>star </b></span>
    )
  }
  export default Rating;