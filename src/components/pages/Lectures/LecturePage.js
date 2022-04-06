const LecturePage = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-4 px-4 sm:px-8">
      <div>
        <div className="py-4">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
            مبحث اول{" : "}
            <span className="text-indigo-600">مقدمه</span>
          </h3>
        </div>
        <div className="w-100 rounded-md">
          <iframe
            style={{ width: "100%", height: "80vh", borderRadius: "16px" }}
            title="lecture one"
            src="https://www.aparat.com/video/video/embed/videohash/jkMhT/vt/frame"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="mt-2 p-1">
          <section id="section1">
            <h3>مقدمه‌ای بر نظریه مجموعه‌ها</h3>
            <p>
              <strong>مجموعه:</strong>
              دسته‌ای از عناصر متمایز را مجموعه گویند.
            </p>
            <p>
              <strong>زیرمجموعه:</strong>
              اگر هر عضو مجموعه $A$ متعلق به مجموعه $B$ نیز باشد، مجموعه $A$
              زیرمجموعه مجموعه $B$ است. به بیان ریاضی: $A\subset B$
            </p>
            <p>
              <strong>مجموعه مساوی:</strong>
              اگر و تنها اگر $A\subset B$ و $B\subset A$ آنگاه دو مجموعه $A$ و
              $B$ مساوی یکدیگر هستند.
            </p>
            <p>
              <strong>مجموعه مرجع:</strong>
              مجموعه‌ای که شامل تمام عناصر است و با $\Omega$ نمایش داده می‌شود.
            </p>
            <p>
              <strong>اجتماع دو مجموعه:</strong>
              مجموعه عناصری که یا در $A$ یا در $B$ باشند. به بیان ریاضی: $A\cup
              B$
            </p>
            <p>
              <strong>اشتراك دو مجموعه:</strong>
              مجموعه عناصری که هم در $A$ و هم در $B$ باشند. به بیان ریاضی:
              $A\cap B$
            </p>
            <p>
              <strong>دو مجموعه جدا از هم:</strong>
              دو مجموعه که هیچ عضو مشترکی ندارند. به بیان ریاضی: $A\cap B =
              \emptyset$
            </p>
          </section>
        </div>
      </div>
      <style>{`
        .cta-pr-btn:hover svg {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
};

export default LecturePage;
