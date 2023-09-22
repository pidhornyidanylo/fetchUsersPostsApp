interface Output2Props {
  posts: any[]
}

const Output2 = (posts: Output2Props) => {
  return (
    <div>
      {posts.posts.posts.slice(0,10).map(post => (
        <div>
          <span>Name: {post.title}</span> 
          <br />
          <span>Username: {post.id}</span>
          <hr />
      </div>
      ))}
    </div>
  )
}

export default Output2
