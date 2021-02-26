import {useRouter} from 'next/router'

const Post = () => {
    const router = useRouter()
    const {pid} = router.query
    return (
        <div>
           <h1>Post Id: {pid}</h1> 
        </div>
    );
};

export default Post;