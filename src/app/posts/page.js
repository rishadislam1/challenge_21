import Link from "next/link";

const PostPage = async() => {
    const res = await fetch('http://localhost:8000/posts',{
        next: {
            // cache: "force-cache"
            // revalidate: 5
            cache: "no-store"
        }
    });
    const posts = await res.json();

    return (
        <div>
            <h1>Total Post: {posts?.length}</h1>
            <div className=" flex flex-wrap justify-center items-center gap-7">
                {posts?.map(post=><div key={post.id} className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2>
    <p>{post.description}</p>
    <p>Like Count: {post.like_count}</p>
    <div className="card-actions justify-end">
      <Link href={`/posts/${post.id}`}><button className="btn btn-primary">See More</button></Link>
    </div>
  </div>
</div>)}
            </div>
        </div>
    );
};

export default PostPage;