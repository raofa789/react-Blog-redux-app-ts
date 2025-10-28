import BlogItem from "../../components/website/BlogItem";
//في حال حدوث اي تعارض في ملفات ال css يمكن الحل بطريقتين
// 1- Css Modules
//2- تغيير اسماء الكلاسات المتشابهة بين الكلاسات عشان ما يصير override
let WebSiteHome: React.FC = () => {
  return (
    <div className="website-content-wrapper">
      <section className="content">
        <span>Most Recent</span>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />

        <section className="join-us">
          <span>JOIN US</span>
          <span>We Post New Blogs Everyday, Join Us</span>
          <section>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button type="submit">Join Us</button>
          </section>
        </section>
      </section>
    </div>
  );
};
export default WebSiteHome;

