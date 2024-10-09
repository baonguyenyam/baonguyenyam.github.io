---
date: 2024-04-01T00:00:00Z
author: Nguyen Pham
title: Vì sao tôi chuyển từ Next.js sang Astro
excerpt: Astro là một công cụ tuyệt vời cho việc xây dựng các trang web tĩnh. Trong bài viết này, mình sẽ chia sẻ với quý vị lý do mình chuyển từ Next.js sang Astro.
image: '@/assets/images/2024/building-with-astro.jpg'
categories: 
  - Kiến thức
  - Lập trình
tags:
  - astro
  - next.js
  - react
  - vercel
  - netlify
  - tailwind css
  - front-end
metadata:
  canonical: https://coirieng.com/post/vi-sao-toi-chuyen-tu-nextjs-sang-astro
---

## Tổng quan

Nếu quý vị nào từng sử dụng _Gatsby_, _Next.js_, hay _Nuxt.js_, thì có lẽ đã biết rằng các công cụ này đều rất mạnh mẽ và phổ biến trong việc xây dựng các ứng dụng web tĩnh. Tuy nhiên, có một công cụ khác mà mình đã chuyển sang gần đây, đó là __Astro__.

Astro có thể nói là anh bạn mới tham gia vào thế giới phát triển web, còn khá mới nhưng nhanh chóng thu hút được sự quan tâm trong khi Next.js được cho là framework phát triển trang web phổ biến nhất hiện nay, nó là lựa chọn của một số công ty lớn nhất thế giới như OpenAI, Hulu và Vimeo. 

## Phân tích các Framework

Điểm khác biệt là trong khi Astro là khung MPA không phụ thuộc vào giao diện người dùng được xây dựng để tăng tốc độ thì Next.js là khung SPA dựa trên React tập trung mạnh vào các tính năng.

Bản thân mình đã sử dụng Gatsby, Next.js trong một thời gian dài và thấy rằng nó rất mạnh mẽ, nhưng sau khi thử nghiệm Astro, mình nhận thấy rằng Astro cung cấp một số lợi ích mà Next.js không có, và một điều bất ngờ hơn là khi build với Vercel, Astro nhanh hơn Next.js rất nhiều lần.

Cả Gatsby, Next.js phụ thuộc vào React, trong khi Astro không phụ thuộc vào bất kỳ thư viện nào cụ thể, điều này giúp Astro trở nên linh hoạt hơn trong việc sử dụng các thư viện khác nhau.

Để hiểu rõ hơn mời quý vị xem bảng so sánh bên dưới:

<table-saw text-align="" zero-padding="" class="ts_m_max_width__39_9375em_">

<table>

<thead>

<tr>

<th> </th>

<th>Next.js</th>

<th>Astro</th>

</tr>

</thead>

<tbody>

<tr>

<td>**First release**</td>

<td data-tablesaw-label="Next.js">2016</td>

<td data-tablesaw-label="Astro">2021</td>

</tr>

<tr>

<td>**GitHub stars**</td>

<td data-tablesaw-label="Next.js">111k+</td>

<td data-tablesaw-label="Astro">33.1K+</td>

</tr>

<tr>

<td>**License**</td>

<td data-tablesaw-label="Next.js">MIT</td>

<td data-tablesaw-label="Astro">MIT</td>

</tr>

<tr>

<td>**Build speeds**</td>

<td data-tablesaw-label="Next.js">Fast</td>

<td data-tablesaw-label="Astro">Faster</td>

</tr>

<tr>

<td>**Built with**</td>

<td data-tablesaw-label="Next.js">JavaScript</td>

<td data-tablesaw-label="Astro">JavaScript</td>

</tr>

<tr>

<td>**Templating language(s)**</td>

<td data-tablesaw-label="Next.js">JSX</td>

<td data-tablesaw-label="Astro">Astro, HTML, Markdown, JavaScript, JSX</td>

</tr>

<tr>

<td>**Supported UI framework(s)**</td>

<td data-tablesaw-label="Next.js">React</td>

<td data-tablesaw-label="Astro">React, Preact, Svelte, Vue, Solid, Lit</td>

</tr>

<tr>

<td>**Installation requirements**</td>

<td data-tablesaw-label="Next.js">Node.js must be installed</td>

<td data-tablesaw-label="Astro">Node.js must be installed</td>

</tr>

<tr>

<td>**Plugins**</td>

<td data-tablesaw-label="Next.js">Yes — limited</td>

<td data-tablesaw-label="Astro">Yes — many</td>

</tr>

<tr>

<td>**Themes / Templates / Starters**</td>

<td data-tablesaw-label="Next.js">Yes (templates)</td>

<td data-tablesaw-label="Astro">Yes (themes)</td>

</tr>

<tr>

<td>**TypeScript support**</td>

<td data-tablesaw-label="Next.js">Yes</td>

<td data-tablesaw-label="Astro">Yes</td>

</tr>

<tr>

<td>**Easy WordPress / legacy converter**</td>

<td data-tablesaw-label="Next.js">No; you’ll need to convert to Markdown and then clean up your content</td>

<td data-tablesaw-label="Astro">No; you’ll need to convert to Markdown and then clean up your content</td>

</tr>

<tr>

<td>**Built-in module bundler**</td>

<td data-tablesaw-label="Next.js">webpack</td>

<td data-tablesaw-label="Astro">Snowpack</td>

</tr>

<tr>

<td>**Disable runtime JS**</td>

<td data-tablesaw-label="Next.js">Yes</td>

<td data-tablesaw-label="Astro">No runtime JS required by default</td>

</tr>

<tr>

<td>**Data Fetching**</td>

<td data-tablesaw-label="Next.js">Yes</td>

<td data-tablesaw-label="Astro">Yes</td>

</tr>

<tr>

<td>**Internationalization (i18n)**</td>

<td data-tablesaw-label="Next.js">Built-in</td>

<td data-tablesaw-label="Astro">Yes, via integration</td>

</tr>

<tr>

<td>**Hot reloading**</td>

<td data-tablesaw-label="Next.js">Yes</td>

<td data-tablesaw-label="Astro">Yes</td>

</tr>

<tr>

<td>**Code splitting**</td>

<td data-tablesaw-label="Next.js">Automatic</td>

<td data-tablesaw-label="Astro">Automatic</td>

</tr>

<tr>

<td>**Image optimization**</td>

<td data-tablesaw-label="Next.js">Yes</td>

<td data-tablesaw-label="Astro">Yes</td>

</tr>

<tr>

<td>**Environment variables**</td>

<td data-tablesaw-label="Next.js">Yes</td>

<td data-tablesaw-label="Astro">Yes</td>

</tr>

<tr>

<td>**Content security policy**</td>

<td data-tablesaw-label="Next.js">Via next-secure-headers</td>

<td data-tablesaw-label="Astro">Custom HTTP headers rules</td>

</tr>

<tr>

<td>**Learning curve**</td>

<td data-tablesaw-label="Next.js">Moderate; it will help to have React experience</td>

<td data-tablesaw-label="Astro">Easy; it will help to have JavaScript experience</td>

</tr>

<tr>

<td>**Documentation**</td>

<td data-tablesaw-label="Next.js">[nextjs.org](https://nextjs.org/docs/getting-started)</td>

<td data-tablesaw-label="Astro">[astro.build](https://docs.astro.build/en/getting-started/)</td>

</tr>

<tr>

<td>**GitHub repos**</td>

<td data-tablesaw-label="Next.js">[github.com/vercel/next.js](https://github.com/vercel/next.js)</td>

<td data-tablesaw-label="Astro">[github.com/withastro/astro](https://github.com/withastro/astro)</td>

</tr>

<tr>

<td>**Support communities**</td>

<td data-tablesaw-label="Next.js">[Next.js Discord](https://discord.com/invite/bUG2bvbtHy)</td>

<td data-tablesaw-label="Astro">[Astro Discord](https://discord.com/invite/grF4GTXXYm)</td>

</tr>

<tr>

<td>**Twitter accounts**</td>

<td data-tablesaw-label="Next.js">[Next.js Twitter](https://twitter.com/nextjs)</td>

<td data-tablesaw-label="Astro">[Astro Twitter](https://twitter.com/astrodotbuild)</td>

</tr>

<tr>

<td>**Site Type**</td>

<td data-tablesaw-label="Next.js">Pre-rendered static SPAs & websites requiring many interactive React components.</td>

<td data-tablesaw-label="Astro">Content-rich, mostly static MPAs with progressive enhancement & websites requiring flexible framework usage.</td>

</tr>

<tr>

<td>**Use case(s)**</td>

<td data-tablesaw-label="Next.js">Large e-commerce websites, complex marketing websites</td>

<td data-tablesaw-label="Astro">Small e-commerce websites, marketing websites, blogs, portfolios, documentation websites</td>

</tr>

</tbody>

</table>

</table-saw>

## Cách tiếp cận

Astro dễ tiếp cận hơn Next.js với những người có ít kinh nghiệm. Quý vị có thể sử dụng bất kỳ ngôn ngữ thành phần UI nào mà mình biết: React, Preact, Svelte, Vue, Solid, Lit, v.v. đều được. 

Ngoài ra Astro còn tích hợp sẵn ngôn ngữ của nó với phần mở rộng __*.astro__ giúp quý vị dễ dàng sử dụng các mẫu trợ năng và nâng cao hơn trong quá trình viết code. 

Dưới đây là một đoạn mã ví dụ về cách sử dụng một số thành phần trong Astro:

```astro
---
import Layout from '@/layouts/PageLayout.astro';
import Stats from '@/components/widgets/Stats.astro';

const metadata = {
  title: 'Nguyen Pham - Web Developer & Designer',
  ignoreTitleTemplate: true,
};
---

<Layout metadata={metadata}>
 
  <Stats
    stats={[
      { title: 'Dự án', amount: '164' },
      { title: 'Đánh giá', amount: '24.8K' },
      { title: 'Năm làm việc', amount: '18' },
      { title: 'Tiện ích', amount: '>1K' },
    ]}
  >
  <Fragment slot="bg">
    <div class="absolute inset-0 bg-stone-50 dark:bg-stone-900"></div>
  </Fragment>
</Stats>

</Layout>
```

## Nên chọn khi nào?

Câu trả lời ngắn gọn là điều đó phụ thuộc vào quý vị, và dự án mà quý vị đang làm. Lý do mà mình chuyển từ Next.js sang Astro là vì Astro cung cấp một số lợi ích mà Next.js không có, và một điều bất ngờ hơn là khi build với Vercel, Astro nhanh hơn Next.js rất nhiều lần. 

Chọn Astro nếu quý vị mới bắt đầu phát triển web và muốn việc tiếp cận nhẹ nhàng hơn. Astro không phức tạp và quý vị có thể xây dựng toàn bộ trang web chỉ bằng HTML và CSS. Quý vị sẽ không cần phải lo lắng nhiều về hook và stale, atoms, selectors, reactions, hoặc derivations.

Tuy nhiên nếu quý vị đã có kinh nghiệm về React và muốn hưởng lợi vô số tính năng, plugin và tài nguyên của nó thì Next.js lại là lựa chọn phù hợp. Cũng nói thêm rằng Next.js cung cấp một cộng đồng lớn và mạnh mẽ, giúp quý vị giải quyết vấn đề nhanh chóng hơn, và với các dự án lớn, đòi hỏi sự phức tạp hơn thì Next.js là lựa chọn tốt nhất hiện nay.