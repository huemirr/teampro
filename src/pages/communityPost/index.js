import styles from '@/styles/communityPost.module.css'
import Link from 'next/link';

export default function communityPost() {
    return (
<>
    <h1 className={styles.logo}>
      <a href = '/'>logo</a>
    </h1>
    <nav className={styles.communityNav}>
      <ul>
        <li><a href = '/menu/1'>홈</a></li>
        <li><a href = '/menu/2'>문구</a></li>
        <li><a href = '/menu/3'>커뮤니티</a></li>
        <li><a href = '/menu/4'>마이페이지</a></li>
      </ul>
    </nav>
    <article>
      <div className={styles.communityUserProfile}>
        <img src = "./img/1.JPG"  alt = 'userprofile' />
        <div className={styles.communityuserProfileWarp}>
          <h3>username</h3>
          <p>hour</p>
        </div>
      </div>
      <img src = "./img/1.JPG"  alt = 'userupdateimg' />
      <div className={styles.communityaction}>
        <img src = 'heart' />
        <img src = 'chat' />
      </div>
      <div className={styles.communitytags}>
        <p>#tag</p>
      </div>
      <div className={styles.communitymessage}>
        <p>message</p>
      </div>
    </article>
    <div comment>
      <h3>username</h3>
      <p>comment</p>
    </div>
    </>
    )
}