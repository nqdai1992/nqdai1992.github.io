(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{178:function(n,t,c){n.exports=c.p+"assets/img/flowPacket.16e18477.png"},179:function(n,t,c){n.exports=c.p+"assets/img/storageAndForward.36f95df2.png"},187:function(n,t,c){"use strict";c.r(t);var h=[function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("div",{staticClass:"content"},[h("h1",{attrs:{id:"networking-phan-3-network-core"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#networking-phan-3-network-core","aria-hidden":"true"}},[n._v("#")]),n._v(" Networking (phần 3) Network core")]),h("p",[n._v("Trong phần 2 mình đã tìm hiểu về network edge đã cho chúng ta thấy cách các thiết bị kết nối mới mạng như thế nào và\nnhững công nghệ để các thiết bị có thể kết nối\nTrong bài viết lần này mình sẽ tìm hiểu về phần network core, network core sẽ đề cập đến cách hoạt động\ntrong hệ thống mạng như thế nào chẳng hạn như việc truyền nhận packet, cấu trúc protocol")]),h("h2",{attrs:{id:"viec-truyen-tin-dien-ra-nhu-the-nao"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#viec-truyen-tin-dien-ra-nhu-the-nao","aria-hidden":"true"}},[n._v("#")]),n._v(" Việc truyền tin diễn ra như thế nào ?")]),h("p",[n._v("Như chúng ta đã biêt việc gửi thông tin hay các message từ host này qua host khác sẽ được chia là làm nhiều\npacket hay gói tin để gửi đi, các gói tin này sẽ được đi qua các communication link và các "),h("strong",[n._v("packet switch")]),n._v("\n(chính là router hay switch chia mạng). Sẽ có 2 thông số để quyết định tốc độ packet di chuyển là dung lượng\npacket (L) và tốc độ đường truyền (R) bao nhiêu bit/sec.")]),h("p",[n._v("Các packet truyền đi không giống như việc chúng ra dùng một vòi nước để đưa nước từ chỗ chứa này đến chỗ chứa khác.\nCác packet switch có cơ chế lưu trữ trước khi gửi tiếp đến một packet switch khác hoặc một thiêt bị.\nCơ chế này tên là "),h("strong",[n._v("store-and-forward transmission")]),n._v(", cụ thể các packet sẽ phải được nhận một cách toàn vẹn trước khi được\ngửi đi.")]),h("p",[h("img",{attrs:{src:c(179),alt:"fig1"}})]),h("p",[n._v("Một chú ý trong phần này là việc nhận và việc gửi là bất đồng bộ với nhau.\nCó nghĩa là trong khi gửi packet thứ nhất thì vẫn có thể nhận các packet khác.\nCác packet khác khi được nhận trong quá trình gửi đi sẽ được lưu trong một hàng chờ\ngọi là "),h("strong",[n._v("output buffer")]),n._v(" hay "),h("strong",[n._v("output queue")]),n._v(" và vì xếp hàng nên sẽ sinh ra một độ trễ gọi là\n"),h("strong",[n._v("queuing delays")]),n._v(". Độ trễ này lâu đến mức nào thì nó phụ thuộc vào độ tắc nghẽn của hệ thống mạng.\nVậy hết chỗ xếp hàng rồi thì các gói tin khác đến thì đợi ở đâu ? Câu trả lời là chả ở đâu cả,\ncó nghĩa là mất dữ liệu.")]),h("h2",{attrs:{id:"cau-truc-network-protocol"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#cau-truc-network-protocol","aria-hidden":"true"}},[n._v("#")]),n._v(" Cấu trúc network protocol")]),h("p",[n._v("Cấu trúc layer hiện tại mạng internet đang sử dụng là cấu trúc 5 tầng từ trên xuống lần lượt là:\n"),h("strong",[n._v("Application, Transport, Network, Link, Physical")]),n._v(", ngoài ra còn có một cấu trúc 7 tầng nữa bạn nào muốn tìm hiểu\nthì từ khóa là "),h("strong",[n._v("OSI model")])]),h("p",[n._v("Sơ lược vai trò từng tầng như sau")]),h("ul",[h("li",[h("strong",[n._v("Application layer")]),n._v(": Nhận thông tin cần gửi từ phía người dùng dựa vào các protocol như HTTP, SMTP, FTP và đóng gói lại thành một message và gửi xuống tầng tiếp theo")]),h("li",[h("strong",[n._v("Transport layer")]),n._v(": Nhiệm vụ chia nhỏ message từ phía application và đóng gói lại gọi là 1 "),h("strong",[n._v("segment")]),n._v(" và gửi xuống tầng dưới.\nTrong tầng này có 2 protocol là TCP và UDP, trong đó TCP cung cấp thêm cơ chế "),h("strong",[n._v("congestion-control")]),n._v(" để\nkiểm soát tắc nghẽn, còn UDP thì không có hỗ trợ nào cả.")]),h("li",[h("strong",[n._v("Network layer")]),n._v(": Đảm bảo cho thông tin có thể gửi được đúng nơi cần nhận dựa vào thông tin IP của host và đóng gói lại gọi là các "),h("strong",[n._v("datagram")])]),h("li",[h("strong",[n._v("Link layer")]),n._v(": Tạo chuẩn chung cho các gói tin gửi đi để có thể chuyển đi giữa các link khác nhau, đóng gói thành các "),h("strong",[n._v("frame")])]),h("li",[h("strong",[n._v("Physical layer")]),n._v(": Tầng này là tầng về các kết nối vật lý như cáp quang, cáp đồng trục ...")])]),h("p",[n._v("Cách thức gói tin được gửi đi theo cấu trúc 5 tầng như sau:\nGói tin được gửi đi sẽ xuất phát từ tầng Application của máy gửi đi cho đên tầng Link mỗi tầng này sẽ\nđược bổ sung thông tin và đóng gói sau đó chuyển đến tầng Physical để chuyển sang máy nhận.\nĐối mới máy nhận thì gói tin đi từ dưới lên từ tầng Physical lên đến Application của máy nhận, qua mỗi tầng\nthì các gói tin sẽ được giải mã và lấy được gói tin cuối cùng ở tầng Application")]),h("p",[h("img",{attrs:{src:c(178),alt:"fig1"}})]),h("h2",{attrs:{id:"tan-cong-mang"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#tan-cong-mang","aria-hidden":"true"}},[n._v("#")]),n._v(" Tấn công mạng")]),h("p",[n._v("Trong phần giớ thiệu này, mình cũng thấy có thêm một số kiến thức khá hay về việc tấn công trên mạng.\nHẳn các bạn đã nghe về "),h("strong",[n._v("malware")]),n._v(" chắc là ghép từ malicious và software.\nVậy malware là gì ? Nó là một chương trình xâm nhập vào máy bạn với chủ tâm ác ý, như xóa file, lấy cắp thông tin ...\nMalware chia làm 2 loại là "),h("strong",[n._v("virus")]),n._v(" và "),h("strong",[n._v("worm")]),n._v(". "),h("strong",[n._v("Virus")]),n._v(" là các malware nhiễm vào máy tính thông qua tương tác người dùng\n(chẳng hạn như click email, click quảng cáo ...), còn "),h("strong",[n._v("worm")]),n._v(" là các malware xâm nhập mà không cần tương tác của người dùng\nđa số là do cài phần mền lạ.")]),h("p",[n._v("Việc tấn công trên mạng sẽ tấn công vào máy chủ và phần cơ sở hạ tầng cho kết nối, việc tất công này được gọi là:\n"),h("strong",[n._v("denial-of-service (DoS)")]),n._v(", có 3 loại tấn công:")]),h("ul",[h("li",[n._v("Vulnerability attack: là gửi nhưng gói tin có chứa mã độ để gây rối loạn hệ thống")]),h("li",[n._v("Bandwidth flooding: Khi mà hệ thống ngon quá không làm gì được thì có một cách tấn công nhằm mục đích\nlàm tắc nghẽn bằng thông.")]),h("li",[n._v("Connection flooding: bên cạnh việc gây tắc nghẽ băng thông thì việc tấn công cũng có thể thực hiện nhờ việc tăng lượng kết nối")])]),h("p",[n._v("Có một thuật ngữ nữa mọi người hay nghe thấy là "),h("strong",[n._v("distributed DoS (DDoS)")]),n._v(" nó cũng là "),h("strong",[n._v("DoS")]),n._v(" nhưng nếu tấn công\ntừ 1 máy thì sẽ nhanh chóng bị phát hiện nên kẻ tấn công sẽ gửi các maleware đên các máy khác gọi là "),h("strong",[n._v("slave")]),n._v("\nđể điều khiển hệ thống máy slave này ("),h("strong",[n._v("botnet")]),n._v(") tất công vào 1 máy đích.")])])}],i=c(0),g=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},h,!1,null,null,null);t.default=g.exports}}]);