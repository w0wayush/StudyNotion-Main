import React, { useEffect } from "react"

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "6d3198f4-71d5-4f5f-976c-b23bb8aa4eb0",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "6d3198f4-71d5-4f5f-976c-b23bb8aa4eb0",
        webhookId: "892ff264-1f63-4077-bdb4-effb2d68e5c9",
        lazySocket: true,
        botName: "Zoro",
        avatarUrl:
          "https://i.pinimg.com/originals/b3/6c/f6/b36cf662d981b41097d3de19fa02be8d.jpg",
        frontendVersion: "v1",
        useSessionStorage: true,
        showBotInfoPage: true,
        enableConversationDeletion: true,
        themeColor: "#000814",
      })
    }
  }, [])

  return <div id="webchat" />
}

export default Chatbot
