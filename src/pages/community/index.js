import CommunityPost from '@/pages/communityPost/index'



export default function community() {
  return (
    <>
    <h1>
      <a href = '/'>logo</a>
    </h1>
    <nav>
      <ol>
        <li><a href = '/menu/1'>홈</a></li>
        <li><a href = '/menu/2'>문구</a></li>
        <li><a href = '/menu/3'>커뮤니티</a></li>
        <li><a href = '/menu/4'>마이페이지</a></li>
      </ol>
    </nav>
    <article>
      <ol>
        <li><a href = '/community'>게시글1</a></li>
        <li><a href = '/community/2'>게시글2</a></li>
        <li><a href = '/community/2'>게시글3</a></li>
        <li><a href = '/community/2'>게시글4</a></li>
      </ol>
    </article>
    </>
  )
}
