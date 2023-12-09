import { useEffect, useState } from "react";
import PostApi from "../../../api/PostApi";
import PostCard from "./PostCard";

const PostList = () => {
    const [post, setPost] = useState();
    function createMarkup(des) {
        return { __html: des };
    }
    const fetchPost = async () => {
        try {
            const res = await PostApi.getAll();
            setPost(res);

        } catch (e) {

        }
    }
    useEffect(() => {
        fetchPost();
    }, [])
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1330px', width: '100%', marginTop: '30px' }}>
            <div style={{
                padding: '15px 20px',
                backgroundColor: "#f04e47",
                borderRadius: '10px',
                marginBottom: '25px'
            }} ><p style={{ color: "#fff", fontSize: '18px', fontWeight: '700' }}>TẤT CẢ BÀI VIẾT</p></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '30px', padding: '10px 0 50px 0' }}>

                {post?.map(p => {
                    return <PostCard post={p}></PostCard>
                })}
            </div>
        </div>
    </div>
}

export default PostList;