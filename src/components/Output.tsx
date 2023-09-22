interface OutputProps {
  data: any[];
}

const Output = (data: OutputProps) => {
  return (
    <div>
      {data.data.users.map(user => (
        <div>
          <span>Name: {user.name}</span> 
          <br />
          <span>Username: {user.username}</span>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Output
