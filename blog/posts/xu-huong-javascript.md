---
date: 2024-03-30T00:00:00Z
author: Nguyen Pham
title: Xu hướng JavaScript
excerpt: Bài viết này dựa theo phân tích của Slack và Usersnap, đó là một công cụ theo dõi và thống kê sự phản hồi của lập trình viên về các lỗi cũng như hiệu quả trong công việc, nó cũng đưa ra những phân tích về tính khả dụng và hạn chế của một ngôn ngữ trong tương lai.
image: '@/assets/images/2024/javascript.jpg'
categories: 
  - Kiến thức
  - Lập trình
tags:
  - JavaScript
  - front-end
metadata:
  canonical: https://coirieng.com/post/xu-huong-javascript
---

import DListItem from '@/components/ui/DListItem.astro';
import ToggleTheme from '@/components/common/ToggleTheme.astro';

## Tổng quan

Như chúng ta đều biết thế giới đang đứng trước một cuộc cách mạng công nghệ 4.0 đó là xu hướng hiện thời trong việc tự động hóa và trao đổi dữ liệu trong công nghệ sản xuất nói chung cũng như là sự bùng nổ của CNTT nói riêng, máy móc trở nên thông minh hơn, con người trở nên chủ động hơn trong việc phát triển các công nghệ mới. Developer cũng không ngoại lê; bằng chứng là sự thay đổi rất choáng ngợp trong 3-5 năm trở lại đây của thế giới CNTT chính vì vậy để luôn theo kịp xu thế chắc chắn một điều thời gian này là khoảng thời gian bạn phải nỗ lực nhiều hơn để không tụt hậu với thế giới.

## Internet of Things (IoT)

Có một điều mà chúng ta phải thừa nhận rằng IoT đã phát triển rất mạnh vượt xa khỏi những máy tính hay thiết bị cầm tay của chúng ta nó đã len lỏi vào cuộc sống của mỗi gia đình từ thiết bị gia dụng cho đến nhà vệ sinh.  

Hãy thử tưởng tượng xem một ngày không xa tôi có thể kiểm soát mọi mặt cuộc sống cá nhân mình chỉ bằng chiếc SmartPhone trên tay từ việc điều khiển nhiệt độ cho lò nướng đến việc tự cảnh báo các nhu yếu phẩm trong nhà sắp hết  hoặc khác hơn là có cả một hệ điều hàng hoàng tráng chễm chệ trên mặt đồng hồ của chiếc xe máy cà tàng để unlock xe chỉ mới việc quẹt pattern, nghe nhạc, cảnh báo nhiên liệu, thiết bị sắp hỏng... mọi thứ đều được hỗ trợ... Đó không còn là điều viễn vong xa vời nữa.

Ví dụ thực tế có thể kể đến là hệ thống AI của Mark Zuckerberg

![IoT](@/assets/images/2024/javascript-1.jpg)

Anh ta đã xây dựng hệ thống AI cho riêng mình chạy tại nhà của anh ta. Với dự án Jarvis, anh ta đã xây dựng một hệ thống cho phép anh ta kiểm soát các thiết bị khác nhau như máy ảnh, máy nướng bánh, đèn, cửa ra vào... thông qua một messenger bot và ứng dụng iOS Voice.

Theo Usersnap ghi nhận chỉ nói riêng về các ngôn ngữ lập trình thì công nghệ Web và Mobile là có sự bùng nổ mạnh nhất  chỉ riêng trong những quí đầu 2017 đã có rất nhiều bản cập nhật công nghệ được phát hành mỗi tuần thậm chí mỗi ngày... cũng có thể đó là sự sáng suốt hoặc sai lầm nhưng nó đánh dấu những xu hướng tích cực đang diễn ra vô cùng mạnh mẽ. Đó là một điều kinh khủng với không chỉ riêng cá nhân tôi khi mà có hơn 12 năm hoạt động công nghệ cũng không khỏi mệt mỏi trong việc cập nhật kiến thức mỗi ngày.

## Sự phát triển của JavaScript

Có rất nhiều cuộc thảo luận đang diễn ra trong không gian phát triển web về ngôn ngữ lập trình mới mà bạn nên học. Tôi nghĩ rằng không nên có sự chê bai hoặc bàn luận đúng hay sai ở đây quan trọng là lĩnh vực mà bạn đang hoạt động. Tuy nhiên, tôi muốn cung cấp cho bạn một số thông tin chi tiết về những gì bạn nên biết trong năm 2017.


Hãy bắt đầu bằng JavaScript: nếu có một giải thưởng Nobel cho ngôn ngữ lập trình thì chắc chắn nó là ứng cử viên nặng ký nhất trong năm nay đó là vì JavaScript là ngôn ngữ phổ biến nhất được sử dụng bởi các nhà phát triển full stack developers.

![Xu hướng ngôn ngữ Web trong năm 2017](@/assets/images/2024/javascript-2.jpg)

Học JavaScript năm 2017 sẽ không dễ dàng nếu bạn muốn biết tại sao tôi khuyên bạn nên xem bài viết này: [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)

## Lịch sử

Đầu tiên, một đặc tả ngôn ngữ kịch bản được phát triển bởi Brendan Eich của Netscape và nó có tên là Mocha. Sau đó nó được đổi tên thành LiveScript và cuối cùng là Javascript. Vào tháng 12 năm 1995, Sun Microsystem và Netscape đã công bố Javascript. Tháng 3, 1996 trình duyệt Netscape Navigator 2.0 ra đời và hỗ trợ Javascript. Sau đó, Microsoft ra mắt một ngôn ngữ tương tự tên là JScript để cạnh tranh và tránh vấn đề bản quyền. JScript được thêm vào trong Internet Explorer 3.0 và ra mắt vào tháng 8, 1996.

Netscape chuyển Javascript tới Ecma International để làm công tác chuẩn hoá và viết đặc tả, được gọi là ECMA-262, bắt đầu vào tháng 11, 1996. Và cái tên ECMAScript được hình thành từ đây bởi sự thoả thuận giữa những công ty đang tham gia vào quá trình chuẩn hoá nó, đặc biệt là Netscape và Microsoft, những công ty có cống hiến lớn trong thời kì đầu. Eich, người sáng lập đặc tả này, cho biết: "ECMAScript luôn là một cái tên không mong đợi chút nào, nó nghe như một loại bệnh ngoài da"

Trong khi cả Javascript và JScript đều cố gắng tuân thủ chuẩn ECMASCript, song nó cũng cung cấp cả những tính năng khác không được mô tả trong đặc tả ECMA.

ECMAScript 7 (hay còn được gọi là ES7, ES2017) là phiên bản mới nhất của chuẩn ECMAScript. Chuẩn này đang được phê duyệt. Nó là một bản nâng cấp quan trọng cho ES kể từ ES5 đã được chuẩn hoá vào năm 2009.

ES2017 sẽ ra mắt vào cuối năm nay đó là sự trông đợi ngày qua ngày và chắc chắn sẽ làm cho nhiều nhà phát triển web hài lòng. Nếu bạn muốn bắt đầu với JavaScript, đừng chần chờ hãy bắt đầu ngay bây giờ để không quá muộn.

Trong năm qua, chúng ta cũng đã chứng kiến ​​sự gia tăng của TypeScript . Đây là một ngôn ngữ biên dịch sang JavaScript do Microsoft phát triển. Nó làm cho việc viết Code JavaScript trở nên Logic hơn dễ dàng hơn và tổ chức Code minh bạch khoa học hơn.

Hơn 56.000 nhà phát triển ở 173 quốc gia đã hoàn thành [Khảo sát của Stack](https://insights.stackoverflow.com/survey/2016) trong năm 2016. Dưới đây là những công nghệ được sử dụng nhiều nhất:

![Xu hướng ngôn ngữ Web trong năm 2017](@/assets/images/2024/javascript-3.jpg)

## JavaScript tính ứng dụng rất lớn? 

- Có thể sử dụng để xây dựng toàn bộ một trang web nếu sử dụng với NodeJS và MongoDB (database) 
- Lập trình web front end với các framework hàng đầu: JQuery, React, Angular, VueJS...
- Backend với các framework của NodeJS...
- Lập trình ứng dụng di động với React Native, Ionic, NativeScript...
- Lập trình game với Unity lập trình robot, IoT...
- Ứng dụng desktop

![Xu hướng ngôn ngữ Web trong năm 2017](@/assets/images/2024/javascript-4.jpg)

Theo thống kê năm 2016, 93% web trên thế giới có dùng Javascript. Số web còn lại chắc web tĩnh.

Tại sao vậy? tại sao JavaScript có thời gian tưởng chừng như biến mất lại bùng nổ mạnh mẽ đến vậy?

Lúc đầu, các lập trình viên đã không coi JavaScript là quan trọng, bởi vì nó không được xem như là một ngôn ngữ phát triển nghiêm túc như các ngôn ngữ phía máy chủ là Java, Ruby hay Python. JavaScript giống như phần kem phết trên bề mặt chiếc bánh vậy, nó chỉ chịu trách nhiệm về phần trải nghiệm người dùng. Nhưng ngôn ngữ này tiếp tục phát triển và ngày càng trở nên phổ biến, nó thường được đề xuất là ngôn ngữ lập trình nên học đầu tiên dành cho người mới bắt đầu. Nếu bạn sử dụng một framework JavaScript có tên là Node.js, thì giờ đây bạn có thể thực sự sử dụng JavaScript như là một ngôn ngữ phía máy chủ (server-side). 

Nhưng giờ đây với nhiều thay đổi lớn từ  phiên bản ECMAScript 5 (ES5) rồi ES6, ES7...  song song với việc có rất nhiều framework khác nhau được viết dựa trên JavaScript như: NodeJs, AngularJs, ReactJs, React-Native… chính vì thế JavaScript trở nên phổ biến là vậy.

## Javascript khắp mọi nơi

Không chỉ nổi lên như một hiện tượng về tính phổ biến mà thực sự những gì mà JavaScript mang lại là sự mạnh mẽ rộng khắp, tính tương thích cao trong mọi môi trường và khả năng ưu việt của nó.

## Ứng dung trong FrontEnd

Danh sách framework hỗ trợ frontend của Javacript phải gọi là không đếm được:

- React
- Angular
- Vue
- Backbone
- Ember
...

## Ứng dụng trong BackEnd

Với sự phát triển của các framework NodeJS, chúng ta đã có thể làm việc trên Backend với Javascript. Các Framework có thể kể đến như:

- Express.js
- Hapi.js
- Meteor
- Mean.js
- Sails.js
...

## Ứng dụng di động

Sử dụng Javascript để viết ứng dụng cho các thiết bị di động không còn là một điều gì đó quá mới mẻ. Bạn có thể hoàn toàn viết ứng dụng di động với JavaScript bằng các framework như:

- React Native
- Ionic
- NativeScript
- Tabrisjs
- PhoneGap
...

## Ứng dụng desktop

Vâng, rất nhiều ứng dụng desktop nổi tiếng, bạn đang xài hằng ngày được viết bằng Javascript đấy. Ví dụ như:

- Atom
- Visual Studio Code
- Slack
...

## Ngôn ngữ client-side.

Ở vị trí client-side thì Javascript chiếm vị trí độc tôn. Hiện nay, không một ngôn ngữ nào có thể cạnh tranh với Javascript trong vai trò là một ngôn ngữ tương tác cho các trang web. Điều gì đã làm cho Javascript được chấp nhận rộng rãi và trở nên phổ biến như vậy? Khó có thể có một câu trả lời thỏa đáng, nhưng những gì nó mang lại đã cho thấy được các ưu điểm của nó.

## Ngôn ngữ server-side.

Mặc dù trước đây chúng ta đã có thể sử dụng Javascript làm ngôn ngữ lập trình cho server-side, nhưng nhìn chung thì nó vẫn không được biết đến nhiều lắm cho tới khi Nodejs ra đời. Mặc dù chỉ mới xuất hiện gần đây (năm 2009) nhưng thực sự Nodejs đã làm nên một cuộc cách mạng, làm cho Javascript trở nên mạnh mẽ, đa năng, hiệu quả hơn bao giờ hết. Với cơ chế bất đồng bộ vốn có của mình, Nodejs là lựa chọn số một cho các ứng dụng network thời gian thực với quy mô lớn.

Mặc dù cũng có những điểm yếu về tốc độ và bảo mật nhưng không có gì phải bàn cãi về vị thế độc tôn của JavaScript ở thời điểm hiện tại, kể cả trong một vài năm tới. Là ngôn ngữ được sử dụng nhiều nhất cho dù bạn là FrontEnd hay BackEnd và tất nhiên với một Full-stack Developer JavaScript là điều tối thiểu cần phải biết. Vào 2015, JavaScript đã vượt qua Java trở thành tag phổ biến nhất thế giới bên cạnh đó tổ hợp công nghệ kép thường được sử dụng nhiều nhất vẫn là JavaScript và SQL từ 2015 đến nay. Trong đó, tổ hợp 3 công nghệ thường thấy nhất là JavaScript, SQL, PHP. JavaScript nổi tiếng đến mức lọt vào tất cả tổ hợp 3-tech được Back-End Developer sử dụng.