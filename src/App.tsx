import { useDispatch } from 'react-redux';
import { thunkFunc } from "./store/user/thunk/usersThunk";
import { fetchPosts } from './store/posts/postsThunk';
import { useTypesSelector } from "./store/user/userSelector";
import { useTypesSelectorPosts } from "./store/posts/postsReducer";
import Output from "./components/Output";
import Output2 from './components/Output2';

function App() {
  const data = useTypesSelector(state => state.users);
  const posts = useTypesSelectorPosts(state => state.posts);
  const dispatch = useDispatch();

  return (
    <div className='container' style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <div className='users' style={{width: '40%'}}>
        <button 
        style={{
          padding: '5px 10px', 
          backgroundColor: '#777', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer'
          }} 
          onClick={() => dispatch(thunkFunc())}
        >Fetch Users</button>
        <Output data={data} />
      </div>
      <div className='posts' style={{width: '40%'}}>
        <button
        style={{
          padding: '5px 10px', 
          backgroundColor: '#777', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer'
          }} 
          onClick={() => dispatch(fetchPosts())}
        >Fetch Posts</button>
        <Output2 posts={posts} />
      </div>
    </div>
  )
}

export default App
