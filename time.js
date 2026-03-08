function sendToDiscord() {
    const webhookURL = "https://discordapp.com/api/webhooks/1394945185661845585/IBcF2e6427lH7mxZnzwDxxCGLZDSECoj-NCMpK6v4JHBuaLcyeQ_PrYUFdzwVEX-s0b3"; 
    
    const answerInput = document.getElementById("answerInput");
    const answer = answerInput.value;

    if (!answer.trim()) {
        alert("พิมพ์คำตอบก่อนสิครับอ้วนนน!");
        return;
    }
    const payload = {
        content: `💖 **คำตอบใหม่มาแล้วค้าบบ!** \n> "${answer}"`
    };
    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("ส่งคำตอบไปที่ Discord แล้วนะค้าบบบบบบบ 🤭");
            answerInput.value = "";
        } else {
            alert("อ้าวววววววว! มีปัญหาในการส่ง (เช็คสถานะ Webhook อีกทีนะ)");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("ส่งไม่สำเร็จ ลองเช็คอินเทอร์เน็ตดูนะครับ");
    });
}