(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{186:function(n,t,s){"use strict";s.r(t);var e=s(0),a=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"content"},[s("img",{staticStyle:{width:"400px",display:"block","margin-right":"auto","margin-left":"auto"},attrs:{src:"/vuepress-logo.png"}}),s("h1",{attrs:{id:"huong-dan-su-dung-vuepress-va-githubpage-de-tao-blog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#huong-dan-su-dung-vuepress-va-githubpage-de-tao-blog","aria-hidden":"true"}},[n._v("#")]),n._v(" Hướng dẫn sử dụng Vuepress và Githubpage để tạo blog")]),s("p",[n._v("Gần đây mình thấy một số anh em trong group freecodecamp Hanoi tạo blog bằng github page\nnên mình cũng tìm hiểu xem tạo blog kiểu gì với githupage.\nMình bắt đầu vọc từ doc trên trang chủ của githupage, nói chung tạo một page tĩnh kiểu theo\nhướng dẫn thì trong vài phút (tùy tốc độ mạng). Tuy nhiên thì nhìn blog thiên hạ màu mè các kiểu\nnên mình cũng tìm hiểu cách trang trí thì gặp Jekyll. Đọc một hồi thì thấy Jekyll hộ trợ cho githubpage\nmỗi tội tự nhiên bắt cài ruby mới dùng được mà mình thì không thích cái nhưng thứ mà cả năm mới dùng và\nnếu cài chỉ để phục vụ mỗi việc tạo blog thì cũng không đáng. Vì vậy mình thử tìm hiểu các tạo blog bằng framework\nmình hay làm việc là Vuejs và mình chọn Vuepress để vọc.")]),s("p",[n._v("Vuepress là một sản phẩm nữa của tác giả EvanYou với mục đích tạo web tĩnh và có khả năng SEO,\nchi tiết hơn thì bạn có thể đọc thêm ở "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/#features",target:"_blank",rel:"noopener noreferrer"}},[n._v("đây")]),n._v(". Tại đang ham hố\nlàm blog nên mình cũng không đào sâu chi tiết. Nhìn chung thì ấn tượng đầu tiên là doc của Vuepress vẫn còn\nsơ sài và phải tốn khá nhiều thời gian để mò mẫm.")]),s("h2",{attrs:{id:"cai-dat-va-chay-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cai-dat-va-chay-vuepress","aria-hidden":"true"}},[n._v("#")]),n._v(" Cài đặt và chạy Vuepress")]),s("p",[n._v("Mình bắt đầu với việc tải Vuepress bằng npm:")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("$ "),s("span",{attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" blog\n$ "),s("span",{attrs:{class:"token function"}},[n._v("cd")]),n._v(" blog\n$ "),s("span",{attrs:{class:"token function"}},[n._v("npm")]),n._v(" init\n$ "),s("span",{attrs:{class:"token function"}},[n._v("npm")]),n._v(" "),s("span",{attrs:{class:"token function"}},[n._v("install")]),n._v(" --save vuepress\n")])]),s("p",[n._v("vì không có sẵn CLI như Vue nên các anh em sẽ cần thêm chút command trong "),s("code",[n._v("package.json")]),n._v(" để chạy được chế độ dev và build")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  "),s("span",{attrs:{class:"token property"}},[n._v('"scripts"')]),s("span",{attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),s("span",{attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{attrs:{class:"token property"}},[n._v('"docs:dev"')]),s("span",{attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),s("span",{attrs:{class:"token string"}},[n._v('"vuepress dev docs"')]),s("span",{attrs:{class:"token punctuation"}},[n._v(",")]),n._v("\n    "),s("span",{attrs:{class:"token property"}},[n._v('"docs:build"')]),s("span",{attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),s("span",{attrs:{class:"token string"}},[n._v('"vuepress build docs"')]),n._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),s("span",{attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),s("p",[n._v("Anh em chạy thử môi trường dev để kiểm tra luôn")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("$ "),s("span",{attrs:{class:"token function"}},[n._v("npm")]),n._v(" run docs:dev\n")])]),s("p",[n._v("sau khi chạy xong thì terminal sẽ bào")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("  VuePress dev server listening at http://localhost:8080/\n  "),s("span",{attrs:{class:"token punctuation"}},[n._v("[")]),n._v("18:50:15"),s("span",{attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" ✔ successfully compiled.\n")])]),s("p",[n._v("Anh em truy cập "),s("code",[n._v("http://localhost:8080/")]),n._v(" sẽ thấy "),s("code",[n._v("404 not found")]),n._v(",\nvì chúng ta chưa chỉ định nội dung mặc định cho trang.\nTrong Vuepress, các trang "),s("code",[n._v("README.md")]),n._v(" sẽ được chuyển thành "),s("code",[n._v("index.html")]),n._v(" trong các thư mục.\nVì vậy chúng ta chỉ cần tạo thư mục "),s("code",[n._v("docs")]),n._v(" và thêm "),s("code",[n._v("README.md")]),n._v(" và thử lại.\nChú ý mọi động tác đều thực hiện trong thư mục docs Vuepress sẽ compile từ thư mục này ra.")]),s("p",[n._v("Vậy là xong chế độ dev, chuyển sang chế độ build kiểm tra")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("$ "),s("span",{attrs:{class:"token function"}},[n._v("npm")]),n._v(" run docs:build\n")])]),s("p",[n._v("sản phẩm sẽ được đặt trong thư mục "),s("code",[n._v(".vuepress")]),n._v(" (một thư mục ẩn), chúng ta có thể truy cập thư mục này như bình thường")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("$ cd .vuepress\n")])]),s("p",[n._v("Vậy là việc tạo một trang web tĩnh cơ bản bằng Vuepress chỉ gồm các bước như vậy")]),s("h2",{attrs:{id:"dua-san-pham-len-githubpage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dua-san-pham-len-githubpage","aria-hidden":"true"}},[n._v("#")]),n._v(" Đưa sản phẩm lên githubpage")]),s("p",[n._v("Đưa sản phẩm lên thì đã có "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[n._v("hướng dẫn")]),n._v(" chi tiết trong trang chủ rồi.\nBạn chỉ cần tạo file "),s("code",[n._v(".sh")]),n._v(" đối với Unix và "),s("code",[n._v("bash")]),n._v(" đối với Window là xong.\nKhi chạy thì với nhưng bạn dùng Unix như mình sẽ gặp một số vấn đề sau.\nVấn đề thứ nhất là phân quyền để chạy được file "),s("code",[n._v(".sh")]),n._v(" bạn sẽ cần phân quyên theo lệnh "),s("code",[n._v("chmod 755")]),n._v(" để cho phép file "),s("code",[n._v(".sh")]),n._v(" quyền đọc và thực thi.\nVấn đề thứ 2 bãn sẽ gặp phải đó là không thể push code lên git được, để giải quyết cấn đề này các bạn cần tạo một sha key trong máy (theo "),s("a",{attrs:{href:"https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key",target:"_blank",rel:"noopener noreferrer"}},[n._v("hướng dẫn")]),n._v(")\nsau đó bạn lấy key trong file "),s("code",[n._v("id_rsa.pub")]),n._v(" thêm vào tài khoản git (theo "),s("a",{attrs:{href:"https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/",target:"_blank",rel:"noopener noreferrer"}},[n._v("hướng dẫn")]),n._v(")")]),s("p",[n._v("Trên đây là toàn bộ các bước để tạo blog trên gitpage mà mình tìm hiểu được. Cảm ơn anh em đã bỏ thời gian đoc.")])])}],!1,null,null,null);t.default=a.exports}}]);