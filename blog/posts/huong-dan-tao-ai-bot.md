---
date: 2024-08-31T00:00:00Z
author: Nguyen Pham
title: Hướng dẫn tạo Ai Bot sử dụng OpenAI và React
excerpt: Thay vì phải luôn túc trực trên hệ thống để trả lời khách hàng, chúng ta có thể tạo một Ai Bot sử dụng OpenAI và React để giúp chúng ta trả lời khách hàng một cách tự động.
image: '@/assets/images/2024/1_7KHs_PfkiTvDoiyA384c6w.jpg'
categories: 
    - Kiến thức
    - Lập trình
    - JavaScript
    - OpenAI
    - React
    - Ai Bot
tags:
    - JavaScript
    - front-end
    - Next.js
    - React
    - JavaScript
    - OpenAI
    - React
    - Ai Bot
metadata:
    canonical: https://coirieng.com/post/huong-dan-tao-ai-bot
---

## Tổng quan

Trong bài viết này, mình sẽ hướng dẫn quý vị tự tạo một con Ai Bot giống hệt ChatGPT, bởi chúng ta sẽ sử dụng OpenAI để tạo ra nó, ngoài ra nó còn được xây dựng trên thư viện dữ liệu mà chúng ta nạp vào, cho nên các câu trả lời của con Bot này chỉ dựa vào dữ liệu chúng ta cung cấp mà thôi. Điều này rất phù hợp để quý vị tạo ra một con Bot để trả lời câu hỏi của khách hàng, hoặc trả lời câu hỏi của người dùng trên website của mình theo đúng lĩnh vực mà mình đang cung cấp. Thuật ngữ chuyên ngành gọi là Assistant Chatbot.

![MailChimp](@/assets/images/2024/ai1.png)

## Yêu cầu đặt ra

Yêu cầu trong bài viết này là quý vị cần phải có kiến thức về React, JavaScript, HTML, CSS, Node.js, OpenAI và một số kiến thức cơ bản về API.
- React: Để xây dựng giao diện cho Ai Bot
- OpenAI: cũng giống như ChatGPT, nó là một dự án của OpenAI, chúng ta sẽ sử dụng OpenAI để tạo ra Ai Bot của riêng mình. Tất nhiên chúng ta phải trả phí để sử dụng OpenAI.
- Data: Là thư viện dữ liệu mà chúng ta cung cấp cho Ai Bot, nó sẽ dựa vào dữ liệu mà chúng ta cung cấp để trả lời câu hỏi của người dùng. Quý vị có thể soạn thảo nó bằng Excel hoặc Word tuỳ thích. Dưới đây là một ví dụ về dữ liệu mà chúng ta cung cấp cho Ai Bot:

![MailChimp](@/assets/images/2024/ai2.png)

OK bây giờ chúng ta sẽ bắt đầu tạo Assistant Chatbot thôi

## Tạo API Key 

Vào trang chủ của OpenAI (https://platform.openai.com/api-keys) và tạo một tài khoản, sau đó tạo một API Key để sử dụng trong dự án của mình.

![MailChimp](@/assets/images/2024/ai3.png)

Tiếp tục vào `Settings` -> `Organization` => `General` để copy Organization ID https://platform.openai.com/settings/organization/general

![MailChimp](@/assets/images/2024/ai5.png)

Tiếp tục vào `Settings` -> `Organization` => `Project` để copy Project ID https://platform.openai.com/settings/

![MailChimp](@/assets/images/2024/ai4.png)

{/* ![MailChimp](@/assets/images/2024/ai5.png) */}

## Tạo API Url

Bây giờ, trong dự án NextJS của mình, quý vị cần cài đặt thư viện `axios` để gọi API của OpenAI, dưới đây là đoạn mã mẫu:

```bash
npm i axios openai react-icons
```

Chú ý rằng đây là một dự án NextJS được tạo theo cấu trúc App Router của Vercel.

Tiếp theo, quý vị cần tạo một file `api` để gọi API của OpenAI, dưới đây là đoạn mã mẫu:

`@/app/api/openai-assistant/route.ts`

```ts
import OpenAI from 'openai'
export const runtime = "edge";

export async function POST(request:Request) {
   
    try {
        const newMessage = await request.json();
        const openai = new OpenAI({
            apiKey: "__API__", // Thay bằng API Key của quý vị
            organization: '__OrgKey__', // Thay bằng Organization ID của quý vị
            project: '__ProKey__', // Thay bằng Project ID của quý vị
        });
        // Tạo một thread mới
        const thread = await openai.beta.threads.create();
        newMessage.threadId = thread.id;
        if (newMessage.threadId == null) {
            const thread = await openai.beta.threads.create();
            newMessage.threadId = thread.id;
        }
        // Gửi tin nhắn
        await openai.beta.threads.messages.create(
            newMessage.threadId,
            {
                role: "user",
                content: newMessage.content
            }
        );
        // Chạy thread
        const stream = await openai.beta.threads.runs.create(
            newMessage.threadId, 
            {assistant_id: newMessage.assistantId, stream:true}
        );
        return new Response(stream.toReadableStream());
    } catch (error) {
        return Response.error();
    }
}
```

## Tạo giao diện

Tiếp theo, quý vị cần tạo một giao diện cho Ai Bot, dưới đây là đoạn mã mẫu:

`@//app/components/openai-assistant.tsx`

```tsx
'use client'

import { AssistantStream } from 'openai/lib/AssistantStream';
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineUser, AiOutlineRobot, AiOutlineSend } from "react-icons/ai";

interface Message {
    id: string;
    role: string;
    content: string;
    createdAt: Date
}

export default function OpenAIAssistant({
    assistantId = "__AssistantId__", // Thay bằng Assistant ID của quý vị
    greeting = "Xin chào, bạn có khỏe không?",
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [threadId, setThreadId] = useState<string|null>(null);
    const [prompt, setPrompt] = useState(`Nguyễn là ai?`);
    const [messages, setMessages] = useState<Message[]>([]);
    const [streamingMessage, setStreamingMessage] = useState<Message>({
        id: "Đang suy nghĩ...",
        role: "assistant",
        content: "_Đang suy nghĩ..._",
        createdAt: new Date(),
    });
    const messageId = useRef(0);

    // Tạo tin nhắn chào mừng
    const greetingMessage = {
        id: "greeting",
        role: "assistant",
        content: greeting,
        createdAt: new Date(),
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Tạo tin nhắn đang suy nghĩ
        setStreamingMessage({
            id: "Đang suy nghĩ...",
            role: "assistant",
            content: "_Đang suy nghĩ..._",
            createdAt: new Date(),
        });

        // Hiển thị busy indicator
        setIsLoading(true);

        // Tạo tin nhắn mới
        messageId.current ++;
        setMessages(
            [
                ...messages, 
                {
                    id: messageId.current.toString(),
                    role: "user",
                    content: prompt,
                    createdAt: new Date(),
                } 
            ]
        );
        setPrompt("");

        // Gọi API
        const response = await fetch('/api/openai-assistant', {
            method: 'POST',
            body: JSON.stringify({
                assistantId: assistantId,
                threadId: threadId,
                content: prompt,
            }),
        });


        if (!response.body) {
            return;
        }

        const runner = AssistantStream.fromReadableStream(response.body);
        runner.on('messageCreated', (message) => {
            setThreadId(message.thread_id);
        });

        runner.on('textDelta', (_delta, contentSnapshot) => {
            const newStreamingMessage = {
                ...streamingMessage,
                content: contentSnapshot.value,
            };
            newStreamingMessage.content = newStreamingMessage.content.replace(/【\d+(:\d+)?†source】/g, '');
            setStreamingMessage(newStreamingMessage);
        });

        // Kết thúc tin nhắn
        runner.on('messageDone', (message) => {
            const finalContent =  message.content[0].type == "text" ? message.content[0].text.value : "";
            messageId.current ++;
            setMessages( (prevMessages) =>
                [
                    ...prevMessages, 
                    {
                        id: messageId.current.toString(),
                        role: "assistant",
                        content: finalContent,
                        createdAt: new Date(),
                    } 
                ]
            );

            // Tắt busy indicator
            setIsLoading(false);
        });

        runner.on('error', (error) => {
            console.error(error);
        });
    }

    function handlePromptChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPrompt(e.target.value);
    }

    return (
        <div className="flex flex-col bg-gray-200 shadow-lg rounded-lg p-10 relative">
            <OpenAIAssistantMessage
                message={greetingMessage}
            />
            {messages.map(m => 
                <OpenAIAssistantMessage
                    key={m.id}
                    message={m}
                />
            )}
            {isLoading &&
                <OpenAIAssistantMessage
                    message={streamingMessage}
                />
            }
            <form onSubmit={handleSubmit} className="m-2 flex">
                <input 
                    disabled={isLoading}
                    autoFocus
                    className="border rounded-md w-full py-2 px-3 text-gray-70" 
                    onChange={handlePromptChange}
                    value={prompt}
                    placeholder="" />
                {isLoading ? 
                    <button 
                        disabled
                        className="ml-2  bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">   
                        <OpenAISpinner /> 
                    </button>
                    : 
                    <button 
                        disabled={prompt.length == 0}
                        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">   
                        <AiOutlineSend /> 
                    </button>
                }
            </form>
        </div>
    )
}

export function OpenAIAssistantMessage({message}: {message:Message}) {

    function displayRole(roleName:string) {
        switch (roleName) {
            case "user":
                return <AiOutlineUser />;
            case "assistant":
                return <AiOutlineRobot />;
        }
    }
    return (
        <div className="flex rounded text-gray-700 text-center bg-white px-4 py-2 m-2 shadow-md">
            <div className="text-4xl">
                {displayRole(message.role)}
            </div>
            <div className="mx-4 text-left overflow-auto openai-text">
                {message.content}
            </div>
        </div>
    )
}

function OpenAISpinner() {
    return (
        <svg aria-hidden="true" role="status" className="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>    
    )
}
```

## Assistant ID

Hãy chú ý phần `__AssistantId__` trong file `openai-assistant.tsx`, quý vị cần phải tạo một Assistant mới trên trang chủ của OpenAI và copy Assistant ID vào đây.

Để tạo một Assistant mới, quý vị cần vào trang chủ của OpenAI => `https://platform.openai.com/assistants/` và tạo một Assistant mới.

![MailChimp](@/assets/images/2024/ai6.png)

Trong phần `File Search` quý vị hãy tải tài liệu dữ liệu mà quý vị đã chuẩn bị sẵn, sau đó chờ một chút để OpenAI xử lý dữ liệu của quý vị. Phần dữ liệu này chính là thông tin mà chúng ta cung cấp cho Ai Bot.


## Chạy ứng dụng

Trong file `@/app/page.tsx` quý vị hãy import component `OpenAIAssistant` vào đây và sử dụng nó như sau:

```tsx
import OpenAIAssistant from "@/app/components/openai-assistant";

export default function Home() {
  return (
      <div className="mx-auto my-10 max-w-3xl text-center">
        <div className="m-4">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">
            Nguyen Bot
          </h1>
        </div>
        <OpenAIAssistant />
      </div>
  );
}
```

Bây giờ, quý vị hãy chạy ứng dụng của mình bằng lệnh `npm run dev` và truy cập vào `http://localhost:3000` để xem kết quả.